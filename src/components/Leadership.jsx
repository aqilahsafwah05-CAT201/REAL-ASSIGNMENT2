import React from 'react'
import './Leadership.css'

const Leadership = () => {
  const leaders = [
    {
      name: "Syarifah Nurul Aqilah Safwah binti Syed Mohd Asri",
      position: "Chief Executive Officer",
      image: "https://images.pexels.com/photos/7640798/pexels-photo-7640798.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      bio: "15+ years of experience in technology leadership and business strategy.",
      skills: ["Strategic Planning", "Team Leadership", "Business Development"]
    },
    {
      name: "Puteri Arinah binti Sahimi",
      position: "Chief Technology Officer",
      image: "https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      bio: "Expert in software architecture and emerging technologies with 12+ years experience.",
      skills: ["Software Architecture", "AI/ML", "Cloud Computing"]
    },
    {
      name: "Siti Haida binti Nasir",
      position: "Head of Operations",
      image: "https://images.pexels.com/photos/7793142/pexels-photo-7793142.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      bio: "Operations specialist focused on process optimization and client success.",
      skills: ["Project Management", "Process Optimization", "Client Relations"]
    }
  ]

  const capabilities = [
    { name: "Engineering Team", percentage: 95 },
    { name: "Project Management", percentage: 90 },
    { name: "Client Satisfaction", percentage: 98 },
    { name: "Innovation & Strategy", percentage: 92 }
  ]

  return (
    <section id="leadership" className="leadership section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Leadership</h2>
          <p className="section-description">
            Meet the experienced team driving innovation and excellence at AHA-MAZING Tech
          </p>
        </div>

        <div className="leadership-grid">
          {leaders.map((leader, index) => (
            <div key={index} className="leader-card">
              <div className="leader-image">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  width="975"
                  height="650"
                />
              </div>
              <div className="leader-info">
                <h3 className="leader-name">{leader.name}</h3>
                <p className="leader-position">{leader.position}</p>
                <p className="leader-bio">{leader.bio}</p>
                <div className="leader-skills">
                  {leader.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="capabilities-section">
          <h3 className="capabilities-title">Team Capabilities</h3>
          <div className="capabilities-grid">
            {capabilities.map((capability, index) => (
              <div key={index} className="capability-item">
                <div className="capability-header">
                  <span className="capability-name">{capability.name}</span>
                  <span className="capability-percentage">{capability.percentage}%</span>
                </div>
                <div className="capability-bar">
                  <div 
                    className="capability-fill" 
                    style={{ width: `${capability.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Leadership
