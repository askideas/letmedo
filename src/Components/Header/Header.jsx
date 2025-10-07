import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Menu, 
  X, 
  ChevronDown, 
  Building2, 
  Users, 
  Calculator, 
  Heart, 
  Pill,
  Phone,
  Mail,
  Hotel,
  UtensilsCrossed,
  Package,
  UserCheck,
  Car,
  ShoppingCart,
  GraduationCap,
  Briefcase,
  FileText,
  TrendingUp,
  Globe,
  Shield
} from 'lucide-react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const location = useLocation()

  const services = [
    { name: 'School Management System', icon: Building2, path: '/services/school', description: 'Complete educational management' },
    { name: 'Hospital Management System', icon: Heart, path: '/services/hospital', description: 'Healthcare operations management' },
    { name: 'Pharmacy Management System', icon: Pill, path: '/services/pharmacy', description: 'Pharmaceutical inventory & billing' },
    { name: 'Payroll Management System', icon: Calculator, path: '/services/payroll', description: 'Automated payroll processing' },
    { name: 'Hotel Management System', icon: Hotel, path: '/services/hotel', description: 'Complete hospitality management' },
    { name: 'Restaurant Management System', icon: UtensilsCrossed, path: '/services/restaurant', description: 'Food service operations' },
    { name: 'Inventory Management System', icon: Package, path: '/services/inventory', description: 'Stock & warehouse management' },
    { name: 'CRM Software', icon: UserCheck, path: '/services/crm', description: 'Customer relationship management' },
    { name: 'E-commerce Platform', icon: ShoppingCart, path: '/services/ecommerce', description: 'Online store & marketplace solution' },
    { name: 'Learning Management System', icon: GraduationCap, path: '/services/lms', description: 'Online education & training platform' },
    { name: 'Project Management Tool', icon: Briefcase, path: '/services/project', description: 'Team collaboration & task management' },
    { name: 'Document Management System', icon: FileText, path: '/services/document', description: 'Digital document workflow' },
    { name: 'Vehicle Management System', icon: Car, path: '/services/vehicle', description: 'Fleet & transport management' },
    { name: 'Business Analytics Platform', icon: TrendingUp, path: '/services/analytics', description: 'Data insights & reporting' },
    { name: 'Website & Portal Development', icon: Globe, path: '/services/web', description: 'Custom web applications' },
  ]

  return (
    <header className="navbar-custom">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          {/* Brand Logo */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <div className="logo-container me-2">
              <Building2 size={32} className="text-primary" />
            </div>
            <div>
              <span className="fw-bold text-primary fs-4">LetMeDo</span>
              <small className="d-block text-muted" style={{ fontSize: '0.7rem', lineHeight: '1' }}>
                Software Solutions
              </small>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="navbar-toggler border-0" 
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Menu */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link 
                  className={`nav-link fw-medium ${location.pathname === '/' ? 'active' : ''}`} 
                  to="/"
                >
                  Home
                </Link>
              </li>
              
              {/* Services Dropdown */}
              <li 
                className="nav-item dropdown"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <a 
                  className="nav-link fw-medium d-flex align-items-center" 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsServicesOpen(!isServicesOpen)
                  }}
                >
                  Services
                  <ChevronDown size={16} className="ms-1" />
                </a>
                <div className={`dropdown-menu services-dropdown ${isServicesOpen ? 'show' : ''}`}>
                  <div className="container">
                    <div className="row g-3">
                      {services.map((service, index) => (
                        <div key={index} className="col-6 col-md-4 col-lg-3 col-xl-4">
                          <Link 
                            className="service-card-link text-decoration-none"
                            to={service.path}
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <div className="service-card-item p-3 text-center d-flex" style={{height: 'fit-content'}}>
                              <div className="service-icon-wrapper mb-2">
                                <service.icon size={24} className="text-primary" />
                              </div>
                              <div style={{height: 'fit-content'}}>
                                <div className="fw-medium mb-1 text-dark text-left" style={{fontSize: '14px'}}>{service.name}</div>
                                <small className="text-muted text-left" style={{fontSize: '12px'}}>{service.description}</small>
                              </div>
                              
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                    
                    {/* Call to Action */}
                    <div className="row mt-3 pt-3 border-top">
                      <div className="col-12 text-center">
                        <p className="mb-2 text-muted small">Need a custom solution?</p>
                        <Link 
                          to="/contact" 
                          className="btn btn-primary btn-sm"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          Contact Our Team
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <Link className="nav-link fw-medium" to="/about">About</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link fw-medium" to="/contact">Contact</Link>
              </li>
            </ul>

            {/* Right Side Actions */}
            <div className="d-flex align-items-center gap-3">
              <div className="d-none d-lg-flex align-items-center text-muted me-3">
                <Phone size={16} className="me-2" />
                <span className="small">+1 (555) 123-4567</span>
              </div>
              
              <Link 
                to="/login" 
                className="btn btn-outline-primary btn-sm px-3"
              >
                Login
              </Link>
              
              <Link 
                to="/demo" 
                className="btn btn-primary btn-sm px-3"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="mobile-overlay d-lg-none"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  )
}

export default Header