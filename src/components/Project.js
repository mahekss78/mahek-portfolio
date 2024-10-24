import React from 'react';
import '../Project.css'; // Ensure this CSS file is correctly linked

const Project = () => {
  const project = [
    {
      title: 'To-Do list ',
      description: 'A real-time dashboard to monitor network activity and security alerts.',
      technologies: ['React', 'CSS' ,'JavaScript'] ,
    },
    {
      title: 'Event Management Platform',
      description: 'A full-stack event management website with user authentication and ticket booking integration.',
      technologies: ['MERN Stack', 'Stripe', 'Firebase'],
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing skills, projects, and contact information.',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Advice-Generator App',
      description: 'A web application that provides random pieces of advice fetched from an external API. Built with React and styled with CSS for an interactive user interface.',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Weather-App',
      description: 'A weather forecasting application that provides real-time weather information for various cities, using data from a weather API. Built with React and styled with responsive design.',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Population Finder',
      description: 'A data-driven application that retrieves and displays the population of different countries or cities based on user input, using external APIs. Built with React and styled for clarity and usability.',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Cafe Management using SQL Database',
      description: 'A project that includes both a backend and frontend for managing all data related to a cafe.',
      technologies: ['SQL', 'HTML', 'CSS'],
    },
    {
      title: 'Animal Place Thing Game',
      description: 'Developed using Turbo C++ and graphics.',
      technologies: ['Turbo C++', 'Graphics'],
    },
    
  ];

  return (
    <section className="project section" id="projects">
      <div className="section-title">
        <h2>My Projects</h2>
      </div>

      <div className="project-content">
        {project.map((project, index) => (
          <div className="project-item" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              <h5>Technologies:</h5>
              <ul className="tech-list">
                {project.technologies.map((tech, i) => (
                  <li key={i} className="tech-item">{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;