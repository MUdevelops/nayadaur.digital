// Renders every route to static HTML so search engines and slow phones get real content.
// Output mirrors the old static site: dist/index.html, dist/services/index.html ... dist/404.html
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = path.resolve('dist')
const ssrDir = path.resolve('.ssr')
const entry = fs.readdirSync(ssrDir).find((f) => /^entry-server\.m?js$/.test(f))
const { render, routePaths } = await import(pathToFileURL(path.join(ssrDir, entry)).href)

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const write = (url, file) => {
  const { html, head } = render(url)
  let page = template.replace('<!--app-head-->', () => head).replace('<!--app-html-->', () => html)
  if (url === '/') page = page.replace('<body>', '<body class="home">')
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, page)
}

for (const url of routePaths) {
  write(url, path.join(dist, url === '/' ? 'index.html' : `${url.replace(/^\/|\/$/g, '')}/index.html`))
}
write('/404/', path.join(dist, '404.html'))

fs.rmSync(ssrDir, { recursive: true, force: true })
console.log(`Prerendered ${routePaths.length + 1} pages into dist/`)
