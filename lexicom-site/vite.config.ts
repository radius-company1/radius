import { mkdirSync, copyFileSync, writeFileSync, readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

/** GitHub Pages needs a real index.html under each SPA path, or deep links load a stale/missing page. */
const SPA_ROUTES = ['mfc', '122', 'edds', 'design-preview'] as const

function spaRouteStubs(): Plugin {
  return {
    name: 'lexicom-spa-route-stubs',
    closeBundle() {
      const outDir = join(process.cwd(), 'dist')
      const indexPath = join(outDir, 'index.html')
      if (!existsSync(indexPath)) return

      const html = readFileSync(indexPath, 'utf8')
      for (const route of SPA_ROUTES) {
        const dir = join(outDir, route)
        mkdirSync(dir, { recursive: true })
        copyFileSync(indexPath, join(dir, 'index.html'))
      }
      // SPA fallback for unknown paths on GitHub Pages
      writeFileSync(join(outDir, '404.html'), html)
      // Keep Pages from running Jekyll on the publish tree when copied as-is
      writeFileSync(join(outDir, '.nojekyll'), '')
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spaRouteStubs()],
  base: '/radius/lexicom/',
})
