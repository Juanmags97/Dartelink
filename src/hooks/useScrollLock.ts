import { useEffect } from 'react'
import { lenisStore } from '../animation/lenisStore'

/**
 * Freezes page scrolling while `locked` is true.
 * Stops Lenis (when present) and falls back to locking the document element
 * so native scrolling and iOS rubber-banding are blocked too.
 */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return

    const lenis = lenisStore.current
    const root = document.documentElement
    const previousOverflow = root.style.overflow

    lenis?.stop()
    root.style.overflow = 'hidden'

    return () => {
      root.style.overflow = previousOverflow
      lenis?.start()
    }
  }, [locked])
}
