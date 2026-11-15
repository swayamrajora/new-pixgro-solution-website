import { MessageCircle } from 'lucide-react'

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919907504766"
      target="_blank"
      rel="noreferrer"
      aria-label="Contact PixGro on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_44px_-16px_rgba(37,211,102,0.9)] transition duration-300 hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-200 sm:h-16 sm:w-16"
    >
      <MessageCircle size={28} />
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-30 blur-lg" />
    </a>
  )
}

export default FloatingWhatsApp
