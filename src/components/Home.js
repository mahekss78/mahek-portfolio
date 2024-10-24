import React from 'react';
import '../Home.css';
import profileImage from './mahek sheikh.jpg'; 
<h1 className="header-text">Welcome to My Portfolio</h1>


const Home = () => {
  return (
    <section className="home" id="home">
      <div className="image-section">
        <div className="profile-image-wrapper">
          <img src={profileImage} alt="Mahek Sheikh" className="profile-image" />
        </div>
      </div>
      <div className="text-section">
        <h1>Hi, I'm Mahek Sheikh</h1>
        <p className="subheading">Cybersecurity Enthusiast</p>
        <p>
          Passionate about ethical hacking, web development, and everything cybersecurity!
        </p>
        <div className="buttons">
          <a href="#qualifications" className="btn">Explore My Work</a>
          <a href="#contact" className="btn">Get in Touch</a>
        </div>
      </div>
      <div className="social-icons">
        <a href="https://github.com/mahekss78" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-github social-icon"></i>
        </a>
        <a href="https://www.linkedin.com/in/mahek-sheikh-9b8694319/" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-linkedin social-icon"></i>
        </a>
      </div>
      <div className="contact-info">
        <h3>Contact Me</h3>
        <p>
          <i className="bx bxs-contact"></i> Phone: 919356427261
        </p>
        <p>
          <i className="bx bxs-contact"></i> Email: iamahek.sheikh.786@gmail.com
        </p>
      </div>
    </section>
  );
};

export default Home;
