import { ArrowRight, CheckCircle2, ClipboardCheck, MousePointer2 } from 'lucide-react'
import { heroHighlights } from '../data/siteData'

function HeroIllustration() {
  return (
    <div className="relative mx-auto max-w-lg lg:max-w-none">
      <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-emerald-300/30 blur-3xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 p-4 shadow-premium backdrop-blur">
        <div className="rounded-[1.5rem] border border-slate-100 bg-slate-950 p-4 text-white">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
              remote support workspace
            </span>
          </div>

          <div className="grid gap-4 pt-5 sm:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl bg-white p-5 text-slate-950">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                    Remote support
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                    Your workday, organized
                  </h3>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                  <MousePointer2 size={22} />
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="h-3 w-full rounded-full bg-slate-100" />
                <div className="h-3 w-4/5 rounded-full bg-slate-100" />
                <div className="h-3 w-2/3 rounded-full bg-slate-100" />
              </div>
              <a href="#contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
                Start a conversation <ArrowRight size={15} />
              </a>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-400/20 text-emerald-300">
                    <ClipboardCheck size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Dedicated remote support</p>
                    <p className="text-xs text-slate-400">India-based, globally connected</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="h-16 rounded-xl bg-white/10" />
                  <span className="h-16 rounded-xl bg-white/15" />
                  <span className="h-16 rounded-xl bg-white/10" />
                </div>
              </div>

              <div className="rounded-2xl bg-blue-500 p-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={22} />
                  <div>
                    <p className="text-sm font-semibold">Clear weekly priorities</p>
                    <p className="text-xs text-blue-100">Structured and visible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-40 lg:pb-28">
      <div className="absolute inset-0 -z-10 bg-hero-grid bg-[length:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
      <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            India-based virtual assistant & digital operations support
          </div>

          <h1 className="mt-7 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl">
            Delegate the busywork. Get your time back. Grow with PixGro.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Hand off admin, content, real estate coordination, research, and digital operations to capable remote support. Spend less time on repetitive tasks and more time building your business—or enjoying life outside work. Serving businesses across the US, UK, Australia, India and beyond.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white shadow-premium transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Book a consultation
              <ArrowRight size={18} className="transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#virtual-assistant"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-900 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700"
            >
              Explore VA support
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {heroHighlights.map((item) => (
              <div key={item.label} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-50 text-blue-600">
                  <item.icon size={18} />
                </span>
                {item.label}
              </div>
            ))}
          </div>
        </div>

        <HeroIllustration />
      </div>
    </section>
  )
}

export default Hero
