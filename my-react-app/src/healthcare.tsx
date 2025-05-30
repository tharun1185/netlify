import React from 'react';
import './healthcare.css'; // Import your CSS file

const HealthcarePage = () => {
    return (
        <div className="healthcare-app">
            {/* Header Section */}
            <header className="header-section">
                <div className="container header-container">
                    <a href="#" className="site-logo">MediCare</a>
                    <nav className="main-nav">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#appointment" className="btn btn-primary">Book Appointment</a></li>
                        </ul>
                    </nav>
                    <button className="mobile-menu-toggle">
                        {/* You'd typically use an icon here (e.g., from react-icons) */}
                        &#9776; {/* Hamburger icon */}
                    </button>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section id="home" className="hero-section">
                    <div className="container hero-content">
                        <div className="hero-text">
                            <h1>Your Health Journey, Our Dedicated Care</h1>
                            <p>Providing compassionate and comprehensive healthcare solutions for a healthier tomorrow.</p>
                            <a href="#appointment" className="btn btn-secondary">Schedule an Appointment</a>
                        </div>
                        <div className="hero-image">
                            <img src="https://placehold.co/600x400/ADD8E6/000000?text=Healthcare+Team" alt="Healthcare professionals" />
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="services-section">
                    <div className="container">
                        <h2 className="section-title">Our Comprehensive Services</h2>
                        <div className="services-grid">
                            <div className="service-card">
                                <div className="service-icon">&#x2713;</div> {/* Placeholder icon */}
                                <h3>General Consultations</h3>
                                <p>Expert diagnosis and treatment for common ailments, ensuring your well-being.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">&#x231B;</div>
                                <h3>Preventative Care</h3>
                                <p>Proactive health screenings and lifestyle advice to prevent future health issues.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">&#x21B1;</div>
                                <h3>Specialist Referrals</h3>
                                <p>Seamless referrals to top specialists for advanced medical needs.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">&#x1F4F1;</div>
                                <h3>Telehealth Services</h3>
                                <p>Convenient virtual consultations from the comfort and safety of your home.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">&#x1F9EA;</div>
                                <h3>Lab & Diagnostics</h3>
                                <p>Accurate and timely lab testing and diagnostic imaging for precise health insights.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">&#x1F4DA;</div>
                                <h3>Wellness Programs</h3>
                                <p>Personalized programs focusing on nutrition, fitness, and mental well-being.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Us Section */}
                <section id="about" className="about-section">
                    <div className="container about-content">
                        <div className="about-image">
                            <img src="https://placehold.co/600x400/D1E7DD/000000?text=Clinic+View" alt="Doctors collaborating" />
                        </div>
                        <div className="about-text">
                            <h2 className="section-title">About MediCare</h2>
                            <p>
                                At MediCare, we are committed to providing exceptional healthcare services with a patient-centric approach. Our team of experienced doctors and compassionate staff work tirelessly to ensure every patient receives personalized and effective care.
                            </p>
                            <p>
                                Founded on the principles of integrity, innovation, and empathy, we leverage the latest medical advancements to deliver superior health outcomes. Your health and well-being are at the heart of everything we do.
                            </p>
                            <a href="#contact" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section id="testimonials" className="testimonials-section">
                    <div className="container">
                        <h2 className="section-title">What Our Patients Say</h2>
                        <div className="testimonials-grid">
                            <div className="testimonial-card">
                                <p className="testimonial-text">
                                    "MediCare has transformed my approach to health. The doctors are incredibly thorough and genuinely care about their patients. Highly recommend!"
                                </p>
                                <div className="testimonial-author-info">
                                    <img src="https://placehold.co/60x60/C4C4C4/000000?text=P1" alt="Patient 1" className="author-avatar" />
                                    <div>
                                        <p className="author-name">Jane Doe</p>
                                        <p className="author-role">Satisfied Patient</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-card">
                                <p className="testimonial-text">
                                    "The telehealth service was a lifesaver! Quick, efficient, and I received excellent medical advice without leaving my home."
                                </p>
                                <div className="testimonial-author-info">
                                    <img src="https://placehold.co/60x60/C4C4C4/000000?text=P2" alt="Patient 2" className="author-avatar" />
                                    <div>
                                        <p className="author-name">John Smith</p>
                                        <p className="author-role">Telehealth User</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action / Appointment Section */}
                <section id="appointment" className="cta-section">
                    <div className="container">
                        <h2 className="section-title cta-title">Ready to Prioritize Your Health?</h2>
                        <p className="cta-description">
                            Book an appointment with our specialists today and take the first step towards a healthier life.
                        </p>
                        <a href="#" className="btn btn-secondary cta-button">
                            Book Your Appointment Now
                        </a>
                    </div>
                </section>
            </main>

            {/* Footer Section */}
            <footer className="footer-section">
                <div className="container footer-grid">
                    <div className="footer-col">
                        <h3 className="footer-heading">MediCare</h3>
                        <p>Dedicated to providing top-tier healthcare services with a focus on patient well-being and satisfaction.</p>
                    </div>
                    <div className="footer-col">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3 className="footer-heading">Contact Info</h3>
                        <p>123 Health St, Wellness City, State 12345</p>
                        <p>Email: info@medicare.com</p>
                        <p>Phone: +1 (555) 123-4567</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 MediCare. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default HealthcarePage;