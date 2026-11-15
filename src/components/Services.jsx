import { services } from '../data/siteData'
import SectionHeader from './SectionHeader'

function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Digital services that support the work behind your growth"
          description="Alongside virtual assistant support, PixGro helps with professional websites, marketplace onboarding, catalogs, ads, and ongoing account operations."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-premium"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-100/50 blur-2xl transition duration-500 group-hover:bg-emerald-100/70" />
              <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-slate-950 via-blue-700 to-emerald-500 text-white shadow-soft ring-1 ring-white/80 transition duration-500 group-hover:rotate-3 group-hover:scale-110">
                <service.icon size={26} strokeWidth={1.8} />
              </div>
              <h3 className="relative mt-6 text-xl font-semibold tracking-tight text-slate-950">
                {service.title}
              </h3>
              <p className="relative mt-4 leading-7 text-slate-600">{service.description}</p>
              <div className="relative mt-7 h-px w-16 bg-gradient-to-r from-blue-600 to-emerald-500 transition-all duration-500 group-hover:w-28" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
