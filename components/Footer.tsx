import Image from 'next/image'

// lucide-react doesn't ship brand icons — inline minimal Facebook/Instagram glyphs
function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  )
}
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

const footerLinks = {
  Products: [
    { label: 'Purified Drinking Water', href: '/products' },
    { label: 'Alkaline Water',     href: '/products' },
    { label: 'Office Delivery',    href: '/services/office' },
    { label: 'Restaurant Service', href: '/services/restaurant' },
    { label: 'Home Delivery',      href: '/services/home' },
    { label: 'Gym & Fitness',      href: '/services/gym' },
    { label: 'Catering & Craft',   href: '/services/catering' },
  ],
  // ⚠️ PLACEHOLDER — mirrors the draft areas in lib/cities.ts, confirm before launch.
  'Service Areas': [
    { label: 'Downtown LA',           href: '/areas/downtown-la' },
    { label: 'Koreatown',             href: '/areas/koreatown' },
    { label: 'Echo Park & Silver Lake', href: '/areas/echo-park' },
    { label: 'Boyle Heights',         href: '/areas/boyle-heights' },
    { label: 'Mid-Wilshire',          href: '/areas/mid-wilshire' },
    { label: 'Hollywood',             href: '/areas/hollywood' },
    { label: 'Vernon & Industrial',   href: '/areas/vernon' },
    { label: 'Culver City',           href: '/areas/culver-city' },
    { label: 'Burbank',               href: '/areas/burbank' },
    { label: 'Glendale',              href: '/areas/glendale' },
    { label: 'Pasadena',              href: '/areas/pasadena' },
    { label: 'Montrose',              href: '/areas/montrose' },
    { label: 'Arcadia',               href: '/areas/arcadia' },
    { label: 'Azusa',                 href: '/areas/azusa' },
    { label: 'El Monte',              href: '/areas/el-monte' },
  ],
  Company: [
    { label: 'About Us',       href: '/about' },
    { label: 'Current Offers', href: '/offers' },
    { label: 'FAQ',            href: '/faq' },
    { label: 'Contact',        href: '/contact' },
    { label: 'Sitemap',        href: '/sitemap-page' },
    { label: 'Admin Login',    href: '/admin' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#1B3A6B] text-white/60 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image src="/dtla-water-logo.png" alt="DTLA Water" width={104} height={48} className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Premium purified and alkaline water delivered to offices, industrial facilities, events, and film productions across Downtown Los Angeles.
            </p>
            <div className="mt-5 space-y-3 text-sm">
              <div>
                <div className="text-white/40 text-xs uppercase tracking-wide mb-0.5">Call Us</div>
                <a href="tel:+12133714500" className="text-[#29ABE2] font-semibold hover:text-[#3BBCEF] transition-colors">(213) 371-4500</a>
              </div>
              <div>
                <div className="text-white/40 text-xs uppercase tracking-wide mb-0.5">Visit Us</div>
                <p className="text-white/70">1360 South Figueroa Street<br />Los Angeles, CA 90015</p>
              </div>
            </div>
            {/* Social links — placeholder handles, confirm real DTLA Water accounts */}
            <div className="mt-5 flex items-center gap-3">
              <a href="https://www.facebook.com/dtlawater" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#29ABE2] transition-colors text-white">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/dtlawater" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#29ABE2] transition-colors text-white">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-bold tracking-[0.08em] uppercase text-white mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/55 hover:text-[#29ABE2] text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/08 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span>© 2026 DTLA Water. All rights reserved.</span>
          <span>Downtown LA · Greater Los Angeles</span>
        </div>
      </div>
    </footer>
  )
}
