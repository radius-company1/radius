import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {spawn} from 'node:child_process';
import {once} from 'node:events';
import { pages, canonicalPath } from '../.prerender/entry-server.js';
const server=spawn(process.execPath,['scripts/serve-static.mjs'],{env:{...process.env,PORT:'5241'},stdio:['ignore','pipe','inherit']});
try{
 await Promise.race([once(server.stdout,'data'),once(server,'exit').then(()=>{throw Error('Verification server failed to start')})]);
 const base='http://127.0.0.1:5241';
 const sitemap=readFileSync('dist/sitemap.xml','utf8');
 const paths=[...sitemap.matchAll(/<loc>https:\/\/lexicom.ai([^<]*)<\/loc>/g)].map(m=>m[1]);
 const expected=pages.map(page=>canonicalPath(page.canonicalPath));
 assert.deepEqual([...paths].sort(),[...expected].sort());
 assert.equal(new Set(paths).size,expected.length);
 const titles=new Set(),descriptions=new Set();
 for(const path of paths){
  const res=await fetch(base+path);assert.equal(res.status,200,path);
  const html=await res.text();const title=html.match(/<title>(.*?)<\/title>/s)?.[1];const desc=html.match(/name="description" content="([^"]+)"/)?.[1];
  const ids=[...html.matchAll(/\sid="([^"]+)"/g)].map(match=>match[1]);
  assert.equal(new Set(ids).size,ids.length,'Duplicate element id: '+path);
  assert(title&&desc);titles.add(title);descriptions.add(desc);
  assert(html.includes(`rel="canonical" href="https://lexicom.ai${path}"`),path);
  assert(html.includes(`property="og:url" content="https://lexicom.ai${path}"`));
  const schemaMatch=html.match(/<script id="seo-structured-data" type="application\/ld\+json">(.*?)<\/script>/s);
  assert(schemaMatch, 'Missing structured data: '+path);
  const schema=JSON.parse(schemaMatch[1]);
  assert.equal(schema['@graph'][0].url,'https://lexicom.ai'+path);
  assert.equal(schema['@graph'][0].name,title);
  assert.equal(schema['@graph'].some(node=>node['@type']==='Organization'),path==='/');
  assert(html.includes('content="index,follow"'));assert.match(html,/<h1[\s>]/);assert(html.length>10000);assert(!html.includes('<!--app-html-->'));
  assert(!html.includes('/radius/lexicom/'));
  for(const [,asset] of html.matchAll(/(?:src|href)="(\/(?:assets\/[^"#]+|favicon.svg|og-image.png))"/g))assert(existsSync('dist'+asset),asset);
  if(path!=='/'){const redirect=await fetch(base+path.slice(0,-1),{redirect:'manual'});assert.equal(redirect.status,301);assert.equal(redirect.headers.get('location'),path)}
  const index=await fetch(base+path+'index.html',{redirect:'manual'});assert.equal(index.status,301);assert.equal(index.headers.get('location'),path);
 }
 assert.equal(titles.size,expected.length);assert.equal(descriptions.size,expected.length);
 for(const path of ['/unknown-seo-check/','/products/unknown/','/design-preview/']){const res=await fetch(base+path);assert.equal(res.status,404);const html=await res.text();assert(html.includes('404 —'));assert(html.includes('noindex,follow'))}
 assert.match(readFileSync('dist/robots.txt','utf8'),/Sitemap: https:\/\/lexicom.ai\/sitemap.xml/);
 assert(existsSync('dist/og-image.png'));assert(existsSync('dist/favicon.svg'));
 console.log(`PASS: ${paths.length} static pages, unique metadata/schema/assets, ${paths.length-1} slash + ${paths.length} index redirects, 3 real 404s, sitemap/robots.`);
}finally{server.kill()}
