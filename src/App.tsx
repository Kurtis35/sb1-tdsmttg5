import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import About from './components/About';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <CaseStudies />
      <Testimonials />
      <Pricing />
      <About />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;