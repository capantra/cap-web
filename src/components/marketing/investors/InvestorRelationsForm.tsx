"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { TurnstileWidget } from "@/components/shared/TurnstileWidget";

export function InvestorRelationsForm() {
  const [fullName, setFullName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [investorType, setInvestorType] = useState("Strategic investor");
  const [interestArea, setInterestArea] = useState("Platform growth");
  const [message, setMessage] = useState("");
  const [sendNotice, setSendNotice] = useState("");
  const [sendError, setSendError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetSignal, setTurnstileResetSignal] = useState(0);

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
      const response = await fetch("/api/investors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          organisation,
          email,
          investorType,
          interestArea,
          message,
          turnstileToken,
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Could not send your enquiry. Please try again.");
      }

      setSendNotice("Investor enquiry sent successfully. We have also emailed an auto-response confirmation.");
      setFullName("");
      setOrganisation("");
      setEmail("");
      setMessage("");
      setTurnstileResetSignal((value) => value + 1);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Could not send your enquiry. Please try again.";
      setSendError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="text-sm font-semibold text-black/85">Investor enquiry</div>
      <p className="mt-2 text-sm leading-relaxed text-black/60">
        Submit directly and our investor relations team will respond by email.
      </p>

      <form className="mt-5 grid gap-3 sm:grid-cols-2" onSubmit={handleSubmit}>
        <label className="grid gap-1">
          <span className="text-xs font-semibold text-black/55">Full name</span>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="h-11 rounded-xl border border-black/15 bg-white px-4 text-sm outline-none focus:border-black/35"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-1">
          <span className="text-xs font-semibold text-black/55">Organisation</span>
          <input
            value={organisation}
            onChange={(e) => setOrganisation(e.target.value)}
            className="h-11 rounded-xl border border-black/15 bg-white px-4 text-sm outline-none focus:border-black/35"
            placeholder="Fund / institution"
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
            placeholder="you@fund.com"
          />
        </label>

        <label className="grid gap-1">
          <span className="text-xs font-semibold text-black/55">Investor type</span>
          <select
            value={investorType}
            onChange={(e) => setInvestorType(e.target.value)}
            className="h-11 rounded-xl border border-black/15 bg-white px-4 text-sm outline-none focus:border-black/35"
          >
            <option>Strategic investor</option>
            <option>Growth equity</option>
            <option>Venture fund</option>
            <option>Family office</option>
            <option>Corporate development</option>
            <option>Other</option>
          </select>
        </label>

        <label className="grid gap-1 sm:col-span-2">
          <span className="text-xs font-semibold text-black/55">Primary interest</span>
          <select
            value={interestArea}
            onChange={(e) => setInterestArea(e.target.value)}
            className="h-11 rounded-xl border border-black/15 bg-white px-4 text-sm outline-none focus:border-black/35"
          >
            <option>Platform growth</option>
            <option>Product roadmap</option>
            <option>Commercial traction</option>
            <option>Regulated market expansion</option>
            <option>Partnership strategy</option>
          </select>
        </label>

        <label className="grid gap-1 sm:col-span-2">
          <span className="text-xs font-semibold text-black/55">Message</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="min-h-[140px] rounded-2xl border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black/35"
            placeholder="Tell us your investment focus and what you'd like to discuss."
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
          {isSubmitting ? "Sending..." : "Send investor enquiry"} <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </form>

      {sendNotice ? <div className="mt-3 text-xs text-black/50">{sendNotice}</div> : null}
      {sendError ? <div className="mt-3 text-xs text-red-600">{sendError}</div> : null}

      <p className="mt-3 text-xs text-black/45">
        Or email directly: <span className="font-semibold text-black/60">investor.relations@capantra.com</span>
      </p>
    </div>
  );
}
