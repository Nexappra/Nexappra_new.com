import React, { useEffect, useRef } from 'react';
import { textReveal, staggerReveal } from '../utils/animations';
import './Pages.css';

const TEAM = [
  {
    name: 'Ali Khan',
    role: 'CEO & Lead Architect',
    image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=400',
    desc: 'Passionate about bridging the gap between business and bleeding-edge tech. Ali leads the overall vision.',
  },
  {
    name: 'Sara Ahmed',
    role: 'Head of AI Engineering',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    desc: 'Machine learning expert who loves solving impossible problems and optimizing AI models.',
  },
  {
    name: 'Omar Farooq',
    role: 'Lead UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    desc: 'Crafting pixel-perfect, human-centric experiences is his true calling.',
  },
  {
    name: 'Zoya Rahman',
    role: 'Senior Frontend Developer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    desc: 'React wizard ensuring our applications are fast, scalable, and responsive.',
  }
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll('.team-card');
    staggerReveal(cards, { delay: 0.2, stagger: 0.15 });
  }, []);

  return (
    <div className="page-transition about-page" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container" ref={containerRef}>
        
        {/* Intro */}
        <div className="about-intro" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 5rem' }}>
          <span className="section-label">Our Story</span>
          <h1 className="section-title">Innovating at the Speed of Light</h1>
          <p className="section-subtitle" style={{ margin: '1rem auto' }}>
            At NexAppra, we believe that software should be beautiful, robust, and intuitive.
            We started with a simple mission: to help enterprises and startups build products that matter.
            Today, we are a global team of visionaries, engineers, and creatives pushing the boundaries of the digital world.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-section">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Meet the Minds</h2>
          <div className="team-grid">
            {TEAM.map((member, idx) => (
              <div key={idx} className="team-card glass-card reveal">
                <div className="team-image-wrapper">
                  <img src={member.image} alt={member.name} className="team-image" />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role text-gradient">{member.role}</p>
                  <p className="team-desc">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
