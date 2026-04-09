import React from 'react'
import '../styles/home.css'

function Home() {
  const features = [
    {
      id: 1,
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Experience blazing fast performance and smooth interactions'
    },
    {
      id: 2,
      icon: '🔒',
      title: 'Secure',
      description: 'Your data is protected with industry-leading security measures'
    },
    {
      id: 3,
      icon: '📱',
      title: 'Mobile Ready',
      description: 'Works perfectly on all devices, desktop, tablet, and mobile'
    },
    {
      id: 4,
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Stunning visual design with flexible customization options'
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Product Manager',
      text: 'This platform has transformed how we work. Highly recommended!',
      avatar: '👨‍💼'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'Designer',
      text: 'The user experience is outstanding. Best decision ever!',
      avatar: '👩‍💻'
    },
    {
      id: 3,
      name: 'Mike Chen',
      role: 'Developer',
      text: 'Clean code, great documentation, and amazing support team.',
      avatar: '👨‍🔬'
    }
  ]

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Our Platform</h1>
          <p className="hero-subtitle">
            Build amazing experiences with our powerful and intuitive platform
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-shape">📊</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="section-header">
          <h2>Why Choose Us</h2>
          <p>Discover the features that make us stand out</p>
        </div>
        <div className="features-grid">
          {features.map(feature => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-item">
          <h3 className="stat-number">10K+</h3>
          <p>Active Users</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">50+</h3>
          <p>Countries</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">99.9%</h3>
          <p>Uptime</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">24/7</h3>
          <p>Support</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="section-header">
          <h2>What Users Say</h2>
          <p>Join thousands of satisfied customers</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <span className="testimonial-avatar">{testimonial.avatar}</span>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-stars">★★★★★</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of users already enjoying the benefits</p>
        <button className="btn btn-primary btn-large">Start Your Free Trial</button>
      </section>
    </div>
  )
}

export default Home