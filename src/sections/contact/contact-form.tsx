'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactSchema, type ContactFormValues } from '@/validations/contact-schema';

type FormStatus = {
  type: 'idle' | 'success' | 'error';
  message?: string;
};

export const ContactForm = () => {
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      company: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus({ type: 'idle' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const result = (await response.json()) as {
        message?: string;
      };

      if (!response.ok) {
        throw new Error(result.message ?? 'Failed to send message.');
      }

      reset();

      setStatus({
        type: 'success',
        message: result.message ?? 'Message sent successfully.',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-md border border-border bg-card/40 p-4 backdrop-blur-2xl sm:p-6 lg:p-8"
    >
      {/* Honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company">Company</label>

        <input id="company" type="text" tabIndex={-1} autoComplete="off" {...register('company')} />
      </div>

      <div className="flex flex-col gap-5 sm:gap-6">
        <div className="flex flex-col gap-2.5 sm:gap-3">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Full Name
          </label>

          <Input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            {...register('name')}
            className="h-12 rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-accent/40"
          />

          {errors.name && (
            <p id="name-error" className="text-sm text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2.5 sm:gap-3">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>

          <Input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email')}
            className="h-12 rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-accent/40"
          />

          {errors.email && (
            <p id="email-error" className="text-sm text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2.5 sm:gap-3">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Message
          </label>

          <Textarea
            id="message"
            rows={8}
            placeholder="Tell me about your project..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            {...register('message')}
            className="min-h-40 resize-y rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-accent/40 sm:min-h-44"
          />

          {errors.message && (
            <p id="message-error" className="text-sm text-destructive">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 w-full rounded-xl bg-accent font-medium text-accent-foreground shadow-[0_0_20px_hsl(var(--accent)/0.15)] hover:bg-accent/90"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}

          <Send className="size-4" aria-hidden="true" />
        </Button>

        {status.type !== 'idle' && (
          <p
            role="status"
            aria-live="polite"
            className={
              status.type === 'success'
                ? 'text-center text-sm text-accent'
                : 'text-center text-sm text-destructive'
            }
          >
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
};
