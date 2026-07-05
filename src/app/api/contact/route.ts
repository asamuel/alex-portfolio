import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

import { sendContactEmail } from '@/services/contact-service';
import { contactSchema } from '@/validations/contact-schema';
import { RateLimiter } from '@/lib/rate-limiter';

const getClientIp = async () => {
  const headersList = await headers();

  return (
    headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    headersList.get('x-real-ip') ??
    'unknown'
  );
};

const contactRateLimiter = new RateLimiter({
  limit: 5,
  windowMs: 10 * 60 * 1000,
});

export async function POST(request: Request) {
  try {
    const ip = await getClientIp();

    const rateLimit = contactRateLimiter.limitRequest(`contact:${ip}`);

    if (!rateLimit.success) {
      return NextResponse.json(
        { message: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const data = contactSchema.parse(body);

    if (data.company) {
      return NextResponse.json({ message: 'Message sent successfully.' }, { status: 200 });
    }

    const { error } = await sendContactEmail(data);

    if (error) {
      return NextResponse.json({ message: 'Failed to send message.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Message sent successfully.' }, { status: 200 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ message: 'Invalid form data.' }, { status: 400 });
    }

    return NextResponse.json({ message: 'Something went wrong.' }, { status: 500 });
  }
}
