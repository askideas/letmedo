import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  ArrowRight,
  Download,
  Shield,
  Award,
  Clock,
  Globe
} from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'School Management System', path: '/services/school' },
    { name: 'Payroll System', path: '/services/payroll' },
    { name: 'Hospital Management System', path: '/services/hospital' },
    { name: 'Pharmacy Management System', path: '/services/pharmacy' }
  ]

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Support', path: '/support' },
    { name: 'Documentation', path: '/docs' },
    { name: 'API Reference', path: '/api' },
    { name: 'Status Page', path: '/status' }
  ]

  const resources = [
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'White Papers', path: '/whitepapers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Webinars', path: '/webinars' },
    { name: 'Training', path: '/training' },
    { name: 'Community', path: '/community' }
  ]

  const certifications = [
    { icon: Shield, text: 'ISO 27001' },
    { icon: Award, text: 'SOC 2 Type II' },
    { icon: Globe, text: 'GDPR Compliant' },
    { icon: Clock, text: '99.9% Uptime' }
  ]

  return (
    <footer className="footer">
      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="row g-4">
            {/* Company Info */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-section">
                <div className="footer-brand mb-4">
                  <Link to="/" className="d-flex align-items-center text-decoration-none">
                    <div className="footer-logo me-3">
                      <Building2 size={28} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white mb-0">LetMeDo</h4>
                      <small className="text-white-50">Software Solutions</small>
                    </div>
                  </Link>
                </div>
                
                <p className="footer-description mb-4">
                  Empowering organizations worldwide with comprehensive management systems. 
                  From schools to hospitals, we deliver innovative software solutions that 
                  streamline operations and drive success.
                </p>

                {/* Contact Info */}
                <div className="contact-info">
                  <div className="contact-item d-flex align-items-center mb-3">
                    <div className="contact-icon me-3">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-white">+1 (555) 123-4567</div>
                      <small className="text-white-50">24/7 Support Available</small>
                    </div>
                  </div>
                  
                  <div className="contact-item d-flex align-items-center mb-3">
                    <div className="contact-icon me-3">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-white">contact@letmedo.com</div>
                      <small className="text-white-50">Get in touch with us</small>
                    </div>
                  </div>
                  
                  <div className="contact-item d-flex align-items-center">
                    <div className="contact-icon me-3">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-white">San Francisco, CA</div>
                      <small className="text-white-50">Global headquarters</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="col-lg-2 col-md-6">
              <div className="footer-section">
                <h5 className="footer-title mb-4">Our Services</h5>
                <ul className="footer-links">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link to={service.path} className="footer-link">
                        <ArrowRight size={14} className="me-2" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">
              <div className="footer-section">
                <h5 className="footer-title mb-4">Quick Links</h5>
                <ul className="footer-links">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path} className="footer-link">
                        <ArrowRight size={14} className="me-2" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Resources & Newsletter */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-section">
                <h5 className="footer-title mb-4">Stay Updated</h5>
                <p className="text-white-75 mb-4">
                  Subscribe to our newsletter for the latest updates, 
                  product announcements, and industry insights.
                </p>

                {/* Newsletter Signup */}
                <form className="newsletter-form mb-4">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                    <button className="btn btn-primary" type="submit">
                      <ArrowRight size={18} />
                    </button>
                  </div>
                  <small className="text-white-50 d-block mt-2">
                    We respect your privacy. Unsubscribe at any time.
                  </small>
                </form>

                {/* Resources */}
                <div className="resources-section">
                  <h6 className="text-white mb-3">Resources</h6>
                  <div className="row g-2">
                    {resources.slice(0, 4).map((resource, index) => (
                      <div key={index} className="col-6">
                        <Link to={resource.path} className="resource-link">
                          {resource.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <div className="d-flex flex-wrap align-items-center">
                <p className="text-white-50 mb-0 me-4">
                  © {currentYear} LetMeDo Software Solutions. All rights reserved.
                </p>
                
                {/* Legal Links */}
                <div className="legal-links d-flex gap-3">
                  <a href="/privacy" className="footer-link">Privacy Policy</a>
                  <a href="/terms" className="footer-link">Terms of Service</a>
                  <a href="/cookies" className="footer-link">Cookie Policy</a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="d-flex justify-content-md-end align-items-center">
                {/* Certifications */}
                <div className="certifications d-none d-lg-flex me-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="certification-badge me-3" title={cert.text}>
                      <cert.icon size={16} />
                      <span className="ms-1">{cert.text}</span>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="social-links d-flex gap-2">
                  <a href="#" className="social-link" aria-label="Facebook">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="social-link" aria-label="YouTube">
                    <Youtube size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="footer-floating-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
    </footer>
  )
}

export default Footer