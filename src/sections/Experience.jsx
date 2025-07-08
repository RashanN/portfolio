import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
     {
      title: "Senior Software Engineer",
      company: "Brand Corridor PVT LTD",
      period: "2024(July) - Present",
      description: "Conducted comprehensive bug fixing and performance optimization in an immigration consultation application developed using CakePHP, ensuring seamless functionality. Designed and implemented a robust data collection system for a finance company, improving data accuracy and reporting efficiency. Built a ticket reservation system with secure payment integration , streamlining bookings and transactions. Created a table reservation system for restaurants/events, featuring real-time availability updates and automated confirmations using laravel. Designed a job and proposal handover system to streamline task delegation and project transitions within teams using laravel. Developed multiple interactive games (e.g., spin wheel, sensor games , or AR-based experiences) for clients, boosting user interaction and brand visibility. Developed an online election prediction platform with real-time analytics, used by 10K+ users "  
     },
      {
      title: " Software Engineer",
      company: "Brand Corridor PVT LTD",
      period: "2024(March) - July",
      description: "Developed a comprehensive billing system for a play area using RFID cards, implemented with Laravel for efficient payment processing and including integrated stock management. Designed and launched a WooCommerce website using WordPress, enhancing the online shopping experience and improving sales."
    },
    {


      title: "Associate Software Engineer",
      company: "ISHR (Dubai) Remote",
      period: "2023 - 2024",
      description: "Developed and implemented functionality and components in a web application using WordPress to enhance user experience and site performance. Identified and documented website errors, creating detailed reports for development teams to improve website quality and reliability. Managed company resources and provided technical support for non-IT sections, ensuring smooth operations and effective resource utilization."
    },
    {
      title: "Trainee Software Engineer",
      company: "Loons Labs",
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