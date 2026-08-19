import type Lenis from 'lenis'

/**
 * Module-level handle to the single Lenis instance created by
 * `useLandingAnimations`, so UI code (overlays, drawers) can pause/resume
 * smooth scrolling without prop-drilling the instance.
 */
export const lenisStore: { current: Lenis | null } = { current: null }
