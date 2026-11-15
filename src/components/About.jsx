import { ArrowRight, BriefcaseBusiness, Clock3, HeartHandshake, Layers3 } from 'lucide-react'

const strengths = [
  { icon: Layers3, title: 'Cross-industry skills', text: 'Support across administration, content, property workflows, research, eCommerce and digital operations.' },
  { icon: Clock3, title: 'A focused handover', text: 'We learn your tools, priorities and preferred way of working before taking on recurring tasks.' },
  { icon: HeartHandshake, title: 'More freedom for you', text: 'Use the time you get back to meet clients, focus on growth, travel, rest or simply switch off.' },
]

export default function About() {
  return <section id="about" className="scroll-mt-24 bg-slate-950 py-20 text-white sm:py-24">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
      <div>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-emerald-300"><BriefcaseBusiness size={15}/> About PixGro</div>
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Your business keeps moving. <span className="text-emerald-300">You get your time back.</span></h2>
        <p className="mt-6 text-lg leading-8 text-slate-300">At PixGro Digital Solutions, we believe business owners shouldn't have to do everything themselves. Our team brings experience and practical skills across multiple sectors—from administrative operations and real estate support to digital marketing, research, content and eCommerce.</p>
        <p className="mt-4 leading-8 text-slate-300">We start by spending time understanding how you work: your tools, routines, standards and priorities. Once the handover is clear, our virtual assistants can take care of agreed day-to-day responsibilities while you focus on bigger decisions—or take a well-earned break. You stay informed, without having to manage every small task.</p>
        <p className="mt-4 leading-8 text-slate-300">Whether you need just a few hours of help or ongoing support, we aim to make delegation simple, flexible and personal. Every engagement begins with a conversation about the tasks and skills you need.</p>
        <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300">Let's discuss your workload <ArrowRight size={18}/></a>
      </div>
      <div className="grid gap-4">{strengths.map(({icon: Icon,title,text})=><div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-7"><Icon className="mb-4 text-emerald-300" size={28}/><h3 className="text-xl font-semibold">{title}</h3><p className="mt-2 leading-7 text-slate-300">{text}</p></div>)}</div>
    </div>
  </section>
}
