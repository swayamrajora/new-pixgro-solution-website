import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navLinks } from '../data/siteData'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a href="#home" className="group flex items-center gap-3" onClick={closeMenu}>
          <img
            src="/assets/pixgro-logo.png"
            alt="PixGro logo"
            className="h-12 w-12 rounded-2xl object-cover shadow-soft transition-transform duration-300 group-hover:-translate-y-0.5"
          />
          <span className="text-base font-semibold tracking-tight text-slate-950">
            PixGro
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-premium transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 lg:inline-flex"
        >
          Book a Consultation
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-900 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-5 shadow-premium lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-slate-950 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
