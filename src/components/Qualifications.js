import React from 'react';
import '../Qualifications.css';

const Qualifications = () => {
  return (
    <section className="qualifications" id="qualifications">
      <h3>Qualifications</h3>
      <div className="qualifications-container">
        <div className="qualification-item">
          <h4>10th Grade</h4>
          <p>School: Modern High School</p>
          <p>Percentage: 88.20%</p>
          <p>Year of Passing: 2020</p>
        </div>
        <div className="qualification-item">
          <h4>12th Grade</h4>
          <p>School:St.Paul Junior College</p>
          <p>Percentage: 82.02%</p>
          <p>Year of Passing: 2022</p>
        </div>
        <div className="qualification-item">
          <h4>B.Tech in Computer Science Engineering-Cyber Security</h4>
          <p>College: St. Vincent Pallotti College of Engineering and Technology</p>
          <p>Year of Study: Third year</p>

          <p>Year of Passing: 2026</p>
        </div>
        {/* Add more qualifications as needed */}
      </div>
    </section>
  );
};

export default Qualifications;
