import { useEffect, useLayoutEffect } from 'react'

// useLayoutEffect warns on the server, so fall back to useEffect there.
export const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
