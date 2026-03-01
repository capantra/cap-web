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

function renderEmailHtml({
  title,
  intro,
  sections,
  message,
}: {
  title: string;
  intro: string;
  sections: EmailSection[];
  message: string;
}) {
  const rows = sections
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

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:#F3F4F6;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F3F4F6;">
    <tr>
      <td align="center" style="padding:20px 12px;">
        <table role="presentation" width="680" cellpadding="0" cellspacing="0" style="width:100%;max-width:680px;">
          <tr>
            <td style="background:#FFFFFF;border:1px solid #E5E7EB;border-radius:14px;overflow:hidden;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="height:10px;background:#0B9D82;">&nbsp;</td></tr>
                <tr>
                  <td style="padding:22px 18px 8px 18px;">
                    <div style="font-family:Arial, Helvetica, sans-serif;font-size:24px;line-height:30px;font-weight:800;color:#0B1220;">
                      ${escapeHtml(title)}
                    </div>
                    <div style="margin-top:12px;font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:22px;color:#111827;">
                      ${nl2br(intro)}
                    </div>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;">${rows}</table>
                    <div style="margin-top:18px;padding:14px 16px;border:1px solid #EEF2F7;border-radius:10px;background:#F9FAFB;">
                      <div style="font-family:Arial, Helvetica, sans-serif;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#6B7280;margin-bottom:8px;">Goals & context</div>
                      <div style="font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:22px;color:#111827;word-break:break-word;">${nl2br(message)}</div>
                    </div>
                  </td>
                </tr>
              </table>
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

    const to = "sales@capantra.com";
    const from = process.env.CONTACT_FROM_EMAIL;
    const autoresponderFrom = process.env.AUTORESPONDER_FROM_EMAIL ?? from;

    if (!from || !autoresponderFrom) {
      return NextResponse.json(
        { error: "Email sender is not configured. Set CONTACT_FROM_EMAIL and AUTORESPONDER_FROM_EMAIL." },
        { status: 500 }
      );
    }

    const meta = SOLUTION_META[solution];
    const internalSubject = `[Solution Briefing] ${meta.name} — ${organisation || "Organisation"}`;

    await sendSesEmail({
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
      html: renderEmailHtml({
        title: `${meta.name} briefing/demo request`,
        intro: "A new solution-specific briefing/demo request was submitted from capantra.com.",
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

    await sendSesEmail({
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
      html: renderEmailHtml({
        title: "Your briefing request is in",
        intro: `Hi ${fullName},\n\nThanks for requesting a ${meta.name} briefing/demo. ${meta.repMessage}`,
        sections: [
          { label: "Solution", value: meta.name },
          { label: "Team size", value: teamSize },
          { label: "Timeline", value: timeline },
        ],
        message: "Our sales team will follow up shortly with next steps and a tailored session agenda.",
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to send briefing request.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
