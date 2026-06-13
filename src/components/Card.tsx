import Link from "next/link";
import Illustration from "./Illustration";
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  imageAlt?: string;
  imageSrc?: string; // Supports real images
  illustration?: "elderly" | "education" | "community" | "story" | "donate";
  icon?: React.ReactNode; // Supports clean vector icons
  href?: string;
  variant?: "default" | "compact";
  customRadius?: boolean; // Custom asymmetrical borders
  progress?: number; // Donation progress percentage (0 - 100)
  progressText?: string; // Donation text like "$3,000 / $3,000"
};

export default function Card({
  title,
  description,
  imageAlt,
  imageSrc,
  illustration,
  icon,
  href,
  variant = "default",
  customRadius = false,
  progress,
  progressText,
}: CardProps) {
  const containerClasses = [
    "group bg-white border border-[#E8D4B8]/40 hover:border-accent/30 shadow-[0_4px_16px_rgba(243,228,208,0.12)] hover:shadow-[0_8px_24px_rgba(242,140,53,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden",
    customRadius ? "rounded-[20px] rounded-tr-[50px] rounded-bl-[50px]" : "rounded-2xl",
    href ? "cursor-pointer" : "",
  ].join(" ");

  const imgBlock = imageSrc ? (
    <div className={`relative overflow-hidden w-full ${variant === "compact" ? "h-32" : "h-44 sm:h-52"}`}>
      <Image
        src={imageSrc}
        alt={imageAlt || title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
  ) : illustration ? (
    <div className={`overflow-hidden w-full ${variant === "compact" ? "h-32" : "h-40 sm:h-48"}`} aria-label={imageAlt} role="img">
      <Illustration variant={illustration} className="h-full w-full" />
    </div>
  ) : null;

  const content = (
    <div className={`flex-grow flex flex-col justify-between ${variant === "compact" ? "p-4" : "p-6"}`}>
      <div>
        {icon && (
          <div className="mb-4 inline-flex items-center justify-center p-3 rounded-2xl bg-secondary/35 text-primary group-hover:bg-accent/15 group-hover:text-accent transition-colors duration-200">
            {icon}
          </div>
        )}
        <h3
          className={`font-heading font-bold text-text-primary group-hover:text-primary transition-colors ${
            variant === "compact" ? "text-base" : "text-lg sm:text-xl"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-2 text-text-muted leading-relaxed ${
            variant === "compact" ? "text-sm" : "text-sm sm:text-base"
          }`}
        >
          {description}
        </p>
      </div>

      {/* Progress indicators for campaigns */}
      {progress !== undefined && (
        <div className="mt-4 pt-4 border-t border-secondary/20">
          <div className="w-full bg-secondary/40 h-2 rounded-full overflow-hidden">
            <div
              className="bg-accent h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center mt-2 text-xs font-bold">
            <span className="text-accent">{progress}% Raised</span>
            {progressText && <span className="text-text-muted">{progressText}</span>}
          </div>
        </div>
      )}

      {/* Accent arrow indicator for linked cards */}
      {href && (
        <div className="mt-4 flex justify-end">
          <span className="w-8 h-8 rounded-full bg-secondary/50 group-hover:bg-accent text-primary group-hover:text-white flex items-center justify-center transition-all duration-300">
            <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={containerClasses}>
        {imgBlock}
        {content}
      </Link>
    );
  }

  return (
    <div className={containerClasses}>
      {imgBlock}
      {content}
    </div>
  );
}
