// Everything factual about the business, in one place.
// Sourced from the Google Business Profile: maps.google.com/?cid=529705397292566086

export const business = {
  // `name` matches the Google listing exactly (used for schema.org and alt text);
  // `displayName` is the brand's own spelling, as set in the logo.
  name: 'MUSCLE X FITNESS',
  displayName: 'MuscleXFitness',
  tagline: 'Fitness · Sector 54',
  address: {
    line1: 'A10, Suncity, Sector 54',
    line2: 'Gurugram, Haryana 122001',
    plusCode: 'C4M5+RP Gurugram, Haryana',
  },
  phone: { display: '099994 04433', tel: '+919999404433' },
  classesPhone: { display: '98180 97875', tel: '+919818097875' },
  whatsapp: 'https://wa.me/919999404433',
  placeId: 'ChIJM5aZdpcfDTkRRgY7mUDkWQc',
  cid: '529705397292566086',
  // The cid form resolves to the exact listing, not an address search — the pin lands on
  // the gym itself, and "View larger map" opens our Google Business Profile.
  mapsUrl: 'https://maps.google.com/?cid=529705397292566086',
  mapEmbed: 'https://maps.google.com/maps?cid=529705397292566086&z=17&output=embed',
  // Maps URL API — destination_place_id guarantees it routes to this exact place.
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1' +
    '&destination=MUSCLE+X+FITNESS%2C+A10%2C+Suncity%2C+Sector+54%2C+Gurugram' +
    '&destination_place_id=ChIJM5aZdpcfDTkRRgY7mUDkWQc',
  blurb:
    'We provide gym service in Gurgaon Sector 54 — an indoor space designed for physical ' +
    'exercise and sports, featuring machines, weights and open space for a range of activities.',
}

// Anchors are written absolute ('/#about') so the same nav works from /classes/ and
// /gallery/ as well as the homepage. `page` marks the links that are real pages.
export const navLinks = [
  { href: '/#about', label: 'The Gym' },
  { href: '/#facilities', label: 'Facilities' },
  { href: '/classes/', label: 'Classes', page: 'classes' },
  { href: '/gallery/', label: 'Gallery', page: 'gallery' },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/#visit', label: 'Visit' },
]

export const stats = [
  { value: '4.9', accent: '★', label: 'Google rating' },
  { value: '152', label: 'Verified reviews' },
  { value: '5:30', accent: 'am', label: 'Doors open' },
  { value: '7', label: 'Classes per week' },
]

export const marqueeItems = [
  'Strength Training', 'Cardio Zone', 'Functional', 'Personal Training',
  'Zumba', 'Power Yoga', 'Floor Pilates', 'Bollywood Dance', 'Cardio Blast',
]

export const perks = [
  'Fully air-conditioned',
  'Free detox water',
  'Certified trainers',
  'Women-friendly floor',
  'Personal training & diet plans',
  'Pro Bodyline equipment',
  'Daily group classes',
]

export const facilities = [
  {
    img: 'gym-07', num: '01', kicker: 'Strength', title: 'Racks, Benches & Plate Load',
    copy: 'Squat racks, incline and flat benches, plate-loaded presses and a full pin-loaded circuit for every major movement.',
    alt: 'Strength machines and benches',
  },
  {
    img: 'gym-24', num: '02', kicker: 'Cardio', title: 'The Cardio Deck',
    copy: 'Treadmills, ellipticals, upright and recumbent bikes, spin cycles and steppers — a long line, so you never wait.',
    alt: 'Cardio row with treadmills and ellipticals',
  },
  {
    img: 'gym-17', num: '03', kicker: 'Free Weights', title: 'Dumbbells & Barbells',
    copy: 'A full rubber-hex dumbbell run, olympic bars, plates and adjustable benches.',
    alt: 'Dumbbell rack',
  },
  {
    img: 'gym-16', num: '04', kicker: 'Functional', title: 'Cables & Open Floor',
    copy: 'Crossovers, suspension straps, kettlebells, boxes and clear turf for mobility work.',
    alt: 'Functional training zone with cable crossover',
  },
  {
    img: 'gym-09', num: '05', kicker: 'Coaching', title: 'Personal Training',
    copy: 'One-on-one programming, form correction and diet guidance from certified coaches.',
    alt: 'Member training on the floor',
  },
  {
    img: 'gym-02', num: '06', kicker: 'Studio', title: 'Group Class Floor',
    copy: 'A dedicated evening studio slot for Zumba, yoga, pilates and dance — every single day at 7:30 PM.',
    alt: 'Spin bikes lined up',
  },
  {
    img: 'gym-22', num: '07', kicker: 'The People', title: 'A Crowd That Turns Up',
    copy: 'Beginners, regulars and early-morning diehards. Disciplined, welcoming, and genuinely happy to spot you.',
    alt: 'Members after a group class',
  },
]

