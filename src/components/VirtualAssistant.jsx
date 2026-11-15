import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { vaServices } from '../data/siteData'
import SectionHeader from './SectionHeader'

function VirtualAssistant() {
  return (
    <section id="virtual-assistant" className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="absolute -right-24 bottom-12 h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Virtual assistant support"
          title="More focused time for your highest-value work"
          description="For US founders, fund managers, agencies, creators, and lean teams that need dependable help behind the scenes. without the overhead of a full time local hire."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="grid gap-5 sm:grid-cols-2">
            {vaServices.map((service) => (
              <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-slate-950 via-blue-700 to-emerald-500 text-white shadow-soft">
                  <service.icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>

          <aside className="self-start rounded-3xl bg-slate-950 p-6 text-white shadow-premium sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300">A simpler way to delegate</p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight">Reliable support. More time for you.</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">Hand over recurring tasks to a skilled remote team. We agree on the work, keep communication clear, and help you focus on what matters most.</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <span className="flex items-center gap-2 text-sm text-slate-200"><CheckCircle2 size={16} className="shrink-0 text-emerald-300" />Clear responsibilities</span>
              <span className="flex items-center gap-2 text-sm text-slate-200"><CheckCircle2 size={16} className="shrink-0 text-emerald-300" />Flexible support hours</span>
            </div>
            <a href="#contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-100">Discuss your support needs <ArrowRight size={17} /></a>
          </aside>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-slate-700">
          {['Executive workflows', 'Agency delivery', 'Content operations', 'Research coordination'].map((item) => (
            <span key={item} className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-emerald-600" />{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VirtualAssistant
