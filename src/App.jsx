import React from 'react'
import Spline from '@splinetool/react-spline'
import { Megaphone, Search, PenTool, Bot, BadgeCheck, Share2, Users } from 'lucide-react'
import ThreeDSection from './components/ThreeDSection.jsx'

const services = [
  { title: 'Digital Marketing', icon: Megaphone, desc: 'Performance-focused campaigns that convert.' },
  { title: 'SEO', icon: Search, desc: 'Technical, on-page, and off-page optimization.' },
  { title: 'Graphic Design', icon: PenTool, desc: 'Brand visuals that feel premium and timeless.' },
  { title: 'AI Automations', icon: Bot, desc: 'Intelligent workflows that save hours every week.' },
  { title: 'Branding & Strategy', icon: BadgeCheck, desc: 'Positioning, identity, and messaging that resonates.' },
  { title: 'Social Media Marketing', icon: Share2, desc: 'Content engines that grow communities.' },
  { title: 'Influencer Marketing', icon: Users, desc: 'Creator partnerships that drive real results.' },
]

function Chip({ label }) {
  return (
    <span className="rounded-full bg-white/70 backdrop-blur px-4 py-1 text-sm text-slate-700 border border-white/60 shadow-sm hover:bg-white transition">
      {label}
    </span>
  )
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0B1020] via-[#0A0F23] to-[#070B16] text-white">
      {/* Header */}
      <header className="relative z-20">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400" />
            <span className="text-lg font-semibold tracking-tight">Auralink Agency</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#showcase" className="hover:text-white">3D</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#contact" className="ml-2 inline-flex items-center rounded-full bg-white text-slate-900 px-4 py-2 font-medium hover:bg-white/90">Get a Proposal</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        {/* Spline 3D Animation */}
        <div className="absolute inset-0 z-0">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Soft gradient overlay - pointer-events-none so it doesn't block 3D */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(140,87,255,0.35),rgba(0,0,0,0)_60%)]" />

        <div className="relative z-20">
          <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-32 md:pb-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-400 via-blue-400 to-orange-300" />
                Modern Growth + Brand Studio
              </div>

              <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
                We scale brands with intelligent design and high-converting growth systems.
              </h1>

              <p className="mt-5 max-w-xl text-white/70">
                Full-funnel strategy, beautiful brand craft, and AI-powered automations that turn attention into revenue.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a href="#contact" className="inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-2.5 font-medium hover:bg-white/90">Start a Project</a>
                <a href="#services" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-5 py-2.5 font-medium text-white/90 hover:bg-white/10">Explore Services</a>
              </div>

              {/* Service chips */}
              <div className="mt-10 flex flex-wrap gap-3">
                {['Digital Marketing','SEO','Graphic Design','AI Automations','Branding & Strategies','Social Media Marketing','Influencer Marketing'].map((c) => (
                  <Chip key={c} label={c} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="relative z-20">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What we do</h2>
            <p className="mt-3 max-w-2xl text-white/70">A senior team across strategy, creative, media, and automation. Built to move fast and deliver outcomes.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ title, icon: Icon, desc }) => (
              <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition relative overflow-hidden">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-purple-500/30 via-blue-500/30 to-orange-400/30 blur-2xl" />
                <div className="relative z-10">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-900">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-white/70">{desc}</p>
                  <button className="mt-4 text-sm font-medium text-white/90 underline-offset-4 hover:underline">Learn more</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional 3D Section */}
      <ThreeDSection id="showcase" title="Immersive 3D Brand Aura" subtitle="Showcase your tech-forward identity with a second interactive 3D scene." scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" />

      {/* Footer */}
      <footer id="contact" className="relative z-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400" />
                <span className="text-lg font-semibold tracking-tight">Auralink Agency</span>
              </div>
              <p className="mt-3 text-white/60 max-w-md">Let’s build something that feels inevitable. Share your goals, and we’ll return with a tailored plan and timeline.</p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="Your email" className="w-full sm:w-72 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" />
                <button className="rounded-xl bg-white text-slate-900 px-5 py-3 font-medium hover:bg-white/90">Request Proposal</button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} Auralink Agency. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
