import React from 'react'
import './Leadership.css'
import arinahImg from '../image/arinah.png';
import haidaImg from '../image/haida.png';
import aqilahImg from '../image/aqilah.jpeg';
import vidBg from '../image/video.mp4';


const Leadership = () => {
  const leaders = [
    {
      name: "Syarifah Nurul Aqilah Safwah binti Syed Mohd Asri",
      position: "Chief Executive Officer",
      image: aqilahImg,
      bio: "7+ years of experience in technology leadership and business strategy.",
      skills: ["Strategic Planning", "Team Leadership", "Business Development"]
    },
    {
      name: "Puteri Arinah binti Sahimi",
      position: "Chief Technology Officer",
      image: arinahImg,
      bio: "Expert in software architecture and emerging technologies with 8+ years experience.",
      skills: ["Software Architecture", "AI/ML", "Cloud Computing"]
    },
    {
      name: "Siti Haida binti Nasir",
      position: "Head of Operations",
      image: haidaImg,
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
                  height="750"
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

        <div className="video-section">
          <h3 className="video-title">Let's Watch Video!</h3>
          <div className="video-grid">
              <div className="video-image">
                  <video
                      src={vidBg}
                      controls
                      preload="metadata">
                  >
                  </video>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Leadership
