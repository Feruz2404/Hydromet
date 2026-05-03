import { siteContent } from "../data/siteContent"

export default function NewsSection() {
  const n = siteContent.news

  return (
    <section id="news" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-10 md:mb-14">
          <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-primary">
            {n.eyebrow}
          </div>
          <h2 className="mt-2 font-serif text-[clamp(26px,4vw,40px)] leading-tight text-ink">
            {n.title}
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted">
            {n.lead}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {n.items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-white p-6 shadow-soft"
            >
              <div className="text-[15px] font-semibold text-ink">{item.title}</div>
              {item.date ? (
                <div className="mt-1 text-xs text-muted">{item.date}</div>
              ) : null}
              <p className="mt-3 text-[13px] leading-6 text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
