import { Mail, MessageCircle } from 'lucide-react'
import { navLinks, services } from '../data/siteData'

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/assets/pixgro-logo.png"
              alt="PixGro logo"
              className="h-12 w-12 rounded-2xl object-cover"
            />
            <span className="font-semibold tracking-tight text-white">PixGro</span>
          </a>
          <p className="mt-5 max-w-sm leading-7 text-slate-300">
            Based in India virtual assistant, digital operations, website, and marketplace support
            for growing teams worldwide.
          </p>

          <div className="mt-6 space-y-3 text-sm text-slate-300">
            <a
              href="mailto:hello@pixgrosolution.com"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <Mail size={17} />
              hello@pixgrosolution.com
            </a>
            <a
              href="https://wa.me/919907504766"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Quick Links
          </h3>
          <div className="mt-5 grid gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Services
          </h3>
          <div className="mt-5 grid gap-3">
            <a
              href="#virtual-assistant"
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Virtual Assistant Support
            </a>
            {services.map((service) => (
              <a
                key={service.title}
                href="#services"
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Legal
          </h3>
          <div className="mt-5 grid gap-3">
            <a
              href="#privacy-policy"
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Terms
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-5 pt-6 text-sm text-slate-400 sm:px-6 lg:px-8">
        Copyright 2026 PixGro. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
