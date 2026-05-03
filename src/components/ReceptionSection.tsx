import { siteContent } from "../data/siteContent"

export default function ReceptionSection() {
  const people = siteContent.leadership.people

  return (
    <section id="reception" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-10 md:mb-14">
          <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-primary">
            {siteContent.reception.eyebrow}
          </div>
          <h2 className="mt-2 font-serif text-[clamp(26px,4vw,40px)] leading-tight text-ink">
            {siteContent.reception.title}
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted">
            {siteContent.reception.lead}
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="min-w-[720px] w-full border-collapse">
            <thead className="bg-navy">
              <tr>
                {[
                  "F.I.Sh.",
                  "Lavozim",
                  "Qabul kuni",
                  "Vaqt",
                  "Telefon",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-5 py-4 text-left text-[11px] font-medium uppercase tracking-[0.16em] text-ice/60"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {people.map((p) => (
                <tr key={p.name} className="border-t border-border hover:bg-mist">
                  <td className="px-5 py-4 text-sm font-semibold text-ink">
                    {p.name}
                  </td>
                  <td className="px-5 py-4 text-[13px] text-muted">{p.role}</td>
                  <td className="px-5 py-4">
                    <span className="inline-flex rounded-md border border-primary/15 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                      {p.receptionDay}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm text-ink">{p.receptionTime}</td>
                  <td className="px-5 py-4 text-sm text-ink">{p.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-muted">
          Eslatma: jadval ma’lumotlari statik ko‘rinishda (rasmiy ma’lumotlar bilan
          keyinroq yangilanadi).
        </p>
      </div>
    </section>
  )
}
