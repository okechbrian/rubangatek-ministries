import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="/" className={`flex items-center gap-3 no-underline group ${className}`}>
      <div className="relative w-10 h-10 flex-shrink-0">
        <Image
          src="/images/rubangatek_logo_cropped.png"
          alt="Rubangatek Ministries Logo"
          fill
          sizes="40px"
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="font-heading font-bold text-primary text-sm sm:text-base uppercase tracking-wide">
          RUBANGATEK MINISTRIES
        </span>
        <span className="font-body text-[10px] sm:text-xs text-accent font-semibold uppercase tracking-[0.2em]">
          UNITED IN SERVICE
        </span>
      </div>
    </a>
  );
}

