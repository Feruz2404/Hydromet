import { useEffect, useState } from "react"
import { cn } from "../lib/utils"

type Props = {
  /** Total time to keep loader visible (ms). */
  durationMs?: number
  onDone?: () => void
}

export default function SiteLoader(props: Props) {
  const [logoFailed, setLogoFailed] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  const durationMs = props.durationMs ?? 1500

  useEffect(() => {
    const t1 = window.setTimeout(() => setFadeOut(true), Math.max(900, durationMs - 350))
    const t2 = window.setTimeout(() => props.onDone?.(), durationMs)
    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [durationMs, props])

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-navy text-white",
        "transition-opacity duration-300",
        fadeOut ? "opacity-0" : "opacity-100",
      )}
      aria-label="Loading"
      role="status"
    >
      {/* Atmospheric background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(58,175,223,1)_1px,transparent_1px),linear-gradient(90deg,rgba(58,175,223,1)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-sky/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-20 h-[520px] w-[520px] rounded-full bg-primary/25 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-md flex-col items-center px-6 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-sky/20 bg-white/5 p-3 shadow-soft">
          {!logoFailed ? (
            <img
              src="/logo.png"
              alt="O‘zgidromet"
              className="h-full w-full object-contain"
              draggable={false}
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-sky/25 to-primary/10">
              <span className="font-serif text-base text-ice/90">O‘zgidromet</span>
            </div>
          )}
        </div>

        <div className="mt-5 font-serif text-[22px] tracking-tight text-white">
          O‘zgidromet
        </div>
        <div className="mt-1 text-[11px] font-light uppercase tracking-[0.18em] text-ice/60">
          Gidrometeorologiya xizmati agentligi
        </div>

        {/* Subtle loader line */}
        <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/3 animate-[hydroline_1.2s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-sky via-primary to-sky" />
        </div>

        <div className="mt-4 text-xs text-ice/55">
          Ma’lumotlar yuklanmoqda…
        </div>
      </div>
    </div>
  )
}
