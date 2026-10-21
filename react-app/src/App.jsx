import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import { routes, NotFoundPage } from './routes.js'

export default function App() {
  return (
    <Layout>
      <Routes>
        {routes.map(({ path, Page }) => (
          <Route key={path} path={path} element={<Page />} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}
