import json,re,urllib.request,urllib.parse,concurrent.futures
from html.parser import HTMLParser
from pathlib import Path
base='http://127.0.0.1:5286'
paths=re.findall(r'<loc>https://lexicom.ai([^<]*)</loc>',Path('dist/sitemap.xml').read_text())
class Page(HTMLParser):
 def __init__(self,s):
  super().__init__();self.links=[];self.ids=[];self.meta=[];self.canonical=[];self.images=[];self.h1=0;self.headtitles=0;self.inhead=False;self.feed(s)
 def handle_starttag(self,t,a):
  a=dict(a)
  if t=='head':self.inhead=True
  if t=='title' and self.inhead:self.headtitles+=1
  if t=='h1':self.h1+=1
  if a.get('id'):self.ids.append(a['id'])
  if t=='a' and 'href'in a:self.links.append(a['href'])
  if t=='meta':self.meta.append(a)
  if t=='link' and a.get('rel')=='canonical':self.canonical.append(a.get('href'))
  if t=='img':self.images.append(a)
 def handle_endtag(self,t):
  if t=='head':self.inhead=False
pages={p:Page(urllib.request.urlopen(base+p).read().decode()) for p in paths}
out={'routes':[],'brokenTargets':[],'externalLinks':[],'contacts':[]}
for path,p in pages.items():
 out['routes'].append({'path':path,'h1':p.h1,'headTitles':p.headtitles,'canonical':p.canonical,'duplicateIds':sorted({x for x in p.ids if p.ids.count(x)>1}),'imagesWithoutAlt':[x.get('src') for x in p.images if 'alt' not in x],'description':[x['content'] for x in p.meta if x.get('name')=='description'],'robots':[x['content'] for x in p.meta if x.get('name')=='robots']})
 for href in p.links:
  url=urllib.parse.urljoin(base+path,href);u=urllib.parse.urlparse(url)
  if u.scheme in ['tel','mailto']:out['contacts'].append(href);continue
  if u.netloc not in ['127.0.0.1:5286','lexicom.ai']:out['externalLinks'].append(url);continue
  target=u.path or '/'
  if target not in pages:out['brokenTargets'].append({'path':path,'href':href,'reason':'route absent from sitemap'})
  elif u.fragment and urllib.parse.unquote(u.fragment) not in pages[target].ids:out['brokenTargets'].append({'path':path,'href':href,'reason':'anchor absent'})
out['externalLinks']=sorted(set(out['externalLinks']));out['contacts']=sorted(set(out['contacts']));out['anchorCount']=sum(len(p.links)for p in pages.values())
Path('/tmp/lexicom-post-release-review-2026-11-04/crawl.json').write_text(json.dumps(out,ensure_ascii=False,indent=2))
print(json.dumps({k:v for k,v in out.items()if k!='routes'},ensure_ascii=False,indent=2))
