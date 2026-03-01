import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

type SendEmailInput = {
  to: string | string[];
  from: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
};

let sesClient: SESv2Client | null = null;

function getSesClient() {
  if (sesClient) return sesClient;

  const region = process.env.AWS_REGION;
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

  if (!region || !accessKeyId || !secretAccessKey) {
    throw new Error("Missing SES AWS credentials. Set AWS_REGION, AWS_ACCESS_KEY_ID, and AWS_SECRET_ACCESS_KEY.");
  }

  sesClient = new SESv2Client({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });

  return sesClient;
}

export async function sendSesEmail({ to, from, subject, html, text, replyTo }: SendEmailInput) {
  const client = getSesClient();

  const destination = Array.isArray(to) ? to : [to];

  const command = new SendEmailCommand({
    FromEmailAddress: from,
    Destination: {
      ToAddresses: destination,
    },
    ReplyToAddresses: replyTo ? [replyTo] : undefined,
    Content: {
      Simple: {
        Subject: {
          Data: subject,
          Charset: "UTF-8",
        },
        Body: {
          Html: {
            Data: html,
            Charset: "UTF-8",
          },
          Text: {
            Data: text ?? "",
            Charset: "UTF-8",
          },
        },
      },
    },
    ConfigurationSetName: process.env.AWS_SES_CONFIGURATION_SET,
  });

  return client.send(command);
}
