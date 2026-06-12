import Link from "next/link";

type HeroProps = {
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  small?: boolean;
};

export default function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  small = false,
}: HeroProps) {
  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden ${
        small ? "min-h-[40vh]" : "min-h-[70vh] sm:min-h-[80vh]"
      }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 800%22%3E%3Crect fill=%22%231E7A3B%22 width=%221200%22 height=%22800%22/%3E%3Ccircle fill=%22%23ffffff%22 opacity=%220.03%22 cx=%22800%22 cy=%22300%22 r=%22200%22/%3E%3Ccircle fill=%22%23ffffff%22 opacity=%220.02%22 cx=%22300%22 cy=%22500%22 r=%22150%22/%3E%3C/svg%3E')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/95" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center py-12 sm:py-20">
        <h1
          className={`font-heading font-bold text-white leading-tight mb-4 ${
            small ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl lg:text-6xl"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            {subtitle}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="px-8 py-3 bg-accent text-white font-bold rounded-lg text-base hover:bg-accent-dark transition-colors shadow-lg shadow-accent/25"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="px-8 py-3 border-2 border-white/40 text-white font-semibold rounded-lg text-base hover:bg-white/10 transition-colors"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
