
import React from 'react';
import { Helmet } from 'react-helmet';
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

function App() {
  return (
    <>
      <Helmet>
        <title>AccelMinds Solutions - Empowering Campus Recruitment Training</title>
        <meta name="description" content="AccelMinds Solutions provides top-tier technical, aptitude, and verbal trainers for Campus Recruitment Training companies. Custom applications and innovative training solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-white text-slate-800">
        <Header />
        <main>
          <Hero />
          <Problems />
          <About />
          <VisionMission />
          <Team />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;