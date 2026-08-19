import { useEffect } from 'react'
import type { RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { anim } from './classNames'
import { lenisStore } from './lenisStore'

gsap.registerPlugin(ScrollTrigger)

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Wires Lenis smooth scrolling + the GSAP reveal/parallax/counter timelines
 * for the landing page. All animations are scoped to `rootRef`.
 */
export function useLandingAnimations(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    lenisStore.current = lenis
    const updateScrollTrigger = () => ScrollTrigger.update()
    const tick = (time: number) => lenis.raf(time * 1000)

    lenis.on('scroll', updateScrollTrigger)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    const reduced = prefersReducedMotion()

    const ctx = gsap.context(() => {
      if (reduced) return

      /* ---- hero intro ---- */
      const hero = root.querySelector(`.${anim.hero}`)
      if (hero) {
        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .from(`.${anim.line}`, { yPercent: 112, duration: 1.05, stagger: 0.11 })
          .from(
            `.${anim.heroMedia}`,
            { xPercent: 14, opacity: 0, rotate: 3.2, duration: 1.25 },
            0.15,
          )
          .from(
            hero.querySelectorAll(`.${anim.rise}`),
            { y: 26, opacity: 0, duration: 0.8, stagger: 0.08 },
            0.35,
          )
      }

      /* ---- breathing halos ---- */
      gsap.utils.toArray<HTMLElement>(`.${anim.halo}`).forEach((halo, i) => {
        gsap.to(halo, {
          scale: 1.14,
          opacity: 0.72,
          duration: 4.6 + i * 0.7,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      })

      /* ---- section reveals ---- */
      gsap.utils.toArray<HTMLElement>(`.${anim.section}`).forEach((section) => {
        if (section === hero) return
        const items = section.querySelectorAll(`.${anim.rise}`)
        if (!items.length) return
        gsap.from(items, {
          y: 34,
          opacity: 0,
          duration: 0.85,
          ease: 'power3.out',
          stagger: 0.07,
          scrollTrigger: { trigger: section, start: 'top 78%' },
        })
      })

      /* ---- parallax media ---- */
      gsap.utils.toArray<HTMLElement>(`.${anim.parallax}`).forEach((el) => {
        gsap.to(el, {
          yPercent: -9,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })

      /* ---- counters ---- */
      gsap.utils.toArray<HTMLElement>(`.${anim.count}`).forEach((el) => {
        const target = Number.parseFloat(el.dataset.to ?? '0')
        const state = { value: 0 }
        gsap.to(state, {
          value: target,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
          onUpdate: () => {
            el.textContent = String(Math.round(state.value))
          },
        })
      })

      ScrollTrigger.refresh()
    }, root)

    return () => {
      ctx.revert()
      gsap.ticker.remove(tick)
      lenis.off('scroll', updateScrollTrigger)
      lenis.destroy()
      lenisStore.current = null
    }
  }, [rootRef])
}
