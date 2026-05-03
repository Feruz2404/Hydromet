import { siteContent } from "../data/siteContent"

export default function Footer() {
  return (
    <footer className="border-t border-sky/10 bg-[#051220] py-14">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#home" className="flex min-w-0 items-center gap-3">
              <div className="h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-sky/20 bg-white/5 p-1">
                <img
                  src="/logo.png"
                  alt=""
                  className="h-full w-full object-contain"
                  draggable={false}
                />
              </div>
              <div className="min-w-0 leading-tight">
                <div className="truncate font-serif text-base text-white">
                  {siteContent.brand.name}
                </div>
                <div className="truncate text-[10px] font-light uppercase tracking-[0.18em] text-ice/60">
                  {siteContent.brand.subtitle}
                </div>
              </div>
            </a>
            <p className="mt-4 max-w-md text-[13px] leading-6 text-ice/45">
              O‘zbekiston Respublikasi Gidrometeorologiya xizmati agentligi — ob-havo
              va iqlim kuzatishlarida ishonchli davlat tashkiloti.
            </p>
          </div>

          <FooterCol
            title="Sahifalar"
            links={[
              { label: "Agentlik", href: "#about" },
              { label: "Xizmatlar", href: "#services" },
              { label: "Rahbariyat", href: "#leadership" },
              { label: "Qabul", href: "#reception" },
            ]}
          />

          <FooterCol title="Aloqa" links={siteContent.footer.links} />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-sky/10 pt-6 text-center md:flex-row md:text-left">
          <div className="text-xs text-ice/30">{siteContent.footer.copyright}</div>
          <div className="flex gap-5">
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

function FooterCol(props: { title: string; links: Array<{ label: string; href: string }> }) {
  return (
    <div>
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
