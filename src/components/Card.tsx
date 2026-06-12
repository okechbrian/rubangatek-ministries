import Link from "next/link";
import Illustration from "./Illustration";

type CardProps = {
  title: string;
  description: string;
  imageAlt?: string;
  illustration?: "elderly" | "education" | "community" | "story" | "donate";
  href?: string;
  variant?: "default" | "compact";
};

export default function Card({
  title,
  description,
  imageAlt,
  illustration,
  href,
  variant = "default",
}: CardProps) {
  const className = `group bg-white rounded-xl border border-secondary/50 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${
    href ? "cursor-pointer" : ""
  }`;
  const imgBlock = (
    <div
      className={`overflow-hidden ${variant === "compact" ? "h-32" : "h-40 sm:h-48"}`}
      aria-label={imageAlt}
      role="img"
    >
      {illustration ? (
        <Illustration variant={illustration} className="h-full w-full" />
      ) : (
        <div className="h-full w-full bg-secondary/50 flex items-center justify-center">
          <svg className="w-16 h-16 text-primary/20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>
      )}
    </div>
  );

  const content = (
    <div className={`${variant === "compact" ? "p-4" : "p-5 sm:p-6"}`}>
      <h3
        className={`font-heading font-semibold text-text-primary group-hover:text-primary transition-colors ${
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
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {imgBlock}
        {content}
      </Link>
    );
  }

  return (
    <div className={className}>
      {imgBlock}
      {content}
    </div>
  );
}
