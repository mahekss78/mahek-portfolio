import React from 'react';
import '../About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h3>About Me</h3>
      <p className="intro"><strong>Introduction</strong></p>
      <p className="about-description">
        My name is Mahek Sheikh, and I am currently in my third year at St. Vincent Pallotti College of Engineering And Technology, specializing in Cybersecurity. I have a solid foundation in Data Structures and Algorithms (DSA), Object-Oriented Programming (OOP), and various programming languages. In addition to my technical expertise, I have a keen interest in web development and am constantly striving to expand my knowledge in this ever-evolving field.
        <br />
        During my free time, I enjoy immersing myself in books, allowing my imagination to flow freely. I often indulge in writing, and on occasion, I create thought-provoking quotes. As a continuous learner, I understand the depth of knowledge required to master my field and am committed to growing both personally and professionally.
      </p>
      {/* Uncomment and add an image if needed */}
      {/* <img src="path/to/your/image.jpg" alt="About Me" className="about-image" /> */}
    </section>
  );
};

export default About;
