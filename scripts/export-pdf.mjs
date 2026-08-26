import { chromium } from "playwright-core";
import path from "path";
import { pathToFileURL } from "url";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const html = path.join(root, "deck-print.html");
const out = path.join(root, "assets", "radius-tula-bezopasnyy-gorod.pdf");

fs.mkdirSync(path.dirname(out), { recursive: true });

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage();
await page.goto(pathToFileURL(html).href, { waitUntil: "networkidle", timeout: 60000 });
await page.emulateMedia({ media: "print" });
await page.pdf({
  path: out,
  printBackground: true,
  preferCSSPageSize: true,
  width: "13.33333in",
  height: "7.5in",
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});
await browser.close();
console.log("OK", out, fs.statSync(out).size);
