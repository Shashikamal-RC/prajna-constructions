import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Building, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  const stats = [
    { icon: Building, number: '500+', label: 'Projects Completed' },
    { icon: Users, number: '50+', label: 'Expert Team Members' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: CheckCircle, number: '100%', label: 'Client Satisfaction' },
  ];

  const services = [
    {
      title: 'Residential Construction',
      description: 'Custom homes built to your exact specifications with quality craftsmanship.',
      image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Commercial Buildings',
      description: 'Professional commercial construction for offices, retail, and industrial spaces.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Renovations',
      description: 'Transform your existing space with our expert renovation services.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  const testimonials = [
    {
      name: 'Arjun Kapoor',
      role: 'Homeowner, Gurgaon',
      content: 'Prajna Construction exceeded our expectations. Their attention to detail and professionalism made our dream home a reality in just 8 months.',
      rating: 5
    },
    {
      name: 'Meera Sharma',
      role: 'Business Owner, Delhi',
      content: 'The team delivered our commercial project on time and within budget. Their understanding of Indian construction standards is exceptional.',
      rating: 5
    },
    {
      name: 'Vikram Patel',
      role: 'Property Developer, Noida',
      content: 'Working with Prajna Construction has been a pleasure. Their expertise in both modern and traditional Indian architecture is unmatched.',
      rating: 5
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>Building Your Dreams Into Reality</h1>
              <p>
                With over 15 years of experience in India, Prajna Construction is your trusted partner 
                for residential and commercial construction projects across Delhi NCR. Quality, integrity, and 
                excellence in every build.
              </p>
              <div className="hero-buttons">
                <Link to="/projects" className="btn btn-primary">
                  View Our Work <ArrowRight size={20} />
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <stat.icon size={40} className="stat-icon" />
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-preview">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Our Services</h2>
            <p>We offer comprehensive construction services to meet all your building needs.</p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services" className="btn btn-primary">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="why-work-with-us">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Why Work With Us?</h2>
          </motion.div>

          <div className="benefits-grid">
            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="benefit-icon">
                <CheckCircle size={40} />
              </div>
              <h3>Free Consultation</h3>
              <p>We provide detailed consultations at no cost</p>
            </motion.div>

            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="benefit-icon">
                <CheckCircle size={40} />
              </div>
              <h3>Transparent Pricing</h3>
              <p>No hidden fees or surprise costs</p>
            </motion.div>

            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="benefit-icon">
                <CheckCircle size={40} />
              </div>
              <h3>Licensed & Insured</h3>
              <p>Fully licensed and insured for your protection</p>
            </motion.div>

            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="benefit-icon">
                <CheckCircle size={40} />
              </div>
              <h3>Quality Guarantee</h3>
              <p>We stand behind our work with a satisfaction guarantee</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Why Choose Prajna Construction?</h2>
              <p>
                With over 15 years of experience in the construction industry, we have built 
                a reputation for excellence, reliability, and customer satisfaction. Our team 
                of skilled professionals is committed to delivering projects that exceed expectations.
              </p>
              <ul className="features-list">
                <li><CheckCircle size={20} /> Licensed and Insured</li>
                <li><CheckCircle size={20} /> Quality Materials</li>
                <li><CheckCircle size={20} /> Experienced Team</li>
                <li><CheckCircle size={20} /> On-Time Delivery</li>
                <li><CheckCircle size={20} /> Competitive Pricing</li>
              </ul>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </motion.div>
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our Team" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>What Our Clients Say</h2>
            <p>Don't just take our word for it - hear from our satisfied customers.</p>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-content">
                  <div className="stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p>"{testimonial.content}"</p>
                  <div className="testimonial-author">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Start Your Project?</h2>
            <p>Contact us today for a free consultation and quote.</p>
            <Link to="/contact" className="btn btn-primary">
              Get Started <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
