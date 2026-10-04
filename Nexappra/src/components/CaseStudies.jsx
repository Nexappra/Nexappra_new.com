import useScrollAnimation from '../hooks/useScrollAnimation';
import './CaseStudies.css';

import drawingThoughtsImg from '../assets/projects/drawing-thoughts.png';
import expenseTrackerImg from '../assets/projects/expense-tracker.jpg';
import unimatchImg from '../assets/projects/unimatch.png';
import hunarmandImg from '../assets/projects/hunarmand-logo.png';
import quraniumImg from '../assets/projects/quranium-app.jpeg';

const projects = [
  {
    id: 'project-drawing-thoughts',
    title: 'Drawing Thoughts',
    category: 'Creative / Productivity App',
    problem: 'Users needed a unified space to sketch, take notes, and create mind maps digitally,quickly and easily ',
    solution: 'Built a feature-rich drawing app with customizable brushes, colors, mind maps, and organizational tools',
    result: '5,000+ downloads on Google Play with 4.5★ rating',
    tags: ['Android', 'Kotlin', 'Canvas API'],
    image: drawingThoughtsImg,
    gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
    accent: '#4ade80',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.yasadevs.drawingthoughts'
  },
  {
    id: 'project-expense-tracker',
    title: 'Expense Tracker App',
    category: 'Fintech / Finance App',
    problem: 'People struggled to track daily expenses and understand their spending habits',
    solution: 'Developed a clean finance app with dashboard overview, expense tracking, budget management, and smart analytics',
    result: '5.0★ rating on Google Play with 1,000+ active users',
    tags: ['Android', 'Kotlin', 'MPAndroidChart', 'Room DB'],
    image: expenseTrackerImg,
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    accent: '#06b6d4',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.nexappra.expensetrackerapp'
  },
  {
    id: 'project-unimatch',
    title: 'UniMatch',
    category: 'EdTech / Career Guidance',
    problem: 'Students were confused about career paths and finding the right university',
    solution: 'Created an AI-powered educational counselor to recommend best-fit universities and career paths',
    result: 'Featured on Google Play with growing user base across Pakistan',
    tags: ['Android', 'AI/ML', 'Psychometrics', 'Firebase'],
    image: unimatchImg,
    gradient: 'linear-gradient(135deg, #0d0d1a 0%, #1a0d2e 50%, #2d1b69 100%)',
    accent: '#a78bfa',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.nexappra.unimatch'
  },
  {
    id: 'project-hunarmand',
    title: 'Hunarmand App',
    category: 'Home Services / Marketplace',
    problem: 'Finding reliable and skilled home service professionals was difficult, time-consuming, and lacked trust.',
    solution: 'Built a digital marketplace connecting customers with verified electricians, plumbers, and cleaners.',
    result: '500+ verified professionals • 8 cities • 4.8/5 average rating',
    tags: ['Android', 'Flutter', 'Firebase', 'Marketplace'],
    image: hunarmandImg,
    gradient: 'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e1b4b 100%)',
    accent: '#3b82f6',
    webUrl: 'https://hunarmand.tech/',
  },
 {
  id: 'project-quranium',
  title: 'Quranium: Quran & Prayer Times',
  category: 'Islamic / Lifestyle App',
 problem: 'Needed a clean, distraction-free app combining accurate prayer times and Quran audio.',
  solution: 'Created an Islamic companion app featuring precise prayer alarms, full Quran text, and daily duas.',
  result: 'Reliable daily utility for seamless prayer tracking and Quranic study.',
  tags: ['Android', 'React.js', 'Lifestyle', 'Audio API'],
  image: quraniumImg, 
  gradient: 'linear-gradient(135deg, #065f46 0%, #047857 50%, #064e3b 100%)',
  accent: '#34d399',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.quranium.quran.prayertimes',
},
{
  id: 'project-step-tracker',
  title: 'Step Tracker & Fitness Rewards App',
  category: 'Health & Fitness App',
  video: '/videos/step-tracker-app.mp4',
  features: [
    'Step Tracking & Hardware: Directly reads physical steps, distance, and calories via Android’s SENSOR_SERVICE and runs a background polling loop.',
    'Gamification & Economy: Awards 1 virtual coin per 100 steps, updates 7-day rolling league tiers, manages challenges, and syncs monthly leaderboards.',
    'GPS Workout & Notifications: Uses an Android Foreground Service for outdoor GPS tracking and sends alerts for goals, daily routines, inactivity, and challenges.',
    'Cloud Sync: Securely syncs step history, biometrics, coins, and profile states with Firebase Authentication and Firestore.',
    'Daily Workflow & Onboarding: Authenticates users, restores cloud data, requests permissions, and sets a baseline step count during initialization.',
    'Midnight Rollover: Automatically detects date changes to archive yesterday’s history, lock in weekly data, and reset daily metrics to zero.',
  ],
  tags: ['Android', 'Kotlin', 'Firebase', 'GPS'],
  gradient: 'linear-gradient(135deg, #1a2e1a 0%, #16401e 50%, #0f3a28 100%)',
  accent: '#4ade80',
  whatsappUrl: 'https://whatsapp.com/channel/0029VbDcoWsHAdNOPJlvLE1C',
},
];

