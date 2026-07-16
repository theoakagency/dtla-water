'use client'

import Image from 'next/image'

export default function ParallaxDivider() {
  return (
    <div className="relative h-[420px] overflow-hidden">
      {/* Downtown LA skyline photo */}
      <Image
        src="/dtla-water-bgrd.png"
        alt="Downtown Los Angeles skyline at night reflected over water"
        fill
        className="object-cover object-center"
      />

      {/* Gradient overlay for text legibility */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(6,14,28,0.75) 0%, rgba(6,14,28,0.55) 50%, rgba(6,14,28,0.35) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-[#29ABE2] text-xs font-bold tracking-[0.15em] uppercase mb-4">
          Clean Water. Downtown Delivered.
        </p>
        <h2
          className="text-4xl lg:text-5xl font-bold text-white max-w-2xl leading-tight mb-6"
          style={{ fontFamily: 'var(--font-heading)', textShadow: '0 2px 16px rgba(0,0,0,0.5)' }}
        >
          Water the Way Nature<br />Intended It.
        </h2>
        <p
          className="text-white/80 text-lg max-w-xl leading-relaxed mb-8"
          style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}
        >
          Every bottle goes through our 10-stage filtration process — removing 99.9% of contaminants and leaving only pure, perfect water.
        </p>
        <a
          href="/#order"
          className="inline-flex items-center gap-2 bg-[#111111] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#2a2a2a] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
        >
          Start My Delivery →
        </a>
      </div>
    </div>
  )
}
