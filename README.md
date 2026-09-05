# MUSCLE X FITNESS — website

React + Vite site for MUSCLE X FITNESS, A10 Suncity, Sector 54, Gurugram.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview  # serve the production build locally
```

Deploy the contents of `dist/` to any static host (Netlify, Vercel, Cloudflare Pages,
GitHub Pages, cPanel). Three real HTML files come out — `/`, `/classes/`, `/gallery/` —
so no SPA fallback rules are needed and every page is independently crawlable.

The site is served from the domain root (`base: '/'` in `vite.config.js`). To host it under
a subfolder instead, change `base` and the absolute `/#section` hrefs in `navLinks`.

## Structure

### Pages

| URL | Entry HTML | Component |
| --- | --- | --- |
| `/` | `index.html` | `src/pages/HomePage.jsx` |
| `/classes/` | `classes/index.html` | `src/pages/ClassesPage.jsx` |
| `/gallery/` | `gallery/index.html` | `src/pages/GalleryPage.jsx` |
| `/reviews/` | `reviews/index.html` | `src/pages/ReviewsPage.jsx` |
| `/visit/` | `visit/index.html` | `src/pages/VisitPage.jsx` |

Each entry HTML carries its own `<title>`, meta description, canonical, Open Graph tags and
JSON-LD — that's the point of building them as separate pages rather than client-side routes.
`/classes/` is the one aimed at "zumba classes sector 54"-style searches the homepage can't win.

```
src/
  main.jsx                  homepage root
  entries/                  roots for /classes/ and /gallery/
  pages/                    one component per page
  components/               sections, plus Layout / Nav / Icon / Reveal / Lightbox / PageHero
                            and the shared HoursTable / ContactTiles / MapBlock /
                            ReviewCard / RatingSummary used by both a section and a page
  hooks/
    useGymHours.js          IST-aware open/closed + today's weekday
    useReveal.js            IntersectionObserver fade-in
  lib/
    asset.js                URLs for /public files
    scrollToHash.js         same-page anchor scrolling that clears the sticky nav
  data/
    site.js                 address, phone, map links, hours, classes, facilities, perks
    gallery.js              26 photos with alt text and filter tags
    reviews.js              6 featured + 78 for /reviews/, plus the rating breakdown
  styles/global.css         the whole design system (tokens at the top)
public/
  img/gym-01…29.jpg         full-size photos (lightbox)
  thumb/gym-01…29.jpg       ~900px versions (page + gallery grid)
  google-reviews.json       all 152 scraped reviews, for reference
```

### Navigation

`navLinks` in `src/data/site.js` mixes real pages (`/classes/`, `/gallery/`, `/reviews/`,
`/visit/`) with section anchors written absolute (`/#about`) so the same nav works from every
page. `Nav.jsx` intercepts the anchors: if the section exists on the current page it scrolls
there directly instead of reloading the homepage. Arriving at an anchor from another page
re-runs the scroll once lazy images have reserved their space, so the landing position is
correct rather than drifting as the page fills in.

**Where an anchor lands** (`src/lib/scrollToHash.js`) is deliberate. Sections carry up to
132px of symmetric padding, so aligning the *element* under the nav puts a dead band of
padding on screen and pushes the real content off the bottom. The helper measures the
**content box** instead and centres it in the space below the nav. Sections taller than the
viewport can't be centred, so they fall back to a consistent 40px gap — which still puts
their heading at the top of the screen rather than a screen of padding.

`/reviews/` and `/visit/` are pages *as well as* homepage sections: the homepage keeps a
short version of each and links through. `HoursTable`, `ContactTiles`, `MapBlock`,
`ReviewCard` and `RatingSummary` are shared so there's one implementation, not two.

Nothing is fetched at runtime — the content ships in `src/data`, so the page has no
loading state and no API to keep alive.

## Brand

The palette is taken from the logo: brand red `#FD0213` sampled directly from the artwork,
with the monogram's brushed silver as the secondary. Tokens live at the top of
`src/styles/global.css` — `--red` for accents and display highlights, `--red-btn` (`#E8121D`)
for solid fills because it clears 4.5:1 against white button text where the pure brand red
does not.

Three logo files are generated from the supplied JPEG, with the black background keyed out
to transparency (alpha from brightness, colour un-premultiplied so the red stays saturated):

| File | Use |
| --- | --- |
| `public/logo-mark.png` | MX monogram — nav and footer lockups |
| `public/logo.png` | Full artwork including the wordmark — footer |
| `public/favicon.png` | Square 512px version — browser tab and touch icon |