// Transcribed from the gym's own schedule poster (public/img/gym-27.jpg).
// `desc` is the one-liner used on the homepage; `long` only shows on /classes/.
export const classes = [
  {
    day: 1, dayName: 'Monday', name: 'Zumba', time: '7:30 PM',
    desc: 'High-energy dance cardio',
    long: 'Latin-inspired dance cardio you can follow from the back row on day one. ' +
          'Roughly 45 minutes of continuous movement — the fastest way to burn a serious ' +
          'number of calories without it feeling like a workout.',
    forYou: 'Anyone who finds the treadmill boring',
  },
  {
    day: 2, dayName: 'Tuesday', name: 'Power Yoga', time: '7:30 PM',
    desc: 'Strength, balance and breath',
    long: 'A faster, strength-led take on vinyasa — holds and flows that build control ' +
          'through the shoulders, hips and core. Modifications called out for every pose, ' +
          'so beginners and regulars work the same sequence at different depths.',
    forYou: 'Lifters who need mobility, and anyone starting out',
  },
  {
    day: 3, dayName: 'Wednesday', name: 'Bollywood Dance', time: '7:30 PM',
    desc: 'Choreo-led cardio, no experience needed',
    long: 'Choreographed routines to Hindi tracks, taught step by step and repeated until ' +
          'the room has it. Genuinely no experience needed — half the floor is learning the ' +
          'same sequence for the first time.',
    forYou: 'Anyone who wants the hour to fly past',
  },
  {
    day: 4, dayName: 'Thursday', name: 'Kasrat Training', time: '7:30 PM',
    desc: 'Old-school conditioning circuit',
    long: 'Traditional Indian conditioning — bodyweight circuits, dands and baithaks, ' +
          'loaded carries and simple, brutal repetition. No machines, just work capacity.',
    forYou: 'People who want to be genuinely fit, not just lean',
  },
  {
    day: 5, dayName: 'Friday', name: 'Floor Pilates', time: '7:30 PM',
    desc: 'Core control and mobility',
    long: 'Mat-based, low-impact and precise. Small controlled movements that reach the deep ' +
          'core and stabiliser muscles heavy training tends to skip — and the session most ' +
          'members say fixed their lower back.',
    forYou: 'Desk workers and anyone with a cranky back',
  },
  {
    day: 6, dayName: 'Saturday', name: 'Functional', time: '7:30 PM',
    desc: 'Full-body movement patterns',
    long: 'Push, pull, hinge, squat, carry — trained as full-body circuits with kettlebells, ' +
          'ropes, boxes and suspension straps. Strength that shows up outside the gym.',
    forYou: 'Anyone who wants one session to cover everything',
  },
  {
    day: 0, dayName: 'Sunday', name: 'Cardio Blast', time: '7:30 PM',
    desc: 'Interval burnout to close the week',
    long: 'Short, hard intervals across the cardio deck and the open floor, with the rest ' +
          'periods kept honest. Forty-five minutes, and the week is done.',
    forYou: 'Anyone chasing a hard finish to the week',
  },
]

// Opening hours as minutes past midnight, keyed by JS weekday (0 = Sunday).
// Two slots a day: the morning session and the evening session.
export const hours = {
  0: { name: 'Sunday',    label: '5:30 – 11 am · 4 – 10 pm',   slots: [[330, 660], [960, 1320]] },
  1: { name: 'Monday',    label: '5:30 – 11 am · 4 – 10 pm',   slots: [[330, 660], [960, 1320]] },
  2: { name: 'Tuesday',   label: '5:30 – 11 am · 4 – 10 pm',   slots: [[330, 660], [960, 1320]] },
  3: { name: 'Wednesday', label: '5:30 – 11 am · 4 – 10 pm',   slots: [[330, 660], [960, 1320]] },
  4: { name: 'Thursday',  label: '5 – 11 am · 4 – 10:30 pm',   slots: [[300, 660], [960, 1350]] },
  5: { name: 'Friday',    label: '5:30 – 11 am',               slots: [[330, 660]] },
  6: { name: 'Saturday',  label: '5:30 – 11 am · 4 – 10 pm',   slots: [[330, 660], [960, 1320]] },
}

// Monday-first for display; the object above stays keyed by JS weekday.
export const hoursOrder = [1, 2, 3, 4, 5, 6, 0]
