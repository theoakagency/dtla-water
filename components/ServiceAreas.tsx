import { MapPin, Home, Mountain, Building2, Factory, Film, Leaf } from 'lucide-react'

// ⚠️ PLACEHOLDER — mirrors the draft areas in lib/cities.ts. Confirm the real
// DTLA Water service area before launch.
const areas = [
  { icon: Building2, name: 'Downtown LA',              desc: 'Historic Core, Arts District, South Park, and Financial District delivery.', href: '/areas/downtown-la' },
  { icon: Home,       name: 'Koreatown',                desc: 'Offices, restaurants, and businesses throughout Koreatown.',                  href: '/areas/koreatown' },
  { icon: Leaf,       name: 'Echo Park & Silver Lake',  desc: 'Homes, offices, and creative studios in Echo Park and Silver Lake.',           href: '/areas/echo-park' },
  { icon: Home,       name: 'Boyle Heights',            desc: 'Homes, offices, and industrial businesses in Boyle Heights.',                  href: '/areas/boyle-heights' },
  { icon: Building2,  name: 'Mid-Wilshire',             desc: 'Mid-Wilshire and Hancock Park offices, homes, and businesses.',                href: '/areas/mid-wilshire' },
  { icon: Film,       name: 'Hollywood',                desc: 'Offices, productions, and businesses throughout Hollywood.',                   href: '/areas/hollywood' },
  { icon: Factory,    name: 'Vernon & Industrial',      desc: 'Vernon Industrial Water — bulk water stops for warehouses, manufacturing, and distribution facilities.', href: '/areas/vernon' },
  { icon: Film,       name: 'Culver City',              desc: 'Studios, offices, and productions in Culver City.',                            href: '/areas/culver-city' },
  { icon: Film,       name: 'Burbank',                  desc: 'Studios, offices, and businesses in the Burbank media district.',               href: '/areas/burbank' },
  { icon: Mountain,   name: 'Glendale',                 desc: 'Homes, offices, and businesses throughout Glendale.',                          href: '/areas/glendale' },
  { icon: Mountain,   name: 'Pasadena',                 desc: 'Homes, offices, and businesses throughout Pasadena.',                          href: '/areas/pasadena' },
  { icon: Leaf,       name: 'Montrose',                 desc: 'Montrose and La Crescenta foothill homes and businesses.',                     href: '/areas/montrose' },
  { icon: Building2,  name: 'Arcadia',                  desc: 'Homes, offices, and businesses throughout Arcadia.',                           href: '/areas/arcadia' },
  { icon: Mountain,   name: 'Azusa',                    desc: 'Homes, offices, schools, and businesses in Azusa.',                            href: '/areas/azusa' },
  { icon: Factory,    name: 'El Monte',                 desc: 'Homes, offices, and warehouse/distribution delivery along the I-10 corridor.', href: '/areas/el-monte' },
  { icon: MapPin,     name: "Don't see your city?",     desc: 'Enter your zip above — we may still deliver to you.',                          href: '/#order' },
]

export default function ServiceAreas() {
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
          {areas.map((area, i) => {
            const Icon = area.icon
            return (
              <a
                key={area.name}
                href={area.href}
                className={`group flex flex-col bg-white border-2 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#29ABE2] hover:shadow-[0_8px_28px_rgba(27,58,107,0.12)] no-underline ${
                  i === areas.length - 1 ? 'border-dashed border-[#d0e4ef] bg-[#F5F8FB]' : 'border-[#d0e4ef]'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#F5F8FB] flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#29ABE2]" />
                </div>
                <h3 className="font-bold text-[#1B3A6B] text-lg mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{area.name}</h3>
                <p className="text-[#5a7080] text-sm leading-relaxed flex-1 mb-4">{area.desc}</p>
                <span className="text-[#29ABE2] text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                  {i === areas.length - 1 ? 'Check my zip →' : 'View delivery info →'}
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
