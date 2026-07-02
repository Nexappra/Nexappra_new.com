import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyChooseUs />
        <CaseStudies />
        <Process />
        <TechStack />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
