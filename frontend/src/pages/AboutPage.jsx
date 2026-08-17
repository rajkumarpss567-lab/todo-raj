import { useEffect, useState } from 'react';
import { getAbout } from '../api';

export default function AboutPage() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAbout()
      .then(setAbout)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="about-page">
        <div className="about-loading">
          <div className="spinner"></div>
          <p>Loading about information...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="about-page">
        <div className="about-error">
          <p className="error-message">Failed to load about information: {error}</p>
        </div>
      </div>
    );
  }

  if (!about) {
    return (
      <div className="about-page">
        <div className="about-empty">
          <p>No information available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="about-page">
      <div className="about-container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-background">
            <div className="hero-blob hero-blob-1"></div>
            <div className="hero-blob hero-blob-2"></div>
            <div className="hero-blob hero-blob-3"></div>
          </div>
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-icon">🚀</span>
              <span className="badge-text">TaskFlow - v{about.version}</span>
            </div>
            <h1 className="hero-title">
              <span className="title-word">Organize</span>
              <span className="title-word">Your</span>
              <span className="title-word">Productivity</span>
            </h1>
            <p className="hero-description">{about.description}</p>
            <p className="hero-mission">
              <span className="mission-icon">💡</span>
              {about.mission}
            </p>
            <div className="hero-cta">
              <a href="/todos" className="cta-button primary">
                <span>Start Managing Tasks</span>
                <span className="arrow">→</span>
              </a>
              <a href="#features" className="cta-button secondary">
                <span>Learn More</span>
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-value">1000+</span>
                <span className="stat-text">Tasks Managed</span>
              </div>
              <div className="hero-stat">
                <span className="stat-value">100%</span>
                <span className="stat-text">Open Source</span>
              </div>
              <div className="hero-stat">
                <span className="stat-value">∞</span>
                <span className="stat-text">Free Forever</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="about-features">
          <h2 className="section-title">Features</h2>
          <div className="features-grid">
            {about.features.map((feature, idx) => (
              <div key={idx} className="feature-card" style={{'--delay': `${idx * 0.1}s`}}>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="about-team">
          <h2 className="section-title">Our Team</h2>
          <div className="team-grid">
            {about.team.map((member, idx) => (
              <div key={idx} className="team-card" style={{'--delay': `${idx * 0.1}s`}}>
                <div className="team-avatar">{member.name.charAt(0)}</div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-description">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="about-contact">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-grid">
            <a href={`mailto:${about.contact.email}`} className="contact-link email-link">
              <span className="contact-icon">✉</span>
              <div className="contact-info">
                <p className="contact-label">Email</p>
                <p className="contact-value">{about.contact.email}</p>
              </div>
            </a>
            <a href={about.contact.website} target="_blank" rel="noopener noreferrer" className="contact-link website-link">
              <span className="contact-icon">🌐</span>
              <div className="contact-info">
                <p className="contact-label">Website</p>
                <p className="contact-value">taskflow.app</p>
              </div>
            </a>
            <a href={about.contact.github} target="_blank" rel="noopener noreferrer" className="contact-link github-link">
              <span className="contact-icon">⚙</span>
              <div className="contact-info">
                <p className="contact-label">GitHub</p>
                <p className="contact-value">taskflow/taskflow</p>
              </div>
            </a>
          </div>
        </section>

        {/* Stats Section */}
        <section className="about-stats">
          <div className="stat-card">
            <p className="stat-number">100%</p>
            <p className="stat-label">Open Source</p>
          </div>
          <div className="stat-card">
            <p className="stat-number">∞</p>
            <p className="stat-label">Free Forever</p>
          </div>
          <div className="stat-card">
            <p className="stat-number">24/7</p>
            <p className="stat-label">Support</p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="about-why-us">
          <h2 className="section-title">Why Choose TaskFlow?</h2>
          <div className="why-us-grid">
            <div className="why-us-card">
              <div className="why-us-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Blazingly fast performance with real-time updates. Never wait for your tasks to sync.</p>
            </div>
            <div className="why-us-card">
              <div className="why-us-icon">🎨</div>
              <h3>Beautifully Designed</h3>
              <p>Sleek, modern interface with smooth animations and intuitive interactions that feel natural.</p>
            </div>
            <div className="why-us-card">
              <div className="why-us-icon">🔒</div>
              <h3>Secure & Private</h3>
              <p>Your data is encrypted and secure. We never sell or share your personal information.</p>
            </div>
            <div className="why-us-card">
              <div className="why-us-icon">📱</div>
              <h3>Fully Responsive</h3>
              <p>Access your tasks from any device - desktop, tablet, or mobile phone.</p>
            </div>
            <div className="why-us-card">
              <div className="why-us-icon">🌙</div>
              <h3>Dark Mode Ready</h3>
              <p>Comfortable viewing at any time of day with automatic dark mode support.</p>
            </div>
            <div className="why-us-card">
              <div className="why-us-icon">🤝</div>
              <h3>Community Driven</h3>
              <p>Built by developers, for developers. Open source and community-supported.</p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="about-how-it-works">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3 className="step-title">Create Your Tasks</h3>
              <p className="step-description">Add tasks with descriptions, set priorities, and organize them by categories.</p>
            </div>
            <div className="step-connector"></div>
            <div className="step-card">
              <div className="step-number">02</div>
              <h3 className="step-title">Set Reminders</h3>
              <p className="step-description">Never miss a deadline. Set reminders and view tasks on an interactive calendar.</p>
            </div>
            <div className="step-connector"></div>
            <div className="step-card">
              <div className="step-number">03</div>
              <h3 className="step-title">Track Progress</h3>
              <p className="step-description">Monitor your productivity with detailed statistics and completion tracking.</p>
            </div>
            <div className="step-connector"></div>
            <div className="step-card">
              <div className="step-number">04</div>
              <h3 className="step-title">Stay Organized</h3>
              <p className="step-description">Keep everything in sync across all your devices with real-time synchronization.</p>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="about-tech-stack">
          <h2 className="section-title">Built With Modern Technology</h2>
          <div className="tech-stack-grid">
            <div className="tech-card">
              <div className="tech-logo">⚛️</div>
              <h3>React 18</h3>
              <p>Latest React with hooks for a responsive, dynamic user interface.</p>
            </div>
            <div className="tech-card">
              <div className="tech-logo">🐍</div>
              <h3>Django 5</h3>
              <p>Powerful Python web framework with Django REST Framework for robust APIs.</p>
            </div>
            <div className="tech-card">
              <div className="tech-logo">⚡</div>
              <h3>Vite</h3>
              <p>Ultra-fast build tool and development server for modern web applications.</p>
            </div>
            <div className="tech-card">
              <div className="tech-logo">🐳</div>
              <h3>Docker</h3>
              <p>Containerized deployment for consistency across all environments.</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="about-cta-section">
          <div className="cta-content">
            <h2>Ready to Boost Your Productivity?</h2>
            <p>Join thousands of users who are already using TaskFlow to manage their tasks efficiently.</p>
            <div className="cta-buttons">
              <a href="/todos" className="cta-btn primary-btn">Get Started Now</a>
              <a href="/contact" className="cta-btn secondary-btn">Contact Us</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
