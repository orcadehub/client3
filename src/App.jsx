import React from 'react';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Problems from '@/components/sections/Problems';
import About from '@/components/sections/About';
import VisionMission from '@/components/sections/VisionMission';
import Team from '@/components/sections/Team';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import { Toaster } from '@/components/ui/toaster';
import Partners from './components/sections/Partners';

function App() {
  return (
   

      <div className="min-h-screen bg-white text-slate-800">
        <Header />
        <main>
          <Hero />
          <Problems />
          <About />
          <VisionMission />
          <Partners />
          <Team />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
  );
}

export default App;
