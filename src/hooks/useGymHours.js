import { useEffect, useState } from 'react'
import { hours } from '../data/site.js'

const IST_OFFSET_MIN = 330
const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

/** 990 -> "4:30 PM" */
function formatMinutes(m) {
  const h = Math.floor(m / 60)
  const mm = m % 60
  const suffix = h >= 12 ? 'PM' : 'AM'
  const h12 = h % 12 || 12
  return `${h12}${mm ? `:${String(mm).padStart(2, '0')}` : ''} ${suffix}`
}

/** "Now" in IST, so the status is correct no matter where the visitor is. */
function nowInIST() {
  const d = new Date()
  return new Date(d.getTime() + d.getTimezoneOffset() * 60000 + IST_OFFSET_MIN * 60000)
}

function resolve() {
  const now = nowInIST()
  const day = now.getDay()
  const minutes = now.getHours() * 60 + now.getMinutes()
  const slots = hours[day]?.slots ?? []

  const current = slots.find(([open, close]) => minutes >= open && minutes < close)
  if (current) {
    return { day, isOpen: true, label: `Open now · closes ${formatMinutes(current[1])}`, short: 'Open now' }
  }

  const nextToday = slots.find(([open]) => minutes < open)
  if (nextToday) {
    const label = `Closed · opens ${formatMinutes(nextToday[0])}`
    return { day, isOpen: false, label, short: `Opens ${formatMinutes(nextToday[0])}` }
  }

  // Nothing left today — walk forward to the next day that has hours.
  let d = day
  for (let i = 0; i < 7; i += 1) {
    d = (d + 1) % 7
    if (hours[d]?.slots?.length) break
  }
  const when = d === (day + 1) % 7 ? 'tomorrow' : DAY_NAMES[d]
  const opens = formatMinutes(hours[d].slots[0][0])
  return { day, isOpen: false, label: `Closed · opens ${opens} ${when}`, short: `Opens ${opens} ${when}` }
}

/** Live open/closed status plus today's weekday index, refreshed every minute. */
export function useGymHours() {
  const [status, setStatus] = useState(resolve)

  useEffect(() => {
    const id = setInterval(() => setStatus(resolve()), 60000)
    return () => clearInterval(id)
  }, [])

  return status
}
