let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
export const INITIAL_EVENTS = [
{
  id: createEventId(),
  title: ' Past ZCO Problems ',
  start:  20181104T18:30:00+00:00 ,
  url: 'https://www.codechef.com/ZCOPRAC'
},
{
  id: createEventId(),
  title: ' Past INOI Problems ',
  start:  20190104T18:30:00+00:00 ,
  url: 'https://www.codechef.com/INOIPRAC'
},
{
  id: createEventId(),
  title: ' 华中师范大学2023级程序设计新生赛 ',
  start:  20231216T02:30:00+00:00 ,
  url: 'https://ac.nowcoder.com/acm/contest/72445'
},
{
  id: createEventId(),
  title: ' 01:30, 17 December 2023 - interviews ',
  start:  20231217T01:30:00+00:00 ,
  url: 'https://csacademy.com/contest/interviews-2023-12-17-1'
},
{
  id: createEventId(),
  title: ' 02:00, 17 December 2023 - algorithms ',
  start:  20231217T02:00:00+00:00 ,
  url: 'https://csacademy.com/contest/algorithms-2023-12-17-2'
},
{
  id: createEventId(),
  title: ' Weekly Contest 376 ',
  start:  20231217T02:30:00+00:00 ,
  url: 'https://leetcode.com/contest/weekly-contest-376'
},
{
  id: createEventId(),
  title: ' 02:30, 17 December 2023 - interviews ',
  start:  20231217T02:30:00+00:00 ,
  url: 'https://csacademy.com/contest/interviews-2023-12-17-2'
},
{
  id: createEventId(),
  title: ' 03:00, 17 December 2023 - algorithms ',
  start:  20231217T03:00:00+00:00 ,
  url: 'https://csacademy.com/contest/algorithms-2023-12-17-3'
},
{
  id: createEventId(),
  title: ' 牛客周赛 Round 24 ',
  start:  20231217T11:00:00+00:00 ,
  url: 'https://ac.nowcoder.com/acm/contest/71993'
},
{
  id: createEventId(),
  title: ' AtCoder Grand Contest 065 ',
  start:  20231217T12:00:00+00:00 ,
  url: 'https://atcoder.jp/contests/agc065'
},
{
  id: createEventId(),
  title: ' Educational Codeforces Round 160 (Rated for Div. 2) ',
  start:  20231218T14:35:00+00:00 ,
  url: 'https://codeforces.com/contestRegistration/1913'
},
{
  id: createEventId(),
  title: ' Codeforces Round 916 (Div. 3) ',
  start:  20231219T14:35:00+00:00 ,
  url: 'https://codeforces.com/contestRegistration/1914'
},
{
  id: createEventId(),
  title: ' Starters 113  ',
  start:  20231220T14:30:00+00:00 ,
  url: 'https://www.codechef.com/START113'
},
{
  id: createEventId(),
  title: ' RECRUIT Nihonbashi Half Marathon 2024 Winter（AtCoder Heuristic Contest 029） ',
  start:  20231222T03:00:00+00:00 ,
  url: 'https://atcoder.jp/contests/ahc029'
},
{
  id: createEventId(),
  title: ' 牛客小白月赛84 ',
  start:  20231222T11:00:00+00:00 ,
  url: 'https://ac.nowcoder.com/acm/contest/72389'
},
{
  id: createEventId(),
  title: ' 华中农业大学第十三届程序设计竞赛（新生赛）同步赛 ',
  start:  20231223T02:00:00+00:00 ,
  url: 'https://ac.nowcoder.com/acm/contest/71344'
},
{
  id: createEventId(),
  title: ' 第二十届浙大宁波理工学院程序设计大赛（同步赛） ',
  start:  20231223T04:00:00+00:00 ,
  url: 'https://ac.nowcoder.com/acm/contest/70472'
},
{
  id: createEventId(),
  title: ' UNIQUE VISION Programming Contest 2023 Christmas (AtCoder Beginner Contest 334) ',
  start:  20231223T12:00:00+00:00 ,
  url: 'https://atcoder.jp/contests/abc334'
},
{
  id: createEventId(),
  title: ' Biweekly Contest 120 ',
  start:  20231223T14:30:00+00:00 ,
  url: 'https://leetcode.com/contest/biweekly-contest-120'
},
{
  id: createEventId(),
  title: ' Pinely Round 3 (Div. 1 + Div. 2) ',
  start:  20231223T14:35:00+00:00 ,
  url: 'https://codeforces.com/contests'
},
{
  id: createEventId(),
  title: ' 【LGR-169-Div.2】洛谷 12 月月赛 II & HCOI R1 ',
  start:  20231224T06:00:00+00:00 ,
  url: 'https://www.luogu.org/contest/149175'
},
{
  id: createEventId(),
  title: ' 牛客周赛 Round 25 ',
  start:  20231224T11:00:00+00:00 ,
  url: 'https://ac.nowcoder.com/acm/contest/72266'
},
{
  id: createEventId(),
  title: ' Starters 114 ',
  start:  20231227T14:30:00+00:00 ,
  url: 'https://www.codechef.com/START114'
},
{
  id: createEventId(),
  title: ' Codeforces Round (Div. 4) ',
  start:  20231228T14:35:00+00:00 ,
  url: 'https://codeforces.com/contests'
},
{
  id: createEventId(),
  title: ' 牛客挑战赛72 ',
  start:  20231229T11:00:00+00:00 ,
  url: 'https://ac.nowcoder.com/acm/contest/72370'
},
{
  id: createEventId(),
  title: ' 牛客2023跨年场 ',
  start:  20231231T13:00:00+00:00 ,
  url: 'https://ac.nowcoder.com/acm/contest/70257'
},
{
  id: createEventId(),
  title: ' AtCoder Beginner Contest 335 ',
  start:  20240106T12:00:00+00:00 ,
  url: 'https://atcoder.jp/contests/abc335'
},
{
  id: createEventId(),
  title: ' 2024 New Year ICPC Challenge powered by Huawei ',
  start:  20240112T07:00:00+00:00 ,
  url: 'https://codeforces.com/contestRegistration/1908'
},
{
  id: createEventId(),
  title: ' ALGO ARTIS Programming Contest 2023 Winter（AtCoder Heuristic Contest 028） ',
  start:  20240113T06:00:00+00:00 ,
  url: 'https://atcoder.jp/contests/ahc028'
},
{
  id: createEventId(),
  title: ' AtCoder Beginner Contest 336 ',
  start:  20240114T12:00:00+00:00 ,
  url: 'https://atcoder.jp/contests/abc336'
},
{
  id: createEventId(),
  title: ' 2024牛客寒假算法基础集训营1 ',
  start:  20240202T05:00:00+00:00 ,
  url: 'https://ac.nowcoder.com/acm/contest/67741'
},
{
  id: createEventId(),
  title: ' 2024牛客寒假算法基础集训营2 ',
  start:  20240205T05:00:00+00:00 ,
  url: 'https://ac.nowcoder.com/acm/contest/67742'
},
{
  id: createEventId(),
  title: ' Masters Championship-qual- ',
  start:  20240303T04:00:00+00:00 ,
  url: 'https://atcoder.jp/contests/masters-qual'
},
{}]
export function createEventId() {
  return String(eventGuid++)}
