import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur nav-shadow">
      <div className="mx-auto flex h-[58px] max-w-[1080px] items-center justify-between px-5 lg:px-0">
        {/* Desktop */}
        <div className="hidden w-full items-center justify-between md:flex">
          <Logo />

          <nav className="flex items-center gap-7" aria-label="Primary navigation">
            {links.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[12px] font-medium transition ${
                  index === 0
                    ? "text-pink-600"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="text-[12px] font-medium text-slate-500 hover:text-slate-900"
            >
              Sign In
            </a>
            <a
              href="#contact"
              className="rounded-full brand-button px-4 py-2 text-[12px] font-semibold transition"
            >
              Sign Up
            </a>
          </div>
        </div>

        {/* Mobile: hamburger / centered brand  */}
        <div className="flex w-full items-center justify-between md:hidden">
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-700"
            aria-label="Open navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-0.5 w-4 rounded bg-current" />
              <span className="h-0.5 w-4 rounded bg-current" />
              <span className="h-0.5 w-4 rounded bg-current" />
            </span>
          </button>

          <Logo />

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="text-[11px] font-semibold text-slate-500"
            >
              Sign In
            </a>
            <a
              href="#contact"
              className="rounded-full brand-button px-3 py-1.5 text-[10px] font-semibold"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white md:hidden">
          <nav className="mx-auto flex max-w-[1080px] flex-col px-5 py-3" aria-label="Mobile navigation">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-slate-100 py-3 text-sm font-medium text-slate-600 last:border-0"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
