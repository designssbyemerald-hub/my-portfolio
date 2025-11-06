import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'SalesPulse Analytics',
        description: 'A comprehensive sales analytics dashboard featuring interactive charts, KPI tracking, and real-time data visualization. Built with React and Recharts.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
        tags: ['React', 'Recharts', 'Data Visualization', 'Analytics'],
        liveUrl: 'https://salespulse-dashboard.vercel.app',
        githubUrl: 'https://github.com/designssbyemerald-hub'
    },
    {
        id: 2,
        title: 'Chop Chop Restaurant',
        description: 'A modern restaurant ordering system with menu browsing, cart management, and checkout functionality. Features smooth animations and responsive design.',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop',
        tags: ['React', 'E-commerce', 'UI/UX', 'Responsive Design'],
        liveUrl: 'https://chop-chop-restaurant-qas8.vercel.app',
        githubUrl: 'https://github.com/designssbyemerald-hub'
    },
    {
        id: 3,
        title: 'TaskFlow Manager',
        description: 'A beautiful task management app with categories, progress tracking, and real-time stats. Features local storage persistence and smooth animations.',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop',
        tags: ['React', 'LocalStorage', 'Task Management', 'UI/UX'],
        liveUrl: 'https://task-manager-eta-ten-78.vercel.app',
        githubUrl: 'https://github.com/designssbyemerald-hub/task-manager'
     },
    {
        id: 4,
        title: 'NexaFlow',
        description: 'A cutting-edge workflow automation platform designed to streamline business processes, enhance productivity, and create seamless digital experiences.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
        tags: ['React', 'Automation', 'Business', 'SaaS'],
        liveUrl: 'https://nexaflow-qu3l.vercel.app/',
        githubUrl: 'https://github.com/designssbyemerald-hub/nexaflow'
    },
    {   
        id: 5,
        title: 'ACME Dashboard',
        description: 'A professional CRM/Sales dashboard featuring real-time KPI metrics, interactive charts for lead sources and revenue tracking, and a comprehensive company leads management system with search functionality.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
        tags: ['React', 'Recharts', 'CRM', 'Dashboard', 'Data', 'Visualization' ],
        liveUrl: 'https://acme-dashboard-liard.vercel.app/',
        githubUrl: 'https://github.com/designssbyemerald-hub/acme-dashboard'
    },
    {
        id: 6,
        title: 'Code Snippet Manager',
        description: 'A powerful code snippet manager for developers to organize, save, and quickly access their frequently used code snippets. Features syntax highlighting, categorization, and search functionality.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
        tags: ['React', 'Code Management', 'Syntax Highlighting', 'Developer Tools' ],
        liveUrl: 'https://code-snippet-manager-tej3.vercel.app/',
        githubUrl: 'https://github.com/designssbyemerald-hub/code-snippet-manager'
    },
    
];

const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Responsive Design', level: 90 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Git/GitHub', level: 70 }
];

