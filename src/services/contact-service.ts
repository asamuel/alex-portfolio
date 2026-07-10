import { resend } from '@/lib/resend';
import type { ContactFormValues } from '@/validations/contact-schema';

export const sendContactEmail = async (data: ContactFormValues) => {
  const from = process.env.RESEND_FROM;
  const to = process.env.CONTACT_EMAIL;

  if (!from) {
    throw new Error('RESEND_FROM is not configured.');
  }

  if (!to) {
    throw new Error('CONTACT_EMAIL is not configured.');
  }

  return resend.emails.send({
    from: `Alex Benavídez <${from}>`,
    to,
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
