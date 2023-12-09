
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Codeforces Round 914 (Div. 2)',
    start: '20231210T000500Z',
    url: 'https://codeforces.com/contests/1904',
    editable: 'false'
  }
  {
    id: createEventId(),
    title: 'THUPU 初赛',
    start: '20231217',
    url: 'https://signup.thupc2024.thusaac.com/',
    editable: 'false'
  }
]

export function createEventId() {
  return String(eventGuid++)
}
