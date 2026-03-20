// Email templates placeholder — NOT implemented yet.
// Add real templates here when email verification is introduced.

export const verificationEmailTemplate = ({ username, verificationUrl }) => {
  return {
    subject: 'Verify your UniLearnHub account',
    html: `
      <p>Hi ${username},</p>
      <p>Please verify your account by clicking the link below:</p>
      <a href="${verificationUrl}">${verificationUrl}</a>
    `,
  };
};
