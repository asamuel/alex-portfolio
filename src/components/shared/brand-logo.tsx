import Image from 'next/image';

type BrandLogoProps = {
  className?: string;
  width?: number;
  height?: number;
};

export function BrandLogo({ className = 'size-7', width = 28, height = 28 }: BrandLogoProps) {
  return (
    <>
      <Image
        src="/brand/forward-mark-light.svg"
        alt="Alex Benavidez logo"
        width={width}
        height={height}
        priority
        className={`block dark:hidden ${className}`}
      />

      <Image
        src="/brand/forward-mark-dark.svg"
        alt="Alex Benavidez logo"
        width={width}
        height={height}
        priority
        className={`hidden dark:block ${className}`}
      />
    </>
  );
}
