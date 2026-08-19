import { useRef } from 'react'
import { useLandingAnimations } from './animation/useLandingAnimations'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { BenefitsMarquee } from './components/sections/BenefitsMarquee'
import { StatsBar } from './components/sections/StatsBar'
import { Problem } from './components/sections/Problem'
import { Solution } from './components/sections/Solution'
import { NfcTech } from './components/sections/NfcTech'
import { Conversion } from './components/sections/Conversion'
import { Positioning } from './components/sections/Positioning'
import { Anatomy } from './components/sections/Anatomy'
import { Advantages } from './components/sections/Advantages'
import { Packs } from './components/sections/Packs'
import { CompanyCta } from './components/sections/CompanyCta'
import { FinalCta } from './components/sections/FinalCta'
import { Divider } from './components/ui/Divider'
import { WhatsAppBubble } from './components/ui/WhatsAppBubble'

function App() {
  const rootRef = useRef<HTMLDivElement>(null)
  useLandingAnimations(rootRef)

  return (
    <div ref={rootRef} className="relative w-full bg-ink">
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(180deg,#0A0A0B 0%,#07141c 22%,#0A0A0B 46%,#08131a 74%,#0A0A0B 100%)',
        }}
      />

      <Header />

      <main>
        <Hero />
        <BenefitsMarquee />
        <StatsBar />
        <Divider />
        <Problem />
        <Divider />
        <Solution />
        <Divider />
        <NfcTech />
        <Divider />
        <Conversion />
        <Positioning />
        <Anatomy />
        <Divider />
        <Advantages />
        <Divider />
        <Packs />
        <CompanyCta />
        <FinalCta />
      </main>

      <Footer />
      <WhatsAppBubble />
    </div>
  )
}

export default App
