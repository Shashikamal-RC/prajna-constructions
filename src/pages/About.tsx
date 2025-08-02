import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Heart, Shield, Clock } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Quality',
      description: 'We never compromise on quality. Every project is built to the highest standards using premium materials and proven techniques.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honesty and transparency are at the core of our business. We build lasting relationships based on trust and reliability.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our work, from initial planning to final delivery.'
    },
    {
      icon: Clock,
      title: 'Timeliness',
      description: 'We respect your time and deadlines. Our projects are completed on schedule without compromising quality.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Sharma',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'With over 20 years in construction, Rajesh leads our company with vision and expertise.'
    },
    {
      name: 'Priya Patel',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Priya ensures every project runs smoothly and meets our high standards for quality and timeline.'
    },
    {
      name: 'Kumar Singh',
      role: 'Lead Architect',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Kumar brings innovative design solutions that blend functionality with aesthetic appeal.'
    },
    {
      name: 'Anita Rao',
      role: 'Quality Control Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Anita maintains our rigorous quality standards across all projects and construction phases.'
    }
  ];

  const milestones = [
    { year: '2009', event: 'Company Founded', description: 'Started with a vision to build quality homes and commercial spaces.' },
    { year: '2012', event: '100th Project', description: 'Completed our 100th construction project, establishing our reputation.' },
    { year: '2015', event: 'Commercial Expansion', description: 'Expanded into commercial construction and large-scale projects.' },
    { year: '2018', event: 'Green Building Certified', description: 'Became certified in sustainable and eco-friendly construction practices.' },
    { year: '2021', event: '500th Project', description: 'Reached the milestone of 500 completed projects with 100% client satisfaction.' },
    { year: '2024', event: 'Digital Innovation', description: 'Implemented cutting-edge technology for project management and client communication.' }
  ];

  return (
    <div className="about">
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
              <h1>About Prajna Construction</h1>
              <p>Building excellence, one project at a time since 2009</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story">
        <div className="container">
          <div className="story-content">
            <motion.div
              className="story-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Our Story</h2>
              <p>
                Founded in 2009 in Gurgaon, Prajna Construction began with a simple mission: to build 
                quality structures that stand the test of time. What started as a small family 
                business has grown into one of North India's most trusted construction companies.
              </p>
              <p>
                Over the years, we have completed more than 500 projects across Delhi NCR, ranging from 
                luxury residential homes to large commercial developments. Our commitment to quality, 
                integrity, and customer satisfaction has earned us a reputation for excellence in the 
                Indian construction industry.
              </p>
              <p>
                Today, we continue to push the boundaries of construction innovation while 
                maintaining the personal touch and attention to detail that our clients expect. 
                Every project we undertake reflects our dedication to building not just structures, 
                but lasting relationships with our clients.
              </p>
            </motion.div>
            <motion.div
              className="story-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our Journey" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <value.icon size={40} className="value-icon" />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Meet Our Team</h2>
            <p>The experienced professionals who make it all happen</p>
          </motion.div>

          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-content">
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  <p>{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Our Journey</h2>
            <p>Key milestones in our company's growth</p>
          </motion.div>

          <div className="timeline-container">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h3>{milestone.event}</h3>
                  <p>{milestone.description}</p>
                </div>
                <div className="timeline-marker"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            <motion.div
              className="stat-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Award size={40} className="stat-icon" />
              <h3>15+</h3>
              <p>Years of Excellence</p>
            </motion.div>
            <motion.div
              className="stat-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Users size={40} className="stat-icon" />
              <h3>50+</h3>
              <p>Expert Team Members</p>
            </motion.div>
            <motion.div
              className="stat-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Target size={40} className="stat-icon" />
              <h3>500+</h3>
              <p>Successful Projects</p>
            </motion.div>
            <motion.div
              className="stat-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Heart size={40} className="stat-icon" />
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
