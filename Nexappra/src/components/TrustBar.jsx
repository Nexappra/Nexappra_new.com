import { useEffect, useRef } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { animateCounter } from '../utils/animations';
import './TrustBar.css';

/* Simple SVG text logos */
const LOGOS = [
  { name: 'TechFlow', color: '#4ade80' },
  { name: 'DataSync', color: '#06b6d4' },
  { name: 'CloudNex', color: '#8b5cf6' },
  { name: 'AppForge', color: '#f59e0b' },
  { name: 'CyberCore', color: '#ef4444' },
  { name: 'InnoVex', color: '#ec4899' },
];

const STATS = [
  { value: 150, suffix: '+', label: 'Projects Completed' },
  { value: 50, suffix: 'M+', label: 'Users Served' },
  { value: 99, suffix: '%', label: 'Success Rate' },
];

function LogoSVG({ name, color }) {
  return (
    <svg viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={name}>
      <text x="60" y="20" textAnchor="middle" fill={color} fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700" letterSpacing="0.5">
        {name}
      </text>
    </svg>
  );
}

export default function TrustBar() {
  const sectionRef = useScrollAnimation();
  const statsRef = useRef(null);
  const hasAnimated = useRef(false);

  /* Animate counters when stats enter viewport */
  useEffect(() => {
    const statsEl = statsRef.current;
    if (!statsEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            const numberEls = statsEl.querySelectorAll('.trust-bar__stat-number');
            STATS.forEach((stat, i) => {
              if (numberEls[i]) {
                animateCounter(numberEls[i], stat.value, 2, stat.suffix);
              }
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(statsEl);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="trust-bar section" id="trust-bar" ref={sectionRef}>
      <div className="container">
        {/* Client logos */}
        <div className="trust-bar__logos reveal" id="trust-logos">
          {LOGOS.map(({ name, color }) => (
            <div className="trust-bar__logo" key={name} id={`trust-logo-${name.toLowerCase()}`}>
              <LogoSVG name={name} color={color} />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="trust-bar__stats" ref={statsRef} id="trust-stats">
          {STATS.map(({ suffix, label }, idx) => (
            <div
              className={`trust-bar__stat glass-card reveal delay-${idx + 1}`}
              key={label}
              id={`trust-stat-${idx}`}
            >
              <div className="trust-bar__stat-number">0{suffix}</div>
              <div className="trust-bar__stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
