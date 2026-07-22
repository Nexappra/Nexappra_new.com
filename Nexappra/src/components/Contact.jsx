import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './Contact.css';

const PROJECT_TYPES = [
  { id: 'web-app', title: 'Web Application', desc: 'Custom web platforms & portals', icon: '💻' },
  { id: 'mobile-app', title: 'Mobile App', desc: 'iOS & Android applications', icon: '📱' },
  { id: 'ai-solution', title: 'AI Solution', desc: 'Machine learning & AI integrations', icon: '🤖' },
  { id: 'saas', title: 'SaaS Product', desc: 'Scalable software as a service', icon: '☁️' },
  { id: 'ui-ux', title: 'UI/UX Design', desc: 'User-centric wireframes, prototypes & interfaces', icon: '🎨' },
  { id: 'game-dev', title: 'Game Development', desc: 'Immersive 2D/3D mobile & cross-platform games', icon: '🎮' },
  { id: 'cyber-security', title: 'Cyber Security', desc: 'Robust vulnerability testing & threat protection', icon: '🛡️' },
];

const REGIONAL_BUDGETS = {
  asia: [
    { id: '1k-3k', title: '$1k - $3k', desc: 'MVP or small projects' },
    { id: '3k-8k', title: '$3k - $8k', desc: 'Standard business applications' },
    { id: '8k-15k', title: '$8k - $15k', desc: 'Complex platforms' },
    { id: '15k+', title: '$15k+', desc: 'Enterprise solutions' },
  ],
  europe: [
    { id: '5k-10k', title: '$5k - $10k', desc: 'MVP or small projects' },
    { id: '10k-25k', title: '$10k - $25k', desc: 'Standard business applications' },
    { id: '25k-50k', title: '$25k - $50k', desc: 'Complex platforms' },
    { id: '50k+', title: '$50k+', desc: 'Enterprise solutions' },
  ]
};
const REGIONAL_COUNTRIES = {
  europe: [
    'United States', 'United Kingdom', 'Canada', 'Germany', 
    'France', 'Australia', 'Spain', 'Italy', 'Other (Western)'
  ],
  asia: [
    'Pakistan', 'India', 'United Arab Emirates', 'Saudi Arabia', 
    'Egypt', 'Nigeria', 'Kenya', 'Other (Asia/Africa)'
  ]
};

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
      case 2: {
const currentRegion = form.region;
const currentCountry = form.country; 
const availableBudgets = currentRegion ? REGIONAL_BUDGETS[currentRegion] : null;



return (
  <div className="onboarding__step-panel">
    <h3 className="step-title">What is your estimated budget?</h3>
    <p className="step-subtitle">This helps us propose the best solution for your resources.</p>
    
    {/* 🌐 1. Region Selection Dropdown */}
    <div className="contact__field region-select-wrapper">
      <label htmlFor="region-select" className="contact__label">
        Select Your Region
      </label>
      
      <div className="dropdown-container">
        <select
          id="region-select"
          name="region"
          className={`contact__input contact__select ${form.region ? 'selected' : ''}`}
          value={form.region || ''} 
          onChange={(e) => {
            handleSelect('region', e.target.value);
            handleSelect('country', ''); // Region badalne par country reset hogi
            handleSelect('budget', '');  // Region badalne par budget reset hoga
          }}
          required
        >
          <option value="" disabled className="select-option placeholder">
            -- Select Region --
          </option>
          <option value="europe" className="select-option">
            Europe / North America / Other
          </option>
          <option value="asia" className="select-option">
            Asia / Africa
          </option>
        </select>

        <div className="dropdown-arrow">
          <svg width="12" height="7" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>

    {/* 🏳️ 2. Dynamic Country Selection Dropdown (Only shows when region is selected) */}
    {currentRegion && (
      <div className="contact__field country-select-wrapper mt-4">
        <label htmlFor="country-select" className="contact__label">
          Select Your Country
        </label>
        
        <div className="dropdown-container">
          <select
            id="country-select"
            name="country"
            className={`contact__input contact__select ${form.country ? 'selected' : ''}`}
            value={form.country || ''} 
            onChange={(e) => {
              handleSelect('country', e.target.value);
              handleSelect('budget', ''); // Country badalne par budget reset hoga
            }}
            required
          >
            <option value="" disabled className="select-option placeholder">
              -- Select Country --
            </option>
            {REGIONAL_COUNTRIES[currentRegion].map((country, idx) => (
              <option key={idx} value={country.toLowerCase().replace(/\s+/g, '-')} className="select-option">
                {country}
              </option>
            ))}
          </select>

          <div className="dropdown-arrow">
            <svg width="12" height="7" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    )}

    {/* 💰 3. Dynamic Budget Options Grid (Shows ONLY when COUNTRY is selected) */}
    {currentCountry ? (
      <div className="options-grid mt-6">
        {availableBudgets.map((b) => (
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
    ) : (
      <div className="region-prompt-box mt-6">
        <p className="step-subtitle">
          Please select your region and country to view customized pricing options.
        </p>
      </div>
    )}
  </div>
);}
      case 3:
       const today = new Date().toISOString().split('T')[0];

return (
  <div className="onboarding__step-panel">
    <h3 className="step-title">Tell us more about the project</h3>
    <p className="step-subtitle">Provide any specific requirements, features, or references.</p>
    
    <div className="form-grid">
      {/* Project Details Textarea */}
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

      {/* 📅 Compact Date Picker with Icon */}
      <div className="contact__field contact__field--compact">
        <label className="contact__label">Desired Deadline</label>
        <div className="input-icon-wrapper">
          <DatePicker
            selected={form.deadline ? new Date(form.deadline) : null}
            onChange={(date) => {
              handleChange({
                target: {
                  name: 'deadline',
                  value: date ? date.toISOString().split('T')[0] : ''
                }
              });
            }}
            minDate={new Date()} 
            dateFormat="yyyy-MM-dd"
            placeholderText="Select a deadline"
            className="contact__input contact__input--compact" 
            required
          />
          {/* Calendar Icon */}
          <div className="input-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
        </div>
      </div>

      {/* 📁 Compact File Attachment Input */}
      <div className="contact__field contact__field--compact">
        <label htmlFor="project-files" className="contact__label">
          Attach Project References
        </label>
        <div className="input-icon-wrapper">
          <input
            type="file"
            id="project-files"
            name="file"
            accept=".pdf,.doc,.docx,.png,.jpg,.zip" 
            className="contact__input contact__input--compact contact__file-input"
            onChange={(e) => {
              if (e.target.files) {
                handleChange({
                  target: {
                    name: 'file',
                    value: e.target.files[0]
                  }
                });
              }
            }}
          />
          {/* Attachment Icon */}
          <div className="input-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
            </svg>
          </div>
        </div>
        <span className="file-hint">Allowed formats: PDF, DOC, PNG, JPG, ZIP</span>
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
               <div className="contact__field">
  <label htmlFor="Phone-No" className="contact__label">Phone No</label>
  <input
    type="tel"
    id="Phone-No"
    name="phone"
    className="contact__input"
    placeholder="+923001234567"
    value={form.phone} 
    onChange={handleChange}
    required
  />
</div>
<div className="contact__field">
  <label htmlFor="how-heard" className="contact__label">How did you hear about us?</label>
  <select
    id="how-heard"
    name="howHeard"
    className="contact__input" 
    style={{ appearance: 'auto' }} 
    onChange={handleChange}
    required
  >
    <option value="" disabled>Select an option</option>
    <option value="social-media">Social Media (LinkedIn, Facebook, Instagram)</option>
    <option value="search-engine">Search Engine (Google, Bing)</option>
    <option value="friend-colleague">Friend / Colleague Recommendation</option>
    <option value="clutch-upwork">Freelance Platforms (Upwork, Clutch)</option>
    <option value="other">Other</option>
  </select>
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
