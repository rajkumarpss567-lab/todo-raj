import { useState } from 'react';
import { submitContactForm } from '../api';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await submitContactForm(formData);
      if (response && response.success) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (err) {
      setError(err.message || 'Failed to submit form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="contact-hero-background">
            <div className="contact-hero-blob contact-hero-blob-1"></div>
            <div className="contact-hero-blob contact-hero-blob-2"></div>
          </div>
          
          <div className="contact-hero-content">
            <div className="contact-badge">
              <span className="contact-badge-icon">💬</span>
              <span className="contact-badge-text">Get in Touch</span>
            </div>
            
            <h1 className="contact-title">
              We'd Love to Hear From You
            </h1>
            
            <p className="contact-subtitle">
              Have a question, suggestion, or feedback? Our team is here to help and would love to connect with you.
            </p>
            
            <div className="contact-hero-stats">
              <div className="contact-hero-stat">
                <div className="contact-stat-value">24/7</div>
                <div className="contact-stat-label">Support Available</div>
              </div>
              <div className="contact-hero-stat">
                <div className="contact-stat-value">&lt;2h</div>
                <div className="contact-stat-label">Response Time</div>
              </div>
              <div className="contact-hero-stat">
                <div className="contact-stat-value">100%</div>
                <div className="contact-stat-label">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="contact-main">
          {/* Contact Form */}
          <section className="contact-form-section">
            <h2 className="contact-section-title">Send Us a Message</h2>
            
            <div className="form-wrapper">
              {success && (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <div className="success-text">
                    <div className="success-title">Message Sent Successfully!</div>
                    <div className="success-description">
                      Thank you for reaching out. We'll get back to you soon.
                    </div>
                  </div>
                </div>
              )}
              
              {error && (
                <div className="error-message-box">
                  <div className="error-icon">!</div>
                  <div className="error-text">
                    <div className="error-title">Submission Failed</div>
                    <div className="error-description">{error}</div>
                  </div>
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group form-group-half">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div className="form-group form-group-half">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-input"
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="form-submit-btn"
                  disabled={isLoading}
                >
                  <span className="button-icon">
                    {isLoading ? <span className="button-spinner"></span> : '✉️'}
                  </span>
                  <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </section>

          {/* Contact Methods */}
          <section className="contact-methods-section">
            <h2 className="contact-section-title">Other Ways to Connect</h2>
            
            <div className="methods-grid">
              <a href="mailto:support@taskflow.app" className="method-card">
                <div className="method-icon">📧</div>
                <h3 className="method-title">Email Us</h3>
                <p className="method-value">support@taskflow.app</p>
                <span className="method-link">Send Email</span>
              </a>

              <a href="https://taskflow.app" target="_blank" rel="noopener noreferrer" className="method-card">
                <div className="method-icon">🌐</div>
                <h3 className="method-title">Visit Website</h3>
                <p className="method-value">taskflow.app</p>
                <span className="method-link">Open Site</span>
              </a>

              <a href="https://github.com/taskflow" target="_blank" rel="noopener noreferrer" className="method-card">
                <div className="method-icon">⚙️</div>
                <h3 className="method-title">GitHub</h3>
                <p className="method-value">@taskflow-team</p>
                <span className="method-link">View Repos</span>
              </a>

              <a href="https://twitter.com/taskflow" target="_blank" rel="noopener noreferrer" className="method-card">
                <div className="method-icon">𝕏</div>
                <h3 className="method-title">Follow Us</h3>
                <p className="method-value">@taskflow</p>
                <span className="method-link">Follow Now</span>
              </a>
            </div>
          </section>
        </div>

        {/* FAQ Section - Centered */}
        <section className="contact-faq-section">
          <div className="faq-wrapper">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-subtitle">Find answers to common questions about TaskFlow</p>
            
            <div className="faq-grid">
              <div className="faq-card">
                <div className="faq-card-icon">❓</div>
                <h3 className="faq-card-title">How do I get started?</h3>
                <p className="faq-card-answer">
                  Simply create an account and start adding your tasks. Our intuitive interface makes it easy to organize and track your productivity from day one.
                </p>
              </div>

              <div className="faq-card">
                <div className="faq-card-icon">💾</div>
                <h3 className="faq-card-title">Is my data secure?</h3>
                <p className="faq-card-answer">
                  Yes, we use industry-standard encryption to protect your data. All information is stored securely and we never share your personal data with third parties.
                </p>
              </div>

              <div className="faq-card">
                <div className="faq-card-icon">💰</div>
                <h3 className="faq-card-title">What's the pricing?</h3>
                <p className="faq-card-answer">
                  TaskFlow is completely free! We offer a full-featured experience at no cost. Optional premium features are available for power users.
                </p>
              </div>

              <div className="faq-card">
                <div className="faq-card-icon">📱</div>
                <h3 className="faq-card-title">Is there a mobile app?</h3>
                <p className="faq-card-answer">
                  Our responsive web app works great on mobile devices. Native apps for iOS and Android are coming soon with additional features.
                </p>
              </div>

              <div className="faq-card">
                <div className="faq-card-icon">🔄</div>
                <h3 className="faq-card-title">Can I sync across devices?</h3>
                <p className="faq-card-answer">
                  Absolutely! Your tasks sync in real-time across all your devices. Start on your phone and continue on your desktop seamlessly.
                </p>
              </div>

              <div className="faq-card">
                <div className="faq-card-icon">🆘</div>
                <h3 className="faq-card-title">How can I get help?</h3>
                <p className="faq-card-answer">
                  We're here to help! Use this contact form to reach our support team, or check out our documentation and tutorials.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
