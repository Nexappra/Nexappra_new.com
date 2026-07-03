import { useEffect, useRef, lazy, Suspense } from 'react';
import { textReveal, staggerReveal } from '../utils/animations';
import './Hero.css';

const ThreeScene = lazy(() => import('./ThreeScene'));

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    /* Stagger-reveal text elements on mount */
    const label = section.querySelector('.hero__label');
    const headline = section.querySelector('.hero__headline');
    const subtext = section.querySelector('.hero__subtext');
    const ctas = section.querySelector('.hero__ctas');
    const trust = section.querySelector('.hero__trust');

    if (label) textReveal(label, { delay: 0.2 });
    if (headline) textReveal(headline, { delay: 0.4 });
    if (subtext) textReveal(subtext, { delay: 0.6 });

    const staggerEls = [ctas, trust].filter(Boolean);
    if (staggerEls.length) {
      staggerReveal(staggerEls, { delay: 0.8, stagger: 0.2 });
    }
  }, []);

  return (
    <section className="hero container" id="home" ref={sectionRef}>
      {/* Background Overlay */}
      <div className="hero__overlay" aria-hidden="true" />
      
      {/* Text content */}
      <div className="hero__content">
        <span className="hero__label" id="hero-label">
          Build. Innovate. Scale.
        </span>

        <h1 className="hero__headline" id="hero-headline">
          We Build Scalable
          <span className="hero__headline-gradient">Digital Products</span>
        </h1>

        <p className="hero__subtext" id="hero-subtext">
          From concept to launch, we craft premium web apps, mobile solutions,
          and AI-powered platforms that drive growth.
        </p>

        <div className="hero__ctas" id="hero-ctas">
          <a href="#contact" className="btn btn-primary btn-lg" id="hero-cta-start">
            Get Started
          </a>
          <a href="#contact" className="btn btn-outline btn-lg" id="hero-cta-consult">
            Book Consultation
          </a>
        </div>

        <p className="hero__trust" id="hero-trust">
          <span className="hero__trust-dot" aria-hidden="true" />
          Trusted by 50+ businesses worldwide
        </p>
      </div>

      {/* 3D visual */}
      <div className="hero__visual" id="hero-visual">
        <Suspense fallback={null}>
          <ThreeScene />
        </Suspense>
      </div>
    </section>
  );
}
