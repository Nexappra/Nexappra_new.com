import React, { useEffect, useRef } from 'react';
import { staggerReveal } from '../utils/animations';
import { Monitor, Smartphone, Bot, Cloud } from 'lucide-react';
import './Services.css';

const SERVICES = [
  {
    title: 'Web Application Development',
    desc: 'Custom, high-performance web platforms built with React, Node.js, and modern architectures ensuring scalability and security.',
    icon: <Monitor size={32} />,
    benefits: ['Responsive Single Page Apps', 'Progressive Web Apps (PWA)', 'High-conversion UI/UX'],
    caseStudy: { client: 'FinTech Startup', result: 'Increased user retention by 45% with a new React dashboard.' }
  },
  {
    title: 'Mobile App Solutions',
    desc: 'Native and cross-platform mobile experiences that users love, engineered for flawless performance on both iOS and Android.',
    icon: <Smartphone size={32} />,
    benefits: ['React Native / Flutter', 'Offline Capabilities', 'Seamless App Store Deployment'],
    caseStudy: { client: 'Health App', result: 'Achieved 100k+ downloads in the first month post-launch.' }
  },
  {
    title: 'AI & Machine Learning',
    desc: 'Integrate generative AI, predictive models, and intelligent automation into your core business processes.',
    icon: <Bot size={32} />,
    benefits: ['Custom LLM Integrations', 'Predictive Analytics', 'Automated Workflows'],
    caseStudy: { client: 'E-commerce Platform', result: 'Boosted sales by 20% using AI-driven product recommendations.' }
  },
  {
    title: 'Cloud & SaaS Architecture',
    desc: 'End-to-end scalable infrastructure design, ensuring your SaaS product handles thousands of concurrent users smoothly.',
    icon: <Cloud size={32} />,
    benefits: ['AWS / GCP / Azure Deployment', 'Microservices Architecture', 'CI/CD Pipelines'],
    caseStudy: { client: 'Logistics SaaS', result: 'Reduced cloud infrastructure costs by 30% via optimization.' }
  }
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll('.service-card');
    staggerReveal(cards, { delay: 0.2, stagger: 0.15 });
  }, []);

  return (
    <section id="services" className="section services" ref={containerRef}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Premium Software Engineering</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We transform complex problems into elegant, scalable digital products that drive your business forward.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="service-card reveal">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              
              <div className="service-benefits">
                <div className="service-benefits-title">What you get</div>
                <ul className="service-benefits-list">
                  {service.benefits.map((benefit, bIdx) => (
                    <li key={bIdx}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="mini-case-study">
                <div className="mini-case-study-title">Case Study: {service.caseStudy.client}</div>
                <div className="mini-case-study-desc">"{service.caseStudy.result}"</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
