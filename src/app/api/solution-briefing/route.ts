import { NextResponse } from "next/server";
import { sendSesEmail } from "@/lib/ses";
import { verifyTurnstileToken } from "@/lib/turnstile";

export const runtime = "nodejs";

type SolutionKey = "capantraone" | "capantrasales" | "capantradial" | "capantradata";

type SolutionBriefingPayload = {
  fullName: string;
  organisation: string;
  email: string;
  phone?: string;
  solution: SolutionKey;
  teamSize: string;
  timeline: string;
  goals: string;
  turnstileToken: string;
};

type EmailSection = {
  label: string;
  value: string;
};

type RenderEmailArgs = {
  title: string;
  preheader?: string;
  intro?: string;
  sections?: EmailSection[];
  message?: string;
  footerNote?: string;
  cta?: { label: string; href: string };
};

function sanitize(value: string) {
  return value.trim();
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function nl2br(input: string) {
  return escapeHtml(input).replace(/\n/g, "<br/>");
}

function parseRecipients(input: string) {
  return input
    .split(/[;,]/)
    .map((value) => value.trim())
    .filter(Boolean);
}

function renderBrandEmailHtml({
  title,
  preheader,
  intro,
  sections = [],
  message,
  footerNote,
  cta,
}: RenderEmailArgs) {
  const safeTitle = escapeHtml(title);
  const safePreheader = preheader ? escapeHtml(preheader) : "";

  const rowsHtml = sections
    .map(
      (item) => `
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #EEF2F7;">
            <div style="font-family:Arial, Helvetica, sans-serif;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#6B7280;margin-bottom:4px;">
              ${escapeHtml(item.label)}
            </div>
            <div style="font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:20px;color:#111827;word-break:break-word;">
              ${nl2br(item.value)}
            </div>
          </td>
        </tr>
      `
    )
    .join("");

  const messageHtml = message
    ? `
      <div style="margin-top:18px;padding:14px 16px;border:1px solid #EEF2F7;border-radius:10px;background:#F9FAFB;">
        <div style="font-family:Arial, Helvetica, sans-serif;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#6B7280;margin-bottom:8px;">
          Message
        </div>
        <div style="font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:22px;color:#111827;word-break:break-word;">
          ${nl2br(message)}
        </div>
      </div>
    `
    : "";

  const ctaHtml = cta
    ? `
      <div style="margin-top:22px;">
        <a href="${escapeHtml(cta.href)}"
           style="display:inline-block;background:#0B9D82;color:#FFFFFF;text-decoration:none;
                  font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:bold;
                  padding:12px 16px;border-radius:999px;">
          ${escapeHtml(cta.label)}
        </a>
      </div>
    `
    : "";

  const footerNoteHtml = footerNote
    ? `<div style="margin-top:18px;font-family:Arial, Helvetica, sans-serif;font-size:12px;line-height:18px;color:#6B7280;">
         ${nl2br(footerNote)}
       </div>`
    : "";

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${safeTitle}</title>
</head>
<body style="margin:0;padding:0;background:#F3F4F6;">
  <div style="display:none;font-size:1px;color:#F3F4F6;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
    ${safePreheader}
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F3F4F6;">
    <tr>
      <td align="center" style="padding:20px 12px;">
        <table role="presentation" width="680" cellpadding="0" cellspacing="0" style="width:100%;max-width:680px;">
          <tr>
            <td style="background:#FFFFFF;border:1px solid #E5E7EB;border-radius:14px 14px 0 0;overflow:hidden;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:18px 18px 14px 18px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td align="left" style="vertical-align:middle;">
                          <img src="https://pub-1e587b8a735340e788c5a49ed8f83204.r2.dev/Brand/logo.png" width="160" height="40" alt="Capantra" style="display:block;border:0;outline:none;text-decoration:none;height:auto;max-width:160px;" />
                        </td>
                        <td align="right" style="vertical-align:middle;">
                          <div style="font-family:Arial, Helvetica, sans-serif;font-size:12px;color:#6B7280;">
                            Automated message
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="height:10px;background:#0B9D82;">&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="background:#FFFFFF;border-left:1px solid #E5E7EB;border-right:1px solid #E5E7EB;">
              <div style="padding:22px 18px 6px 18px;">
                <div style="font-family:Arial, Helvetica, sans-serif;font-size:11px;letter-spacing:0.10em;text-transform:uppercase;color:#6B7280;">
                  Capantra
                </div>
                <div style="margin-top:6px;font-family:Arial, Helvetica, sans-serif;font-size:24px;line-height:30px;font-weight:800;color:#0B1220;">
                  ${safeTitle}
                </div>

                ${
                  intro
                    ? `<div style="margin-top:12px;font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:22px;color:#111827;">${nl2br(intro)}</div>`
                    : ""
                }

                ${
                  sections.length
                    ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;">${rowsHtml}</table>`
                    : ""
                }

                ${messageHtml}
                ${ctaHtml}
                ${footerNoteHtml}
                <div style="height:18px;"></div>
              </div>
            </td>
          </tr>

          <tr>
            <td style="background:#FFFFFF;border:1px solid #E5E7EB;border-top:none;border-radius:0 0 14px 14px;">
              <div style="padding:14px 18px;">
                <div style="font-family:Arial, Helvetica, sans-serif;font-size:12px;line-height:18px;color:#6B7280;text-align:center;">
                  This email has been sent automatically from capantra.com.
                </div>
                <div style="margin-top:10px;font-family:Arial, Helvetica, sans-serif;font-size:11px;line-height:16px;color:#9CA3AF;text-align:center;">
                  Copyright © ${new Date().getFullYear()} Capantra Ltd. All rights reserved.
                </div>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

const SOLUTION_META: Record<SolutionKey, { name: string; repMessage: string }> = {
  capantraone: {
    name: "CapantraOne",
    repMessage:
      "Our team will walk you through how CapantraOne can structure workflows, operations, and governance for your rollout.",
  },
  capantrasales: {
    name: "CapantraSales",
    repMessage:
      "Our team will map your sales workflow, KPI model, and rollout path for CapantraSales in a practical briefing/demo.",
  },
  capantradial: {
    name: "CapantraDial",
    repMessage:
      "Our team will review your inbound/outbound model and show how CapantraDial can support routing, reporting, and governed execution.",
  },
  capantradata: {
    name: "CapantraData",
    repMessage:
      "Our team will review your data-handling requirements and outline a governance-first rollout path for CapantraData.",
  },
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<SolutionBriefingPayload>;

    const fullName = sanitize(body.fullName ?? "");
    const organisation = sanitize(body.organisation ?? "");
    const email = sanitize(body.email ?? "");
    const phone = sanitize(body.phone ?? "");
    const solution = sanitize(body.solution ?? "") as SolutionKey;
    const teamSize = sanitize(body.teamSize ?? "");
    const timeline = sanitize(body.timeline ?? "");
    const goals = sanitize(body.goals ?? "");
    const turnstileToken = sanitize(body.turnstileToken ?? "");

    if (!fullName || !email || !solution || !teamSize || !timeline || !goals || !turnstileToken) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (!Object.hasOwn(SOLUTION_META, solution)) {
      return NextResponse.json({ error: "Invalid solution selection." }, { status: 400 });
    }

    const remoteIp =
      request.headers.get("cf-connecting-ip") ??
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();

    const turnstile = await verifyTurnstileToken(turnstileToken, remoteIp);

    if (!turnstile.success) {
      return NextResponse.json(
        { error: "Security verification failed. Please try again." },
        { status: 400 }
      );
    }

    const configuredInternalTo = process.env.SOLUTION_BRIEFING_TO_EMAIL;
    const fallbackInternalTo = process.env.CONTACT_TO_EMAIL;
    const internalRecipients = configuredInternalTo
      ? parseRecipients(configuredInternalTo)
      : ["sales@capantra.com", fallbackInternalTo].filter((value): value is string => Boolean(value));

    const to = Array.from(new Set(internalRecipients));
    const from = process.env.SOLUTION_BRIEFING_FROM_EMAIL ?? process.env.CONTACT_FROM_EMAIL;
    const autoresponderFrom = process.env.AUTORESPONDER_FROM_EMAIL ?? from;

    if (!to.length) {
      return NextResponse.json(
        { error: "Solution briefing recipient is not configured. Set SOLUTION_BRIEFING_TO_EMAIL." },
        { status: 500 }
      );
    }

    if (!from || !autoresponderFrom) {
      return NextResponse.json(
        {
          error:
            "Email sender is not configured. Set SOLUTION_BRIEFING_FROM_EMAIL (or CONTACT_FROM_EMAIL) and AUTORESPONDER_FROM_EMAIL.",
        },
        { status: 500 }
      );
    }

    const meta = SOLUTION_META[solution];
    const internalSubject = `[Solution Briefing] ${meta.name} — ${organisation || "Organisation"}`;

    const internalResult = await sendSesEmail({
      to,
      from,
      replyTo: email,
      subject: internalSubject,
      text: [
        `Name: ${fullName}`,
        `Organisation: ${organisation || "-"}`,
        `Email: ${email}`,
        `Phone: ${phone || "-"}`,
        `Solution: ${meta.name}`,
        `Team size: ${teamSize}`,
        `Timeline: ${timeline}`,
        "",
        goals,
      ].join("\n"),
      html: renderBrandEmailHtml({
        title: `${meta.name} briefing/demo request`,
        preheader: `${fullName} requested a ${meta.name} briefing/demo via capantra.com`,
        intro: "A new solution-specific briefing/demo request was submitted from the Capantra website.",
        sections: [
          { label: "Name", value: fullName },
          { label: "Organisation", value: organisation || "-" },
          { label: "Email", value: email },
          { label: "Phone", value: phone || "-" },
          { label: "Solution", value: meta.name },
          { label: "Team size", value: teamSize },
          { label: "Timeline", value: timeline },
          { label: "Source", value: `${solution}_page` },
        ],
        message: goals,
      }),
    });

    console.info("[solution-briefing] internal email accepted", {
      recipients: to,
      messageId: internalResult.MessageId,
      solution,
    });

    const autoresponderResult = await sendSesEmail({
      to: email,
      from: autoresponderFrom,
      subject: `${meta.name} briefing request received | Capantra`,
      text: [
        `Hi ${fullName},`,
        "",
        `Thanks for requesting a ${meta.name} briefing/demo.`,
        meta.repMessage,
        "",
        `Summary: ${meta.name} · ${teamSize} · ${timeline}`,
        "",
        "Regards,",
        "Capantra Sales Team",
      ].join("\n"),
      html: renderBrandEmailHtml({
        title: "Your briefing request is in",
        preheader: `${meta.name} briefing/demo request received by Capantra`,
        intro: `Hi ${fullName},\n\nThanks for requesting a ${meta.name} briefing/demo. ${meta.repMessage}`,
        sections: [
          { label: "Solution", value: meta.name },
          { label: "Team size", value: teamSize },
          { label: "Timeline", value: timeline },
        ],
        message: "Our sales team will follow up shortly with next steps and a tailored session agenda.",
        footerNote:
          "This is an automated acknowledgement. If you did not submit this request, please reply with \"Received in error\".",
        cta: { label: "Back to capantra.com", href: "https://capantra.com" },
      }),
    });

    console.info("[solution-briefing] autoresponder accepted", {
      recipient: email,
      messageId: autoresponderResult.MessageId,
      solution,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to send briefing request.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
