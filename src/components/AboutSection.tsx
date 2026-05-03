import { siteContent } from "../data/siteContent"

export default function AboutSection() {
  return (
    <section id="about" className="bg-mist py-12 md:py-16 lg:py-20">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-14">
        <div>
          <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-primary">
            {siteContent.about.eyebrow}
          </div>
          <h2 className="mt-2 font-serif text-[clamp(24px,3.4vw,38px)] leading-tight text-ink">
            {siteContent.about.title}
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-7 text-muted">
            {siteContent.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {siteContent.about.pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-white p-5 shadow-soft"
              >
                <div className="text-sm font-semibold text-ink">{p.title}</div>
                <div className="mt-1 text-[13px] leading-6 text-muted">
                  {p.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-navy p-7 shadow-soft md:p-9">
          <div className="space-y-6">
            <Metric label="Prognoz" value="Yuqori aniqlik" hint="Qisqa muddat" />
            <Metric label="Kuzatuv" value="Uzluksiz" hint="24/7 monitoring" />
            <Metric label="Ogohlantirish" value="Tezkor" hint="Xavfli hodisalar" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Metric(props: { label: string; value: string; hint: string }) {
  return (
    <div>
      <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-ice/50">
        {props.label}
      </div>
      <div className="mt-1 flex items-baseline gap-2">
        <div className="font-serif text-3xl text-white">{props.value}</div>
        <div className="text-xs text-ice/50">{props.hint}</div>
      </div>
      <div className="mt-3 h-1.5 w-full rounded-full bg-sky/15">
        <div className="h-1.5 w-2/3 rounded-full bg-gradient-to-r from-primary to-sky" />
      </div>
    </div>
  )
}
