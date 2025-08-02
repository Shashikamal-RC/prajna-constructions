import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Wrench, Cog, Palette, ShieldCheck } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom homes built to your exact specifications with attention to every detail.',
      features: [
        'Custom Home Design',
        'New Home Construction',
        'Luxury Home Building',
        'Energy-Efficient Homes',
        'Smart Home Integration'
      ],
      image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Building2,
      title: 'Commercial Construction',
      description: 'Professional commercial buildings designed for functionality and aesthetics.',
      features: [
        'Office Buildings',
        'Retail Spaces',
        'Industrial Facilities',
        'Warehouses',
        'Mixed-Use Developments'
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Wrench,
      title: 'Renovations & Remodeling',
      description: 'Transform your existing space with our expert renovation services.',
      features: [
        'Kitchen Remodeling',
        'Bathroom Renovations',
        'Home Additions',
        'Basement Finishing',
        'Whole House Renovations'
      ],
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Cog,
      title: 'Project Management',
      description: 'Comprehensive project management from planning to completion.',
      features: [
        'Project Planning',
        'Timeline Management',
        'Budget Control',
        'Quality Assurance',
        'Vendor Coordination'
      ],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Palette,
      title: 'Design & Build',
      description: 'Complete design and construction services under one roof.',
      features: [
        'Architectural Design',
        'Interior Design',
        '3D Visualization',
        'Permit Acquisition',
        'Construction Execution'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: ShieldCheck,
      title: 'Maintenance & Repairs',
      description: 'Ongoing maintenance and repair services to keep your property in top condition.',
      features: [
        'Preventive Maintenance',
        'Emergency Repairs',
        'Structural Inspections',
        'HVAC Services',
        'Electrical & Plumbing'
      ],
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We start with a detailed consultation to understand your vision, requirements, and budget.'
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Our team creates detailed plans and designs, incorporating your feedback at every stage.'
    },
    {
      step: '03',
      title: 'Permits & Approvals',
      description: 'We handle all necessary permits and regulatory approvals to ensure compliance.'
    },
    {
      step: '04',
      title: 'Construction',
      description: 'Our skilled craftsmen bring your project to life with quality materials and expert techniques.'
    },
    {
      step: '05',
      title: 'Quality Control',
      description: 'Rigorous quality checks throughout the construction process ensure excellence.'
    },
    {
      step: '06',
      title: 'Final Delivery',
      description: 'We complete your project on time and conduct a final walkthrough to ensure satisfaction.'
    }
  ];

  return (
    <div className="services">
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
              <h1>Our Services</h1>
              <p>Comprehensive construction solutions for all your building needs</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>What We Do</h2>
            <p>We offer a full range of construction services to meet your needs</p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card-detailed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-icon">
                    <service.icon size={30} />
                  </div>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Our Process</h2>
            <p>How we bring your construction project from concept to completion</p>
          </motion.div>

          <div className="process-steps">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="process-step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <div className="choose-content">
            <motion.div
              className="choose-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Why Choose Prajna Construction?</h2>
              <div className="benefits">
                <div className="benefit">
                  <ShieldCheck size={24} />
                  <div>
                    <h4>Licensed & Insured</h4>
                    <p>Fully licensed and insured for your peace of mind</p>
                  </div>
                </div>
                <div className="benefit">
                  <Cog size={24} />
                  <div>
                    <h4>Expert Craftsmanship</h4>
                    <p>Skilled professionals with years of experience</p>
                  </div>
                </div>
                <div className="benefit">
                  <Home size={24} />
                  <div>
                    <h4>Quality Materials</h4>
                    <p>We use only the finest materials for lasting results</p>
                  </div>
                </div>
                <div className="benefit">
                  <Building2 size={24} />
                  <div>
                    <h4>On-Time Delivery</h4>
                    <p>Projects completed on schedule and within budget</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="choose-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Why Choose Us" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Start Your Project?</h2>
            <p>Contact us today for a free consultation and detailed quote</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get Free Quote</a>
              <a href="tel:+15551234567" className="btn btn-secondary">Call Now</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
