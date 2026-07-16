import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { Heart, Gem, Clock, Users } from 'lucide-react'
import OrderForm from '@/components/OrderForm'

export const metadata: Metadata = {
  title: 'About Us | DTLA Water',
  description: 'DTLA Water has been delivering premium purified and alkaline water to offices, industrial facilities, and productions across Downtown Los Angeles for over 20 years. A locally owned business built on quality and reliability.',
}

const values = [
  { icon: Heart, title: 'Locally Owned', desc: 'We are a local business rooted in Downtown LA. When you choose DTLA Water, you are supporting a local team, not a corporate call center.' },
  { icon: Gem,   title: 'Quality Without Compromise', desc: 'Every bottle goes through our 10-stage filtration process. We never cut corners on water quality, because your health depends on it.' },
  { icon: Clock, title: 'Reliable & Consistent', desc: 'We show up when we say we will. Our delivery team has served many customers for years because consistency matters more than anything.' },
  { icon: Users, title: 'Community First', desc: 'We live and work in the same community we deliver to. Supporting DTLA Water means supporting a Downtown LA business.' },
]

// ⚠️ PLACEHOLDER — generic era labels used instead of specific years since we
// don't have DTLA Water's real founding history. Replace with real milestones.
const timeline = [
  { era: 'Early Days', title: 'Founded in Downtown LA', desc: 'DTLA Water started with a single delivery route and a commitment to bringing better water to local businesses.' },
  { era: 'Growth', title: 'Expanded to Offices & Industrial', desc: 'Demand from downtown offices and industrial facilities led us to expand our commercial delivery service.' },
  { era: 'Innovation', title: 'Alkaline Water Added', desc: 'We added our pH 9.5 alkaline water line in response to growing customer interest in the health benefits of alkaline hydration.' },
  { era: 'Expansion', title: 'Serving Greater Los Angeles', desc: 'Expanded delivery routes to serve Koreatown, Hollywood, Glendale, Pasadena, and surrounding communities.' },
  { era: 'Today', title: 'Serving 6,000+ Customers', desc: 'Today we proudly serve thousands of offices, industrial facilities, and productions across Downtown and Greater Los Angeles.' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Our Story"
          title="Small Enough to Care."
          titleAccent="Big Enough to Deliver."
          subtitle="DTLA Water has been a trusted name in Downtown LA water delivery for over 20 years. A locally owned business built on quality, reliability, and personal service."
          breadcrumbs={[{ label: 'About Us', href: '#' }]}
        />

        {/* Mission */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div>
              <p className="text-xs font-bold tracking-[0.12em] uppercase text-[#29ABE2] mb-4">Our Mission</p>
              <h2 className="text-4xl font-bold text-[#1B3A6B] leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Better Water for Every Office and Business in Downtown LA
              </h2>
              <p className="text-[#5a7080] text-lg leading-relaxed mb-5">
                We started DTLA Water because we believed Downtown LA&apos;s offices, productions, and businesses deserved access to truly clean, high-quality water — without having to pay big-brand prices or sacrifice on service.
              </p>
              <p className="text-[#5a7080] text-lg leading-relaxed mb-8">
                Twenty years later, that belief hasn&apos;t changed. We still personally oversee every batch of water, know many of our customers by name, and treat every delivery like it matters — because it does.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#d0e4ef]">
                {[
                  { num: '20+', label: 'Years in business' },
                  { num: '6,000+', label: 'Active customers' },
                  { num: '11', label: 'Communities served' },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl font-bold text-[#1B3A6B]" style={{ fontFamily: 'var(--font-heading)' }}>{s.num}</div>
                    <div className="text-sm text-[#5a7080] mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-6 bg-[#F5F8FB]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-bold tracking-[0.12em] uppercase text-[#29ABE2] mb-3">What We Stand For</p>
              <h2 className="text-4xl font-bold text-[#1B3A6B]" style={{ fontFamily: 'var(--font-heading)' }}>Our Values</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => {
                const Icon = v.icon
                return (
                  <div key={v.title} className="bg-white rounded-2xl p-7 border border-[#d0e4ef]">
                    <div className="w-11 h-11 rounded-xl bg-[#F5F8FB] flex items-center justify-center mb-4">
                      <Icon size={20} className="text-[#29ABE2]" />
                    </div>
                    <h3 className="font-bold text-[#1B3A6B] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{v.title}</h3>
                    <p className="text-[#5a7080] text-sm leading-relaxed">{v.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-bold tracking-[0.12em] uppercase text-[#29ABE2] mb-3">Our Journey</p>
              <h2 className="text-4xl font-bold text-[#1B3A6B]" style={{ fontFamily: 'var(--font-heading)' }}>20 Years of Growth</h2>
            </div>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-16 top-0 bottom-0 w-px bg-[#d0e4ef]" />
              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div key={item.era} className="flex gap-8 items-start">
                    <div className="flex-shrink-0 w-32 text-right">
                      <span className="inline-block bg-[#1B3A6B] text-[#29ABE2] text-sm font-bold px-3 py-1.5 rounded-lg">
                        {item.era}
                      </span>
                    </div>
                    <div className="relative flex-1 pb-8">
                      {/* Dot on timeline */}
                      <div className="absolute -left-[25px] top-2 w-3 h-3 rounded-full bg-[#29ABE2] border-2 border-white ring-2 ring-[#29ABE2]/30" />
                      <h3 className="font-bold text-[#1B3A6B] mb-1">{item.title}</h3>
                      <p className="text-[#5a7080] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <OrderForm />
      </main>
      <Footer />
    </>
  )
}
