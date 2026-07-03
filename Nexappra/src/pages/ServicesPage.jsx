import React from 'react';
import Services from '../components/Services';
import Process from '../components/Process';
import TechStack from '../components/TechStack';

export default function ServicesPage() {
  return (
    <div className="page-transition" style={{ paddingTop: '80px' }}>
      <div className="container" style={{ textAlign: 'center', margin: '4rem auto 2rem' }}>
        <h1 className="section-title">Our Services & Process</h1>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          We provide end-to-end software development, from ideation and UX design to complex engineering and scalable deployments.
        </p>
      </div>
      <Services />
      <Process />
      <TechStack />
    </div>
  );
}
