import Hero from './components/home/hero';
import Services from './components/home/services';
import Process from './components/home/process';
import Plans from './components/home/plans';
import About from './components/home/about';
import CTA from './components/home/cta';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <Hero />

      <Services />

      <Process />

      <Plans />

      <About />

      <CTA />
    </div>
  );
}