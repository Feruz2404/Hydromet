import { useState } from "react"
import { Globe, Mail, MapPin, Phone } from "lucide-react"
import { siteContent } from "../data/siteContent"
import { cn } from "../lib/utils"

function BrandMark(props: { sizeClassName: string }) {
  const [logoFailed, setLogoFailed] = useState(false)

  return (
    <div
      className={cn(
        "shrink-0 overflow-hidden rounded-2xl border border-sky/20 bg-white/[0.88] p-[6px] shadow-[0_14px_34px_rgba(0,0,0,0.25)]",
        props.sizeClassName,
      )}
      aria-hidden="true"
    >
      {!logoFailed ? (
        <img
          src="/logo.png"
          alt=""
          className="h-full w-full object-contain"
          draggable={false}
          decoding="async"
          loading="lazy"
          onError={() => setLogoFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-xl bg-white/90">
          <span className="font-serif text-[12px] text-navy">O‘zgidromet</span>
        </div>
      )}
    </div>
  )
}

export default function Footer() {
  const c = siteContent.contact

  return (
    <footer className="border-t border-sky/10 bg-[#051220] py-12 md:py-14">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <a href="#home" className="flex min-w-0 items-center gap-3">
              {/* 44px square container */}
              <BrandMark sizeClassName="h-11 w-11" />
              <div className="min-w-0 leading-tight">
                <div className="truncate font-serif text-base text-white">
                  {siteContent.brand.name}
                </div>
                <div className="truncate text-[10px] font-light uppercase tracking-[0.16em] text-ice/65">
                  {siteContent.brand.subtitle}
                </div>
              </div>
            </a>

            <p className="mt-4 max-w-md text-[13px] leading-6 text-ice/45">
              O‘zbekiston Respublikasi Gidrometeorologiya xizmati agentligi — ob-havo
              va iqlim kuzatishlarida ishonchli davlat tashkiloti.
            </p>

            <div className="mt-6 space-y-2 text-[13px] text-ice/50">
              <FooterInfoRow icon={<MapPin className="h-4 w-4" />}>
                {c.address}
              </FooterInfoRow>
              <FooterInfoRow icon={<Phone className="h-4 w-4" />}>
                <a className="hover:text-ice" href={`tel:${c.phone}`}>
                  {c.phoneDisplay}
                </a>
              </FooterInfoRow>
              <FooterInfoRow icon={<Mail className="h-4 w-4" />}>
                <a className="hover:text-ice" href={`mailto:${c.email}`}>
                  {c.email}
                </a>
              </FooterInfoRow>
              <FooterInfoRow icon={<Globe className="h-4 w-4" />}>
                <a
                  className="hover:text-ice"
                  href={c.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  gov.uz/oz/hydromet
                </a>
              </FooterInfoRow>
            </div>
          </div>

          <FooterCol
            title="Tezkor havolalar"
            className="lg:col-span-3"
            links={siteContent.footer.quickLinks}
          />

          <FooterCol
            title="Bo‘limlar"
            className="lg:col-span-2"
            links={siteContent.footer.sections}
          />

          <FooterCol
            title="Aloqa"
            className="lg:col-span-2"
            links={siteContent.footer.links}
          />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-sky/10 pt-6 text-center md:flex-row md:text-left">
          <div className="text-xs text-ice/30">{siteContent.footer.copyright}</div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {siteContent.footer.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                className="text-xs text-ice/30 hover:text-ice/60"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

type FooterLink = { label: string; href: string }

function FooterCol(props: {
  title: string
  links: ReadonlyArray<FooterLink>
  className?: string
}) {
  return (
    <div className={props.className}>
      <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-ice/45">
        {props.title}
      </div>
      <ul className="mt-4 space-y-2">
        {props.links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
              className="text-[13px] text-ice/45 hover:text-ice"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function FooterInfoRow(props: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2">
      <div className="mt-0.5 text-ice/35">{props.icon}</div>
      <div>{props.children}</div>
    </div>
  )
}
