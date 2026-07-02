import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Contact.css';

const initialForm = {
  name: '',
  email: '',
  projectType: '',
  message: '',
};

export default function Contact() {
  const sectionRef = useScrollAnimation();
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We received your message and will get back to you soon.');
    setForm(initialForm);
  };

  return (
    <section id="contact" className="section contact" ref={sectionRef}>
      {/* Background decoration */}
      <div className="contact__bg-glow" aria-hidden="true" />

      <div className="container">
        <div className="contact__grid">
          {/* ---------- Left column ---------- */}
          <div className="contact__info reveal-left">
            <span className="section-label">Get In Touch</span>
            <h2 className="contact__headline">
              Start Your Project
              <br />
              <span className="text-gradient">Today</span>
            </h2>
            <p className="contact__desc">
              Ready to transform your idea into reality? Let's discuss your
              project and create something extraordinary together.
            </p>

            <address className="contact__details">
              <div className="contact__detail-item" id="contact-email-info">
                {/* Email icon */}
                <span className="contact__icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M2 6l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                <span>info@nexappra.com</span>
              </div>

              <div className="contact__detail-item" id="contact-website-info">
                {/* Globe icon */}
                <span className="contact__icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                    <ellipse cx="10" cy="10" rx="4" ry="8" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="2" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <span>nexappra.com</span>
              </div>

              <div className="contact__detail-item" id="contact-location-info">
                {/* Pin icon */}
                <span className="contact__icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2C6.7 2 4 4.7 4 8c0 4.5 6 10 6 10s6-5.5 6-10c0-3.3-2.7-6-6-6z" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <span>Remote-first, Worldwide</span>
              </div>
            </address>

            <nav className="contact__socials" aria-label="Social links">
              <a href="#" id="contact-social-linkedin" className="contact__social" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="1" y="1" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5" />
                  <text x="10" y="14.5" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="700">in</text>
                </svg>
              </a>
              <a href="#" id="contact-social-facebook" className="contact__social" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                  <text x="10" y="14.5" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="700">f</text>
                </svg>
              </a>
              <a href="#" id="contact-social-instagram" className="contact__social" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="2" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="14.5" cy="5.5" r="1" fill="currentColor" />
                </svg>
              </a>
            </nav>
          </div>

          {/* ---------- Right column ---------- */}
          <div className="contact__form-wrapper reveal-right delay-2">
            <form
              className="contact__form glass-card"
              onSubmit={handleSubmit}
              id="contact-form"
            >
              <div className="contact__field">
                <label htmlFor="contact-name" className="contact__label">
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className="contact__input"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-email" className="contact__label">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="contact__input"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-project-type" className="contact__label">
                  Project Type
                </label>
                <select
                  id="contact-project-type"
                  name="projectType"
                  className="contact__input contact__select"
                  value={form.projectType}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a project type
                  </option>
                  <option value="web-app">Web App</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="ai-solution">AI Solution</option>
                  <option value="saas">SaaS</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="contact__field">
                <label htmlFor="contact-message" className="contact__label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="contact__input contact__textarea"
                  placeholder="Tell us about your project..."
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                id="contact-submit"
                className="btn btn-primary btn-lg contact__submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
