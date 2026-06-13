import Link from "next/link";
import { UgandaMaskedImage } from "@/components/UgandaMapMask";

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
  if (small) {
    return (
      <section className="relative flex items-center justify-center overflow-hidden min-h-[40vh] bg-primary">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 800%22%3E%3Crect fill=%22%232e8f87%22 width=%221200%22 height=%22800%22/%3E%3Ccircle fill=%22%23ffffff%22 cx=%22800%22 cy=%22300%22 r=%22200%22/%3E%3Ccircle fill=%22%23ffffff%22 cx=%22300%22 cy=%22500%22 r=%22150%22/%3E%3C/svg%3E')",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary-dark/95" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center py-12 sm:py-16">
          <h1 className="font-heading font-bold text-white leading-tight mb-4 text-3xl sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex items-center overflow-hidden bg-[#FDFBF7] py-12 md:py-20 lg:py-24 border-b border-secondary/20">
      
      {/* Background soft accents */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#1E7A3B_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 text-left">
            <span className="inline-block text-accent font-semibold tracking-wider text-xs uppercase mb-3 bg-accent/10 px-3 py-1 rounded-full">
              Rubangatek Ministries
            </span>
            <h1 className="font-heading font-bold text-text-primary text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6 tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-text-muted max-w-lg mb-8 leading-relaxed">
                {subtitle}
              </p>
            )}
            
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-row items-center gap-4 flex-wrap">
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="px-8 py-3 bg-[#111111] hover:bg-primary text-white font-semibold rounded-full text-base transition-all duration-200 shadow-md shadow-black/10 hover:shadow-primary/20"
                  >
                    {primaryCta.label}
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="px-8 py-3 border border-text-primary/30 hover:border-text-primary text-text-primary hover:bg-black/5 font-semibold rounded-full text-base transition-all duration-200"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Uganda Map Masked Image with scattered dots */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="w-full max-w-[450px] aspect-square relative p-6">
              
              {/* Masked Uganda Image */}
              <UgandaMaskedImage
                imageSrc="/images/ugandan_children_hero.png"
                imageAlt="Smiling Ugandan children"
                className="w-full h-full"
              />

              {/* Decorative Accent Dots from Pinterest UI */}
              {/* Orange Dot */}
              <div className="absolute top-[8%] left-[28%] w-5 h-5 bg-accent rounded-full shadow-sm" />
              {/* Blue Dot */}
              <div className="absolute bottom-[10%] left-[8%] w-4.5 h-4.5 bg-[#3CA9FC] rounded-full shadow-sm" />
              {/* Green Dot */}
              <div className="absolute top-[38%] right-[10%] w-4 h-4 bg-primary rounded-full shadow-sm" />
              {/* Red/Orange Accent Dot */}
              <div className="absolute top-[18%] right-[22%] w-3 h-3 bg-[#FC5A3C] rounded-full shadow-sm" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
