/** Resolve a file inside /public respecting Vite's `base` option. */
export const asset = (path) => `${import.meta.env?.BASE_URL ?? '/'}${path.replace(/^\//, '')}`
