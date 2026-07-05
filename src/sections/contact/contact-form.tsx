'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    console.log(values);

    setStatus('idle');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to send message.');
      }

      reset();
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-md border border-border bg-card/40 backdrop-blur-2xl p-6 sm:p-8 lg:mt-8"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Full Name
          </label>

          <Input
            id="name"
            placeholder="Your name"
            {...register('name')}
            className="h-12 rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-accent/40"
          />

          {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>

          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...register('email')}
            className="h-12 rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-accent/40"
          />

          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Message
          </label>

          <Textarea
            id="message"
            rows={10}
            placeholder="Tell me about your project..."
            {...register('message')}
            className="min-h-44 resize-none border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-accent/40"
          />

          {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 w-full rounded-xl bg-accent text-accent-foreground font-medium shadow-[0_0_20px_hsl(var(--accent)/0.15)] hover:bg-accent/90"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
          <Send className="ml-2 size-4" />
        </Button>
        {status === 'success' && (
          <p className="text-sm text-accent">
            Message sent successfully. I&apos;ll get back to you soon.
          </p>
        )}

        {status === 'error' && (
          <p className="text-sm text-destructive">
            Something went wrong. Please try again or contact me by email.
          </p>
        )}
      </div>
    </form>
  );
};
