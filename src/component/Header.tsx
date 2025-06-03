import React, { useState } from 'react';
import '../App.css';

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="brand">
          <h1>DEON</h1>
        </div>
        
        <div className="nav-links">
          <div className="dropdown">
            <a href="/" className="dropdown-trigger">Home</a>
            <div className="dropdown-content">
              <a href="/main-home">Main Home</a>
              <a href="/app-presentation">App Presentation</a>
              <a href="/digital-services">Digital Services</a>
              <a href="/product-showcase">Product Showcase</a>
              <a href="/company-home">Company Home</a>
              <a href="/app-showcase">App Showcase</a>
              <a href="/app-landing">App Landing</a>
              <a href="/software-support">Software Support</a>
              <a href="/startup-home">Startup Home</a>
              <a href="/it-business">IT Business</a>
              <a href="/tech-company">Tech Company</a>
              <a href="/landing">Landing</a>
            </div>
          </div>
          <div className="dropdown">
            <a href="/pages" className="dropdown-trigger">Pages</a>
            <div className="dropdown-content">
              <a href="/about-us">About Us</a>
              <a href="/about-me">About Me</a>
              <a href="/our-team">Our Team</a>
              <a href="/our-process">Our Process</a>
              <a href="/pricing-plans">Pricing Plans</a>
              <a href="/contact-us">Contact Us</a>
            </div>
          </div>
          <a href="/portfolio">Portfolio</a>
          <a href="/shop">Shop</a>
          <a href="/blog">Blog</a>
        </div>

        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <span className="hamburger">☰</span>
        </button>
      </nav>

      {/* Sidebar that slides from right to left */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-sidebar" onClick={toggleSidebar}>×</button>
        <div className="sidebar-content">
          <div className="sidebar-dropdown">
            <a href="/" className="sidebar-dropdown-header">Home</a>
            <div className="sidebar-dropdown-content">
              <a href="/main-home">Main Home</a>
              <a href="/app-presentation">App Presentation</a>
              <a href="/digital-services">Digital Services</a>
              <a href="/product-showcase">Product Showcase</a>
              <a href="/company-home">Company Home</a>
              <a href="/app-showcase">App Showcase</a>
              <a href="/app-landing">App Landing</a>
              <a href="/software-support">Software Support</a>
              <a href="/startup-home">Startup Home</a>
              <a href="/it-business">IT Business</a>
              <a href="/tech-company">Tech Company</a>
              <a href="/landing">Landing</a>
            </div>
          </div>
          <div className="sidebar-dropdown">
            <a href="/pages" className="sidebar-dropdown-header">Pages</a>
            <div className="sidebar-dropdown-content">
              <a href="/about-us">About Us</a>
              <a href="/about-me">About Me</a>
              <a href="/our-team">Our Team</a>
              <a href="/our-process">Our Process</a>
              <a href="/pricing-plans">Pricing Plans</a>
              <a href="/contact-us">Contact Us</a>
            </div>
          </div>
          <a href="/portfolio">Portfolio</a>
          <a href="/shop">Shop</a>
          <a href="/blog">Blog</a>
        </div>
      </div>
    </header>
  );
};

export default Header;