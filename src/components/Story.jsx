import React from 'react'
import './Story.css'
import journeyImg from '../image/journey.png';

const Story = () => {
  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "150+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" }
  ]

  return (
    <section id="about" className="story section">
      <div className="container">
        <div className="story-content">
          <div className="story-text">
            <h2 className="story-title">The AHA-MAZING Story</h2>
            <div className="story-description">
              <p>
                Founded with a vision to bridge the gap between innovative technology and practical business solutions, 
                AHA-MAZING Tech has been at the forefront of digital transformation for over 5 years.
              </p>
              <p>
                Our journey began with a simple belief: technology should empower businesses, not complicate them. 
                Today, we've helped over 150 companies across various industries achieve their digital goals through 
                our comprehensive suite of services.
              </p>
              <p>
                From startups looking to build their first application to enterprise companies seeking to modernize 
                their infrastructure, we bring the same level of dedication, expertise, and innovation to every project.
              </p>
            </div>
            
            <div className="story-highlight">
              <h3>Our Mission</h3>
              <p>
                To deliver cutting-edge technology solutions that drive business growth, enhance operational efficiency, 
                and create lasting value for our clients and their customers.
              </p>
            </div>
              <div className="story-highlight">
                  <h3>Our Vission</h3>
                  <p>
                      To deliver cutting-edge technology solutions that drive business growth, enhance operational efficiency,
                      and create lasting value for our clients and their customers.
                  </p>
              </div>
          </div>
          
          <div className="story-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="story-image">
          <img
              src={journeyImg}
            width="868"
            height="2300"
          />
        </div>
      </div>
    </section>
  )
}

export default Story
