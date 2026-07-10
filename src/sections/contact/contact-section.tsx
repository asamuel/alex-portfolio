import { ContactForm } from './contact-form';
import { ContactInfo } from './contact-info';

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border bg-background px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14 xl:gap-20">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};
