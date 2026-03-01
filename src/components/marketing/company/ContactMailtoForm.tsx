"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { TurnstileWidget } from "@/components/shared/TurnstileWidget";

export function ContactMailtoForm({
  topic: controlledTopic,
  onTopicChange,
  focusSignal,
}: {
  topic?: string;
  onTopicChange?: (topic: string) => void;
  focusSignal?: number;
}) {
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");
  const [topicState, setTopicState] = useState("General");
  const [message, setMessage] = useState("");
  const [sendNotice, setSendNotice] = useState("");
  const [sendError, setSendError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetSignal, setTurnstileResetSignal] = useState(0);
  const topicSelectRef = useRef<HTMLSelectElement | null>(null);

  const topic = controlledTopic ?? topicState;

  const setTopic = (nextTopic: string) => {
    if (onTopicChange) onTopicChange(nextTopic);
    if (controlledTopic === undefined) setTopicState(nextTopic);
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSendNotice("");
    setSendError("");

    if (!turnstileToken) {
      setSendError("Please complete the security check before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          organisation: org,
          email,
          topic,
          message,
          turnstileToken,
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Could not send your message. Please try again.");
      }

      setSendNotice("Message sent successfully. We have also emailed an auto-response confirmation.");
      setName("");
      setOrg("");
      setEmail("");
      setMessage("");
      setTurnstileResetSignal((value) => value + 1);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Could not send your message. Please try again.";
      setSendError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    if (focusSignal === undefined) return;
    topicSelectRef.current?.focus();
  }, [focusSignal]);

  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="text-sm font-semibold text-black/85">Send a message</div>
      <p className="mt-2 text-sm leading-relaxed text-black/60">
        Submit directly and we will respond by email.
      </p>

      <form className="mt-5 grid gap-3 sm:grid-cols-2" onSubmit={handleSubmit}>
        <label className="grid gap-1">
          <span className="text-xs font-semibold text-black/55">Name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="h-11 rounded-xl border border-black/15 bg-white px-4 text-sm outline-none focus:border-black/35"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-1">
          <span className="text-xs font-semibold text-black/55">Organisation</span>
          <input
            value={org}
            onChange={(e) => setOrg(e.target.value)}
            className="h-11 rounded-xl border border-black/15 bg-white px-4 text-sm outline-none focus:border-black/35"
            placeholder="Company / agency"
          />
        </label>

        <label className="grid gap-1">
          <span className="text-xs font-semibold text-black/55">Email</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            className="h-11 rounded-xl border border-black/15 bg-white px-4 text-sm outline-none focus:border-black/35"
            placeholder="you@company.com"
          />
        </label>

        <label className="grid gap-1">
          <span className="text-xs font-semibold text-black/55">Topic</span>
          <select
            ref={topicSelectRef}
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="h-11 rounded-xl border border-black/15 bg-white px-4 text-sm outline-none focus:border-black/35"
          >
            <option>General</option>
            <option>Sales &amp; partnerships</option>
            <option>Security &amp; procurement</option>
            <option>Support</option>
            <option>Investors</option>
          </select>
        </label>

        <label className="grid gap-1 sm:col-span-2">
          <span className="text-xs font-semibold text-black/55">Message</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="min-h-[140px] rounded-2xl border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black/35"
            placeholder="Tell us what you're building, your timeline, and the best way to respond."
          />
        </label>

        <div className="sm:col-span-2">
          <TurnstileWidget onTokenChange={setTurnstileToken} resetSignal={turnstileResetSignal} />
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !turnstileToken}
          className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-xl bg-black px-6 text-sm font-semibold text-white hover:bg-black/90 disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2"
        >
          {isSubmitting ? "Sending..." : "Send message"} <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </form>

      {sendNotice ? <div className="mt-3 text-xs text-black/50">{sendNotice}</div> : null}
      {sendError ? <div className="mt-3 text-xs text-red-600">{sendError}</div> : null}

    </div>
  );
}
