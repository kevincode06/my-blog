import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Email: contact@myblog.com</p>
      <p>Phone: +123 456 789</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Your Name"
          className="form-input"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Your Email"
          className="form-input"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Your Message"
          className="form-textarea"
        />
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
