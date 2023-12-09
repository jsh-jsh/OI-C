
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: '『PG』Round 2',
    start: '20231203',
    url: 'https://www.luogu.com.cn/contest/146564/',
    editable: 'false'
  },
  {
    id: createEventId(),
    title: '【LGR-168-Div.4】洛谷入门赛 #18',
    start: '20231208',
    url: 'https://www.luogu.com.cn/contest/148196/',
    editable: 'false'
  },
  {
    id: createEventId(),
    title: 'LGR-167-Div.2】复旦勰码 12 月月赛 I & RiOI Round 3',
    start: '20231209',
    url: 'https://www.luogu.com.cn/contest/147237/',
    editable: 'false'
  },
  {
    id: createEventId(),
    title: 'AtCoder Heuristic Contest 027',
    start: '20231201',
    url: 'https://atcoder.jp/contests/ahc027/',
    editable: 'false'
  },
  {
    id: createEventId(),
    title: 'LGR-167-Div.1】复旦勰码 12 月月赛 I & RiOI Round 3',
    start: '20231209',
    url: 'https://www.luogu.com.cn/contest/147239',
    editable: 'false'
  },
  {
    id: createEventId(),
    title: 'AtCoder Regular Contest 169',
    start: '20231209',
    url: 'https://atcoder.jp/contests/arc169',
    editable: 'false'
  },
  {
    id: createEventId(),
    title: 'Codeforces Round 914 (Div. 2)',
    start: '20231209',
    url: 'https://codeforces.com/contests/1904',
    editable: 'false'
  },
  {
    id: createEventId(),
    title: 'AtCoder Beginner Contest 332',
    start: '20231210',
    url: 'https://atcoder.jp/contests/abc332',
    editable: 'false'
  },
  {
    id: createEventId(),
    title: 'AtCoder Beginner Contest 333',
    start: '20231216',
    url: 'https://atcoder.jp/contests/abc333',
    editable: 'false'
  },
  {
    id: createEventId(),
    title: 'AtCoder Grand Contest 065',
    start: '20231217',
    url: 'https://atcoder.jp/contests/agc065',
    editable: 'false'
  },
  {
    id: createEventId(),
    title: 'AtCoder Heuristic Contest 029',
    start: '20231222',
    url: 'https://atcoder.jp/contests/ahc029',
    editable: 'false'
  },
  {
    id: createEventId(),
    title: 'AtCoder Beginner Contest 334',
    start: '20231223',
    url: 'https://atcoder.jp/contests/abc334',
    editable: 'false'
  },
  {
    id: createEventId(),
    title: 'THUPC 初赛',
    start: '20231217',
    url: 'https://signup.thupc2024.thusaac.com/',
    editable: 'false'
  },
  {
    id: createEventId(),
    title: 'USACO First Contest',
    start: '20231215',
    end: '20231218',
    url: 'http://usaco.org/index.php?page=contests/',
    editable: 'false'
  }
  
]

export function createEventId() {
  return String(eventGuid++)
}
