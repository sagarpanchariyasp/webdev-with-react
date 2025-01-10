import React from 'react';
import '../../src/Footer.css'; 
const Footer = () => {
  return (
    
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Sagar Panchariya | All Rights Reserved</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/sagar-panchariya-1a0a73176/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">GitHub</a>
          {/* Add more links if needed */}
        </div>
        <p>Made with <span role="img" aria-label="heart">❤️</span> using React</p>
      </div>
    </footer>
  );
};

export default Footer;
