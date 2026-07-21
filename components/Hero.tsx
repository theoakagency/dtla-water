'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

// PLACEHOLDER — DTLA-area zip codes covering Downtown LA + immediate Greater LA
// neighborhoods (Arts District, Historic Core, South Park, Financial District,
// Koreatown, Echo Park, Boyle Heights, etc). Confirm/replace with the real
// delivery zone before launch.
const SERVICE_ZIPS = [
  // Downtown LA core
  '90012', '90013', '90014', '90015', '90017', '90021', '90071',
  // Greater LA / surrounding neighborhoods
  '90007', '90020', '90023', '90026', '90027', '90028', '90029',
  '90031', '90033', '90057', '90058', '90063', '90065',
]

export default function Hero() {
  const [zip, setZip] = useState('')
  const [zipResult, setZipResult] = useState<null | 'yes' | 'no'>(null)

  const checkZip = () => {
    if (zip.length !== 5 || !/^\d+$/.test(zip)) return
    setZipResult(SERVICE_ZIPS.includes(zip) ? 'yes' : 'no')
  }

  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden pt-20 md:pt-24">
      {/* Background */}
      <Image
        src="/dtla-water-hero.png"
        alt="Downtown Los Angeles skyline with DTLA Water delivery bottles"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark overlay — heavier on the left where text sits, lighter over the bottles on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-20 w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#29ABE2]/10 border border-[#29ABE2]/30 text-[#29ABE2] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#29ABE2] animate-pulse" />
            Serving Downtown LA for Over 20 Years
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Stay Hydrated<br />
            and Healthy with<br />
            <span className="text-[#29ABE2]">DTLA Water.</span>
          </h1>

          <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-lg">
            Reliable bottled water delivery for offices, industrial facilities, events,
            and film productions across Downtown Los Angeles — plus flagship Vernon
            Industrial Water bulk water stops for warehouses and manufacturers. Small
            enough to care, big enough to deliver.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#order"
              className="inline-flex items-center gap-2 bg-[#111111] text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-[#2a2a2a] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            >
              Start My Delivery →
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-4 rounded-lg font-medium text-base hover:bg-white/10 hover:border-white/50 transition-all"
            >
              View Products
            </a>
          </div>
        </div>
      </div>

      {/* Frosted stats + zip bar */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md border-t border-white/20">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          {/* Stats */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <CheckCircle2 size={18} className="text-[#29ABE2]" />
            <span className="text-white font-bold text-sm">6,000+</span>
            <span className="text-white/60 text-sm">Happy customers</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-white/20 flex-shrink-0" />
          <div className="flex items-center gap-2 flex-shrink-0">
            <CheckCircle2 size={18} className="text-[#29ABE2]" />
            <span className="text-white font-bold text-sm">20 years</span>
            <span className="text-white/60 text-sm">In business</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-white/20 flex-shrink-0" />

          {/* Zip checker — fills remaining space */}
          <div className="flex-1 w-full">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter your zip code to check delivery area"
                maxLength={5}
                value={zip}
                onChange={(e) => { setZip(e.target.value.replace(/\D/g, '')); setZipResult(null) }}
                onKeyDown={(e) => e.key === 'Enter' && checkZip()}
                className="flex-1 bg-white/15 border border-white/35 rounded-lg px-4 py-2.5 text-white placeholder-white/70 text-sm outline-none focus:border-[#29ABE2] transition-colors min-w-0"
              />
              <button
                onClick={checkZip}
                className="bg-[#111111] text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-[#2a2a2a] transition-colors whitespace-nowrap flex-shrink-0"
              >
                Check →
              </button>
            </div>
            {zipResult === 'yes' && (
              <div className="mt-3 bg-emerald-500/20 border border-emerald-400/40 rounded-xl px-4 py-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                  <div>
                    <p className="text-emerald-300 font-bold text-sm">We deliver to {zip}!</p>
                    <p className="text-white/60 text-xs mt-0.5">You&apos;re in our service area. Fill out the form to get started.</p>
                  </div>
                </div>
                <a
                  href="#order"
                  className="bg-[#111111] text-white px-4 py-2 rounded-lg font-bold text-xs hover:bg-[#2a2a2a] transition-all whitespace-nowrap flex-shrink-0"
                >
                  Order Now →
                </a>
              </div>
            )}
            {zipResult === 'no' && (
              <div className="mt-3 bg-white/08 border border-white/15 rounded-xl px-4 py-3 flex items-center justify-between gap-4">
                <div>
                  <p className="text-white/80 font-semibold text-sm">Good news — {zip} is covered by a sister company!</p>
                  <p className="text-white/50 text-xs mt-0.5">We&apos;ll connect you with a trusted provider in your area.</p>
                </div>
                <a
                  href={`/out-of-area?zip=${zip}`}
                  className="border border-white/30 text-white px-4 py-2 rounded-lg font-bold text-xs hover:bg-white/10 transition-all whitespace-nowrap flex-shrink-0"
                >
                  Get Connected →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
