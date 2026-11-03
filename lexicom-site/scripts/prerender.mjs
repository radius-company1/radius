import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { render, pages, pageMeta, canonicalPath, origin, serializeStructuredData } from '../.prerender/entry-server.js';
const launch = process.argv.includes('--launch');
const template = readFileSync('dist/index.html', 'utf8');
const escape = s => s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
for (const path of [...pages.map(p => canonicalPath(p.canonicalPath)), '/404/', ...(!launch ? ['/design-preview/'] : [])]) {
 const meta = pageMeta(path);
 const indexable = launch && path !== '/404/';
 const head = `<title>${escape(meta.title)}</title><meta name="description" content="${escape(meta.description)}"><meta name="robots" content="${indexable ? 'index,follow' : 'noindex,follow'}"><link rel="canonical" href="${origin + path}"><meta property="og:type" content="website"><meta property="og:locale" content="ru_RU"><meta property="og:site_name" content="Lexicom"><meta property="og:title" content="${escape(meta.title)}"><meta property="og:description" content="${escape(meta.description)}"><meta property="og:url" content="${origin + path}"><meta property="og:image" content="${origin}/og-image.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">`;
 const jsonLd = serializeStructuredData(path);
 const structuredHead = jsonLd ? `<script id="seo-structured-data" type="application/ld+json">${jsonLd}</script>` : '';
 const dir = 'dist' + (path === '/404/' ? '/' : path);
 mkdirSync(dir, {recursive:true});
 const body = render(path);
 writeFileSync(dir + (path === '/404/' ? '404.html' : 'index.html'), template.replace('<!--seo-head-->', head + structuredHead).replace('<!--app-html-->', body));
}
writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${launch ? pages.map(p=>`<url><loc>${origin}${canonicalPath(p.canonicalPath)}</loc></url>`).join('') : ''}</urlset>`);
writeFileSync('dist/robots.txt', launch ? `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n` : 'User-agent: *\nAllow: /\n# Preview pages carry noindex; crawling must stay allowed to read it.\n');
writeFileSync('dist/.nojekyll', '');
console.log(`Prerendered ${pages.length} pages + 404; launch=${launch}`);
