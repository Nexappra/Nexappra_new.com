import useScrollAnimation from '../hooks/useScrollAnimation';
import './Services.css';

const servicesData = [
  {
    id: 'service-web',
    title: 'Web Development',
    description:
      'High-performance websites and web applications built with React, Next.js, and modern frameworks.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="6" y="8" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
        <line x1="14" y1="32" x2="26" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="28" x2="20" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <polyline points="14,17 17,20 14,23" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="20" y1="23" x2="26" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'service-mobile',
    title: 'Mobile Apps',
    description:
      'Native and cross-platform mobile apps for iOS and Android with seamless UX.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="11" y="5" width="18" height="30" rx="3" stroke="currentColor" strokeWidth="2" />
        <line x1="17" y1="8" x2="23" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="30" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'service-ai',
    title: 'AI Solutions',
    description:
      'Custom AI/ML models, chatbots, and intelligent automation to transform your business.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="16" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M14 14 C14 14 17 20 20 20 C23 20 26 14 26 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="17" cy="14" r="1.5" fill="currentColor" />
        <circle cx="23" cy="14" r="1.5" fill="currentColor" />
        <path d="M12 24 L10 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M28 24 L30 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 23 L14 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 23 L26 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 24 L20 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'service-design',
    title: 'UI/UX Design',
    description:
      'User-centered design that converts. Beautiful interfaces backed by research.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M10 30 L10 26 L26 10 L30 14 L14 30 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <line x1="22" y1="14" x2="26" y2="18" stroke="currentColor" strokeWidth="2" />
        <circle cx="30" cy="28" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="30" cy="28" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'service-saas',
    title: 'SaaS Development',
    description:
      'Scalable SaaS platforms with subscription billing, multi-tenancy, and analytics.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M12 28 C6 28 6 20 12 20 C12 14 18 10 24 14 C28 10 34 14 34 20 C38 20 38 28 32 28 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <line x1="16" y1="22" x2="28" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="18" y1="26" x2="26" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="services" className="section services" ref={sectionRef}>
      <div className="container">
        <header className="services__header reveal">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">
            Services We <span className="text-gradient">Offer</span>
          </h2>
          <p className="section-subtitle">
            End-to-end digital solutions tailored to your business needs
          </p>
        </header>

        <div className="services__grid">
          {servicesData.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className={`glass-card services__card reveal delay-${index + 1}`}
            >
              <div className="services__icon-wrap">{service.icon}</div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.description}</p>
              <a href={`#${service.id}`} className="services__card-link">
                Learn more
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
