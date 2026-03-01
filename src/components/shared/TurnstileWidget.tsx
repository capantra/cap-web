"use client";

import { useEffect, useMemo, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          theme?: "auto" | "light" | "dark";
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        }
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

type TurnstileWidgetProps = {
  onTokenChange: (token: string) => void;
  resetSignal?: number;
};

export function TurnstileWidget({ onTokenChange, resetSignal = 0 }: TurnstileWidgetProps) {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    if (!siteKey) return;

    let attempts = 0;
    const maxAttempts = 120;

    const detectTurnstile = () => {
      if (window.turnstile) {
        setScriptReady(true);
        return true;
      }
      return false;
    };

    if (detectTurnstile()) return;

    const intervalId = window.setInterval(() => {
      attempts += 1;
      if (detectTurnstile() || attempts >= maxAttempts) {
        window.clearInterval(intervalId);
      }
    }, 50);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [siteKey]);

  const canRender = useMemo(() => Boolean(siteKey && scriptReady), [siteKey, scriptReady]);

  useEffect(() => {
    if (!canRender || !containerRef.current || !window.turnstile) return;
    if (widgetIdRef.current) return;

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      theme: "light",
      callback: (token: string) => onTokenChange(token),
      "expired-callback": () => onTokenChange(""),
      "error-callback": () => onTokenChange(""),
    });
  }, [canRender, onTokenChange, siteKey]);

  useEffect(() => {
    if (!window.turnstile || !widgetIdRef.current) return;
    window.turnstile.reset(widgetIdRef.current);
    onTokenChange("");
  }, [onTokenChange, resetSignal]);

  useEffect(() => {
    return () => {
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.remove(widgetIdRef.current);
      }
      widgetIdRef.current = null;
    };
  }, []);

  if (!siteKey) {
    return (
      <div className="rounded-xl border border-amber-300 bg-amber-50 px-3 py-2 text-xs text-amber-800">
        Turnstile site key is missing. Set `NEXT_PUBLIC_TURNSTILE_SITE_KEY`.
      </div>
    );
  }

  return (
    <>
      <div ref={containerRef} />
    </>
  );
}
