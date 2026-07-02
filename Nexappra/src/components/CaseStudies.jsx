import useScrollAnimation from '../hooks/useScrollAnimation';
import './CaseStudies.css';

const projects = [
  {
    id: 'project-fintrack',
    title: 'FinTrack Pro',
    category: 'Fintech Dashboard',
    problem: 'Complex financial data was hard to visualize',
    solution: 'Built a real-time analytics dashboard with React + D3.js',
    result: '40% increase in user engagement',
    tags: ['React', 'Node.js', 'D3.js'],
    gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
    accent: '#4ade80',
  },
  {
    id: 'project-healthpulse',
    title: 'HealthPulse',
    category: 'Healthcare App',
    problem: "Patients couldn't easily track health metrics",
    solution: 'Cross-platform mobile app with AI health insights',
    result: '100K+ downloads in first month',
    tags: ['React Native', 'Python', 'AI'],
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    accent: '#06b6d4',
  },
  {
    id: 'project-shopstream',
    title: 'ShopStream',
    category: 'E-Commerce Platform',
    problem: "Legacy e-commerce system couldn't scale",
    solution: 'Microservices architecture with real-time inventory',
    result: '300% improvement in page load speed',
    tags: ['Next.js', 'AWS', 'MongoDB'],
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
                <div
                  className="case-studies__banner-art"
                  style={{ '--art-accent': project.accent }}
                >
                  <div className="case-studies__art-circle case-studies__art-circle--lg"></div>
                  <div className="case-studies__art-circle case-studies__art-circle--sm"></div>
                  <div className="case-studies__art-line"></div>
                </div>
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
