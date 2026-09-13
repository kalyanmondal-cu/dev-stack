interface LogoProps {
  compact?: boolean;
}

export function Logo({ compact = false }: LogoProps) {
  return (
    <a
      href="#home"
      className="inline-flex items-center gap-2.5"
      aria-label="Dev Stack home"
    >
      <span className="grid h-7 w-7 place-items-center rounded-md brand-gradient text-[10px] font-extrabold text-white shadow-sm">
        DS
      </span>
      {!compact && (
        <span className="text-[17px] font-extrabold tracking-[-0.02em]">
          Dev <span className="gradient-text">Stack</span>
        </span>
      )}
    </a>
  );
}
