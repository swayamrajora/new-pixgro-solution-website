import emailjs from '@emailjs/browser'
import {
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'
import { useState } from 'react'
import SectionHeader from './SectionHeader'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  country: '',
  consent: false,
  business: '',
  message: '',
}

const fieldLabels = {
  name: 'Name',
  email: 'Email',
  service: 'Service',
  business: 'Business Name',
  message: 'Message',
}

function buildWhatsAppMessage(form) {
  return `Hello PixGro,

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone || "Not provided"}
Country: ${form.country || "Not provided"}
Service: ${form.service}
Business: ${form.business}
Requirement: ${form.message}`
}

function buildEmailBody(form) {
  return `Hello PixGro,

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone || "Not provided"}
Country: ${form.country || "Not provided"}
Service: ${form.service}
Business: ${form.business}
Requirement: ${form.message}`
}

function validateForm(form) {
  const errors = {}

  Object.entries(fieldLabels).forEach(([field, label]) => {
    if (!form[field].trim()) {
      errors[field] = `${label} is required.`
    }
  })

  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (form.phone && !/^[+()\d\s-]{7,}$/.test(form.phone)) {
    errors.phone = 'Please enter a valid phone number.'
  }

  if (!form.consent) errors.consent = 'Please agree to the privacy notice.'
  return errors
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [sendingMethod, setSendingMethod] = useState(null)

  const isSending = Boolean(sendingMethod)

  const updateField = (event) => {
    const { name, value } = event.target

    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
    setStatus(null)
  }

  const validateBeforeAction = () => {
    const nextErrors = validateForm(form)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus({
        type: 'error',
        message: 'Please complete all required fields before sending.',
      })
      return false
    }

    return true
  }

  const handleWhatsApp = () => {
    if (!validateBeforeAction()) return

    setSendingMethod('whatsapp')
    const message = encodeURIComponent(buildWhatsAppMessage(form))
    window.open(`https://wa.me/919907504766?text=${message}`, '_blank', 'noreferrer')
    window.setTimeout(() => setSendingMethod(null), 700)
  }

  const handleEmail = async () => {
    if (!validateBeforeAction()) return

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      const subject = encodeURIComponent(`New enquiry from ${form.name}`)
      const body = encodeURIComponent(buildEmailBody(form))
      window.location.href = `mailto:hello@pixgrosolution.com?subject=${subject}&body=${body}`
      setStatus({
        type: 'success',
        message: 'Your email application was requested. Please press Send there to complete your enquiry.',
      })
      return
    }

    setSendingMethod('email')
    setStatus(null)

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: 'hello@pixgrosolution.com',
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          country: form.country,
          service: form.service,
          business_name: form.business,
          message: form.message,
          requirement: form.message,
        },
        { publicKey },
      )

      setStatus({
        type: 'success',
        message: 'Thank you. Your message has been sent to PixGro successfully.',
      })
      setForm(initialForm)
      setErrors({})
    } catch {
      setStatus({
        type: 'error',
        message:
          'Email could not be sent right now. Please try WhatsApp or check your EmailJS setup.',
      })
    } finally {
      setSendingMethod(null)
    }
  }

  const inputClass = (field) =>
    `mt-2 w-full rounded-2xl border bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:bg-white focus:ring-4 ${
      errors[field]
        ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
        : 'border-slate-200 focus:border-blue-400 focus:ring-blue-100'
    }`

  return (
    <section id="contact" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Tell us what you would like to delegate"
          description="Share your priorities and workflow. Then choose WhatsApp for a quick conversation or email for a detailed enquiry."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-premium sm:p-10">
            <h3 className="text-2xl font-semibold tracking-tight">Contact details</h3>
            <p className="mt-4 leading-8 text-slate-300">
              Share the work you need support with. PixGro will help you choose a clear,
              practical next step for your operations or digital growth.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-emerald-300">
                  <MessageCircle size={21} />
                </span>
                <div>
                  <p className="text-sm text-slate-400">WhatsApp</p>
                  <p className="mt-1 font-semibold">+91 9907504766</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-blue-300">
                  <Mail size={21} />
                </span>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="mt-1 font-semibold">hello@pixgrosolution.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-purple-300">
                  <MapPin size={21} />
                </span>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="mt-1 font-semibold">India</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-emerald-300">
                  <Phone size={21} />
                </span>
                <div>
                  <p className="text-sm text-slate-400">Consultation</p>
                  <p className="mt-1 font-semibold">Free initial discussion</p>
                </div>
              </div>
            </div>
          </aside>

          <form
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-premium sm:p-8"
            onSubmit={(event) => event.preventDefault()}
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={updateField}
                  autoComplete="name"
                  className={inputClass('name')}
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={updateField}
                  autoComplete="email"
                  className={inputClass('email')}
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Phone (optional)</span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={updateField}
                  autoComplete="tel"
                  className={inputClass('phone')}
                  placeholder="+91 9907504766"
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone}</p>}
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Business Name</span>
                <input
                  type="text"
                  name="business"
                  value={form.business}
                  onChange={updateField}
                  autoComplete="organization"
                  className={inputClass('business')}
                  placeholder="Business name"
                  aria-invalid={Boolean(errors.business)}
                />
                {errors.business && (
                  <p className="mt-2 text-sm text-red-600">{errors.business}</p>
                )}
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Service needed</span>
                <select name="service" value={form.service} onChange={updateField} className={inputClass('service')} aria-invalid={Boolean(errors.service)}>
                  <option value="">Select a service</option>
                  {['Virtual Assistant & Admin Support','Real Estate & Property Support','Investor & Research Support','Digital Marketing & Content','Website Development','eCommerce & Marketplace Support','Not sure yet'].map(item=><option key={item} value={item}>{item}</option>)}
                </select>
                {errors.service && <p className="mt-2 text-sm text-red-600">{errors.service}</p>}
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Country (optional)</span>
                <input type="text" name="country" value={form.country} onChange={updateField} className={inputClass('country')} placeholder="United States" autoComplete="country-name" />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold text-slate-700">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  rows="6"
                  className={`${inputClass('message')} resize-none`}
                  placeholder="Tell us about the tasks, tools, and support you need."
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600">{errors.message}</p>
                )}
              </label>
            </div>

            <label className="mt-5 flex items-start gap-3 text-sm text-slate-600"><input type="checkbox" name="consent" checked={form.consent} onChange={e=>{setForm(current=>({...current,consent:e.target.checked}));setErrors(current=>({...current,consent:undefined}))}} className="mt-1 h-4 w-4"/><span>I agree that PixGro may use my details to respond to this enquiry, as explained in the <a href="#privacy-policy" className="font-semibold text-blue-700 underline">Privacy Policy</a>.</span></label>
            {errors.consent && <p className="mt-2 text-sm text-red-600">{errors.consent}</p>}
            <p className="mt-3 text-xs text-slate-500">Never share passwords or sensitive financial information in this form.</p>
            {status && (
              <div
                className={`mt-6 flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm ${
                  status.type === 'success'
                    ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                    : 'border-red-200 bg-red-50 text-red-700'
                }`}
                role="status"
              >
                {status.type === 'success' && <CheckCircle2 size={18} className="mt-0.5" />}
                <p>{status.message}</p>
              </div>
            )}

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={handleWhatsApp}
                disabled={isSending}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_44px_-18px_rgba(37,211,102,0.95)] transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {sendingMethod === 'whatsapp' ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <MessageCircle
                    size={18}
                    className="transition group-hover:scale-110"
                  />
                )}
                Chat on WhatsApp
              </button>

              <button
                type="button"
                onClick={handleEmail}
                disabled={isSending}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-semibold text-slate-950 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 hover:shadow-soft disabled:cursor-not-allowed disabled:opacity-70"
              >
                {sendingMethod === 'email' ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <Mail size={18} className="transition group-hover:scale-110" />
                )}
                Send via Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
