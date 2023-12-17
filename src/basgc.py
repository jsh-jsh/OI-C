import requests
import datetime
import random
from bs4 import BeautifulSoup
import chardet
import sys
url = 'https://contests.sdutacm.cn/contests.json'
user_agent = [
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50",
]
ips = [
  {'https':'180.96.63.186:9087','http':'118.190.95.35:9001'}
] 
response = requests.get(url)
sys.stdout=open('src/event-utils.js', 'w')
print("let eventGuid = 0")
print("let todayStr = new Date().toISOString().replace(/T.*$/, \'\') // YYYY-MM-DD of today")
print("export const INITIAL_EVENTS = [")
for i in response.json():
  print("{")
  print("  id: createEventId(),")
  print("  title: \'",i['name'],"\',")
  print("  start: ",i['start_time'].replace('-',''),",")
  print("  url: \'",i['link'],'\'',sep="")
  print("},")
print("{}]")
print("export function createEventId() {")
print("  return String(eventGuid++)}")
