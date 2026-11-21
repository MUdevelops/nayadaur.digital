import { Component, lazy, Suspense, useEffect, useState } from 'react'

// The assistant is loaded after the page is interactive, so it never competes with the hero for
// bandwidth. It renders nothing on the server, which keeps the prerendered HTML unchanged.
const RobotAssistant = lazy(() => import('./robot/RobotAssistant.jsx'))

// The assistant is an extra: if anything inside it fails, the rest of the site must keep working.
class Guard extends Component {
  constructor(props) {
    super(props)
    this.state = { failed: false }
  }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  componentDidCatch() {
    document.body.classList.remove('rb-on', 'rb-open')
  }
  render() {
    return this.state.failed ? null : this.props.children
  }
}

export default function RobotLoader() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const idle = window.requestIdleCallback || ((fn) => window.setTimeout(fn, 1500))
    const cancel = window.cancelIdleCallback || window.clearTimeout
    const id = idle(() => setReady(true), { timeout: 3000 })
    return () => cancel(id)
  }, [])

  return ready ? (
    <Guard>
      <Suspense fallback={null}>
        <RobotAssistant />
      </Suspense>
    </Guard>
  ) : null
}
