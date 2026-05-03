import { siteContent } from "../data/siteContent"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy pt-16"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(14,95,163,0.35)_0%,transparent_70%),radial-gradient(ellipse_50%_50%_at_20%_80%,rgba(58,175,223,0.12)_0%,transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(58,175,223,1)_1px,transparent_1px),linear-gradient(90deg,rgba(58,175,223,1)_1px,transparent_1px)] [background-size:60px_60px]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky/25 bg-sky/10 px-4 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-sky" />
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-sky">
                {siteContent.hero.eyebrow}
              </span>
            </div>
            <h1 className="font-serif text-[clamp(34px,5vw,58px)] leading-[1.05] tracking-tight text-white">
              {siteContent.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-[15.5px] leading-7 text-ice/70 md:text-[17px]">
              {siteContent.hero.lead}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {siteContent.hero.ctas.map((cta) => (
                <a
                  key={cta.href}
                  href={cta.href}
                  className={
                    cta.variant === "primary"
                      ? "inline-flex items-center justify-center rounded-lg bg-sky px-6 py-3 text-sm font-medium text-navy transition hover:bg-sky/90"
                      : "inline-flex items-center justify-center rounded-lg border border-ice/25 bg-transparent px-6 py-3 text-sm font-medium text-ice transition hover:bg-white/5"
                  }
                >
                  {cta.label}
                </a>
              ))}
            </div>
          </div>

          {/* Official info card (replaces fake stats) */}
          <div className="rounded-2xl border border-sky/15 bg-white/5 p-6 shadow-soft backdrop-blur md:p-8">
            <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-ice/50">
              {siteContent.hero.infoCard.title}
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {siteContent.hero.infoCard.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-sky/10 bg-navy/40 p-4"
                >
                  <div className="text-sm font-medium text-white">
                    {item.title}
                  </div>
                  <div className="mt-1 text-[13px] leading-6 text-ice/65">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-xs leading-5 text-ice/45">
              Ma’lumotlar rasmiy kuzatuv va monitoring yo‘nalishlariga asoslanadi.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
