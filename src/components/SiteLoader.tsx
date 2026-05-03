import { useEffect, useState } from "react"

type Props = {
  /** Total time to keep loader visible (ms). */
  durationMs?: number
  onDone?: () => void
}

export default function SiteLoader(props: Props) {
  const [logoFailed, setLogoFailed] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  const durationMs = props.durationMs ?? 1650

  useEffect(() => {
    const t1 = window.setTimeout(
      () => setFadeOut(true),
      Math.max(1000, durationMs - 260),
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
        "fixed inset-0 z-[100] grid place-items-center overflow-hidden text-white transition-opacity duration-300 " +
        (fadeOut ? "opacity-0" : "opacity-100")
      }
      aria-label="Loading"
      role="status"
    >
      {/* Premium hydromet background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#061a2d] to-deep" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(58,175,223,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(58,175,223,0.55)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute -left-24 top-10 h-[520px] w-[520px] rounded-full bg-sky/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -bottom-28 h-[620px] w-[620px] rounded-full bg-primary/30 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-md flex-col items-center px-6 text-center">
        {/* Orbit ring wrapper */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-[-16px] rounded-full border border-sky/25 opacity-70" />
          <div className="pointer-events-none absolute inset-[-26px] rounded-full border border-sky/10 opacity-60" />

          <div className="pointer-events-none absolute inset-[-30px] animate-[orbit_1.6s_linear_infinite] rounded-full">
            <div className="absolute left-1/2 top-[-6px] h-3 w-3 -translate-x-1/2 rounded-full bg-sky shadow-[0_0_24px_rgba(58,175,223,0.9)]" />
            <div className="absolute left-1/2 bottom-[-6px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-primary/90 shadow-[0_0_18px_rgba(14,95,163,0.75)]" />
          </div>

          {/* Logo tile */}
          <div className="flex h-28 w-28 items-center justify-center rounded-2xl border border-sky/25 bg-white/10 p-[6px] shadow-[0_28px_70px_rgba(0,0,0,0.45)] backdrop-blur">
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
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-white/10">
                <span className="font-serif text-sm text-ice/90">O‘zgidromet</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 font-serif text-[22px] tracking-tight text-white">
          O‘zgidromet
        </div>
        <div className="mt-1 text-[11px] font-light uppercase tracking-[0.18em] text-ice/65">
          Gidrometeorologiya xizmati agentligi
        </div>

        {/* Progress */}
        <div className="mt-8 h-[3px] w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[40%] animate-[hydroline_1.35s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-transparent via-sky to-transparent" />
          <div className="-mt-[3px] h-[3px] w-[35%] animate-[shimmer_1.35s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>

        <div className="mt-4 text-xs text-ice/60">Interfeys tayyorlanmoqda…</div>
      </div>
    </div>
  )
}
