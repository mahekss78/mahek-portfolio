/*import React from 'react';
import '../Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    document.getElementById('feedbackMessage').classList.remove('hidden');
  };

  return (
    <section className="contact" id="contact">
      <h3>Contact Me</h3>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
      <p id="feedbackMessage" className="hidden">Thank you for your message!</p>
    </section>
  );
};

export default Contact;
*/

import React, { useState } from 'react';
import '../Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here

    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Show feedback message
    setSubmitted(true);

    // Optionally hide the feedback message after a few seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="contact" id="contact">
      <h3>Contact Me</h3>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
      {submitted && <p id="feedbackMessage">Thank you for your message!</p>}
    </section>
  );
};

export default Contact;


