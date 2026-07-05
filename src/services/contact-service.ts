import { resend } from '@/lib/resend';
import type { ContactFormValues } from '@/validations/contact-schema';

export const sendContactEmail = async (data: ContactFormValues) => {
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!contactEmail) {
    throw new Error('CONTACT_EMAIL is not configured.');
  }

  return resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: contactEmail,
    subject: `New portfolio message from ${data.name}`,
    replyTo: data.email,
    text: `
    Name: ${data.name}
    Email: ${data.email}

    Message:
    ${data.message}
        `,
  });
};
