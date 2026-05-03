import { useEffect, useState } from "react"

type Props = {
  /** Total time to keep loader visible (ms). */
  durationMs?: number
  onDone?: () => void
}

export default function SiteLoader(props: Props) {
  const [logoFailed, setLogoFailed] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  const durationMs = props.durationMs ?? 1600

  useEffect(() => {
    const t1 = window.setTimeout(
      () => setFadeOut(true),
      Math.max(950, durationMs - 320),
    )
    const t2 = window.setTimeout(() => props.onDone?.(), durationMs)
    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [durationMs, props])

  return (
    <div
      className={
        "fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-navy text-white transition-opacity duration-300 " +
        (fadeOut ? "opacity-0" : "opacity-100")
      }
      aria-label="Loading"
      role="status"
    >
      {/* Calm atmospheric background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_20%_20%,rgba(58,175,223,0.20),transparent_55%),radial-gradient(circle_at_75%_30%,rgba(14,95,163,0.30),transparent_60%),linear-gradient(rgba(58,175,223,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(58,175,223,0.35)_1px,transparent_1px)] [background-size:auto,auto,72px_72px,72px_72px]" />

      <div className="relative mx-auto flex w-full max-w-md flex-col items-center px-6 text-center">
        <div className="group flex h-24 w-24 items-center justify-center rounded-[28px] border border-sky/20 bg-white/[0.06] p-3 shadow-[0_22px_55px_rgba(0,0,0,0.35)]">
          {!logoFailed ? (
            <img
              src="/logo.png"
              alt="O‘zgidromet"
              className="h-full w-full object-contain"
              draggable={false}
              decoding="async"
              loading="eager"
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-sky/20 to-primary/10">
              <span className="font-serif text-sm text-ice/90">O‘zgidromet</span>
            </div>
          )}
        </div>

        <div className="mt-5 font-serif text-[22px] tracking-tight text-white">
          O‘zgidromet
        </div>
        <div className="mt-1 text-[11px] font-light uppercase tracking-[0.18em] text-ice/60">
          Gidrometeorologiya xizmati agentligi
        </div>

        {/* Premium minimal progress */}
        <div className="mt-8 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[40%] animate-[hydroline_1.25s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-transparent via-sky to-transparent" />
        </div>

        <div className="mt-4 text-xs text-ice/55">Interfeys tayyorlanmoqda…</div>
      </div>
    </div>
  )
}
