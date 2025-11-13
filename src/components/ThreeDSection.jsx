import React from 'react'
import Spline from '@splinetool/react-spline'

export default function ThreeDSection({ id = 'showcase', title = 'Interactive 3D Showcase', subtitle = 'A living, breathing brand moment powered by real-time 3D.', scene }) {
  const sceneUrl = scene || 'https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode'
  return (
    <section id={id} className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-400 via-blue-400 to-orange-300" />
            Immersive • Real-time • Futuristic
          </div>
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-white/70 max-w-xl">
            {subtitle}
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/80">
            <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Digital Marketing Visualizer</li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">SEO Signals in Motion</li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">AI Automations Flow</li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Brand Aura & Strategy</li>
          </ul>
        </div>
        <div className="relative h-[380px] sm:h-[440px] lg:h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-black/30">
          <Spline scene={sceneUrl} style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(140,87,255,0.25),rgba(0,0,0,0)_60%)]" />
        </div>
      </div>
    </section>
  )
}
