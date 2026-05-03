import { siteContent } from "../data/siteContent"

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy pt-16">
      {/* Background composition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_65%_at_70%_35%,rgba(14,95,163,0.40)_0%,transparent_70%),radial-gradient(ellipse_55%_55%_at_15%_80%,rgba(58,175,223,0.14)_0%,transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(58,175,223,1)_1px,transparent_1px),linear-gradient(90deg,rgba(58,175,223,1)_1px,transparent_1px)] [background-size:64px_64px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-24 h-[420px] w-[420px] rounded-full bg-sky/18 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-24 h-[520px] w-[520px] rounded-full bg-primary/18 blur-3xl"
      />
      {/* subtle radar sweep */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_70%_30%,rgba(58,175,223,0.30),transparent_55%)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="pt-2">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky/25 bg-white/5 px-4 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-sky shadow-[0_0_18px_rgba(58,175,223,0.65)]" />
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-sky">
                {siteContent.hero.eyebrow}
              </span>
            </div>

            <h1 className="font-serif text-[clamp(34px,4.6vw,58px)] leading-[1.05] tracking-tight text-white">
              {siteContent.hero.title}
            </h1>

            <p className="mt-4 max-w-xl text-[15.5px] leading-7 text-ice/75 md:text-[16.5px]">
              {siteContent.hero.lead}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {siteContent.hero.ctas.map((cta) => (
                <a
                  key={cta.href}
                  href={cta.href}
                  className={
                    cta.variant === "primary"
                      ? "inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky to-[#59c9f0] px-6 py-3 text-sm font-semibold text-navy shadow-[0_18px_40px_rgba(58,175,223,0.28)] transition hover:brightness-105"
                      : "inline-flex items-center justify-center rounded-xl border border-ice/25 bg-white/0 px-6 py-3 text-sm font-semibold text-ice transition hover:bg-white/5"
                  }
                >
                  {cta.label}
                </a>
              ))}
            </div>
          </div>

          {/* Refined official directions card */}
          <div className="rounded-3xl border border-sky/20 bg-white/[0.07] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur md:p-7">
            <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-ice/65">
              {siteContent.hero.infoCard.title}
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {siteContent.hero.infoCard.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-sky/15 bg-navy/35 p-4"
                >
                  <div className="text-sm font-semibold text-white">
                    {item.title}
                  </div>
                  <div className="mt-1 text-[13px] leading-6 text-ice/70">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 text-xs leading-5 text-ice/55">
              Rasmiy yo‘nalishlar bo‘yicha qisqa ma’lumot.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
