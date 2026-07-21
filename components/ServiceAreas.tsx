import { MapPin, Home, Mountain, Building2, Factory, Film, Leaf, LucideIcon } from 'lucide-react'
import { cities } from '@/lib/cities'

// Icon per city, keyed by slug — falls back to a generic icon for any city
// added to lib/cities.ts without a matching entry here, so the grid always
// includes every service area even if this map goes stale.
const CITY_ICONS: Record<string, LucideIcon> = {
  'downtown-la': Building2,
  'koreatown': Home,
  'echo-park': Leaf,
  'highland-park-eagle-rock': Leaf,
  'glassell-park': Leaf,
  'boyle-heights': Home,
  'el-sereno': Home,
  'east-la': Home,
  'mid-wilshire': Building2,
  'hollywood': Film,
  'vernon': Factory,
  'commerce': Factory,
  'huntington-park': Factory,
  'bell': Factory,
  'maywood': Factory,
  'south-gate': Factory,
  'culver-city': Film,
  'palms-beverlywood': Home,
  'burbank': Film,
  'glendale': Mountain,
  'pasadena': Mountain,
  'south-pasadena': Mountain,
  'san-marino': Building2,
  'alhambra': Building2,
  'monterey-park': Home,
  'san-gabriel': Building2,
  'rosemead': Factory,
  'temple-city': Home,
  'montrose': Leaf,
  'arcadia': Building2,
  'azusa': Mountain,
  'el-monte': Factory,
}

export default function ServiceAreas() {
  const areas = cities.map((city) => ({
    icon: CITY_ICONS[city.slug] ?? Home,
    name: city.name,
    desc: city.heroDesc,
    href: `/areas/${city.slug}`,
  }))

  return (
    <section id="areas" className="py-24 px-6 bg-[#F5F8FB]">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-bold tracking-[0.12em] uppercase text-[#29ABE2] mb-4">Where We Deliver</p>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1B3A6B] leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            We Deliver Across<br />Downtown &amp; Greater LA
          </h2>
          <p className="text-[#5a7080] text-lg max-w-sm">
            Click your area for local delivery info, pricing, and availability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {areas.map((area) => {
            const Icon = area.icon
            return (
              <a
                key={area.href}
                href={area.href}
                className="group flex flex-col bg-white border-2 border-[#d0e4ef] rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#29ABE2] hover:shadow-[0_8px_28px_rgba(27,58,107,0.12)] no-underline"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F5F8FB] flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#29ABE2]" />
                </div>
                <h3 className="font-bold text-[#1B3A6B] text-lg mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{area.name}</h3>
                <p className="text-[#5a7080] text-sm leading-relaxed flex-1 mb-4">{area.desc}</p>
                <span className="text-[#29ABE2] text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                  View delivery info →
                </span>
              </a>
            )
          })}

          {/* Catch-all card */}
          <a
            href="/#order"
            className="group flex flex-col bg-[#F5F8FB] border-2 border-dashed border-[#d0e4ef] rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#29ABE2] hover:shadow-[0_8px_28px_rgba(27,58,107,0.12)] no-underline"
          >
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4">
              <MapPin size={20} className="text-[#29ABE2]" />
            </div>
            <h3 className="font-bold text-[#1B3A6B] text-lg mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Don&apos;t see your city?</h3>
            <p className="text-[#5a7080] text-sm leading-relaxed flex-1 mb-4">Enter your zip above — we may still deliver to you.</p>
            <span className="text-[#29ABE2] text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
              Check my zip →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
