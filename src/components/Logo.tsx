export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="/" className={`flex items-center gap-3 no-underline ${className}`}>
      <svg
        viewBox="0 0 48 48"
        className="w-10 h-10 flex-shrink-0"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="22" fill="#1E7A3B" />
        <circle cx="24" cy="24" r="20" fill="white" />
        <ellipse cx="24" cy="28" rx="10" ry="6" fill="#1E7A3B" opacity="0.15" />
        <path
          d="M24 12C20.7 12 18 14.7 18 18C18 21.3 24 30 24 30C24 30 30 21.3 30 18C30 14.7 27.3 12 24 12Z"
          fill="#1E7A3B"
          opacity="0.6"
        />
        <circle cx="24" cy="18" r="3" fill="#1E7A3B" />
        <line x1="12" y1="26" x2="36" y2="26" stroke="#1E7A3B" strokeWidth="1.5" />
        <line x1="12" y1="30" x2="36" y2="30" stroke="#1E7A3B" strokeWidth="1.5" />
      </svg>
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
