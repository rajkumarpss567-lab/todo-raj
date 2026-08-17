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
          <div className="hero-content">
            <h1 className="hero-title">{about.app_name}</h1>
            <p className="hero-version">v{about.version}</p>
            <p className="hero-description">{about.description}</p>
            <p className="hero-mission">{about.mission}</p>
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
      </div>
    </div>
  );
}
