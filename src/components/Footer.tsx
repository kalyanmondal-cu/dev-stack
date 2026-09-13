import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-14 border-t border-slate-100 bg-white">
      <div className="mx-auto grid max-w-[1080px] gap-10 px-5 py-12 md:grid-cols-[1.7fr_0.8fr_0.8fr_0.8fr] lg:px-0">
        <div id="about">
          <Logo />
          <p className="mt-4 max-w-[310px] text-[10px] leading-5 text-slate-400">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="mt-4 flex gap-4 text-[9px] font-semibold text-slate-500">
            <a href="#" className="hover:text-slate-900">GitHub</a>
            <a href="#" className="hover:text-slate-900">Twitter</a>
            <a href="#" className="hover:text-slate-900">LinkedIn</a>
          </div>
        </div>

        <div>
          <h3 className="text-[9px] font-extrabold uppercase tracking-wide text-slate-700">
            Product
          </h3>
          <div className="mt-3 flex flex-col gap-2 text-[9px] text-slate-400">
            <a href="#home" className="hover:text-slate-700">Home</a>
            <a href="#technologies" className="hover:text-slate-700">Technologies</a>
            <a href="#projects" className="hover:text-slate-700">Projects</a>
          </div>
        </div>

        <div>
          <h3 className="text-[9px] font-extrabold uppercase tracking-wide text-slate-700">
            Company
          </h3>
          <div className="mt-3 flex flex-col gap-2 text-[9px] text-slate-400">
            <a href="#about" className="hover:text-slate-700">About</a>
            <a href="#contact" className="hover:text-slate-700">Contact</a>
            <a href="#contact" className="hover:text-slate-700">Careers</a>
          </div>
        </div>

        <div id="contact">
          <h3 className="text-[9px] font-extrabold uppercase tracking-wide text-slate-700">
            Legal
          </h3>
          <div className="mt-3 flex flex-col gap-2 text-[9px] text-slate-400">
            <a href="#" className="hover:text-slate-700">Privacy Policy</a>
            <a href="#" className="hover:text-slate-700">Terms of Service</a>
          </div>
        </div>
      </div>

      <div id="projects" className="border-t border-slate-100">
        <div className="mx-auto flex max-w-[1080px] flex-col justify-between gap-3 px-5 py-5 text-[9px] text-slate-300 sm:flex-row lg:px-0">
          <span>© 2026 Dev Stack. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-600">Privacy</a>
            <a href="#" className="hover:text-slate-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
