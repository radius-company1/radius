// iPhone check in real WebKit (Safari engine): screenshots, console errors, horizontal overflow,
// and closed <details> that still reserve height (Safari-only bug).
// Usage: npm run qa:ios -- /path/ ["#section-selector"] [--base=http://localhost:5199/radius/lexicom]
// Needs the dev server (npx vite --port 5199) and WebKit: node <playwright>/cli.js install webkit
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const require = createRequire(import.meta.url);
const playwrightPath =
  process.env.PW ?? join(homedir(), '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
process.env.PLAYWRIGHT_BROWSERS_PATH ??= join(homedir(), 'Library/Caches/ms-playwright');
const { webkit, devices } = require(playwrightPath);

const args = process.argv.slice(2);
const base = (args.find((a) => a.startsWith('--base=')) ?? '--base=http://localhost:5199/radius/lexicom').slice(7);
const [path = '/', selector] = args.filter((a) => !a.startsWith('--'));
const outDir = join(homedir(), 'Desktop/lexicom-qa-ios');
mkdirSync(outDir, { recursive: true });

const browser = await webkit.launch();
const page = await browser.newPage({ ...devices['iPhone 15'] });
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
// WebKit's own video-control icons log "Button failed to load ... placard" in headless mode.
page.on('console', (m) => m.type() === 'error' && !m.text().includes('-placard') && errors.push(m.text()));

await page.goto(base + path, { waitUntil: 'networkidle' });
await page.waitForTimeout(600);

const report = await page.evaluate(() => {
  const doc = document.documentElement;
  const closedDetails = [...document.querySelectorAll('details:not([open])')]
    .map((d) => {
      const summary = d.querySelector('summary');
      const extra = d.getBoundingClientRect().height - (summary ? summary.getBoundingClientRect().height : 0);
      return { text: (summary?.textContent ?? '').trim().slice(0, 50), extra: Math.round(extra) };
    })
    .filter((d) => d.extra > 4);
  // A grid/flex item around a closed <details> should hug it; WebKit can keep the expanded height.
  const emptySpace = (el) => {
    const cs = getComputedStyle(el);
    const kids = [...el.children].filter((c) => !['absolute', 'fixed'].includes(getComputedStyle(c).position));
    if (!kids.length) return 0;
    const rects = kids.map((c) => c.getBoundingClientRect());
    const content = Math.max(...rects.map((r) => r.bottom)) - Math.min(...rects.map((r) => r.top));
    return el.getBoundingClientRect().height - content - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
  };
  const inflatedCards = [...document.querySelectorAll('details:not([open]):not(.mobile-details--section)')]
    .map((d) => {
      let el = d;
      let extra = 0;
      for (let i = 0; i < 5 && el.parentElement; i++) {
        el = el.parentElement;
        extra = Math.max(extra, emptySpace(el));
        if (['grid', 'flex'].includes(getComputedStyle(el.parentElement ?? el).display)) break;
      }
      const summary = d.querySelector('summary');
      return { text: (summary?.textContent ?? '').trim().slice(0, 50), card: String(el.className).slice(0, 60), extra: Math.round(extra) };
    })
    .filter((d) => d.extra > 40);
  return { overflowX: doc.scrollWidth - doc.clientWidth, closedDetailsWithExtraHeight: closedDetails, inflatedCards };
});

const name = (path.replace(/\W+/g, '-').replace(/^-|-$/g, '') || 'home') + (selector ? '-' + selector.replace(/\W+/g, '') : '');
if (selector) {
  await page.locator(selector).first().evaluate((n) => n.scrollIntoView({ block: 'start' }));
  await page.waitForTimeout(800);
  await page.screenshot({ path: join(outDir, `${name}.png`) });
} else {
  await page.screenshot({ path: join(outDir, `${name}.png`), fullPage: true });
}

console.log(JSON.stringify({ path, ...report, errors, screenshot: join(outDir, `${name}.png`) }, null, 2));
await browser.close();
