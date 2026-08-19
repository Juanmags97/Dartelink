/**
 * Class hooks consumed by `useLandingAnimations`.
 * They carry no styles — only GSAP targeting semantics.
 */
export const anim = {
  /** Section wrapper: reveals its `anim.rise` children on scroll. */
  section: 'dl-sec',
  /** Element revealed with a small upward fade. */
  rise: 'dl-rise',
  /** Masked headline line, revealed with a vertical wipe. */
  line: 'dl-line',
  /** Element moved slightly against the scroll direction. */
  parallax: 'dl-par',
  /** Ambient blurred glow, breathing in a loop. */
  halo: 'dl-halo',
  /** Number counted up from 0 (needs `data-to`). */
  count: 'dl-count',
  /** Hero media block, used by the intro timeline. */
  heroMedia: 'dl-hero-media',
  /** Hero section root, used by the intro timeline. */
  hero: 'dl-hero',
} as const
