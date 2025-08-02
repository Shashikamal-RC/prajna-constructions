import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, MapPin, DollarSign, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Modern Family Home',
      category: 'residential',
      location: 'Sector 45, Gurgaon',
      budget: '₹3.5 Cr',
      duration: '8 months',
      year: '2024',
      description: 'A contemporary 3,500 sq ft family home featuring open-plan living, smart home technology, and sustainable design elements.',
      image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: ['https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      features: ['Smart Home Technology', 'Energy Efficient', 'Open Floor Plan', 'Modern Kitchen']
    },
    {
      id: 2,
      title: 'Corporate Office Complex',
      category: 'commercial',
      location: 'Cyber City, Gurgaon',
      budget: '₹18 Cr',
      duration: '14 months',
      year: '2023',
      description: 'A state-of-the-art 50,000 sq ft office complex with modern amenities, green building features, and flexible workspace design.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      features: ['LEED Certified', 'Modern Amenities', 'Flexible Workspace', 'Parking Facility']
    },
    {
      id: 3,
      title: 'Luxury Villa Renovation',
      category: 'renovation',
      location: 'Golf Course Road, Gurgaon',
      budget: '₹5.2 Cr',
      duration: '6 months',
      year: '2024',
      description: 'Complete renovation of a 1990s villa, transforming it into a modern luxury residence while preserving its architectural character.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: ['https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      features: ['Heritage Preservation', 'Luxury Finishes', 'Pool & Spa', 'Landscape Design']
    },
    {
      id: 4,
      title: 'Retail Shopping Center',
      category: 'commercial',
      location: 'Connaught Place, Delhi',
      budget: '₹14.5 Cr',
      duration: '12 months',
      year: '2023',
      description: 'A vibrant 30,000 sq ft shopping center featuring diverse retail spaces, dining areas, and ample parking.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      features: ['Retail Spaces', 'Food Court', 'Parking Structure', 'Modern Design']
    },
    {
      id: 5,
      title: 'Eco-Friendly Townhouses',
      category: 'residential',
      location: 'Sector 76, Noida',
      budget: '₹9.6 Cr',
      duration: '10 months',
      year: '2024',
      description: 'A development of 6 sustainable townhouses featuring solar panels, rainwater harvesting, and energy-efficient systems.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: ['https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      features: ['Solar Panels', 'Rainwater Harvesting', 'Energy Efficient', 'Community Garden']
    },
    {
      id: 6,
      title: 'Kitchen & Bath Remodel',
      category: 'renovation',
      location: 'Vasant Kunj, Delhi',
      budget: '₹68 Lakh',
      duration: '3 months',
      year: '2024',
      description: 'Complete kitchen and master bathroom renovation featuring high-end appliances, custom cabinetry, and luxury finishes.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: ['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      features: ['Custom Cabinetry', 'High-End Appliances', 'Luxury Finishes', 'Modern Design']
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'residential', label: 'Residential' },
    { key: 'commercial', label: 'Commercial' },
    { key: 'renovation', label: 'Renovations' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="projects">
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
              <h1>Our Projects</h1>
              <p>Explore our portfolio of successful construction projects</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="project-filters">
        <div className="container">
          <motion.div
            className="filter-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="filter-title">
              <Filter size={24} />
              <h3>Filter Projects</h3>
            </div>
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category.key}
                  className={`filter-btn ${activeFilter === category.key ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category.key)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid">
        <div className="container">
          <div className="grid">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                layout
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <button className="view-project-btn">
                      <ExternalLink size={20} />
                      View Details
                    </button>
                  </div>
                  <div className="project-category">{project.category}</div>
                </div>
                
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="project-details">
                    <div className="detail-item">
                      <MapPin size={16} />
                      <span>{project.location}</span>
                    </div>
                    <div className="detail-item">
                      <DollarSign size={16} />
                      <span>{project.budget}</span>
                    </div>
                    <div className="detail-item">
                      <Calendar size={16} />
                      <span>{project.duration}</span>
                    </div>
                  </div>

                  <div className="project-features">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="project-stats">
        <div className="container">
          <motion.div
            className="stats-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="stat-item">
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>$50M+</h3>
              <p>Total Project Value</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="featured-project">
        <div className="container">
          <motion.div
            className="featured-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="featured-text">
              <h2>Featured Project</h2>
              <h3>Modern Family Home</h3>
              <p>
                Our latest residential project showcases contemporary design with sustainable 
                building practices. This 3,500 sq ft home features smart home technology, 
                energy-efficient systems, and open-plan living spaces perfect for modern families.
              </p>
              <div className="featured-highlights">
                <div className="highlight">
                  <strong>Size:</strong> 3,500 sq ft
                </div>
                <div className="highlight">
                  <strong>Timeline:</strong> 8 months
                </div>
                <div className="highlight">
                  <strong>Features:</strong> Smart home, Energy efficient, Modern kitchen
                </div>
              </div>
              <button className="btn btn-primary">View Full Gallery</button>
            </div>
            <div className="featured-image">
              <img src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Featured Project" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="projects-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss your vision and bring it to life</p>
            <a href="/contact" className="btn btn-primary">Start Your Project</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
