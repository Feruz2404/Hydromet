export type WeatherCodeInfo = {
  label: string
}

// Minimal mapping for Open‑Meteo weather codes
// https://open-meteo.com/en/docs
export const weatherCodes: Record<number, WeatherCodeInfo> = {
  0: { label: "Ochiq" },
  1: { label: "Asosan ochiq" },
  2: { label: "Qisman bulutli" },
  3: { label: "Bulutli" },
  45: { label: "Tuman" },
  48: { label: "Muzli tuman" },
  51: { label: "Yengil mayda yomg‘ir" },
  53: { label: "Mayda yomg‘ir" },
  55: { label: "Kuchliroq mayda yomg‘ir" },
  56: { label: "Yengil muzli yomg‘ir" },
  57: { label: "Muzli yomg‘ir" },
  61: { label: "Yengil yomg‘ir" },
  63: { label: "Yomg‘ir" },
  65: { label: "Kuchli yomg‘ir" },
  66: { label: "Yengil muzli yomg‘ir" },
  67: { label: "Kuchli muzli yomg‘ir" },
  71: { label: "Yengil qor" },
  73: { label: "Qor" },
  75: { label: "Kuchli qor" },
  77: { label: "Qor donachalari" },
  80: { label: "Yengil jala" },
  81: { label: "Jala" },
  82: { label: "Kuchli jala" },
  85: { label: "Yengil qor jala" },
  86: { label: "Qor jala" },
  95: { label: "Momaqaldiroq" },
  96: { label: "Momaqaldiroq (do‘l bilan)" },
  99: { label: "Kuchli momaqaldiroq (do‘l bilan)" },
}

export function weatherLabelFromCode(code: number | null | undefined): string {
  if (code == null) return "—"
  return weatherCodes[code]?.label ?? `Kod: ${code}`
}
