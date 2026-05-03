import { useCallback, useEffect, useMemo, useState } from "react"
import { degreesToCompass, formatLocalTime } from "../lib/utils"
import { weatherLabelFromCode } from "../lib/weatherCodes"

type OpenMeteoResponse = {
  current: {
    time: string
    temperature_2m: number
    relative_humidity_2m: number
    apparent_temperature: number
    weather_code: number
    wind_speed_10m: number
    wind_direction_10m: number
    pressure_msl: number
  }
}

const endpoint =
  "https://api.open-meteo.com/v1/forecast?latitude=41.2995&longitude=69.2401&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,pressure_msl&timezone=Asia%2FTashkent"

export default function WeatherSection() {
  const [data, setData] = useState<OpenMeteoResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fetchedAt, setFetchedAt] = useState<string | null>(null)

  const fetchWeather = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const res = await fetch(endpoint)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const json = (await res.json()) as OpenMeteoResponse
      setData(json)
      setFetchedAt(new Date().toISOString())
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Unknown error"
      setError(msg)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void fetchWeather()
  }, [fetchWeather])

  const current = data?.current

  const condition = useMemo(() => {
    return weatherLabelFromCode(current?.weather_code)
  }, [current?.weather_code])

  const updatedTime = useMemo(() => {
    if (!current?.time) return "—"
    return formatLocalTime(current.time, "Asia/Tashkent")
  }, [current?.time])

  const refreshedTime = useMemo(() => {
    if (!fetchedAt) return null
    return formatLocalTime(fetchedAt, "Asia/Tashkent")
  }, [fetchedAt])

  return (
    <section id="weather" className="bg-mist py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-10 md:mb-14">
          <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-primary">
            Toshkent
          </div>
          <h2 className="mt-2 font-serif text-[clamp(26px,4vw,40px)] leading-tight text-ink">
            Ob-havo sharoiti
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted">
            Open‑Meteo manbasidan joriy ob-havo ko‘rsatkichlari.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-white p-5 shadow-soft md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                Yangilangan vaqt
              </div>
              <div className="mt-1 text-sm font-medium text-ink">
                {updatedTime}
              </div>
              {refreshedTime ? (
                <div className="mt-1 text-xs text-muted">
                  Oxirgi so‘rov: {refreshedTime}
                </div>
              ) : null}
            </div>
            <button
              type="button"
              onClick={() => void fetchWeather()}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary/90 disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Yuklanmoqda…" : "Yangilash"}
            </button>
          </div>

          {error ? (
            <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
              Xatolik: {error}
            </div>
          ) : null}

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-mist p-5 md:p-6">
              <div className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                Joriy holat
              </div>
              <div className="mt-3 flex items-end gap-3">
                <div className="font-serif text-6xl leading-none text-ink">
                  {current ? Math.round(current.temperature_2m) : "—"}
                  <span className="ml-1 align-top text-2xl text-primary">°C</span>
                </div>
                <div className="pb-2">
                  <div className="text-sm font-medium text-ink">Toshkent</div>
                  <div className="mt-1 text-sm text-primary">{condition}</div>
                  <div className="mt-1 text-xs text-muted">
                    His etiladi: {current ? Math.round(current.apparent_temperature) : "—"}
                    °C
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Metric
                label="Namlik"
                value={
                  current ? `${Math.round(current.relative_humidity_2m)}%` : "—"
                }
              />
              <Metric
                label="Shamol"
                value={
                  current ? `${Math.round(current.wind_speed_10m)} km/soat` : "—"
                }
              />
              <Metric
                label="Shamol yo‘nalishi"
                value={
                  current
                    ? `${Math.round(current.wind_direction_10m)}° (${degreesToCompass(
                        current.wind_direction_10m,
                      )})`
                    : "—"
                }
              />
              <Metric
                label="Bosim"
                value={current ? `${Math.round(current.pressure_msl)} hPa` : "—"}
              />
            </div>
          </div>

          {loading && !data ? (
            <div className="mt-5 text-sm text-muted">Ma’lumot yuklanmoqda…</div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

function Metric(props: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-4 md:p-5">
      <div className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
        {props.label}
      </div>
      <div className="mt-1 text-base font-semibold text-ink">{props.value}</div>
    </div>
  )
}
