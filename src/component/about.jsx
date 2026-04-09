import React from 'react'
import '../styles/about.css'

function About() {
  const team = [
    {
      id: 1,
      name: 'Sarah Anderson',
      role: 'CEO & Founder',
      bio: 'Passionate about innovation and user experience',
      avatar: '👩‍💼'
    },
    {
      id: 2,
      name: 'John Smith',
      role: 'CTO',
      bio: 'Expert in scalable architecture and cloud solutions',
      avatar: '👨‍💻'
    },
    {
      id: 3,
      name: 'Emily Davis',
      role: 'Head of Design',
      bio: 'Creative leader with focus on user-centered design',
      avatar: '👩‍🎨'
    },
    {
      id: 4,
      name: 'Michael Zhang',
      role: 'Lead Developer',
      bio: 'Full-stack engineer with 10+ years experience',
      avatar: '👨‍💻'
    }
  ]

  const values = [
    {
      id: 1,
      title: 'Innovation',
      description: 'We continuously push boundaries and embrace new technologies to solve complex problems'
    },
    {
      id: 2,
      title: 'Quality',
      description: 'Excellence is our standard. We deliver high-quality products and services consistently'
    },
    {
      id: 3,
      title: 'Integrity',
      description: 'We maintain honesty and transparency in all our dealings with customers and partners'
    },
    {
      id: 4,
      title: 'Collaboration',
      description: 'We believe in teamwork and working together to achieve amazing results'
    }
  ]

  const milestones = [
    { year: '2020', event: 'Company Founded' },
    { year: '2021', event: 'First 100 Users' },
    { year: '2022', event: 'Series A Funding' },
    { year: '2023', event: 'Expanded to 50 Countries' },
    { year: '2024', event: '10K+ Active Users' },
    { year: '2025', event: 'Industry Recognition' }
  ]

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Building the future with innovation and passion</p>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            We are dedicated to revolutionizing how teams collaborate and work together. 
            Our mission is to provide cutting-edge solutions that empower businesses to achieve 
            their goals faster and more efficiently. We believe in creating technology that is 
            accessible, intuitive, and transformative.
          </p>
          <p>
            Every day, we strive to exceed expectations and deliver exceptional value to our 
            customers, partners, and community. We're not just building products; we're building 
            a better future.
          </p>
        </div>
        <div className="mission-visual">
          <div className="mission-icon">🚀</div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <h2>Our Values</h2>
        <div className="values-grid">
          {values.map(value => (
            <div key={value.id} className="value-card">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline">
        <h2>Our Journey</h2>
        <div className="timeline-container">
          {milestones.map((milestone, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>{milestone.year}</h4>
                <p>{milestone.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <p className="team-intro">
          Talented individuals united by a common vision to create amazing products
        </p>
        <div className="team-grid">
          {team.map(member => (
            <div key={member.id} className="team-card">
              <div className="team-avatar">{member.avatar}</div>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <h2>Why Choose Us</h2>
        <div className="why-grid">
          <div className="why-item">
            <div className="why-icon">✓</div>
            <h4>Proven Track Record</h4>
            <p>Trusted by thousands of companies worldwide</p>
          </div>
          <div className="why-item">
            <div className="why-icon">✓</div>
            <h4>Dedicated Support</h4>
            <p>24/7 customer support team ready to help</p>
          </div>
          <div className="why-item">
            <div className="why-icon">✓</div>
            <h4>Continuous Innovation</h4>
            <p>Always evolving with latest technologies</p>
          </div>
          <div className="why-item">
            <div className="why-icon">✓</div>
            <h4>Security First</h4>
            <p>Enterprise-grade security for your peace of mind</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <h2>Get in Touch</h2>
        <p>Have questions? We'd love to hear from you!</p>
        <button className="btn btn-primary btn-large">Contact Us</button>
      </section>
    </div>
  )
}

export default About