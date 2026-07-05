import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters.')
    .max(100, 'Name must be less than 100 characters.'),
  email: z
    .email('Please enter a valid email.')
    .trim()
    .min(1, 'Email is required.')
    .max(100, 'Email must be less than 100 characters.'),
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters.')
    .max(1000, 'Message must be less than 1000 characters.'),
  company: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
