import { MapPin, Building2, Factory, Warehouse, Film, Mountain, Palmtree, Sun, Waves, LucideIcon } from 'lucide-react'
import { regions, getRegionBySlug, getCityBySlug } from '@/lib/cities'

// Icon per region, keyed by slug. Distinct from the individual-city icons used
// elsewhere so each region reads as its own geographic grouping.
const REGION_ICONS: Record<string, LucideIcon> = {
  'downtown-central-la': Building2,
  'industrial-corridor': Warehouse,
  'glendale-burbank': Film,
  'san-gabriel-valley': Mountain,
  'west-la': Palmtree,
  'san-fernando-valley': Sun,
  'south-bay': Waves,
}

// Ordered grid layout. Vernon & Industrial is a standalone city card (a
// distinct bulk-water offering, not a geographic grouping), slotted second
// between the two region cards; everything else is a region.
const GRID_ORDER: ({ type: 'region'; slug: string } | { type: 'vernon' })[] = [
  { type: 'region', slug: 'downtown-central-la' },
  { type: 'vernon' },
  { type: 'region', slug: 'industrial-corridor' },
  { type: 'region', slug: 'glendale-burbank' },
  { type: 'region', slug: 'san-gabriel-valley' },
  { type: 'region', slug: 'west-la' },
  { type: 'region', slug: 'san-fernando-valley' },
  { type: 'region', slug: 'south-bay' },
]

const CARD_CLASS =
  'group flex flex-col bg-white border-2 border-[#d0e4ef] rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#29ABE2] hover:shadow-[0_8px_28px_rgba(27,58,107,0.12)] no-underline'

export default function ServiceAreas() {
  const vernon = getCityBySlug('vernon')

  return (
    <section id="areas" className="py-24 px-6 bg-[#F5F8FB]">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-bold tracking-[0.12em] uppercase text-[#29ABE2] mb-4">Where We Deliver</p>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1B3A6B] leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            We Deliver Across<br />Downtown &amp; Greater LA
          </h2>
          <p className="text-[#5a7080] text-lg max-w-sm">
            Click your region for local delivery info, pricing, and availability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GRID_ORDER.map((entry) => {
            // Standalone Vernon & Industrial card — kept unchanged.
            if (entry.type === 'vernon') {
              if (!vernon) return null
              return (
                <a key="vernon" href={`/areas/${vernon.slug}`} className={CARD_CLASS}>
                  <div className="w-10 h-10 rounded-xl bg-[#F5F8FB] flex items-center justify-center mb-4">
                    <Factory size={20} className="text-[#29ABE2]" />
                  </div>
                  <h3 className="font-bold text-[#1B3A6B] text-lg mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{vernon.name}</h3>
                  <p className="text-[#5a7080] text-sm leading-relaxed flex-1 mb-4">{vernon.heroDesc}</p>
                  <span className="text-[#29ABE2] text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                    View delivery info →
                  </span>
                </a>
              )
            }

            const region = getRegionBySlug(entry.slug)
            if (!region) return null
            const Icon = REGION_ICONS[region.slug] ?? MapPin
            return (
              <a key={region.slug} href={`/areas/${region.slug}`} className={CARD_CLASS}>
                <div className="w-10 h-10 rounded-xl bg-[#F5F8FB] flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#29ABE2]" />
                </div>
                <h3 className="font-bold text-[#1B3A6B] text-lg mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{region.name}</h3>
                <p className="text-[#5a7080] text-sm leading-relaxed mb-4">{region.heroDesc}</p>
                <div className="flex flex-wrap gap-1.5 flex-1 mb-4 content-start">
                  {region.cities.map((c) => (
                    <span key={c.name} className="text-xs font-medium text-[#1B3A6B] bg-[#F5F8FB] border border-[#d0e4ef] rounded-full px-2.5 py-1">
                      {c.name}
                    </span>
                  ))}
                </div>
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
