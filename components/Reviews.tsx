import { Award, RefreshCw, Truck } from 'lucide-react'

const trustItems = [
  { icon: Award,    label: 'Locally Owned' },
  { icon: RefreshCw, label: 'Flexible Scheduling' },
  { icon: Truck,    label: 'Delivered Every 2 Weeks' },
]

// Placeholder testimonials cleared out — add real DTLA Water customer
// reviews here before launch.
const reviews: { stars: number; text: string; name: string; role: string; initials: string }[] = []

export function TrustBar() {
  return (
    <div className="bg-[#F5F8FB] border-y border-[#d0e4ef] py-5 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-around gap-5">
        {trustItems.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.label} className="flex items-center gap-2.5 text-sm font-medium text-[#1B3A6B]">
              <div className="w-8 h-8 rounded-full bg-[#2A5A96] text-white flex items-center justify-center flex-shrink-0">
                <Icon size={15} />
              </div>
              {item.label}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function Reviews() {
  return (
    <section className="py-24 px-6 bg-[#F5F8FB]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.12em] uppercase text-[#29ABE2] mb-4">Customer Reviews</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1B3A6B]" style={{ fontFamily: 'var(--font-heading)' }}>
            What Our Customers Say
          </h2>
        </div>

        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white border border-[#d0e4ef] rounded-2xl p-7">
                <div className="text-[#f0a500] text-lg tracking-widest mb-4">{'★'.repeat(r.stars)}</div>
                <p className="text-[#1A1A1A] text-sm leading-relaxed italic mb-6">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1B3A6B] text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                    {r.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[#1B3A6B]">{r.name}</div>
                    <div className="text-xs text-[#5a7080]">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-dashed border-[#d0e4ef] rounded-2xl p-10 text-center max-w-xl mx-auto">
            <p className="text-[#5a7080] text-sm">
              We&apos;re just getting started collecting reviews from DTLA Water customers — check back soon.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
