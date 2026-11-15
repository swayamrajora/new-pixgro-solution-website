import { ArrowRight, CheckCircle2, Clock3, Globe2, Handshake } from 'lucide-react'
import { vaServices } from '../data/siteData'
import SectionHeader from './SectionHeader'

const supportPrinciples = [
  {
    icon: Globe2,
    title: 'Remote by design',
    text: 'India-based support for US and international teams, with communication and handoffs agreed up front.',
  },
  {
    icon: Clock3,
    title: 'Built around your workflow',
    text: 'We work with your tools, priorities, and agreed availability—without adding unnecessary process.',
  },
  {
    icon: Handshake,
    title: 'A practical partnership',
    text: 'Start with a focused scope, clear responsibilities, and a delivery model designed to be cost-efficient.',
  },
]

function VirtualAssistant() {
  return (
    <section id="virtual-assistant" className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="absolute -right-24 bottom-12 h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Virtual assistant support"
          title="More focused time for your highest-value work"
          description="For US-based founders, fund managers, agencies, creators, and lean teams that need dependable help behind the scenes—without the overhead of a full-time local hire."
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

          <aside className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-premium sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">A clear way to delegate</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight">Reliable support, without the extra overhead</h3>
            <p className="mt-5 leading-8 text-slate-300">PixGro combines a thoughtful remote working style with a cost-conscious India-based delivery model. We focus on well-defined work, responsive communication, and systems your team can trust.</p>
            <div className="mt-8 space-y-5">
              {supportPrinciples.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-emerald-300"><item.icon size={21} /></span>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#contact" className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-100">Discuss your support needs <ArrowRight size={17} /></a>
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
