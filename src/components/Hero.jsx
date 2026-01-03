import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-main">AHA-MAZING</span>
            <span className="title-sub">Tech</span>
          </h1>
          <p className="hero-description">
            Transforming businesses through innovative technology solutions. 
            We deliver cutting-edge software development, AI integration, and digital transformation services.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">
              Explore Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
