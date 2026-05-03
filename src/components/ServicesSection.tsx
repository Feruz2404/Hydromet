import {
  AlertTriangle,
  CloudSun,
  Leaf,
  LineChart,
  Plane,
  Radar,
  Sprout,
  Waves,
} from "lucide-react"
import { siteContent } from "../data/siteContent"

const iconsByTitle: Record<string, React.ComponentType<{ className?: string }>> = {
  Meteorologiya: CloudSun,
  Gidrologiya: Waves,
  Agrometeorologiya: Sprout,
  "Iqlim monitoringi": LineChart,
  "Atrof-muhit monitoringi": Leaf,
  "Aviatsiya meteorologiyasi": Plane,
  "Raqamli bashorat": Radar,
  Ogohlantirishlar: AlertTriangle,
}

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-8 md:mb-10">
          <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-primary">
            {siteContent.services.eyebrow}
          </div>
          <h2 className="mt-2 font-serif text-[clamp(24px,3.4vw,38px)] leading-tight text-ink">
            {siteContent.services.title}
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted">
            {siteContent.services.lead}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {siteContent.services.items.map((s) => {
            const Icon = iconsByTitle[s.title] ?? CloudSun
            return (
              <div
                key={s.title}
                className="group rounded-2xl border border-border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-primary/25"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-sky/15">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="mt-4 text-[15px] font-semibold text-ink">
                  {s.title}
                </div>
                <div className="mt-2 text-[13px] leading-6 text-muted">
                  {s.description}
                </div>
                <div className="mt-5 h-0.5 w-0 bg-gradient-to-r from-primary to-sky transition-all group-hover:w-full" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
