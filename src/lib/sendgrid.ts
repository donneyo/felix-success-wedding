import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function sendEmail({
  to,
  subject,
  text,
  html,
}: {
  to: string;
  subject: string;
  text: string;
  html: string;
}) {
  const msg = {
    to,
    from: process.env.EMAIL_FROM!, // must be a verified sender in SendGrid
    subject,
    text,
    html,
  };

  try {
    const response = await sgMail.send(msg);
    console.log("✅ Email sent successfully:", response[0].statusCode);
    return { success: true };
  } catch (error: any) {
    console.error("❌ Failed to send email:", error);
    return { success: false, error };
  }
}
