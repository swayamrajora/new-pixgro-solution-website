import { Clock3, Headphones, IndianRupee } from 'lucide-react'

const trustItems = [
  { icon: Clock3, label: 'Clear Onboarding' },
  { icon: IndianRupee, label: 'Transparent Pricing' },
  { icon: Headphones, label: 'Responsive Support' },
]

function TrustSection() {
  return (
    <section className="-mt-10 bg-white pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-premium sm:p-8">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
          <div className="grid gap-7 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Built for modern remote work
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Flexible support for the work behind your growth
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {trustItems.map((item) => (
                <div
                  key={item.label}
                  className="group rounded-2xl border border-slate-100 bg-slate-50 p-4 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft"
                >
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-white text-blue-600 shadow-sm transition duration-300 group-hover:scale-110 group-hover:text-emerald-600">
                    <item.icon size={19} />
                  </div>
                  <p className="text-sm font-semibold text-slate-800">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSection
