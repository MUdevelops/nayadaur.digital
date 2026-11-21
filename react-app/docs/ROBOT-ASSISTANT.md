# NayaDaur robot guide
Sleeping robot bottom-right. Click/tap/Enter/Space wakes it (sound + music need that gesture). Roman Urdu copy only.
- `src/components/RobotLoader.jsx`: lazy load after idle, error guard, nothing on the server.
- `robot/RobotAssistant.jsx`: wake/sleep, speech bubble, tour engine, a11y. `robot/robot.css`: all styles, `rb-` prefix.
- `robot/audio.js`: Web Audio (theme loop 0.25 gain, fx gains, mute in localStorage `nd-rb-muted`, fades, tab-hidden fade).
- `robot/tour.js`: ALL copy (UI labels, intro, funny tap lines with their looks (FUNNY), hint, steps). Edit text here only.
- `public/assets/robot/*.webp` sprites, `public/assets/robot/audio/*` sounds.
Esc = stop and sleep. 2 min idle = goodbye. Reduced motion: no bob, typewriter or smooth scroll. Remove `<RobotLoader />` in Layout.jsx to turn it off.
Build: `npm ci && npm run build`
