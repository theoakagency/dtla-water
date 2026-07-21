// ⚠️ PLACEHOLDER DATA — every city, neighborhood, zip list, and testimonial
// below is a draft guess based on DTLA Water's brand voice (downtown LA +
// greater LA, offices/industrial/events/film production). None of this has
// been confirmed against the real service area. Please review and correct
// before launch — see dtla-water-design-spec.md.

export type CityData = {
  slug: string
  name: string
  county: string
  phone: string
  heroDesc: string
  neighborhoods: string[]
  zips: string[]
  customerTypes: string[]
  testimonial: { quote: string; name: string; role: string; initials: string }
  mapQuery: string
}

const PLACEHOLDER_TESTIMONIAL = {
  quote: 'PLACEHOLDER — replace with a real DTLA Water customer testimonial for this area before launch.',
  name: 'Add customer name',
  role: 'Add role, neighborhood',
  initials: '—',
}

export const cities: CityData[] = [
  {
    slug: 'downtown-la',
    name: 'Downtown LA',
    county: 'Los Angeles County',
    phone: '(213) 371-4500',
    heroDesc: 'Serving the Historic Core, Arts District, South Park, and Financial District with premium purified and alkaline water delivered on your schedule.',
    neighborhoods: ['Historic Core', 'Arts District', 'South Park', 'Financial District', 'Fashion District', 'Little Tokyo'],
    zips: ['90012', '90013', '90014', '90015', '90017', '90021', '90071'],
    customerTypes: ['Offices & High-Rises', 'Industrial Facilities', 'Event Venues', 'Film & TV Productions', 'Restaurants & Hospitality'],
    testimonial: PLACEHOLDER_TESTIMONIAL,
    mapQuery: 'Downtown+Los+Angeles+CA',
  },
  {
    slug: 'koreatown',
    name: 'Koreatown',
    county: 'Los Angeles County',
    phone: '(213) 371-4500',
    heroDesc: 'Water delivery for Koreatown offices, restaurants, and businesses on a schedule that works for you.',
    neighborhoods: ['Koreatown', 'Wilshire Center', 'Byzantine-Latino Quarter'],
    zips: ['90005', '90006', '90019', '90020'],
    customerTypes: ['Offices & Businesses', 'Restaurants & Hospitality', 'Gyms & Fitness Studios', 'Event Venues'],
    testimonial: PLACEHOLDER_TESTIMONIAL,
    mapQuery: 'Koreatown+Los+Angeles+CA',
  },
  {
    slug: 'echo-park',
    name: 'Echo Park & Silver Lake',
    county: 'Los Angeles County',
    phone: '(213) 371-4500',
    heroDesc: 'Premium water delivery for Echo Park and Silver Lake homes, offices, and creative studios.',
    neighborhoods: ['Echo Park', 'Silver Lake', 'Angelino Heights'],
    zips: ['90026', '90039'],
    customerTypes: ['Offices & Creative Studios', 'Homes & Apartments', 'Restaurants & Cafés', 'Event Venues'],
    testimonial: PLACEHOLDER_TESTIMONIAL,
    mapQuery: 'Echo+Park+Los+Angeles+CA',
  },
  {
    slug: 'boyle-heights',
    name: 'Boyle Heights',
    county: 'Los Angeles County',
    phone: '(213) 371-4500',
    heroDesc: 'Reliable water delivery for Boyle Heights homes, offices, and industrial businesses.',
    neighborhoods: ['Boyle Heights', 'Wyvernwood', 'El Sereno border'],
    zips: ['90023', '90033'],
    customerTypes: ['Industrial Facilities', 'Offices & Businesses', 'Homes & Families', 'Schools'],
    testimonial: PLACEHOLDER_TESTIMONIAL,
    mapQuery: 'Boyle+Heights+Los+Angeles+CA',
  },
  {
    slug: 'mid-wilshire',
    name: 'Mid-Wilshire',
    county: 'Los Angeles County',
    phone: '(213) 371-4500',
    heroDesc: 'Water delivery for Mid-Wilshire and Hancock Park offices, homes, and businesses.',
    neighborhoods: ['Mid-Wilshire', 'Hancock Park', 'Miracle Mile'],
    zips: ['90004', '90010', '90036'],
    customerTypes: ['Offices & Businesses', 'Homes & Families', 'Event Venues', 'Museums & Galleries'],
    testimonial: PLACEHOLDER_TESTIMONIAL,
    mapQuery: 'Mid-Wilshire+Los+Angeles+CA',
  },
  {
    slug: 'hollywood',
    name: 'Hollywood',
    county: 'Los Angeles County',
    phone: '(213) 371-4500',
    heroDesc: 'Water delivery for Hollywood offices, productions, and businesses — purified and alkaline water on your schedule.',
    neighborhoods: ['Hollywood', 'East Hollywood', 'Hollywood Hills'],
    zips: ['90027', '90028', '90038', '90068'],
    customerTypes: ['Film & TV Productions', 'Offices & Businesses', 'Event Venues', 'Restaurants & Hospitality'],
    testimonial: PLACEHOLDER_TESTIMONIAL,
    mapQuery: 'Hollywood+Los+Angeles+CA',
  },
  {
    slug: 'vernon',
    name: 'Vernon & Industrial District',
    county: 'Los Angeles County',
    phone: '(213) 371-4500',
    heroDesc: 'Vernon Industrial Water — our flagship bulk water service for Vernon and the surrounding industrial district. Scheduled bulk water stops for warehouses, manufacturers, and distribution centers, sized to your operation.',
    neighborhoods: ['Vernon', 'South LA industrial corridor'],
    zips: ['90058', '90001', '90011'],
    customerTypes: ['Vernon Industrial Water', 'Bulk Water Stops', 'Warehouses & Distribution', 'Manufacturing Facilities'],
    testimonial: PLACEHOLDER_TESTIMONIAL,
    mapQuery: 'Vernon+CA',
  },
  {
    slug: 'culver-city',
    name: 'Culver City',
    county: 'Los Angeles County',
    phone: '(213) 371-4500',
    heroDesc: 'Water delivery for Culver City studios, offices, and productions.',
    neighborhoods: ['Downtown Culver City', 'Fox Hills', 'Studio Village'],
    zips: ['90230', '90232'],
    customerTypes: ['Film & TV Productions', 'Offices & Businesses', 'Event Venues', 'Restaurants'],
    testimonial: PLACEHOLDER_TESTIMONIAL,
    mapQuery: 'Culver+City+CA',
  },
  {
    slug: 'burbank',
    name: 'Burbank',
    county: 'Los Angeles County',
    phone: '(213) 371-4500',
    heroDesc: 'Water delivery for Burbank studios, offices, and businesses — reliable delivery for the media district.',
    neighborhoods: ['Downtown Burbank', 'Media District', 'Magnolia Park'],
    zips: ['91501', '91502', '91504', '91505', '91506'],
    customerTypes: ['Film & TV Productions', 'Offices & Businesses', 'Event Venues', 'Restaurants'],
    testimonial: PLACEHOLDER_TESTIMONIAL,
    mapQuery: 'Burbank+CA',
  },
  {
    slug: 'glendale',
    name: 'Glendale',
    county: 'Los Angeles County',
    phone: '(213) 371-4500',
    heroDesc: 'Water delivery for Glendale homes, offices, and businesses on a schedule that works for you.',
    neighborhoods: ['Downtown Glendale', 'Adams Hill', 'Verdugo Woodlands'],
    zips: ['91201', '91202', '91203', '91204', '91205', '91206', '91207', '91208', '91214'],
    customerTypes: ['Offices & Businesses', 'Homes & Families', 'Restaurants', 'Gyms & Studios'],
    testimonial: PLACEHOLDER_TESTIMONIAL,
    mapQuery: 'Glendale+CA',
  },
  {
    slug: 'pasadena',
    name: 'Pasadena',
    county: 'Los Angeles County',
    phone: '(213) 371-4500',
    heroDesc: 'Premium water delivery for Pasadena homes, offices, and businesses.',
    neighborhoods: ['Old Pasadena', 'South Lake', 'East Pasadena'],
    zips: ['91101', '91103', '91104', '91105', '91106', '91107'],
    customerTypes: ['Offices & Businesses', 'Homes & Families', 'Event Venues', 'Restaurants & Hospitality'],
    testimonial: PLACEHOLDER_TESTIMONIAL,
    mapQuery: 'Pasadena+CA',
  },
  {
    slug: 'montrose',
    name: 'Montrose',
    county: 'Los Angeles County',
    phone: '(213) 371-4500',
    heroDesc: 'Water delivery for Montrose and the La Crescenta foothill communities — homes and businesses on a schedule that works for you.',
    neighborhoods: ['Montrose', 'La Crescenta', 'La Cañada Flintridge border'],
    zips: ['91020'],
    customerTypes: ['Homes & Families', 'Offices & Businesses', 'Restaurants & Cafés', 'Retail Businesses'],
    testimonial: PLACEHOLDER_TESTIMONIAL,
    mapQuery: 'Montrose+CA',
  },
  {
    slug: 'arcadia',
    name: 'Arcadia',
    county: 'Los Angeles County',
    phone: '(213) 371-4500',
    heroDesc: 'Premium water delivery for Arcadia homes, offices, and businesses in the San Gabriel Valley.',
    neighborhoods: ['Downtown Arcadia', 'Santa Anita', 'Highland Oaks'],
    zips: ['91006', '91007'],
    customerTypes: ['Homes & Families', 'Offices & Businesses', 'Event Venues', 'Restaurants & Hospitality'],
    testimonial: PLACEHOLDER_TESTIMONIAL,
    mapQuery: 'Arcadia+CA',
  },
  {
    slug: 'azusa',
    name: 'Azusa',
    county: 'Los Angeles County',
    phone: '(213) 371-4500',
    heroDesc: 'Water delivery for Azusa homes, offices, schools, and businesses at the base of the San Gabriel Mountains.',
    neighborhoods: ['Downtown Azusa', 'Rosedale', 'Citrus College area'],
    zips: ['91702'],
    customerTypes: ['Homes & Families', 'Offices & Businesses', 'Schools & Universities', 'Industrial Facilities'],
    testimonial: PLACEHOLDER_TESTIMONIAL,
    mapQuery: 'Azusa+CA',
  },
  {
    slug: 'el-monte',
    name: 'El Monte',
    county: 'Los Angeles County',
    phone: '(213) 371-4500',
    heroDesc: 'Water delivery for El Monte homes, offices, and the warehouse and distribution facilities along the I-10 corridor.',
    neighborhoods: ['Downtown El Monte', 'South El Monte', 'Flair Park'],
    zips: ['91731', '91732', '91733'],
    customerTypes: ['Industrial Facilities', 'Warehouses & Distribution', 'Offices & Businesses', 'Homes & Families'],
    testimonial: PLACEHOLDER_TESTIMONIAL,
    mapQuery: 'El+Monte+CA',
  },
]

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug)
}
