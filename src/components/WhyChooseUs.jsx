import { reasons } from '../data/siteData'
import SectionHeader from './SectionHeader'

function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why choose us"
          title="A remote partner that makes the work feel lighter"
          description="Good support is clear, dependable, and easy to work with. We bring disciplined execution and transparent communication to every engagement."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-3xl border border-white bg-white/80 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-premium"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-slate-950 text-white">
                  <reason.icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                    {reason.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{reason.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