export default function CaseStudies() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="projects" className="section case-studies" ref={sectionRef}>
      <div className="container">
        <header className="case-studies__header reveal">
          <span className="section-label">Our Work</span>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real problems. Real solutions. Real results.
          </p>
        </header>

        <div className="case-studies__grid">
          {projects.map((project, index) => {
            const externalUrl = project.playStoreUrl || project.webUrl;
            const Wrapper = externalUrl ? 'a' : 'div';
            const wrapperProps = externalUrl
              ? {
                  href: externalUrl,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  style: { textDecoration: 'none', color: 'inherit', display: 'block' },
                }
              : { style: { display: 'block' } };

            return (
              <Wrapper key={project.id} {...wrapperProps}>
                <article
                  id={project.id}
                  className={`case-studies__card reveal delay-${index + 1}`}
                >
                  {/* Banner */}
                  <div
                    className="case-studies__banner"
                    style={{ background: project.gradient }}
                  >
                    {project.video ? (
                      <video
                        className="case-studies__banner-video"
                        src={project.video}
                        controls
                        playsInline
                        preload="metadata"
                        onClick={(e) => e.stopPropagation()}
                      />
                    ) : project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="case-studies__banner-img"
                      />
                    ) : (
                      <div
                        className="case-studies__banner-art"
                        style={{ '--art-accent': project.accent }}
                      >
                        <div className="case-studies__art-circle case-studies__art-circle--lg"></div>
                        <div className="case-studies__art-circle case-studies__art-circle--sm"></div>
                        <div className="case-studies__art-line"></div>
                      </div>
                    )}
                    <span className="case-studies__badge">{project.category}</span>
                  </div>

                  {/* Body */}
                  <div className="case-studies__body">
                    <h3 className="case-studies__title">{project.title}</h3>

                    {project.features ? (
                      <ul className="case-studies__features">
                        {project.features.map((feat, i) => (
                          <li key={i} className="case-studies__feature-item">
                            {feat}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <ul className="case-studies__details">
                        <li className="case-studies__detail">
                          <span className="case-studies__detail-icon case-studies__detail-icon--problem" aria-label="Problem">✕</span>
                          <div>
                            <span className="case-studies__detail-label">Problem</span>
                            <p className="case-studies__detail-text">{project.problem}</p>
                          </div>
                        </li>
                        <li className="case-studies__detail">
                          <span className="case-studies__detail-icon case-studies__detail-icon--solution" aria-label="Solution">✓</span>
                          <div>
                            <span className="case-studies__detail-label">Solution</span>
                            <p className="case-studies__detail-text">{project.solution}</p>
                          </div>
                        </li>
                        <li className="case-studies__detail">
                          <span className="case-studies__detail-icon case-studies__detail-icon--result" aria-label="Result">↑</span>
                          <div>
                            <span className="case-studies__detail-label">Result</span>
                            <p className="case-studies__detail-text">{project.result}</p>
                          </div>
                        </li>
                      </ul>
                    )}

                    <div className="case-studies__tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="case-studies__tag">{tag}</span>
                      ))}
                    </div>

                    {project.whatsappUrl && (
                      <a
                        href={project.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="case-studies__whatsapp-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.3 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4 0-.1-.2-.2-.5-.3z" />
                          <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.2L2 22l4.9-1.3C8.4 21.5 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.7 0-3.2-.4-4.6-1.2l-.3-.2-3.1.8.8-3-.2-.3C3.9 14.9 3.5 13.5 3.5 12c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5-3.8 8.3-8.5 8.3z" />
                        </svg>
                        Join WhatsApp Channel
                      </a>
                    )}
                  </div>
                </article>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}