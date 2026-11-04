from urllib.request import Request,urlopen
from urllib.error import HTTPError
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
import json,re,hashlib
urls=['https://lexicom.ai/','http://lexicom.ai/','https://www.lexicom.ai/','https://lexicom.ai/robots.txt','https://lexicom.ai/sitemap.xml','https://lexicom.ai/company/','https://lexicom.ai/price.php','https://lexicom.ai/distributives/documentation.zip','https://radius-company1.github.io/radius/lexicom/','https://radius-company1.github.io/radius/lexicom/mfc/','https://radius-company1.github.io/radius/lexicom/privacy/','https://radius-company1.github.io/radius/lexicom/consent/','https://radius-company1.github.io/radius/lexicom/cookies/','https://radius-company1.github.io/radius/lexicom/does-not-exist-audit/','https://reestr.digital.gov.ru/','https://kemerovo-news.ru/other/2026/11/03/54503.html']
def check(url):
 result={'url':url}
 try:
  with urlopen(Request(url,method='HEAD' if url.endswith('.zip') else 'GET',headers={'User-Agent':'Lexicom-site-review'}),timeout=25) as r:
   body=r.read();result.update(status=r.status,finalUrl=r.url,headers={k:v for k,v in r.headers.items() if k.lower() in ['content-type','content-length','server','cache-control','content-security-policy','strict-transport-security','x-content-type-options','referrer-policy','set-cookie','x-robots-tag']})
   if '/radius/lexicom/' in url and 'does-not' not in url:
    rel=url.split('/radius/lexicom/')[1]+'index.html';p=Path('/Users/romaborovik/Desktop/lexicom_landing/projects/tula/lexicom')/rel;result['matchesRelease']=body==p.read_bytes()
   if url.endswith(('robots.txt','sitemap.xml')):result['body']=body.decode()
   else:
    t=body.decode(errors='replace');result['title']=re.findall('<title>(.*?)</title>',t,re.S);result['robots']=re.findall('name="robots" content="([^"]+)"',t)
 except HTTPError as e:result.update(status=e.code,error=str(e))
 except Exception as e:result['error']=str(e)
 return result
with ThreadPoolExecutor(max_workers=6)as pool: rows=list(pool.map(check,urls))
Path('/tmp/lexicom-post-release-review-2026-11-04/public-http.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2))
for r in rows:print(r['url'],r.get('status'),r.get('error',''),r.get('matchesRelease',''))
