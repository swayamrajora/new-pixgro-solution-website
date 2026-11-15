import { useState } from 'react'

const sections = [
 {id:'privacy-policy', title:'Privacy Policy', content:[
 'PixGro Digital Solutions collects information you choose to share in our enquiry form, such as your name, email, phone number, business name, service interest and message. We use this information to respond to your enquiry and discuss requested services.',
 'When you choose WhatsApp or email, your information is handled by the relevant communication provider. If our EmailJS form integration is enabled, enquiry details are transmitted through that service. We do not sell your enquiry information.',
 'We retain enquiry information only as reasonably necessary for business communications and applicable obligations. To request access, correction or deletion of information you submitted, contact pixgro.team@gmail.com.',
 'We take reasonable precautions with the information we receive. Please do not submit passwords, payment card details, or other sensitive credentials through the public contact form.'
 ]},
 {id:'terms', title:'Terms of Use', content:[
 'This website provides general information about PixGro Digital Solutions and the services we may offer. Website content is not a binding proposal, service guarantee or professional advice.',
 'Project scope, responsibilities, fees, timelines, availability and confidentiality arrangements are agreed separately in writing before work begins. Service availability depends on the requested work and agreed resources.',
 'Do not misuse the website or submit unlawful, harmful or misleading enquiries. Website materials belong to their respective owners and may not be reused without permission.',
 'For questions about these terms, contact pixgro.team@gmail.com.'
 ]},
]
export default function Legal(){const [active,setActive]=useState(null);return <section className="border-t border-slate-200 bg-slate-50 py-12"><div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"><h2 className="text-2xl font-semibold text-slate-950">Policies & information</h2><p className="mt-2 text-sm text-slate-600">Read how enquiries and website use are handled.</p><div className="mt-6 grid gap-4 md:grid-cols-2">{sections.map(s=><article id={s.id} key={s.id} className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-lg font-semibold text-slate-950">{s.title}</h3><p className="mt-2 text-sm text-slate-600">{s.content[0]}</p>{active===s.id&&s.content.slice(1).map((t,i)=><p className="mt-3 text-sm leading-7 text-slate-600" key={i}>{t}</p>)}<button type="button" onClick={()=>setActive(active===s.id?null:s.id)} className="mt-4 text-sm font-semibold text-blue-700" aria-expanded={active===s.id}>{active===s.id?'Show less':'Read full policy'}</button></article>)}</div><p className="mt-4 text-xs text-slate-500">Draft website policies; have them reviewed for your jurisdiction and actual data practices before launch.</p></div></section>}
