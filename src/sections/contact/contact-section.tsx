import { ContactForm } from './contact-form';
import { ContactInfo } from './contact-info';

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border bg-background px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};
