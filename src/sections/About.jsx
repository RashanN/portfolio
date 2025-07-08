import React from 'react';
import './About.css';

const About = () => {
  const skills = ['React','Laravel','MySQL','PHP','Java', 'JavaScript', 'Node.js', 'Firebase', 'AWS', 'TypeScript','Wordpress'];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image-container">
            <img 
              src="/assets/11.jpeg" 
              alt="Rashan" 
              className="about-image float"
            />
          </div>
          <div className="about-text">
            <h3>My Journey</h3>
            <p>
             Hi, I'm Rashan Nakandala, a passionate Senior Software Engineer with years of experience crafting robust web applications and digital experiences. I specialize in  full-stack development, and I love turning complex ideas into simple, elegant, and functional solutions.
         <p>Whether it's solving business problems with technology or building systems that scale, I bring dedication, creativity, and reliability to every project I take on.

When I’m not coding, I’m probably exploring new tech, helping others with their ideas, or thinking about the next big project.</p>
             
            </p>
            <h3>Education</h3>
            <p>
              <strong>BSc (Hon's)</strong>  University of Ruhuna 
              </p>
              <p>
              <strong>Comprehensive Master Java Developer </strong>   IJSE   </p>
            
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