`business.name` in `src/data/site.js` is the exact Google listing name (`MUSCLE X FITNESS`)
and is what schema.org and alt text use; `business.displayName` is the brand's own spelling
(`MuscleXFitness`) shown in the footer.

## Where the content came from

Everything on the page is real, pulled from the business's own Google Business Profile
(`maps.google.com/?cid=529705397292566086`, place ID `ChIJM5aZdpcfDTkRRgY7mUDkWQc`):

- **29 photos** — every image uploaded to the Google listing, downloaded at full resolution;
  26 of them are used on the site.
- **Reviews** — all 152 were captured (`public/google-reviews.json`). Six lead the homepage
  and 78 are reproduced on `/reviews/`; see below for what's left out and why.
- **Rating / count / hours / address / phone / plus code** — straight from the listing.
- **Class schedule** — transcribed from the gym's own schedule poster (`public/img/gym-27.jpg`).

Five photos were cropped, because the raw frames carried things that shouldn't be on the site:

| Photo | Cropped out |
| --- | --- |
| `gym-09` | The old L.L Fitness price card on the floor (₹9000/₹18000 and a different phone number) |
| `gym-17` | A large red "LL FITNESS" wall mural along the top of the frame |
| `gym-14` | The previous tenant's signage on the back wall |
| `gym-21` | Reception desk with a scannable QR code, an old price card and loose personal phones |
| `gym-25` | A "Shot with my Galaxy A13" camera watermark |
| `gym-28` | A water bottle filling the bottom third |

`gym-08` was dropped entirely — too blurred and badly angled to use.

## Which reviews appear

`/reviews/` reproduces the **78 four- and five-star reviews with enough text to be worth
reading**, newest first, filterable by topic (trainers, space, cleanliness, equipment,
classes, atmosphere — tags derived by keyword in the generator). The homepage shows six of
them, picked to cover every topic between them.

The other 74 are left off, and the page says so in a footnote rather than implying it shows
everything:

| Left out | Count | Why |
| --- | --- | --- |
| Under 60 characters | 37 | One-liners like "good gym" — no information |
| Names the previous business | 26 | Still say "L.L Fitness", the old tenant at this address |
| No text at all | 7 | Star rating only |
| Critical (1–2 star) | 4 | Standard for a business's own site |

The rating breakdown still shows the real distribution including the four critical reviews,
the headline figure is the genuine 4.9 from all 152, and every page links out to the Google
listing. Nothing is inflated — the selection is just editorial, the way testimonials
normally are.

One included 4-star review does say the pricing is high. It's net-positive and it stays, but
it's the obvious candidate if you'd rather trim.

## Things to update

| What | Where |
| --- | --- |
| Reviews on the homepage | `featuredReviews` in `src/data/reviews.js` |
| Reviews on `/reviews/` | `reviews` in `src/data/reviews.js` |
| Gallery photos, order and filter groups | `src/data/gallery.js` |
| Opening hours | `hours` in `src/data/site.js` (drives the table *and* the open/closed flag) |
| Class schedule | `classes` in `src/data/site.js` |
| Phone, address, map, WhatsApp | `business` in `src/data/site.js` |
| Nav items and which are pages vs anchors | `navLinks` in `src/data/site.js` |
| Where anchor links land on screen | `MIN_GAP` / `MAX_GAP` in `src/lib/scrollToHash.js` |
| Colours, type, spacing | the `:root` tokens at the top of `src/styles/global.css` |
| Logo artwork | `public/logo.png`, `public/logo-mark.png`, `public/favicon.png` |

Hours are stored as minutes past midnight and evaluated in IST regardless of the visitor's
timezone, so "Open now / Closed", the highlighted row and the "Tonight" chip are always
correct for the gym.

### Map links

All three map links resolve to the exact Google listing rather than an address search:

- **Embed** — `maps.google.com/maps?cid=…&output=embed`, which pins the business itself and
  shows its name and 4.9★ rating in the map card.
- **Directions** — the Maps URL API with `destination_place_id`, so it routes to this place
  and not a similarly-named one.
- **Open in Google Maps** — the `?cid=` URL for the Business Profile.

## Before launch

- Prices are deliberately absent — nothing verifiable was available. Add a Membership
  section once you have the plans.
- The Google listing has no website or email. `<link rel="canonical">` and the Open Graph
  tags in `index.html` use a placeholder domain; `og:image` needs a full absolute URL
  (`https://yourdomain/img/gym-24.jpg`) for link previews to work.
