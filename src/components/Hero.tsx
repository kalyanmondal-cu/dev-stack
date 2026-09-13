export function Hero() {
  return (
    <section id="home" className="scroll-mt-20">
      <div className="mx-auto grid max-w-[1080px] items-center gap-10 px-5 pb-12 pt-14 sm:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-4 lg:pb-16 lg:pt-20">
        <div>
          <h1 className="max-w-[620px] text-[42px] font-extrabold leading-[0.98] tracking-[-0.045em] text-slate-900 sm:text-5xl lg:text-[48px]">
            Build Your Ideal
            <span className="block gradient-text">Development Stack</span>
          </h1>

          <p className="mt-6 max-w-[570px] text-[15px] leading-6 text-slate-500 sm:text-base">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="rounded-md brand-button px-5 py-3 text-[12px] font-bold transition"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="rounded-md border border-slate-200 bg-white px-6 py-3 text-[12px] font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src="/assets/hero-stack.png"
            alt="Layered futuristic development stack illustration"
            className="hero-art w-[280px] max-w-full sm:w-[330px] lg:w-[365px]"
          />
        </div>
      </div>
    </section>
  );
}
