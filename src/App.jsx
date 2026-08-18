import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Showcase from './components/Showcase';
import Demos from './components/Demos';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#0a0a0c] min-h-screen font-sans text-gray-100 selection:bg-[#c68b2a] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <Showcase />
        <Demos />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}