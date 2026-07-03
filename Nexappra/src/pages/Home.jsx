import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Stats from '../components/Stats';
import WhyChooseUs from '../components/WhyChooseUs';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <div className="page-transition">
      <Hero />
      <TrustBar />
      <Stats />
      <WhyChooseUs />
      <CaseStudies />
      <Testimonials />
      <Pricing />
      <FAQ />
    </div>
  );
}
