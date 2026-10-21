import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App.jsx'
import { getSeo, headToString } from './seo.js'
import { routes } from './routes.js'

export const routePaths = routes.map((r) => r.path)

export function render(url) {
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  )
  return { html, head: headToString(getSeo(url)) }
}
