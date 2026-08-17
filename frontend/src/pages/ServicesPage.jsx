export default function ServicesPage() {
  return (
    <div className="services-page">
      <div className="services-container">
        {/* Hero Section with Neomorphic Design */}
        <div className="services-hero-neo">
          <div className="services-hero-content-neo">
            <div className="neo-badge">
              <span>🎯</span>
              <span>Professional Services</span>
            </div>

            <h1 className="services-hero-title-neo">
              Professional <span className="accent-text">Services</span> Built for Your Success
            </h1>

            <p className="services-hero-subtitle-neo">
              Comprehensive solutions designed to streamline your task management workflow and maximize team productivity. From consultation to implementation, we support every step of your journey.
            </p>

            <div className="hero-cta-neo">
              <button className="btn-primary-neo">Get Started Now</button>
              <button className="btn-secondary-neo">Learn More</button>
            </div>
          </div>

          <div className="hero-stats-neo">
            <div className="stat-item-neo">
              <div className="stat-value-neo">24/7</div>
              <div className="stat-label-neo">Support</div>
            </div>
            <div className="stat-item-neo">
              <div className="stat-value-neo">500+</div>
              <div className="stat-label-neo">Happy Clients</div>
            </div>
            <div className="stat-item-neo">
              <div className="stat-value-neo">99.9%</div>
              <div className="stat-label-neo">Uptime</div>
            </div>
            <div className="stat-item-neo">
              <div className="stat-value-neo">⚙️</div>
              <div className="stat-label-neo">Custom Solutions</div>
            </div>
          </div>
        </div>

        {/* Core Services Section */}
        <section className="services-section-neo">
          <div className="section-header-neo">
            <h2 className="section-title-neo">Our Core Services</h2>
            <p className="section-subtitle-neo">A complete range of professional services tailored to your needs</p>
          </div>

          <div className="features-grid-neo">
            <div className="feature-card-neo" style={{ '--idx': '0' }}>
              <div className="card-icon-neo">💼</div>
              <h3 className="card-title-neo">Consultation</h3>
              <p className="card-description-neo">Expert guidance to assess your current workflow and identify optimization opportunities for maximum efficiency.</p>
            </div>

            <div className="feature-card-neo" style={{ '--idx': '1' }}>
              <div className="card-icon-neo">🛠️</div>
              <h3 className="card-title-neo">Implementation</h3>
              <p className="card-description-neo">Full setup and configuration of our platform tailored to your specific business requirements and goals.</p>
            </div>

            <div className="feature-card-neo" style={{ '--idx': '2' }}>
              <div className="card-icon-neo">👥</div>
              <h3 className="card-title-neo">Team Training</h3>
              <p className="card-description-neo">Comprehensive training programs for your team to maximize platform adoption and user proficiency.</p>
            </div>

            <div className="feature-card-neo" style={{ '--idx': '3' }}>
              <div className="card-icon-neo">📊</div>
              <h3 className="card-title-neo">Analytics & Reporting</h3>
              <p className="card-description-neo">In-depth analysis and custom reports to track productivity metrics and identify areas for improvement.</p>
            </div>

            <div className="feature-card-neo" style={{ '--idx': '4' }}>
              <div className="card-icon-neo">🔧</div>
              <h3 className="card-title-neo">Integration Support</h3>
              <p className="card-description-neo">Seamless integration with your existing tools and systems for a unified workflow management experience.</p>
            </div>

            <div className="feature-card-neo" style={{ '--idx': '5' }}>
              <div className="card-icon-neo">📞</div>
              <h3 className="card-title-neo">Dedicated Support</h3>
              <p className="card-description-neo">24/7 customer support from our expert team to ensure smooth operation and quick resolution of issues.</p>
            </div>
          </div>
        </section>

        {/* Service Packages Section */}
        <section className="services-section-neo">
          <div className="section-header-neo">
            <h2 className="section-title-neo">Service Packages</h2>
            <p className="section-subtitle-neo">Choose the package that best fits your business needs</p>
          </div>

          <div className="packages-grid-neo">
            <div className="package-card-neo" style={{ '--idx': '0' }}>
              <div className="package-badge-neo">Starter</div>
              <div className="package-price-neo">$29<span>/mo</span></div>
              <p className="package-description-neo">Perfect for small teams and startups</p>
              <ul className="package-features-neo">
                <li><span className="check-icon-neo">✓</span> Basic consultation</li>
                <li><span className="check-icon-neo">✓</span> Platform setup</li>
                <li><span className="check-icon-neo">✓</span> Email support</li>
                <li><span className="check-icon-neo">✓</span> Monthly analytics</li>
              </ul>
              <button className="package-btn-neo">Choose Plan</button>
            </div>

            <div className="package-card-neo featured" style={{ '--idx': '1' }}>
              <div className="package-badge-neo featured-badge">Professional</div>
              <div className="package-price-neo">$79<span>/mo</span></div>
              <p className="package-description-neo">Ideal for growing businesses</p>
              <ul className="package-features-neo">
                <li><span className="check-icon-neo">✓</span> Full consultation</li>
                <li><span className="check-icon-neo">✓</span> Custom implementation</li>
                <li><span className="check-icon-neo">✓</span> Team training (2 sessions)</li>
                <li><span className="check-icon-neo">✓</span> Phone & email support</li>
                <li><span className="check-icon-neo">✓</span> Weekly analytics reports</li>
              </ul>
              <button className="package-btn-neo featured-btn">Choose Plan</button>
            </div>

            <div className="package-card-neo" style={{ '--idx': '2' }}>
              <div className="package-badge-neo">Enterprise</div>
              <div className="package-price-neo">Custom<span>/pricing</span></div>
              <p className="package-description-neo">For large organizations</p>
              <ul className="package-features-neo">
                <li><span className="check-icon-neo">✓</span> Strategic consultation</li>
                <li><span className="check-icon-neo">✓</span> Full implementation suite</li>
                <li><span className="check-icon-neo">✓</span> Unlimited team training</li>
                <li><span className="check-icon-neo">✓</span> 24/7 dedicated support</li>
                <li><span className="check-icon-neo">✓</span> Custom integrations</li>
              </ul>
              <button className="package-btn-neo">Contact Sales</button>
            </div>
          </div>
        </section>

        {/* How Our Services Work */}
        <section className="services-section-neo">
          <div className="section-header-neo">
            <h2 className="section-title-neo">How Our Services Work</h2>
            <p className="section-subtitle-neo">A simple, transparent process for implementation</p>
          </div>

          <div className="workflow-cards-neo">
            <div className="workflow-card-neo">
              <div className="step-number-neo">1</div>
              <h3 className="step-title-neo">Discovery & Assessment</h3>
              <p className="step-description-neo">We analyze your current processes and understand your unique requirements.</p>
            </div>

            <div className="workflow-card-neo">
              <div className="step-number-neo">2</div>
              <h3 className="step-title-neo">Custom Configuration</h3>
              <p className="step-description-neo">Our team configures the platform to match your specific business needs and workflows.</p>
            </div>

            <div className="workflow-card-neo">
              <div className="step-number-neo">3</div>
              <h3 className="step-title-neo">Training & Launch</h3>
              <p className="step-description-neo">We train your team and ensure a smooth transition with ongoing support.</p>
            </div>

            <div className="workflow-card-neo">
              <div className="step-number-neo">4</div>
              <h3 className="step-title-neo">Optimization & Support</h3>
              <p className="step-description-neo">Continuous monitoring and optimization to ensure you get maximum value from the platform.</p>
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="services-section-neo">
          <div className="section-header-neo">
            <h2 className="section-title-neo">Specialized Services</h2>
            <p className="section-subtitle-neo">Advanced solutions for specific needs</p>
          </div>

          <div className="benefits-grid-neo">
            <div className="benefit-card-neo" style={{ '--idx': '0' }}>
              <div className="benefit-icon-neo">🏢</div>
              <h3 className="benefit-title-neo">Enterprise Solutions</h3>
              <p className="benefit-text-neo">Scalable solutions designed for large organizations with complex requirements.</p>
            </div>

            <div className="benefit-card-neo" style={{ '--idx': '1' }}>
              <div className="benefit-icon-neo">🔗</div>
              <h3 className="benefit-title-neo">API Integration</h3>
              <p className="benefit-text-neo">Custom API development and integration with third-party applications.</p>
            </div>

            <div className="benefit-card-neo" style={{ '--idx': '2' }}>
              <div className="benefit-icon-neo">📱</div>
              <h3 className="benefit-title-neo">Mobile Optimization</h3>
              <p className="benefit-text-neo">Optimized mobile experience for on-the-go task management and team collaboration.</p>
            </div>

            <div className="benefit-card-neo" style={{ '--idx': '3' }}>
              <div className="benefit-icon-neo">🔐</div>
              <h3 className="benefit-title-neo">Security & Compliance</h3>
              <p className="benefit-text-neo">Enhanced security measures and compliance support for regulated industries.</p>
            </div>

            <div className="benefit-card-neo" style={{ '--idx': '4' }}>
              <div className="benefit-icon-neo">📊</div>
              <h3 className="benefit-title-neo">Custom Dashboards</h3>
              <p className="benefit-text-neo">Personalized dashboards and metrics tailored to your business KPIs.</p>
            </div>

            <div className="benefit-card-neo" style={{ '--idx': '5' }}>
              <div className="benefit-icon-neo">🚀</div>
              <h3 className="benefit-title-neo">Performance Tuning</h3>
              <p className="benefit-text-neo">Advanced optimization to enhance system performance and user experience.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="services-section-neo">
          <div className="section-header-neo">
            <h2 className="section-title-neo">Why Choose Our Services</h2>
            <p className="section-subtitle-neo">Excellence in every interaction</p>
          </div>

          <div className="why-us-grid-neo">
            <div className="why-us-card-neo" style={{ '--idx': '0' }}>
              <div className="why-us-icon-neo">🎓</div>
              <h3 className="why-us-title-neo">Expert Team</h3>
              <p className="why-us-text-neo">Our team of certified professionals brings years of experience in task management and workflow optimization.</p>
            </div>

            <div className="why-us-card-neo" style={{ '--idx': '1' }}>
              <div className="why-us-icon-neo">⏱️</div>
              <h3 className="why-us-title-neo">Quick Turnaround</h3>
              <p className="why-us-text-neo">Fast implementation and deployment without disrupting your current operations.</p>
            </div>

            <div className="why-us-card-neo" style={{ '--idx': '2' }}>
              <div className="why-us-icon-neo">💰</div>
              <h3 className="why-us-title-neo">Cost Effective</h3>
              <p className="why-us-text-neo">Transparent pricing with no hidden fees. You get measurable ROI from day one.</p>
            </div>

            <div className="why-us-card-neo" style={{ '--idx': '3' }}>
              <div className="why-us-icon-neo">🤝</div>
              <h3 className="why-us-title-neo">Partnership Approach</h3>
              <p className="why-us-text-neo">We become an extension of your team, invested in your long-term success.</p>
            </div>

            <div className="why-us-card-neo" style={{ '--idx': '4' }}>
              <div className="why-us-icon-neo">📈</div>
              <h3 className="why-us-title-neo">Proven Results</h3>
              <p className="why-us-text-neo">Customers report 40% improvement in productivity and 30% reduction in project delays.</p>
            </div>

            <div className="why-us-card-neo" style={{ '--idx': '5' }}>
              <div className="why-us-icon-neo">🌍</div>
              <h3 className="why-us-title-neo">Global Support</h3>
              <p className="why-us-text-neo">Round-the-clock support available in multiple languages for teams worldwide.</p>
            </div>
          </div>
        </section>

        {/* Service Levels */}
        <section className="services-section-neo">
          <div className="section-header-neo">
            <h2 className="section-title-neo">Service Level Agreement</h2>
            <p className="section-subtitle-neo">We guarantee the highest standards of service</p>
          </div>

          <div className="sla-grid-neo">
            <div className="sla-card-neo">
              <div className="sla-icon-neo">✓</div>
              <h3 className="sla-title-neo">Response Time</h3>
              <p className="sla-value-neo">1 Hour</p>
              <p className="sla-description-neo">Average response to support tickets</p>
            </div>

            <div className="sla-card-neo">
              <div className="sla-icon-neo">✓</div>
              <h3 className="sla-title-neo">Uptime Guarantee</h3>
              <p className="sla-value-neo">99.9%</p>
              <p className="sla-description-neo">Reliable platform availability</p>
            </div>

            <div className="sla-card-neo">
              <div className="sla-icon-neo">✓</div>
              <h3 className="sla-title-neo">Resolution Time</h3>
              <p className="sla-value-neo">24 Hours</p>
              <p className="sla-description-neo">Most issues resolved within one business day</p>
            </div>

            <div className="sla-card-neo">
              <div className="sla-icon-neo">✓</div>
              <h3 className="sla-title-neo">Satisfaction Rate</h3>
              <p className="sla-value-neo">98%</p>
              <p className="sla-description-neo">Customer satisfaction and retention rate</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="services-section-neo">
          <div className="section-header-neo">
            <h2 className="section-title-neo">Client Success Stories</h2>
            <p className="section-subtitle-neo">See how our services transform businesses</p>
          </div>

          <div className="testimonials-grid-neo">
            <div className="testimonial-card-neo" style={{ '--idx': '0' }}>
              <div className="testimonial-stars-neo">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-quote-neo">"The implementation was seamless and the support team was incredibly helpful. Our team productivity has increased significantly."</p>
              <p className="testimonial-author-neo">— Sarah Johnson, Operations Manager</p>
              <p className="testimonial-company-neo">TechCorp Inc.</p>
            </div>

            <div className="testimonial-card-neo" style={{ '--idx': '1' }}>
              <div className="testimonial-stars-neo">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-quote-neo">"Exceptional service from start to finish. The team understood our needs and delivered exactly what we wanted."</p>
              <p className="testimonial-author-neo">— Michael Chen, Project Lead</p>
              <p className="testimonial-company-neo">Digital Solutions Ltd.</p>
            </div>

            <div className="testimonial-card-neo" style={{ '--idx': '2' }}>
              <div className="testimonial-stars-neo">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-quote-neo">"Best investment we made this year. The ROI was evident within the first month of deployment."</p>
              <p className="testimonial-author-neo">— Emma Williams, CFO</p>
              <p className="testimonial-company-neo">Growth Ventures</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="services-cta-section-neo">
          <h2 className="cta-title-neo">Ready to Transform Your Workflow?</h2>
          <p className="cta-subtitle-neo">Schedule a consultation with our experts today and discover how we can optimize your task management</p>
          <button className="cta-button-neo">Schedule Consultation</button>
        </section>
      </div>
    </div>
  );
}
