'use client'

// Simple downtown LA skyline silhouette — stand-in for a real photo per the
// spec's imagery direction (skyline, not bottled-water product shots).
const BUILDINGS = [
  { x: 0,    w: 60,  h: 90,  tone: 0 },
  { x: 65,   w: 40,  h: 60,  tone: 1 },
  { x: 110,  w: 70,  h: 150, tone: 0 },
  { x: 190,  w: 50,  h: 85,  tone: 2 },
  { x: 250,  w: 90,  h: 205, tone: 0 },
  { x: 350,  w: 45,  h: 70,  tone: 1 },
  { x: 405,  w: 55,  h: 120, tone: 2 },
  { x: 470,  w: 35,  h: 55,  tone: 0 },
  { x: 515,  w: 80,  h: 165, tone: 1 },
  { x: 605,  w: 50,  h: 100, tone: 0 },
  { x: 665,  w: 65,  h: 140, tone: 2 },
  { x: 740,  w: 40,  h: 65,  tone: 1 },
  { x: 790,  w: 100, h: 185, tone: 0 },
  { x: 900,  w: 55,  h: 105, tone: 2 },
  { x: 965,  w: 40,  h: 75,  tone: 1 },
  { x: 1015, w: 70,  h: 155, tone: 0 },
  { x: 1095, w: 50,  h: 90,  tone: 2 },
  { x: 1155, w: 90,  h: 175, tone: 0 },
  { x: 1255, w: 45,  h: 70,  tone: 1 },
  { x: 1310, w: 60,  h: 115, tone: 2 },
  { x: 1380, w: 60,  h: 95,  tone: 0 },
]
const TONES = ['#0A1930', '#12233F', '#16294A']

export default function ParallaxDivider() {
  return (
    <div className="relative h-[420px] overflow-hidden">
      {/* Dusk sky gradient behind the skyline */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, #2A5A96 0%, #1B3A6B 55%, #12233F 100%)' }}
      />

      {/* Horizon glow */}
      <div
        className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center bottom, rgba(41,171,226,0.25) 0%, transparent 70%)' }}
      />

      {/* Skyline silhouette */}
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-[240px]"
        aria-hidden="true"
      >
        {BUILDINGS.map((b, i) => (
          <rect key={i} x={b.x} y={220 - b.h} width={b.w} height={b.h} fill={TONES[b.tone]} />
        ))}
      </svg>

      {/* Gradient overlay for text legibility */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(18,35,63,0.72) 0%, rgba(18,35,63,0.5) 50%, rgba(18,35,63,0.3) 100%)' }}
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
