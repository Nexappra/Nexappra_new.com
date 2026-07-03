import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Contact.css';

const PROJECT_TYPES = [
  { id: 'web-app', title: 'Web Application', desc: 'Custom web platforms & portals', icon: '💻' },
  { id: 'mobile-app', title: 'Mobile App', desc: 'iOS & Android applications', icon: '📱' },
  { id: 'ai-solution', title: 'AI Solution', desc: 'Machine learning & AI integrations', icon: '🤖' },
  { id: 'saas', title: 'SaaS Product', desc: 'Scalable software as a service', icon: '☁️' },
];

const BUDGETS = [
  { id: '5k-10k', title: '$5k - $10k', desc: 'MVP or small projects' },
  { id: '10k-25k', title: '$10k - $25k', desc: 'Standard business applications' },
  { id: '25k-50k', title: '$25k - $50k', desc: 'Complex platforms' },
  { id: '50k+', title: '$50k+', desc: 'Enterprise solutions' },
];

const initialForm = {
  projectType: '',
  budget: '',
  message: '',
  name: '',
  email: '',
};

export default function Contact() {
  const sectionRef = useScrollAnimation();
  const [form, setForm] = useState(initialForm);
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelect = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep((p) => Math.min(p + 1, totalSteps));
  const prevStep = () => setStep((p) => Math.max(p - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We received your project requirements and will get back to you soon.');
    setForm(initialForm);
    setStep(1);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="onboarding__step-panel">
            <h3 className="step-title">What are you looking to build?</h3>
            <p className="step-subtitle">Select the type of project that best fits your needs.</p>
            <div className="options-grid">
              {PROJECT_TYPES.map((pt) => (
                <div
                  key={pt.id}
                  className={`option-card ${form.projectType === pt.id ? 'selected' : ''}`}
                  onClick={() => handleSelect('projectType', pt.id)}
                >
                  <span className="option-icon" aria-hidden="true">{pt.icon}</span>
                  <h4 className="option-title">{pt.title}</h4>
                  <p className="option-desc">{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="onboarding__step-panel">
            <h3 className="step-title">What is your estimated budget?</h3>
            <p className="step-subtitle">This helps us propose the best solution for your resources.</p>
            <div className="options-grid">
              {BUDGETS.map((b) => (
                <div
                  key={b.id}
                  className={`option-card ${form.budget === b.id ? 'selected' : ''}`}
                  onClick={() => handleSelect('budget', b.id)}
                >
                  <h4 className="option-title">{b.title}</h4>
                  <p className="option-desc">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="onboarding__step-panel">
            <h3 className="step-title">Tell us more about the project</h3>
            <p className="step-subtitle">Provide any specific requirements, features, or references.</p>
            <div className="form-grid">
              <div className="contact__field">
                <label htmlFor="contact-message" className="contact__label">Project Details</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="contact__input contact__textarea"
                  placeholder="Describe your vision, target audience, and key features..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="onboarding__step-panel">
            <h3 className="step-title">Your Contact Details</h3>
            <p className="step-subtitle">How can we reach out to you with our proposal?</p>
            <div className="form-grid two-cols">
              <div className="contact__field">
                <label htmlFor="contact-name" className="contact__label">Full Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className="contact__input"
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="contact-email" className="contact__label">Email Address</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="contact__input"
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const stepsInfo = [
    { num: 1, label: 'Project Type' },
    { num: 2, label: 'Budget' },
    { num: 3, label: 'Details' },
    { num: 4, label: 'Contact' },
  ];

  const getLeftPanelText = () => {
    switch(step) {
      case 1: return { title: "Let's Build Something Extraordinary", desc: "Share your vision with us, and our team of experts will help you bring it to life." };
      case 2: return { title: "Aligning on Expectations", desc: "Knowing your budget ensures we architect a solution that maximizes your ROI." };
      case 3: return { title: "The Devil is in the Details", desc: "The more we know about your goals and users, the better we can tailor our approach." };
      case 4: return { title: "Almost There!", desc: "Leave your details and we'll reach out within 24 hours to schedule a discovery call." };
      default: return { title: "Start Your Project", desc: "Let's discuss your project and create something extraordinary together." };
    }
  };

  const currentLeftInfo = getLeftPanelText();

  return (
    <section id="contact" className="section contact" ref={sectionRef}>
      <div className="container reveal">
        
        {/* Onboarding UI Box */}
        <div className="onboarding-container">
          
          {/* Left Sidebar */}
          <div className="onboarding__sidebar">
            <div className="onboarding__sidebar-bg" aria-hidden="true" />
            <div className="onboarding__sidebar-overlay" aria-hidden="true" />
            
            <div className="onboarding__sidebar-content">
              <div>
                <div className="onboarding__step-indicator">Step {step} of {totalSteps}</div>
                <h2 className="onboarding__headline">{currentLeftInfo.title}</h2>
                <p className="onboarding__desc">{currentLeftInfo.desc}</p>
              </div>

              <div className="onboarding__progress">
                {stepsInfo.map((s) => (
                  <div 
                    key={s.num} 
                    className={`progress-step ${step === s.num ? 'active' : ''} ${step > s.num ? 'completed' : ''}`}
                  >
                    <div className="step-circle">
                      {step > s.num ? '✓' : s.num}
                    </div>
                    <span className="step-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content Form Area */}
          <div className="onboarding__content">
            <form 
              onSubmit={step === totalSteps ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }} 
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              
              {renderStepContent()}

              <div className="onboarding__actions">
                {step > 1 ? (
                  <button type="button" className="btn btn-prev" onClick={prevStep}>
                    ← Back
                  </button>
                ) : <div />}
                
                {step < totalSteps ? (
                  <button 
                    type="button" 
                    className="btn btn-primary btn-next" 
                    onClick={nextStep}
                    disabled={
                      (step === 1 && !form.projectType) || 
                      (step === 2 && !form.budget)
                    }
                  >
                    Next Step →
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary btn-next" disabled={!form.name || !form.email}>
                    Submit Request ✓
                  </button>
                )}
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
