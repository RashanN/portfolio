import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
      description: "Led a team of developers to build scalable web applications using React and Node.js."
    },
    {
      title: "Software Engineer",
      company: "Digital Innovations",
      period: "2017 - 2020",
      description: "Developed and maintained customer-facing web applications."
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item fade-in">
              <div className="timeline-content">
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <span className="timeline-period">{exp.period}</span>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;