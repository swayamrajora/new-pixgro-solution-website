import {
  BadgeIndianRupee,
  BarChart3,
  Clock3,
  Code2,
  FileText,
  Headphones,
  Layers3,
  LayoutDashboard,
  Megaphone,
  MessageCircle,
  PackageCheck,
  PenTool,
  Presentation,
  Rocket,
  SearchCheck,
  ShieldCheck,
  ShoppingBag,
  Store,
  UserRoundCheck,
  UsersRound,
} from 'lucide-react'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'VA Support', href: '#virtual-assistant' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const vaServices = [
  { icon: UserRoundCheck, title: 'Executive & Founder Support', description: 'Inbox organization, scheduling, follow-ups, meeting preparation, and day-to-day coordination that keeps priorities moving.' },
  { icon: FileText, title: 'Operations & Admin Support', description: 'Document preparation, CRM updates, data entry, reporting, research coordination, and organized back-office support.' },
  { icon: PenTool, title: 'Content & Marketing Support', description: 'Content scheduling, basic research, asset coordination, community support, and consistent execution for your marketing workflow.' },
  { icon: Presentation, title: 'Research & Presentation Support', description: 'Market research, lead-list preparation, spreadsheet cleanup, and presentation support—handled carefully to your brief.' },
]

export const services = [
  { icon: UserRoundCheck, title: 'Virtual Assistant & Admin Support', description: 'Inbox, calendar, CRM, data entry, client follow-ups and recurring business operations—organized around your workflow.' },
  { icon: Store, title: 'Real Estate & Property Support', description: 'Listing updates, tenant and vendor coordination, document tracking, scheduling and research support for property teams.' },
  { icon: BarChart3, title: 'Investor & Research Support', description: 'Lead research, spreadsheet organization, market monitoring and presentation preparation. Administrative research only, not financial advice.' },
  { icon: Megaphone, title: 'Digital Marketing & Content', description: 'Social media planning, content scheduling, creative coordination, campaign assistance and reporting.' },
  { icon: Code2, title: 'Website Development', description: 'Responsive, modern websites with clear messaging, mobile-friendly layouts and conversion-focused contact experiences.' },
  { icon: ShoppingBag, title: 'eCommerce & Marketplace Support', description: 'Amazon and Flipkart onboarding assistance, product listings, catalog updates, advertising coordination and account operations.' },
]

export const reasons = [
  {
    icon: BadgeIndianRupee,
    title: 'Affordable Pricing',
    description: 'Clear packages and practical scopes that suit growing businesses.',
  },
  {
    icon: Headphones,
    title: 'Reliable Remote Support',
    description: 'A dependable India-based point of contact for updates, questions, and next steps.',
  },
  {
    icon: MessageCircle,
    title: 'Transparent Communication',
    description: 'Simple explanations, clear expectations, and no unnecessary complexity.',
  },
  {
    icon: Clock3,
    title: 'Structured Follow-Through',
    description: 'Clear priorities, realistic timelines, and consistent follow-through across your recurring work.',
  },
  {
    icon: SearchCheck,
    title: 'Customized Solutions',
    description: 'Workflows shaped around your business, marketplace needs, and growth stage.',
  },
  {
    icon: UsersRound,
    title: 'Flexible Engagements',
    description: 'Start with a focused scope, then adapt support as your business and workload evolve.',
  },
]

export const processSteps = [
  {
    step: 'Step 1',
    title: 'Introductory Consultation',
    description: 'We learn about your workflow, current bottlenecks, and the tasks you would like to delegate.',
  },
  {
    step: 'Step 2',
    title: 'Define the Scope',
    description: 'Together, we agree on responsibilities, communication preferences, availability, and clear deliverables.',
  },
  {
    step: 'Step 3',
    title: 'Onboard & Set Up',
    description: 'We organize access, tools, documentation, and a practical workflow before recurring work begins.',
  },
  {
    step: 'Step 4',
    title: 'Execute & Refine',
    description: 'Your support begins with regular updates and room to refine the process as priorities change.',
  },
]

export const faqs = [
  {
    question: 'What kind of virtual assistant work can PixGro support?',
    answer:
      'We support recurring administrative, operations, content, research, and coordination tasks. During the initial discussion, we will confirm whether your workflow and tools are a good fit.',
  },
  {
    question: 'Can you support US-based clients from India?',
    answer:
      'Yes. PixGro is India-based and works remotely with international clients. We agree communication channels, handoff practices, and an availability overlap that fits the engagement before work begins.',
  },
  {
    question: 'How does pricing work for VA support?',
    answer:
      'Pricing is based on the scope, expected workload, tools, and level of support required. We provide a clear proposal before work begins, with an efficient remote delivery model in mind.',
  },
  {
    question: 'Can you also help with websites and marketplace operations?',
    answer:
      'Yes. In addition to virtual assistant support, PixGro can help with website development, marketplace onboarding, catalog management, ads, and operational account support.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Use the contact form, email, or WhatsApp to share the tasks you need help with. We will discuss your priorities and recommend a practical next step.',
  },
]

export const heroHighlights = [
  { icon: ShieldCheck, label: 'Clear, accountable support' },
  { icon: Rocket, label: 'Flexible remote capacity' },
  { icon: BarChart3, label: 'Efficient monthly support' },
  { icon: Layers3, label: 'VA + digital operations expertise' },
]
