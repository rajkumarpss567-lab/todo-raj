export default function FeaturesPage() {
  const features = [
    {
      id: 1,
      icon: '✓',
      title: 'Smart Task Management',
      description: 'Create, organize, and prioritize your tasks effortlessly. Add descriptions, set priorities, and track your progress in real-time.',
      details: ['Quick add interface', 'Priority levels', 'Progress tracking', 'Bulk actions']
    },
    {
      id: 2,
      icon: '🔔',
      title: 'Smart Reminders',
      description: 'Never miss an important deadline. Set reminders for your tasks and receive timely notifications to keep you on track.',
      details: ['Scheduled alerts', 'Recurring reminders', 'Custom timing', 'Multi-device sync']
    },
    {
      id: 3,
      icon: '📅',
      title: 'Calendar View',
      description: 'Visualize your tasks and reminders on an interactive calendar. Plan your weeks and months with ease.',
      details: ['Monthly overview', 'Day view modal', 'Event clustering', 'Quick navigation']
    },
    {
      id: 4,
      icon: '📱',
      title: 'Fully Responsive',
      description: 'Access your tasks from any device. Our responsive design works seamlessly on mobile, tablet, and desktop.',
      details: ['Mobile optimized', 'Touch-friendly', 'Adaptive layout', 'Fast loading']
    },
    {
      id: 5,
      icon: '🌓',
      title: 'Dark Mode Support',
      description: 'Choose your preferred theme. Automatically switches based on system preferences for a comfortable viewing experience.',
      details: ['System sync', 'Eye comfort', 'Energy saving', 'Custom colors']
    },
    {
      id: 6,
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Built with modern technologies for blazing-fast performance. Experience smooth interactions and instant feedback.',
      details: ['React + Vite', 'Optimized builds', 'Fast API', 'Smooth animations']
    },
    {
      id: 7,
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Your data is encrypted and stored securely. We never share your personal information with third parties.',
      details: ['End-to-end encryption', 'Privacy first', 'No tracking', 'Open source']
    },
    {
      id: 8,
      icon: '🎨',
      title: 'Beautiful UI',
      description: 'Enjoy a modern, intuitive interface designed with the latest UX trends. Every detail is crafted for your comfort.',
      details: ['Gradient design', 'Smooth transitions', 'Accessibility', 'Haptic feedback']
    }
  ];

  const capabilities = [
    { number: '1000+', label: 'Task Capacity' },
    { number: '∞', label: 'Reminders' },
    { number: '24/7', label: 'Availability' },
    { number: '0ms', label: 'Latency' }
  ];

  return (
    <div className="features-page">
      <div className="features-container">
        {/* Hero Section */}
        <section className="features-hero">
          <div className="features-hero-background">
            <div className="features-hero-blob features-hero-blob-1"></div>
            <div className="features-hero-blob features-hero-blob-2"></div>
            <div className="features-hero-blob features-hero-blob-3"></div>
          </div>

          <div className="features-hero-content">
            <div className="features-badge">
              <span className="features-badge-icon">✨</span>
              <span className="features-badge-text">Powerful Features</span>
            </div>

            <h1 className="features-title">
              Everything You Need to Stay Productive
            </h1>

            <p className="features-subtitle">
              Discover our comprehensive suite of features designed to help you manage tasks, set reminders, and achieve your goals with ease.
            </p>

            <div className="features-hero-capabilities">
              {capabilities.map((cap) => (
                <div key={cap.label} className="capability-item">
                  <div className="capability-number">{cap.number}</div>
                  <div className="capability-label">{cap.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Features Grid */}
        <section className="features-showcase">
          <h2 className="features-section-title">Core Features</h2>
          <p className="features-section-subtitle">
            Powerful tools built to streamline your workflow and maximize productivity
          </p>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={feature.id} className="feature-showcase-card" style={{ '--delay': `${index * 0.08}s` }}>
                <div className="feature-card-header">
                  <div className="feature-card-icon">{feature.icon}</div>
                  <h3 className="feature-card-title">{feature.title}</h3>
                </div>

                <p className="feature-card-description">{feature.description}</p>

                <div className="feature-details-list">
                  {feature.details.map((detail) => (
                    <div key={detail} className="detail-item">
                      <span className="detail-check">✓</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="features-how-it-works">
          <h2 className="features-section-title">How It Works</h2>
          <p className="features-section-subtitle">
            Get started in seconds with our intuitive workflow
          </p>

          <div className="workflow-steps">
            <div className="workflow-step">
              <div className="step-icon step-icon-1">1</div>
              <div className="step-content">
                <h3>Create Your Tasks</h3>
                <p>Add tasks quickly with title, description, and priority. Organize everything in your personal workspace.</p>
              </div>
            </div>

            <div className="workflow-connector"></div>

            <div className="workflow-step">
              <div className="step-icon step-icon-2">2</div>
              <div className="step-content">
                <h3>Set Reminders</h3>
                <p>Never forget important deadlines. Set reminders for specific dates and times to stay on track.</p>
              </div>
            </div>

            <div className="workflow-connector"></div>

            <div className="workflow-step">
              <div className="step-icon step-icon-3">3</div>
              <div className="step-content">
                <h3>Track & Celebrate</h3>
                <p>Monitor your progress with visual indicators. Complete tasks and celebrate your achievements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Capabilities */}
        <section className="features-advanced">
          <h2 className="features-section-title">Advanced Capabilities</h2>
          <p className="features-section-subtitle">
            Everything you need for professional task management
          </p>

          <div className="capabilities-grid">
            <div className="capability-card">
              <div className="capability-icon">🚀</div>
              <h3>Performance</h3>
              <p>Optimized for speed with instant search, filtering, and sorting capabilities. No lag, no delays.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">🔄</div>
              <h3>Sync Across Devices</h3>
              <p>Your tasks sync in real-time. Start on your phone, continue on your laptop, finish on your tablet.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">📊</div>
              <h3>Analytics</h3>
              <p>Gain insights into your productivity. See how many tasks you complete and track trends over time.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">🎯</div>
              <h3>Smart Prioritization</h3>
              <p>Set priority levels for your tasks. Never lose sight of what's most important.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">🌐</div>
              <h3>Web & Mobile</h3>
              <p>Access from any browser or device. No downloads required. Everything is web-based.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">💾</div>
              <h3>Auto-Save</h3>
              <p>Never lose your work. Every change is automatically saved to keep your data safe.</p>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="features-integration">
          <h2 className="features-section-title">Built with Modern Tech</h2>
          <p className="features-section-subtitle">
            Powered by the latest web technologies for reliability and performance
          </p>

          <div className="tech-showcase">
            <div className="tech-item">
              <div className="tech-logo">⚛</div>
              <h3>React 18</h3>
              <p>Modern UI framework with hooks and concurrent features</p>
            </div>

            <div className="tech-item">
              <div className="tech-logo">🔧</div>
              <h3>Django + DRF</h3>
              <p>Powerful backend with REST API and excellent security</p>
            </div>

            <div className="tech-item">
              <div className="tech-logo">⚡</div>
              <h3>Vite</h3>
              <p>Next-generation frontend build tool for instant development</p>
            </div>

            <div className="tech-item">
              <div className="tech-logo">🐳</div>
              <h3>Docker</h3>
              <p>Containerized deployment for consistency and reliability</p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="features-benefits">
          <div className="benefits-content">
            <h2 className="benefits-title">Why Choose Task Manager?</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-number">01</div>
                <h3 className="benefit-title-small">Free Forever</h3>
                <p>Access all core features at no cost. No hidden fees, no credit card required.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-number">02</div>
                <h3 className="benefit-title-small">Open Source</h3>
                <p>Transparent and community-driven. See the code and contribute improvements.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-number">03</div>
                <h3 className="benefit-title-small">Privacy First</h3>
                <p>Your data is yours. No tracking, no analytics, just pure productivity.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-number">04</div>
                <h3 className="benefit-title-small">Always Available</h3>
                <p>Accessible 24/7 from any device with an internet connection.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="features-cta">
          <div className="features-cta-content">
            <h2>Ready to Boost Your Productivity?</h2>
            <p>Start using Task Manager today and take control of your tasks, reminders, and goals.</p>
            <button className="features-cta-button">Get Started Now</button>
          </div>
        </section>
      </div>
    </div>
  );
}
