import { siteContent } from "../data/siteContent"

export default function ContactSection() {
  const c = siteContent.contact

  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-16 md:py-24">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-sky">
              {c.eyebrow}
            </div>
            <h2 className="mt-2 font-serif text-[clamp(26px,4vw,40px)] leading-tight text-white">
              {c.title}
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-7 text-ice/70">
              {c.lead}
            </p>

            <div className="mt-8 space-y-5">
              <Row label="Manzil" value={c.address} />
              <Row label="Telefon" value={c.phoneDisplay} href={`tel:${c.phone}`} />
              <Row label="Email" value={c.email} href={`mailto:${c.email}`} />
              <Row label="Veb-sayt" value={c.website} href={c.website} />

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={c.mapOpenUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-sky px-5 py-3 text-sm font-medium text-navy transition hover:bg-sky/90"
                >
                  Xaritada ochish
                </a>
                <a
                  href={c.mapDirUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-ice/25 bg-transparent px-5 py-3 text-sm font-medium text-ice transition hover:bg-white/5"
                >
                  Yo‘nalish olish
                </a>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-sky/15 bg-white/5 shadow-soft">
            <div className="aspect-[16/10] w-full">
              <iframe
                title="O‘zgidromet manzil xaritasi"
                src={c.mapEmbedUrl}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="border-t border-sky/10 p-4 text-xs text-ice/55">
              {c.address}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Row(props: { label: string; value: string; href?: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-24 shrink-0 text-[11px] font-medium uppercase tracking-[0.16em] text-ice/40">
        {props.label}
      </div>
      {props.href ? (
        <a className="text-sm text-sky hover:underline" href={props.href}>
          {props.value}
        </a>
      ) : (
        <div className="text-sm text-ice">{props.value}</div>
      )}
    </div>
  )
}
