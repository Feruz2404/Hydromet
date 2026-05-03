import { Globe, Mail, MapPin, Phone } from "lucide-react"
import { siteContent } from "../data/siteContent"
import { initials } from "../lib/utils"

export default function LeadershipSection() {
  const people = siteContent.leadership.people
  const c = siteContent.contact

  return (
    <section id="leadership" className="bg-mist py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-8 md:mb-10">
          <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-primary">
            {siteContent.leadership.eyebrow}
          </div>
          <h2 className="mt-2 font-serif text-[clamp(24px,3.4vw,38px)] leading-tight text-ink">
            {siteContent.leadership.title}
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted">
            {siteContent.leadership.lead}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {people.map((p) => (
            <div
              key={p.name + p.role}
              className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft"
            >
              <div className="bg-gradient-to-br from-navy to-deep p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-sky/25 bg-sky/15 font-serif text-xl text-sky">
                    {initials(p.name)}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[15px] font-semibold leading-snug text-white">
                      {p.name}
                    </div>
                    <div className="mt-1 text-[12px] leading-5 text-ice/70">
                      {p.role}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-3 text-[13px] text-muted">
                  <Row
                    icon={<Phone className="h-4 w-4" />}
                    label="Telefon"
                    value={p.phone}
                    href={`tel:${p.phone}`}
                  />
                  <Row
                    icon={<Mail className="h-4 w-4" />}
                    label="Email"
                    value={p.email || "Ma’lumot qo‘shiladi"}
                    href={p.email ? `mailto:${p.email}` : undefined}
                  />
                  <Row
                    icon={<Globe className="h-4 w-4" />}
                    label="Veb-sayt"
                    value="gov.uz/oz/hydromet"
                    href={c.website}
                  />
                  <Row
                    icon={<MapPin className="h-4 w-4" />}
                    label="Manzil"
                    value={c.address}
                  />
                </div>

                <div className="mt-5 border-t border-border pt-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-md border border-primary/15 bg-primary/5 px-3 py-1 text-[11px] font-medium text-primary">
                      Qabul: {p.receptionDay}
                    </span>
                    <span className="text-[12px] text-muted">{p.receptionTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Row(props: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}) {
  return (
    <div className="grid grid-cols-[16px_88px_1fr] items-start gap-2">
      <div className="mt-0.5 text-muted/70">{props.icon}</div>
      <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted/80">
        {props.label}
      </div>
      {props.href ? (
        <a className="text-right text-sky hover:underline" href={props.href}>
          {props.value}
        </a>
      ) : (
        <div className="text-right">{props.value}</div>
      )}
    </div>
  )
}
