import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail, Building2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      {/* Single Navigation Bar */}
      <div className="nav-bar">
        <div className="container">
          <div className="nav-content">
            <div className="nav-left">
              <Link to="/" className="logo">
                <div className="logo-container">
                  <div className="logo-icon">
                    <Building2 size={32} />
                  </div>
                  <div className="logo-text">
                    <span className="logo-main">Prajna Construction</span>
                    <span className="logo-sub">and Developers</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="nav-right">
              {/* Contact Info - Desktop Only */}
              <div className="contact-info-inline">
                <div className="contact-item">
                  <Phone size={14} />
                  <span>+91 98765 43210</span>
                </div>
                <div className="contact-item">
                  <Mail size={14} />
                  <span>info@prajnaconstruction.in</span>
                </div>
              </div>

              {/* Desktop Menu */}
              <div className="desktop-menu">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="mobile-menu-btn"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mobile-menu-content">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Contact Info */}
            <div className="mobile-contact-section">
              <div className="mobile-contact-item">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </div>
              <div className="mobile-contact-item">
                <Mail size={16} />
                <span>info@prajnaconstruction.in</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
