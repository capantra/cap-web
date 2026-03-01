"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { TurnstileWidget } from "@/components/shared/TurnstileWidget";

export type SolutionBriefingKey = "capantraone" | "capantrasales" | "capantradial" | "capantradata";

const SOLUTION_LABEL: Record<SolutionBriefingKey, string> = {
  capantraone: "CapantraOne",
  capantrasales: "CapantraSales",
  capantradial: "CapantraDial",
  capantradata: "CapantraData",
};

const SOLUTION_PLACEHOLDER: Record<SolutionBriefingKey, string> = {
  capantraone:
    "Tell us how you currently run workflows, forms, and team operations. Include your governance or rollout constraints.",
  capantrasales:
    "Tell us your sales model (field/telesales), KPI goals, and what outcomes you need from a briefing/demo.",
  capantradial:
    "Tell us your inbound/outbound setup, routing needs, and reporting or compliance requirements.",
  capantradata:
    "Tell us your data-handling requirements (suppression, requests, auditability) and target rollout scope.",
};

export function SolutionBriefingForm({ solution }: { solution: SolutionBriefingKey }) {
  const [fullName, setFullName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [teamSize, setTeamSize] = useState("1-5");
  const [timeline, setTimeline] = useState("Next 30 days");
  const [goals, setGoals] = useState("");
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
      const response = await fetch("/api/solution-briefing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          organisation,
          email,
          phone,
          solution,
          teamSize,
          timeline,
          goals,
          turnstileToken,
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Could not send your request. Please try again.");
      }

      setSendNotice(`Request sent successfully. Our sales team will follow up with a ${SOLUTION_LABEL[solution]} briefing/demo.`);
      setFullName("");
      setOrganisation("");
      setEmail("");
      setPhone("");
      setGoals("");
      setTeamSize("1-5");
      setTimeline("Next 30 days");
      setTurnstileResetSignal((value) => value + 1);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Could not send your request. Please try again.";
      setSendError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div id="briefing-form" className="scroll-mt-28 rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="text-sm font-semibold text-black/85">Request a briefing/demo — {SOLUTION_LABEL[solution]}</div>
      <p className="mt-2 text-sm leading-relaxed text-black/60">
        Share your context and our sales team will schedule a solution-specific briefing/demo.
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
            placeholder="Company / agency"
          />
        </label>

        <label className="grid gap-1">
          <span className="text-xs font-semibold text-black/55">Work email</span>
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
          <span className="text-xs font-semibold text-black/55">Phone (optional)</span>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="h-11 rounded-xl border border-black/15 bg-white px-4 text-sm outline-none focus:border-black/35"
            placeholder="+61 ..."
          />
        </label>

        <label className="grid gap-1">
          <span className="text-xs font-semibold text-black/55">Team size</span>
          <select
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
            className="h-11 rounded-xl border border-black/15 bg-white px-4 text-sm outline-none focus:border-black/35"
          >
            <option>1-5</option>
            <option>6-20</option>
            <option>21-50</option>
            <option>51-100</option>
            <option>100+</option>
          </select>
        </label>

        <label className="grid gap-1">
          <span className="text-xs font-semibold text-black/55">Timeline</span>
          <select
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="h-11 rounded-xl border border-black/15 bg-white px-4 text-sm outline-none focus:border-black/35"
          >
            <option>Next 30 days</option>
            <option>Next 60-90 days</option>
            <option>This quarter</option>
            <option>Exploring options</option>
          </select>
        </label>

        <label className="grid gap-1 sm:col-span-2">
          <span className="text-xs font-semibold text-black/55">What would you like to cover?</span>
          <textarea
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
            required
            className="min-h-[140px] rounded-2xl border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black/35"
            placeholder={SOLUTION_PLACEHOLDER[solution]}
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
          {isSubmitting ? "Sending..." : "Request a briefing/demo"} <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </form>

      {sendNotice ? <div className="mt-3 text-xs text-black/50">{sendNotice}</div> : null}
      {sendError ? <div className="mt-3 text-xs text-red-600">{sendError}</div> : null}
    </div>
  );
}
