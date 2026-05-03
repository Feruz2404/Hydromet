import { siteContent } from "../data/siteContent"

export default function NewsSection() {
  const n = siteContent.news

  return (
    <section id="news" className="bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-8 md:mb-10">
          <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-primary">
            {n.eyebrow}
          </div>
          <h2 className="mt-2 font-serif text-[clamp(24px,3.4vw,38px)] leading-tight text-ink">
            {n.title}
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted">
            {n.lead}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {n.items.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-primary/25"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11px] font-medium text-primary">
                  {item.tag}
                </span>
                <span className="text-xs text-muted">{item.date}</span>
              </div>
              <div className="mt-4 text-[15px] font-semibold text-ink">
                {item.title}
              </div>
              <p className="mt-2 text-[13px] leading-6 text-muted">
                {item.description}
              </p>
              <div className="mt-5 h-0.5 w-0 bg-gradient-to-r from-primary to-sky transition-all group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
