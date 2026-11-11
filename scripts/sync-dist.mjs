// Copies the freshly built site (react-app/dist) into the repository root,
// so Hostinger's GitHub deploy (which does not run a build) serves the new version.
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve('.')
const dist = path.join(root, 'react-app', 'dist')
if (!fs.existsSync(path.join(dist, 'index.html'))) {
  console.error('react-app/dist not found. Run "npm run build" first.')
  process.exit(1)
}
for (const name of fs.readdirSync(dist)) {
  const target = path.join(root, name)
  fs.rmSync(target, { recursive: true, force: true }) // remove old copy so no stale files stay behind
  fs.cpSync(path.join(dist, name), target, { recursive: true })
}
console.log('Synced', fs.readdirSync(dist).length, 'items from react-app/dist into the repository root.')
