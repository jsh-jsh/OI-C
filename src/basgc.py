import requests
import datetime
import random
from bs4 import BeautifulSoup
import chardet
import sys
url = 'https://codeforces.com/api/contest.list?gym=false'
user_agent = [
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50",
]
response = requests.get(url)
print("jello")
sys.stdout=open('output.txt', 'w')
for i in range(10):
  print("{")
  print("  id: createEventId(),")
  print("  title: \'",response.json()['result'][i]['name'],"\',")
  print("  start: ",response.json()['result'][i]['startTimeSeconds'],",")
  print("  url: 'https://codeforces.com/contests/",response.json()['result'][i]['id'],sep='')
  print("},")
