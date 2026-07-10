import React, { useEffect, useRef } from 'react';
import { staggerReveal } from '../utils/animations';
import './TeamMembers.css';

// ─── Icons ───────────────────────────────────────────────────────────────────

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.6.24 2.76.12 3.05.74.81 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  );
}

function PortfolioIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" />
    </svg>
  );
}

// ─── Avatar ───────────────────────────────────────────────────────────────────

// Local AI-generated portraits stored in /public/team/
// Each member is locked to a specific file so the face never changes
const AVATAR_MAP = {
  'Muhammad Al Yasa Dawood':  '/team/male/m1.jpg',
  'Muhammad Usman Khan':       '/team/male/m2.jpg',
  'Abdulrahman Nisar':         '/team/male/m3.jpg',
  'Ammad Mahmood':             '/team/male/m4.jpg',
  'Haseeb Raza':               '/team/male/m5.jpg',
  'Muhammad Fakhar':           '/team/male/m6.jpg',
  'Ali Hassan':                '/team/male/m7.jpg',
  'Tashfeen Liaquat':          '/team/male/m8.jpg',
  'Sabiha Niaz':               '/team/female/f1.jpg',
  'Ifra Malik':                '/team/female/f2.jpg',
  'Iqra Hussain':              '/team/female/f3.jpg',
  'Bismah Nasir':              '/team/female/f4.jpg',
  'Hiba Noor':                 '/team/female/f5.jpg',
  'Alishba Usman':             '/team/female/f6.jpg',
  'Ayesha Ahmad':              '/team/female/f7.jpg',
  'Maleeha Mubeen':            '/team/female/f8.jpg',
};

function getAvatarUrl(name) {
  return AVATAR_MAP[name] || '/team/male/m1.jpg';
}

// ─── Badge colours per employment type ───────────────────────────────────────

const BADGE_CLASS = {
  Leadership: 'badge-leadership',
  'Full Time': 'badge-full-time',
  'Part Time': 'badge-part-time',
  Internship: 'badge-internship',
};

// ─── Team data ────────────────────────────────────────────────────────────────

const TEAM_CATEGORIES = [
  {
    category: 'Founders & Directors',
    members: [
      {
        name: 'Muhammad Al Yasa Dawood',
        role: 'Co-Founder & Director',
        gender: 'male',
        type: 'Leadership',
        linkedin: 'https://www.linkedin.com/in/muhammad-al-yasa-dawood-666317286/',
        portfolio: 'https://alyasa62.github.io/',
      },
      {
        name: 'Muhammad Usman Khan',
        role: 'Co-Founder',
        gender: 'male',
        type: 'Leadership',
        linkedin: 'https://www.linkedin.com/in/muhammad-usman-khan-9ba575381',
        github: 'https://github.com/codewithuusman',
      },
    ],
  },
  {
    category: 'Android Developer',
    members: [
      {
        name: 'Abdulrahman Nisar',
        role: 'Native Android Developer Intern',
        gender: 'male',
        type: 'Internship',
        linkedin: 'https://www.linkedin.com/in/abdulrahman-nisar/',
        github: 'https://github.com/abdulrahman-nisar',
      },
      {
        name: 'Sabiha Niaz',
        role: 'Native Android Developer Intern',
        gender: 'female',
        type: 'Internship',
        linkedin: 'https://www.linkedin.com/in/sabiha-niaz-864771383',
        github: 'https://github.com/sabihaniaz7',
      },
      {
        name: 'Ifra Malik',
        role: 'Native Android Developer Intern',
        gender: 'female',
        type: 'Internship',
        linkedin: 'https://www.linkedin.com/in/ifra-malik-09236836a',
        github: 'https://github.com/ifra489',
      },
    ],
  },
  {
    category: 'Web Developer',
    members: [
      {
        name: 'Iqra Hussain',
        role: 'Web Development Intern',
        gender: 'female',
        type: 'Internship',
        isTeamLead: true,
        linkedin: 'https://www.linkedin.com/in/iqra-hussain-5158222a3',
      },
      {
        name: 'Ammad Mahmood',
        role: 'Web Development Intern',
        gender: 'male',
        type: 'Internship',
        linkedin: 'https://www.linkedin.com/in/ammad-mahmood-a8322a254',
        github: 'https://github.com/Ammad-07',
      },
      {
        name: 'Bismah Nasir',
        role: 'Web Development Intern',
        gender: 'female',
        type: 'Internship',
        linkedin: 'https://www.linkedin.com/in/bismah-nasir',
        github: 'https://github.com/bismah-nasir',
      },
      {
        name: 'Hiba Noor',
        role: 'Web Development Intern & Social Media Manager',
        gender: 'female',
        type: 'Internship',
        linkedin: 'https://www.linkedin.com/in/hiba-noor-247a0936a',
        github: 'https://github.com/Hiba-noor',
      },
      {
        name: 'Haseeb Raza',
        role: 'Backend Web Developer',
        gender: 'male',
        type: 'Full Time',
        linkedin: 'https://www.linkedin.com/in/haseebraza4998',
        github: 'https://github.com/Haseebzahid9',
      },
    ],
  },
  {
    category: 'Game Developer',
    members: [
      {
        name: 'Muhammad Fakhar',
        role: 'Android Game Developer',
        gender: 'male',
        type: 'Full Time',
        linkedin: 'https://www.linkedin.com/in/muhammad-fakhar-829b3237b',
      },
      {
        name: 'Ali Hassan',
        role: 'Android Game Developer',
        gender: 'male',
        type: 'Full Time',
        linkedin: 'https://www.linkedin.com/in/ali-hassan-6a84b6231',
        github: 'https://github.com/Ali143624',
      },
      {
        name: 'Tashfeen Liaquat',
        role: 'Android Game Developer',
        gender: 'male',
        type: 'Full Time',
        linkedin: 'https://smartlnks.com/JgOB',
        github: 'https://github.com/mtashfeen-git',
      },
    ],
  },
  {
    category: 'UI/UX Designer',
    members: [
      {
        name: 'Alishba Usman',
        role: 'UI/UX Designer Intern',
        gender: 'female',
        type: 'Internship',
        linkedin: 'https://www.linkedin.com/in/alishba-usman-71aa65411',
        portfolio: 'https://www.behance.net/alishbausman234',
      },
    ],
  },
  {
    category: 'HR Team',
    members: [
      {
        name: 'Ayesha Ahmad',
        role: 'HR Manager',
        gender: 'female',
        type: 'Full Time',
        linkedin: 'https://www.linkedin.com/in/ayesha-ahmad-6b757b3b5/',
        github: 'https://github.com/ayeshaahmad1609',
      },
      {
        name: 'Maleeha Mubeen',
        role: 'HR Associate',
        gender: 'female',
        type: 'Full Time',
        linkedin: 'https://www.linkedin.com/in/maleeha-mubeen-9a4688408',
      },
    ],
  },
];

