import React from 'react';
import '../Certificates.css';

const Certificates = () => {
  return (
    <section className="certificates" id="certificates">
      <h3>Certificates</h3>
      <div className="certificates-container">
      <div className="certificate-item">
          <h4>MicrosoftCopilot Certificate </h4>
          <a 
            href="/Microsoft.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="pdf-link"
          >
            View Certificate
          </a>
        </div>
        <div className="certificate-item">
          <h4> Swayam Certificate </h4>
          <a 
            href="/swayam.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="pdf-link"
          >
            View Certificate
          </a>
        </div>
        <div className="certificate-item">
        <h4> Hackathon Certificate </h4>
        <a 
            href="/hack-athon.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="pdf-link"
          >
            View Certificate
          </a>
        </div>
        <div className="certificate-item">
        <h4> Cyberpunk Certificate </h4>
        <a 
            href="/Cyberpunk.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="pdf-link"
          >
            View Certificate
          </a>
        </div>
        {/* Add more certificates as needed */}
      </div>
    </section>
  );
};

export default Certificates;
