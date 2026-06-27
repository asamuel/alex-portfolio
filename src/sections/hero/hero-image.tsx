import Image from 'next/image';

export const HeroImage = () => {
  return (
    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
      <div className="relative w-full max-w-sm aspect-square">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent rounded-lg blur-2xl"></div>

        {/* Image frame */}
        <div className="relative w-full h-full rounded-lg border border-border overflow-hidden shadow-2xl">
          <Image
            src="/profile-anime2.png"
            priority
            fill
            alt="Alex Benavídez - Senior Software Engineer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-1 h-12 bg-accent"></div>
        <div className="absolute bottom-0 left-0 w-12 h-1 bg-accent"></div>
      </div>
    </div>
  );
};
