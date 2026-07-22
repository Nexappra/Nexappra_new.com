import useScrollAnimation from '../hooks/useScrollAnimation';
import './CaseStudies.css';

const projects = [
  {
    id: 'project-drawing-thoughts',
    title: 'Drawing Thoughts',
    category: 'Creative / Productivity App',
    problem: 'Users needed a unified space to sketch, take notes, and create mind maps digitally',
    solution: 'Built a feature-rich drawing app with customizable brushes, colors, mind maps, and organizational tools',
    result: '5,000+ downloads on Google Play with 4.5★ rating',
    tags: ['Android', 'Kotlin', 'Canvas API'],
    image: '/src/assets/projects/drawing-thoughts.png',
    gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
    accent: '#4ade80',
  },
  {
    id: 'project-expense-tracker',
    title: 'Expense Tracker App',
    category: 'Fintech / Finance App',
    problem: 'People struggled to track daily expenses and understand their spending habits',
    solution: 'Developed a clean finance app with dashboard overview, expense tracking, budget management, and smart analytics',
    result: '5.0★ rating on Google Play with 1,000+ active users',
    tags: ['Android', 'Kotlin', 'MPAndroidChart', 'Room DB'],
    image: '/src/assets/projects/expense-tracker.jpg',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    accent: '#06b6d4',
  },
  {
    id: 'project-unimatch',
    title: 'UniMatch',
    category: 'EdTech / Career Guidance',
    problem: 'Students were confused about career paths and finding the right university',
    solution: 'Created an AI-powered educational counselor with psychometric assessments to recommend best-fit universities and career paths',
    result: 'Featured on Google Play with growing user base across Pakistan',
    tags: ['Android', 'AI/ML', 'Psychometrics', 'Firebase'],
    image: '/src/assets/projects/unimatch.png',
    gradient: 'linear-gradient(135deg, #0d0d1a 0%, #1a0d2e 50%, #2d1b69 100%)',
    accent: '#a78bfa',
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
          {projects.map((project, index) => (
            <article
              key={project.id}
              id={project.id}
              className={`case-studies__card reveal delay-${index + 1}`}
            >
              {/* Banner */}
              <div
                className="case-studies__banner"
                style={{ background: project.gradient }}
              >
                {project.image ? (
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

                <div className="case-studies__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="case-studies__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}