import React from 'react';
import './About.css';

const About = () => {
  const skills = ['React', 'JavaScript', 'Node.js', 'Firebase', 'AWS', 'TypeScript'];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image-container">
            <img 
              src="/assets/profile.jpg" 
              alt="Rashan" 
              className="about-image float"
            />
          </div>
          <div className="about-text">
            <h3>My Journey</h3>
            <p>
              I'm a passionate software engineer with 5+ years of experience in building
              scalable web applications. My expertise lies in modern JavaScript frameworks
              and cloud technologies.
            </p>
            <h3>Education</h3>
            <p>
              <strong>BSc in Computer Science</strong> - University of Colombo (2015-2019)
            </p>
            <div className="skills-container">
              <h3>Skills</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;