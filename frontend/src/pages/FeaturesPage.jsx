export default function FeaturesPage() {
  return (
    <div className="features-page">
      <div className="features-container">
        {/* Hero Section with Neomorphic Design */}
        <div className="features-hero-neo">
          <div className="features-hero-content-neo">
            <div className="neo-badge">
              <span>✨</span>
              <span>Premium Features</span>
            </div>

            <h1 className="features-hero-title-neo">
              Everything You Need to <span className="accent-text">Manage Tasks</span> Efficiently
            </h1>

            <p className="features-hero-subtitle-neo">
              Powerful features designed to simplify your workflow and boost productivity. From smart reminders to seamless synchronization, we've got you covered.
            </p>

            <div className="hero-cta-neo">
              <button className="btn-primary-neo">Get Started Now</button>
              <button className="btn-secondary-neo">Learn More</button>
            </div>
          </div>

          <div className="hero-stats-neo">
            <div className="stat-item-neo">
              <div className="stat-value-neo">1000+</div>
              <div className="stat-label-neo">Daily Tasks</div>
            </div>
            <div className="stat-item-neo">
              <div className="stat-value-neo">100%</div>
              <div className="stat-label-neo">Open Source</div>
            </div>
            <div className="stat-item-neo">
              <div className="stat-value-neo">⚡</div>
              <div className="stat-label-neo">Fast & Snappy</div>
            </div>
            <div className="stat-item-neo">
              <div className="stat-value-neo">∞</div>
              <div className="stat-label-neo">Scalable</div>
            </div>
          </div>
        </div>

        {/* Core Features Section */}
        <section className="features-section-neo">
          <div className="section-header-neo">
            <h2 className="section-title-neo">Core Features</h2>
            <p className="section-subtitle-neo">Everything you need to manage tasks like a pro</p>
          </div>

          <div className="features-grid-neo">
            <div className="feature-card-neo" style={{ '--idx': '0' }}>
              <div className="card-icon-neo">📝</div>
              <h3 className="card-title-neo">Task Management</h3>
              <p className="card-description-neo">Create, edit, and organize tasks with ease. Set priorities, deadlines, and custom categories to stay organized.</p>
            </div>

            <div className="feature-card-neo" style={{ '--idx': '1' }}>
              <div className="card-icon-neo">🔔</div>
              <h3 className="card-title-neo">Smart Reminders</h3>
              <p className="card-description-neo">Get intelligent notifications at the right time. Never miss a deadline with our advanced reminder system.</p>
            </div>

            <div className="feature-card-neo" style={{ '--idx': '2' }}>
              <div className="card-icon-neo">📅</div>
              <h3 className="card-title-neo">Calendar Integration</h3>
              <p className="card-description-neo">Visualize your tasks on an interactive calendar. See everything at a glance and plan your week perfectly.</p>
            </div>

            <div className="feature-card-neo" style={{ '--idx': '3' }}>
              <div className="card-icon-neo">☁️</div>
              <h3 className="card-title-neo">Cloud Sync</h3>
              <p className="card-description-neo">Access your tasks anywhere, anytime. Real-time synchronization across all your devices.</p>
            </div>

            <div className="feature-card-neo" style={{ '--idx': '4' }}>
              <div className="card-icon-neo">🌙</div>
              <h3 className="card-title-neo">Dark Mode</h3>
              <p className="card-description-neo">Easy on the eyes with our beautiful dark mode. Switch between themes based on your preference.</p>
            </div>

            <div className="feature-card-neo" style={{ '--idx': '5' }}>
              <div className="card-icon-neo">🔒</div>
              <h3 className="card-title-neo">Secure & Private</h3>
              <p className="card-description-neo">Your data is encrypted and secure. We prioritize your privacy and security above all else.</p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="features-section-neo">
          <div className="section-header-neo">
            <h2 className="section-title-neo">How It Works</h2>
            <p className="section-subtitle-neo">Get started in three simple steps</p>
          </div>

          <div className="workflow-cards-neo">
            <div className="workflow-card-neo">
              <div className="step-number-neo">1</div>
              <h3 className="step-title-neo">Create Tasks</h3>
              <p className="step-description-neo">Add your tasks with title, description, and deadline to get started managing your work.</p>
            </div>

            <div className="workflow-card-neo">
              <div className="step-number-neo">2</div>
              <h3 className="step-title-neo">Set Reminders</h3>
              <p className="step-description-neo">Configure smart reminders to receive notifications at the perfect time before your deadlines.</p>
            </div>

            <div className="workflow-card-neo">
              <div className="step-number-neo">3</div>
              <h3 className="step-title-neo">Complete & Track</h3>
              <p className="step-description-neo">Mark tasks as done and track your progress. Celebrate your accomplishments and stay motivated.</p>
            </div>
          </div>
        </section>

        {/* Advanced Capabilities */}
        <section className="features-section-neo">
          <div className="section-header-neo">
            <h2 className="section-title-neo">Advanced Capabilities</h2>
            <p className="section-subtitle-neo">Power features for advanced users</p>
          </div>

          <div className="benefits-grid-neo">
            <div className="benefit-card-neo" style={{ '--idx': '0' }}>
              <div className="benefit-icon-neo">🎯</div>
              <h3 className="benefit-title-neo">Priority Levels</h3>
              <p className="benefit-text-neo">Mark tasks as urgent, high, medium, or low priority to focus on what matters most.</p>
            </div>

            <div className="benefit-card-neo" style={{ '--idx': '1' }}>
              <div className="benefit-icon-neo">🏷️</div>
              <h3 className="benefit-title-neo">Smart Tags</h3>
              <p className="benefit-text-neo">Organize tasks with custom tags for better categorization and quick filtering.</p>
            </div>

            <div className="benefit-card-neo" style={{ '--idx': '2' }}>
              <div className="benefit-icon-neo">⏰</div>
              <h3 className="benefit-title-neo">Time Tracking</h3>
              <p className="benefit-text-neo">Track time spent on tasks and analyze your productivity patterns over time.</p>
            </div>

            <div className="benefit-card-neo" style={{ '--idx': '3' }}>
              <div className="benefit-icon-neo">📊</div>
              <h3 className="benefit-title-neo">Analytics</h3>
              <p className="benefit-text-neo">View detailed insights about your task completion rates and productivity trends.</p>
            </div>

            <div className="benefit-card-neo" style={{ '--idx': '4' }}>
              <div className="benefit-icon-neo">👥</div>
              <h3 className="benefit-title-neo">Collaboration</h3>
              <p className="benefit-text-neo">Share tasks with team members and collaborate on projects seamlessly.</p>
            </div>

            <div className="benefit-card-neo" style={{ '--idx': '5' }}>
              <div className="benefit-icon-neo">🔄</div>
              <h3 className="benefit-title-neo">Recurring Tasks</h3>
              <p className="benefit-text-neo">Set up recurring tasks for daily, weekly, or monthly routines automatically.</p>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="features-section-neo">
          <div className="section-header-neo">
            <h2 className="section-title-neo">Built with Modern Tech</h2>
            <p className="section-subtitle-neo">Powered by the latest technologies</p>
          </div>

          <div className="tech-grid-neo">
            <div className="tech-card-neo" style={{ '--idx': '0' }}>
              <div className="tech-icon-neo">⚛️</div>
              <h3 className="tech-name-neo">React</h3>
              <p className="tech-desc-neo">Modern UI library for fast, responsive interfaces</p>
            </div>

            <div className="tech-card-neo" style={{ '--idx': '1' }}>
              <div className="tech-icon-neo">🐍</div>
              <h3 className="tech-name-neo">Django</h3>
              <p className="tech-desc-neo">Robust backend framework with excellent security</p>
            </div>

            <div className="tech-card-neo" style={{ '--idx': '2' }}>
              <div className="tech-icon-neo">⚡</div>
              <h3 className="tech-name-neo">Vite</h3>
              <p className="tech-desc-neo">Lightning-fast build tool for optimal performance</p>
            </div>

            <div className="tech-card-neo" style={{ '--idx': '3' }}>
              <div className="tech-icon-neo">🐳</div>
              <h3 className="tech-name-neo">Docker</h3>
              <p className="tech-desc-neo">Containerized deployment for reliability</p>
            </div>
          </div>
        </section>

        {/* Benefits Showcase */}
        <section className="features-section-neo">
          <div className="section-header-neo">
            <h2 className="section-title-neo">Why Choose Us?</h2>
          </div>

          <div className="benefits-grid-neo">
            <div className="benefit-card-neo">
              <div className="benefit-icon-neo">🚀</div>
              <h3 className="benefit-title-neo">Lightning Fast</h3>
              <p className="benefit-text-neo">Optimized performance ensures smooth experience</p>
            </div>

            <div className="benefit-card-neo">
              <div className="benefit-icon-neo">🎨</div>
              <h3 className="benefit-title-neo">Beautiful Design</h3>
              <p className="benefit-text-neo">Modern neomorphic UI that's a pleasure to use</p>
            </div>

            <div className="benefit-card-neo">
              <div className="benefit-icon-neo">📱</div>
              <h3 className="benefit-title-neo">Fully Responsive</h3>
              <p className="benefit-text-neo">Perfect experience on desktop, tablet, and mobile</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="features-cta-section-neo">
          <h2 className="cta-title-neo">Ready to Transform Your Productivity?</h2>
          <p className="cta-subtitle-neo">Join thousands of users already managing their tasks efficiently with our app</p>
          <button className="cta-button-neo">Start Using Now</button>
        </section>
      </div>
    </div>
  );
}