const styles = {
    container: {
        minHeight: '100vh',
        backgroundColor: '#0a0e27',
        color: 'white'
    },
    nav: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(10, 14, 39, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '20px 0',
        zIndex: 1000,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    },
    navContent: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        fontSize: '24px',
        fontWeight: 'bold',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
    },
    navLinks: {
        display: 'flex',
        gap: '32px',
        listStyle: 'none'
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '16px',
        fontWeight: '500',
        transition: 'color 0.3s',
        cursor: 'pointer'
    },
    hero: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 24px 80px',
        background: 'radial-gradient(ellipse at top, #1e3a8a 0%, #0a0e27 50%)'
    },
    heroContent: {
        maxWidth: '1200px',
        width: '100%',
        textAlign: 'center'
    },
    heroTitle: {
        fontSize: '72px',
        fontWeight: 'bold',
        marginBottom: '24px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        lineHeight: '1.2',
        animation: 'fadeInUp 1s ease-out'
    },
    heroSubtitle: {
        fontSize: '32px',
        color: '#94a3b8',
        marginBottom: '32px',
        fontWeight: '300',
        animation: 'fadeInUp 1s ease-out 0.2s both'
    },
    heroBio: {
        fontSize: '18px',
        color: '#cbd5e1',
        maxWidth: '700px',
        margin: '0 auto 48px',
        lineHeight: '1.8',
        animation: 'fadeInUp 1s ease-out 0.4s both'
    },
    ctaButtons: {
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        flexWrap: 'wrap',
        animation: 'fadeInUp 1s ease-out 0.6s both'
    },
    primaryButton: {
        padding: '16px 32px',
        fontSize: '16px',
        fontWeight: '600',
        border: 'none',
        borderRadius: '12px',
        cursor: 'pointer',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        transition: 'transform 0.3s, box-shadow 0.3s',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px'
    },
    secondaryButton: {
        padding: '16px 32px',
        fontSize: '16px',
        fontWeight: '600',
        border: '2px solid #667eea',
        borderRadius: '12px',
        cursor: 'pointer',
        background: 'transparent',
        color: 'white',
        transition: 'all 0.3s',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px'
    },
    section: {
        padding: '100px 24px',
        maxWidth: '1200px',
        margin: '0 auto'
    },
    sectionTitle: {
        fontSize: '48px',
        fontWeight: 'bold',
        marginBottom: '16px',
        textAlign: 'center'
    },
    sectionSubtitle: {
        fontSize: '18px',
        color: '#94a3b8',
        textAlign: 'center',
        marginBottom: '64px'
    },
    aboutGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '32px',
        marginTop: '48px'
    },
    featureCard: {
        padding: '32px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'transform 0.3s, border-color 0.3s'
    },
    featureIcon: {
        width: '56px',
        height: '56px',
        borderRadius: '12px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px'
    },
    featureTitle: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '12px'
    },
    featureDescription: {
        color: '#94a3b8',
        lineHeight: '1.6'
    },
    skillsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '24px',
        marginTop: '48px'
    },
    skillCard: {
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    skillName: {
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '12px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    skillBar: {
        height: '8px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '4px',
        overflow: 'hidden'
    },
    skillProgress: {
        height: '100%',
        background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '4px',
        transition: 'width 1.5s ease-out'
    },
    projectsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '40px'
    },
    projectCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s'
    },
    projectImage: {
        width: '100%',
        height: '250px',
        objectFit: 'cover'
    },
    projectContent: {
        padding: '32px'
    },
    projectTitle: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '12px'
    },
    projectDescription: {
        color: '#94a3b8',
        marginBottom: '20px',
        lineHeight: '1.6'
    },
    projectTags: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: '24px'
    },
    tag: {
        padding: '6px 12px',
        backgroundColor: 'rgba(102, 126, 234, 0.2)',
        borderRadius: '20px',
        fontSize: '12px',
        color: '#a78bfa'
    },
    projectLinks: {
        display: 'flex',
        gap: '16px'
    },
    projectButton: {
        padding: '10px 20px',
        fontSize: '14px',
        fontWeight: '600',
        border: '1px solid #667eea',
        borderRadius: '8px',
        cursor: 'pointer',
        background: 'transparent',
        color: 'white',
        transition: 'all 0.3s',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px'
    },
    contact: {
        textAlign: 'center',
        padding: '100px 24px',
        background: 'radial-gradient(ellipse at bottom, #1e3a8a 0%, #0a0e27 50%)'
    },
    contactTitle: {
        fontSize: '48px',
        fontWeight: 'bold',
        marginBottom: '24px'
    },
    contactText: {
        fontSize: '18px',
        color: '#94a3b8',
        marginBottom: '48px',
        maxWidth: '600px',
        margin: '0 auto 48px'
    },
    socialLinks: {
        display: 'flex',
        gap: '24px',
        justifyContent: 'center',
        marginBottom: '48px'
    },
    socialButton: {
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s',
        textDecoration: 'none',
        color: 'white'
    },
    footer: {
        padding: '32px 24px',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#64748b'
    }
};

