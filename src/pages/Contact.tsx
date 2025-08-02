import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  projectType: string;
  budget: string;
  message: string;
}

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      info: '+91 98765 43210',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'info@prajnaconstruction.in',
      description: 'Send us your project details'
    },
    {
      icon: MapPin,
      title: 'Address',
      info: 'Plot No. 456, Sector 12, Gurgaon, Haryana 122001, India',
      description: 'Visit our office for consultation'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      info: 'Mon - Sat: 9:00 AM - 7:00 PM',
      description: 'Sunday: 10:00 AM - 5:00 PM'
    }
  ];

  const projectTypes = [
    'New Construction',
    'Renovation',
    'Commercial Building',
    'Home Addition',
    'Kitchen Remodel',
    'Bathroom Remodel',
    'Other'
  ];

  const budgetRanges = [
    'Under $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000 - $500,000',
    '$500,000 - $1,000,000',
    'Over $1,000,000'
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>Contact Us</h1>
              <p>Let's discuss your construction project and make your vision a reality</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Get In Touch</h2>
            <p>We're here to help with all your construction needs</p>
          </motion.div>

          <div className="contact-grid">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="contact-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <item.icon size={40} className="contact-icon" />
                <h3>{item.title}</h3>
                <p className="contact-info-text">{item.info}</p>
                <p className="contact-description">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <motion.div
              className="contact-form"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3>Send Us a Message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-message">{errors.name.message}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone')}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      {...register('subject', { required: 'Subject is required' })}
                      className={errors.subject ? 'error' : ''}
                    />
                    {errors.subject && <span className="error-message">{errors.subject.message}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="projectType">Project Type</label>
                    <select id="projectType" {...register('projectType')}>
                      <option value="">Select a project type</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="budget">Budget Range</label>
                    <select id="budget" {...register('budget')}>
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message', { required: 'Message is required' })}
                    className={errors.message ? 'error' : ''}
                    placeholder="Tell us about your project..."
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary btn-full">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              className="contact-map"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3>Find Our Office</h3>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.123456789012!2d-74.0059728!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNSJX!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Prajna Construction Office Location"
                ></iframe>
              </div>
              <div className="map-info">
                <h4>Office Address</h4>
                <p>123 Construction Ave<br />Builder City, BC 12345</p>
                <div className="map-directions">
                  <a href="#" className="btn btn-secondary">Get Directions</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="contact-benefits">
        <div className="container">
          <motion.div
            className="benefits-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>
              <span className="company-title">Prajna Construction</span>
              <span className="company-subtitle">and Developers</span>
            </h2>
            <p>Why Work With Us?</p>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <CheckCircle size={24} />
                </div>
                <h3>Free Consultation</h3>
                <p>We provide detailed consultations at no cost</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <CheckCircle size={24} />
                </div>
                <h3>Transparent Pricing</h3>
                <p>No hidden fees or surprise costs</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <CheckCircle size={24} />
                </div>
                <h3>Licensed & Insured</h3>
                <p>Fully licensed and insured for your protection</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <CheckCircle size={24} />
                </div>
                <h3>Quality Guarantee</h3>
                <p>We stand behind our work with a satisfaction guarantee</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="emergency-contact">
        <div className="container">
          <motion.div
            className="emergency-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>24/7 Emergency Services</h3>
            <p>For urgent construction emergencies, call our emergency hotline</p>
            <a href="tel:+919876543210" className="emergency-phone">
              <Phone size={24} />
              +91 98765 43210
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
