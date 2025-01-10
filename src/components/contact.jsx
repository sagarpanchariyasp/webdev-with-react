import React, { useState } from 'react';
import '../../src/contact.css'; // Assuming you have a CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // You can handle form submission, validation, or send to backend here
    alert('Your message has been sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact-section">
      <h2>Who Am I?</h2>
      <p>Hi, I’m Sagar Panchariya, a passionate web developer with experience in creating fast, responsive, and visually appealing websites. With a deep understanding of React and web technologies, I can bring your ideas to life.</p>
      
      <h3>Looking to build your website? Let’s make it happen!</h3>
      <p>Whether it's for your business, personal brand, or an innovative idea, I can help. Fill out the form below, and let's get started!</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="4" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
