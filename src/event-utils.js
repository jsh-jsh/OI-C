
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T12:00:00'
  },
  {
    id: createEventId(),
    title: 'Codeforces Round 914 (Div. 2)',
    start: '2023-12-10 T00:05:00',
    url: 'https://codeforces.com/contest/1904',
    editable: 'false'
  }
]

export function createEventId() {
  return String(eventGuid++)
}
