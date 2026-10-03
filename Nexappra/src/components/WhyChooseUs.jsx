import useScrollAnimation from '../hooks/useScrollAnimation';
import './WhyChooseUs.css';

const features = [
  {
    id: 'feature-speed',
    title: 'Lightning Speed',
    description: 'We deliver projects 2x faster without compromising quality.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'feature-scale',
    title: 'Infinite Scalability',
    description: 'Architecture built to handle millions of users from day one.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 'feature-tech',
    title: 'Modern Tech Stack',
    description: 'React, Node.js, Python, AWS — always cutting-edge.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline points="16,18 22,12 16,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="8,6 2,12 8,18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="14" y1="4" x2="10" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'feature-client',
    title: 'Client-First Approach',
    description: 'Transparent communication, weekly demos, and your vision first.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="why-us" className="section why-us" ref={sectionRef}>
      <div className="container why-us__layout">
        {/* Left column — features */}
        <div className="why-us__content reveal-left">
          <span className="section-label">Why NexAppra</span>
          <h2 className="section-title">
            Why Clients <span className="text-gradient">Choose Us</span>
          </h2>

          <ul className="why-us__features">
            {features.map((feat, i) => (
              <li
                key={feat.id}
                id={feat.id}
                className={`why-us__feature reveal delay-${i + 1}`}
              >
                <div className="why-us__feature-icon">{feat.icon}</div>
                <div className="why-us__feature-text">
                  <h3 className="why-us__feature-title">{feat.title}</h3>
                  <p className="why-us__feature-desc">{feat.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column — decorative visual */}
        <div className="why-us__visual reveal-right" aria-hidden="true">
          <div className="why-us__orb-container">
            <div className="why-us__glass-layer why-us__glass-1"></div>
            <div className="why-us__glass-layer why-us__glass-2"></div>
            <div className="why-us__glass-layer why-us__glass-3"></div>
            <div className="why-us__orb"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
