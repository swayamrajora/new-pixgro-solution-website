import { MessageCircle } from 'lucide-react'

function CTA() {
  return (
    <section className="bg-slate-950 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-12 shadow-premium sm:px-10 lg:px-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
          <div className="absolute -bottom-24 left-8 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Free consultation
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Ready to delegate with confidence?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Tell us which tasks are taking too much of your time. We will learn
                about your workflow and suggest a practical support scope—without pressure.
              </p>
            </div>

            <a
              href="https://wa.me/919907504766"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-100"
            >
              <MessageCircle size={18} />
              Start a conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
