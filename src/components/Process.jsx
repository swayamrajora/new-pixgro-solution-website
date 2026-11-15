import { processSteps } from '../data/siteData'
import SectionHeader from './SectionHeader'

function Process() {
  return (
    <section id="process" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How we work"
          title="A simple process that keeps support moving"
          description="Every engagement starts with clarity, then moves through a focused onboarding and a practical ongoing workflow."
        />

        <div className="relative mt-16">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-blue-200 via-emerald-200 to-transparent md:block lg:left-1/2" />

          <div className="space-y-6">
            {processSteps.map((item, index) => (
              <article
                key={item.title}
                className={`relative grid gap-6 lg:grid-cols-2 ${
                  index % 2 === 0 ? '' : 'lg:[&>div:first-child]:col-start-2'
                }`}
              >
                <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium">
                  <div className="mb-5 inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
                </div>

                <div className="absolute -left-1 top-8 hidden h-14 w-14 place-items-center rounded-full border-8 border-white bg-gradient-to-br from-blue-600 to-emerald-500 text-lg font-semibold text-white shadow-soft md:grid lg:left-1/2 lg:-translate-x-1/2">
                  {index + 1}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
