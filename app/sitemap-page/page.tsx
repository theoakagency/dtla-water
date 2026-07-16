import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { cities } from '@/lib/cities'
import { services } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Sitemap | DTLA Water',
  description: 'Complete sitemap of all DTLA Water pages — service areas, products, and more.',
}

const staticPages = [
  { label: 'Home',           href: '/' },
  { label: 'Products',       href: '/products' },
  { label: 'Current Offers', href: '/offers' },
  { label: 'About Us',       href: '/about' },
  { label: 'FAQ',            href: '/faq' },
  { label: 'Contact',        href: '/contact' },
]

export default function SitemapPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Site Navigation"
          title="Sitemap"
          subtitle="A complete list of all pages on the DTLA Water website."
          breadcrumbs={[{ label: 'Sitemap', href: '#' }]}
          compact
        />

        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left column */}
            <div className="space-y-10">

              {/* Main pages */}
              <div>
                <h2 className="text-xs font-bold tracking-[0.12em] uppercase text-[#29ABE2] mb-4">
                  Main Pages
                </h2>
                <ul className="space-y-2">
                  {staticPages.map((page) => (
                    <li key={page.href}>
                      <Link
                        href={page.href}
                        className="flex items-center gap-2 text-[#1B3A6B] hover:text-[#29ABE2] transition-colors text-sm font-medium group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#29ABE2] flex-shrink-0 group-hover:scale-125 transition-transform" />
                        {page.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-xs font-bold tracking-[0.12em] uppercase text-[#29ABE2] mb-4">
                  Services
                </h2>
                <ul className="space-y-2">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-2 text-[#1B3A6B] hover:text-[#29ABE2] transition-colors text-sm font-medium group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#29ABE2] flex-shrink-0 group-hover:scale-125 transition-transform" />
                        {s.name} Water Delivery
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right column */}
            <div className="space-y-10">

              {/* Service areas */}
              <div>
                <h2 className="text-xs font-bold tracking-[0.12em] uppercase text-[#29ABE2] mb-4">
                  Service Areas
                </h2>
                <ul className="space-y-2">
                  {cities.map((city) => (
                    <li key={city.slug}>
                      <Link
                        href={`/areas/${city.slug}`}
                        className="flex items-center gap-2 text-[#1B3A6B] hover:text-[#29ABE2] transition-colors text-sm font-medium group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#29ABE2] flex-shrink-0 group-hover:scale-125 transition-transform" />
                        Water Delivery in {city.name}, CA
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* XML sitemap note */}
        <section className="py-10 px-6 bg-[#F5F8FB] border-t border-[#d0e4ef]">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#5a7080] text-sm">
              Looking for the XML sitemap for search engines?
            </p>
            <a
              href="/sitemap.xml"
              target="_blank"
              className="text-[#29ABE2] font-semibold text-sm hover:underline flex items-center gap-1"
            >
              View XML Sitemap →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