// ─── Components ───────────────────────────────────────────────────────────────

function MemberCard({ member }) {
  return (
    <div className="member-card glass-card reveal">
      <div className="member-avatar-wrapper">
        <div className="member-avatar-circle">
          <img
            src={getAvatarUrl(member.name)}
            alt={member.name}
            className="member-photo"
          />
        </div>
        <span className={`member-type-badge ${BADGE_CLASS[member.type] || ''}`}>
          {member.type}
        </span>
      </div>

      <div className="member-info">
        <h4 className="member-name">
          {member.name}
          {member.isTeamLead && <span className="team-lead-tag">Team Lead</span>}
        </h4>
        <p className="member-role text-gradient">{member.role}</p>

        <div className="member-links">
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="member-link-btn" aria-label={`${member.name} LinkedIn`}>
              <LinkedinIcon />
              <span>LinkedIn</span>
            </a>
          )}
          {member.github && (
            <a href={member.github} target="_blank" rel="noopener noreferrer" className="member-link-btn" aria-label={`${member.name} GitHub`}>
              <GithubIcon />
              <span>GitHub</span>
            </a>
          )}
          {member.portfolio && (
            <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="member-link-btn" aria-label={`${member.name} Portfolio`}>
              <PortfolioIcon />
              <span>Portfolio</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function CategorySection({ category, members }) {
  return (
    <div className="member-category">
      <h3 className="member-category-title">
        <span className="text-gradient">{category}</span>
      </h3>
      <div className="member-grid">
        {members.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function TeamMembers() {
  const containerRef = useRef(null);

  // Animate cards in on mount
  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll('.member-card');
    staggerReveal(cards, { delay: 0.1, stagger: 0.08 });
  }, []);

  return (
    <div className="team-members-section" ref={containerRef}>
      <div className="about-intro">
        <span className="section-label">Our Team</span>
        <h2 className="section-title">Meet Our Team</h2>
        <p className="section-subtitle">
          The founders, developers, designers, and operators who turn ideas into
          products — across Android, Web, Game, UI/UX, and HR.
        </p>
      </div>

      {TEAM_CATEGORIES.map((group) => (
        <CategorySection
          key={group.category}
          category={group.category}
          members={group.members}
        />
      ))}
    </div>
  );
}
