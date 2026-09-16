type EmailPayload = {
  subject: string;
  html: string;
};

export async function notifyOwner(payload: EmailPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const from = process.env.RESEND_FROM || "CloudEdge Website <onboarding@resend.dev>";
  const to = "chohanv828@gmail.com";

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `******
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject: payload.subject,
      html: payload.html,
    }),
  });
}