function Portfolio() {
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div style={styles.container}>
            <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

            <nav style={styles.nav}>
                <div style={styles.navContent}>
                    <div style={styles.logo}>Celestina</div>
                    <ul style={styles.navLinks}>
                        <li><a style={styles.navLink} onClick={() => scrollToSection('home')}>Home</a></li>
                        <li><a style={styles.navLink} onClick={() => scrollToSection('about')}>About</a></li>
                        <li><a style={styles.navLink} onClick={() => scrollToSection('projects')}>Projects</a></li>
                        <li><a style={styles.navLink} onClick={() => scrollToSection('contact')}>Contact</a></li>
                    </ul>
                </div>
            </nav>

            <section id="home" style={styles.hero}>
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>Akinola Aanuoluwapo</h1>
                    <h2 style={styles.heroSubtitle}>Frontend Developer</h2>
                    <p style={styles.heroBio}>
                        A passionate frontend developer with a keen eye for design and user experience. I specialize in building responsive, interactive web applications using modern technologies like React. With a creative approach to problem-solving, I transform ideas into elegant, functional digital experiences that users love.
                    </p>
                    <div style={styles.ctaButtons}>
                        <a
                            style={styles.primaryButton}
                            onClick={() => scrollToSection('projects')}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = 'none';
                            }}
                        >
                            View My Work
                        </a>
                        <a
                            href="mailto:aanuoluwapoc16@gmail.com"
                            style={styles.secondaryButton}
                            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(102, 126, 234, 0.1)'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>
            </section>

            <section id="about" style={styles.section}>
                <h2 style={styles.sectionTitle}>What I Do</h2>
                <p style={styles.sectionSubtitle}>Crafting beautiful, functional web experiences</p>

                <div style={styles.aboutGrid}>
                    <div
                        style={styles.featureCard}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        }}
                    >
                        <div style={styles.featureIcon}><Code size={28} /></div>
                        <h3 style={styles.featureTitle}>Clean Code</h3>
                        <p style={styles.featureDescription}>
                            Writing maintainable, scalable code following industry best practices and modern standards.
                        </p>
                    </div>

                    <div
                        style={styles.featureCard}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        }}
                    >
                        <div style={styles.featureIcon}><Palette size={28} /></div>
                        <h3 style={styles.featureTitle}>UI/UX Design</h3>
                        <p style={styles.featureDescription}>
                            Creating intuitive, visually appealing interfaces that provide exceptional user experiences.
                        </p>
                    </div>

                    <div
                        style={styles.featureCard}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        }}
                    >
                        <div style={styles.featureIcon}><Zap size={28} /></div>
                        <h3 style={styles.featureTitle}>Performance</h3>
                        <p style={styles.featureDescription}>
                            Building fast, optimized applications that deliver smooth, responsive user interactions.
                        </p>
                    </div>
                </div>

                <div style={{ marginTop: '100px' }}>
                    <h3 style={{ ...styles.sectionTitle, fontSize: '36px' }}>Skills</h3>
                    <div style={styles.skillsGrid}>
                        {skills.map((skill) => (
                            <div key={skill.name} style={styles.skillCard}>
                                <div style={styles.skillName}>
                                    <span>{skill.name}</span>
                                    <span>{skill.level}%</span>
                                </div>
                                <div style={styles.skillBar}>
                                    <div style={{ ...styles.skillProgress, width: `${skill.level}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="projects" style={{ ...styles.section, backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                <h2 style={styles.sectionTitle}>Featured Projects</h2>
                <p style={styles.sectionSubtitle}>Check out some of my recent work</p>

                <div style={styles.projectsGrid}>
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            style={styles.projectCard}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <img src={project.image} alt={project.title} style={styles.projectImage} />
                            <div style={styles.projectContent}>
                                <h3 style={styles.projectTitle}>{project.title}</h3>
                                <p style={styles.projectDescription}>{project.description}</p>
                                <div style={styles.projectTags}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                                <div style={styles.projectLinks}>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={styles.projectButton}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = 'rgba(102, 126, 234, 0.2)';
                                            e.target.style.borderColor = '#a78bfa';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = 'transparent';
                                            e.target.style.borderColor = '#667eea';
                                        }}
                                    >
                                        <Github size={16} />
                                        Code
                                    </a>
                                    <a
                                        href={project.liveUrl}
                                        style={styles.projectButton}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = 'rgba(102, 126, 234, 0.2)';
                                            e.target.style.borderColor = '#a78bfa';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = 'transparent';
                                            e.target.style.borderColor = '#667eea';
                                        }}
                                    >
                                        <ExternalLink size={16} />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="contact" style={styles.contact}>
                <h2 style={styles.contactTitle}>Let's Work Together</h2>
                <p style={styles.contactText}>
                    I'm currently available for freelance work and full-time opportunities.
                    Let's create something amazing together!
                </p>

                <div style={styles.socialLinks}>
                    <a
                        href="mailto:aanuoluwapoc16@gmail.com"
                        style={styles.socialButton}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'scale(1.1)';
                            e.target.style.backgroundColor = 'rgba(102, 126, 234, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                        }}
                    >
                        <Mail size={24} />
                    </a>
                    <a
                        href="https://github.com/designssbyemerald-hub"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.socialButton}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'scale(1.1)';
                            e.target.style.backgroundColor = 'rgba(102, 126, 234, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                        }}
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/celestina-a-927859221"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.socialButton}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'scale(1.1)';
                            e.target.style.backgroundColor = 'rgba(102, 126, 234, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                        }}
                    >
                        <Linkedin size={24} />
                    </a>
                </div>

                <a
                    href="mailto:aanuoluwapoc16@gmail.com"
                    style={styles.primaryButton}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.05)';
                        e.target.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = 'none';
                    }}
                >
                    Send Me an Email
                </a>
            </section>

            <footer style={styles.footer}>
                <p>© 2024 Akinola Aanuoluwapo Celestina. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Portfolio;
