import Image from 'next/image';

export const HeroImage = () => {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-[-2%] hidden w-[55%] lg:block">
      <Image
        src="/profile-anime4.png"
        priority
        fill
        alt="Alex Benavídez - Senior Software Engineer"
        className="object-cover object-center opacity-95 dark:opacity-90"
      />

      {/* Fade hacia el texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent dark:via-background/30" />

      {/* Fade inferior */}
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-background via-background/90 to-transparent" />

      {/* Fade superior sutil */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background to-transparent" />
    </div>
  );
};
