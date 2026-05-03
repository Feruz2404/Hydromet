import { useEffect, useMemo, useState } from "react"
import { siteContent } from "../data/siteContent"
import { cn } from "../lib/utils"

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const nav = useMemo(() => siteContent.nav, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-sky/15 bg-navy/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a
          href="#home"
          className="flex min-w-0 items-center gap-3 text-white"
          aria-label={siteContent.brand.name}
        >
          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-sky/20 bg-white/5 p-1">
            <img
              src="/logo.png"
              alt=""
              className="h-full w-full object-contain"
              draggable={false}
            />
          </div>
          <div className="min-w-0 leading-tight">
            <div className="truncate font-serif text-[18px] tracking-tight">
              {siteContent.brand.name}
            </div>
            <div className="truncate text-[10px] font-light uppercase tracking-[0.18em] text-ice/60">
              {siteContent.brand.subtitle}
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-[13.5px] text-ice/75 transition hover:bg-sky/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 rounded-md bg-sky px-4 py-2 text-[13.5px] font-medium text-navy transition hover:bg-sky/90"
          >
            Bog‘lanish
          </a>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-ice md:hidden"
          aria-label="Menyuni ochish"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <line x1="3" y1="6" x2="19" y2="6" />
            <line x1="3" y1="11" x2="19" y2="11" />
            <line x1="3" y1="16" x2="19" y2="16" />
          </svg>
        </button>
      </div>

      <div className={cn("md:hidden", open ? "block" : "hidden")}>
        <div className="fixed inset-x-0 top-16 z-50 flex flex-col gap-1 bg-navy px-5 pb-6 pt-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-sky/10 py-3 text-[16px] text-ice"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center rounded-md bg-sky px-4 py-3 font-medium text-navy"
          >
            Bog‘lanish
          </a>
        </div>
      </div>
    </header>
  )
}
