// Email functionality is intentionally NOT implemented yet.
// This file is a placeholder for future Nodemailer/SMTP setup.
//
// To enable email features later:
//   1. npm install nodemailer
//   2. Add SMTP credentials to .env (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS)
//   3. Replace this placeholder with a real nodemailer transporter

export const sendMail = async ({ to, subject, html }) => {
  // TODO: implement when email verification is added
  console.warn(`[MAILER PLACEHOLDER] Email not sent. To: ${to} | Subject: ${subject}`);
};
