import React from 'react'
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Building2, 
  Calculator, 
  Heart, 
  Pill,
  Zap,
  Shield,
  Clock,
  Star,
  Award,
  TrendingUp,
  Globe,
  Headphones,
  Hotel,
  UtensilsCrossed,
  Package,
  UserCheck,
  Car,
  ShoppingCart,
  GraduationCap,
  Briefcase,
  FileText
} from 'lucide-react'
import './Home.css'

const Home = () => {
  const services = [
    {
      icon: Building2,
      title: 'School Management System',
      description: 'Complete educational institution management with student records, attendance, grades, and communication tools.',
      features: ['Student Information System', 'Online Attendance', 'Grade Management', 'Parent Portal']
    },
    {
      icon: Heart,
      title: 'Hospital Management System', 
      description: 'Streamlined healthcare operations with patient records, appointment scheduling, and billing integration.',
      features: ['Patient Records', 'Appointment Scheduling', 'Billing Integration', 'Medical Reports']
    },
    {
      icon: Pill,
      title: 'Pharmacy Management System',
      description: 'Inventory management, prescription tracking, and automated billing for pharmaceutical operations.',
      features: ['Inventory Control', 'Prescription Management', 'Billing Automation', 'Supplier Management']
    },
    {
      icon: Calculator,
      title: 'Payroll Management System',
      description: 'Automated payroll processing with tax calculations, employee benefits, and comprehensive reporting.',
      features: ['Automated Calculations', 'Tax Management', 'Employee Self-Service', 'Compliance Reports']
    },
    {
      icon: Hotel,
      title: 'Hotel Management System',
      description: 'Complete hospitality management with room booking, guest services, and revenue optimization.',
      features: ['Room Reservations', 'Guest Check-in/out', 'Billing Management', 'Housekeeping Coordination']
    },
    {
      icon: UtensilsCrossed,
      title: 'Restaurant Management System',
      description: 'Comprehensive food service operations including POS, inventory, and staff management.',
      features: ['Point of Sale', 'Menu Management', 'Kitchen Display', 'Staff Scheduling']
    }
  ]

  const allServices = [
    ...services,
    {
      icon: Package,
      title: 'Inventory Management System',
      description: 'Advanced stock control with real-time tracking, automated reordering, and warehouse management.',
      features: ['Real-time Tracking', 'Automated Reordering', 'Warehouse Management', 'Supplier Integration']
    },
    {
      icon: UserCheck,
      title: 'CRM Software',
      description: 'Customer relationship management with lead tracking, sales pipeline, and communication tools.',
      features: ['Lead Management', 'Sales Pipeline', 'Customer Communications', 'Performance Analytics']
    }
  ]

  const features = [
    { icon: Zap, title: 'Lightning Fast', description: 'Optimized performance for seamless user experience' },
    { icon: Shield, title: 'Secure & Reliable', description: 'Enterprise-grade security with 99.9% uptime' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock technical support and maintenance' },
    { icon: Globe, title: 'Cloud Ready', description: 'Scalable cloud infrastructure for global accessibility' }
  ]

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '50+', label: 'Software Solutions' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="container">
          <div className="row align-items-center min-vh-100 py-5">
            <div className="col-lg-6">
              <div className="hero-content">
                <div className="hero-badge">
                  <Star size={16} />
                  Trusted by 500+ Organizations
                </div>
                
                <h1 className="hero-title">
                  Transform Your Business with
                  <span className="text-primary d-block">Smart Software Solutions</span>
                </h1>
                
                <p className="hero-description">
                  Streamline operations with our comprehensive management systems. From schools to hospitals, 
                  we provide cutting-edge software solutions that boost efficiency and drive growth.
                </p>
                
                <div className="hero-buttons">
                  <a href="/login" className="btn-hero btn-hero-primary">
                    <ArrowRight size={20} />
                    Get Started
                  </a>
                  <a href="#services" className="btn-hero btn-hero-secondary">
                    Request Demo
                  </a>
                </div>
                
                <div className="hero-social-proof">
                  <div className="avatar-group">
                    <div className="avatar">A</div>
                    <div className="avatar">B</div>
                    <div className="avatar">C</div>
                    <div className="avatar">+</div>
                  </div>
                  <div className="social-proof-text">
                    <div>Join 500+ satisfied customers</div>
                    <div className="rating">⭐⭐⭐⭐⭐ 4.9/5 average rating</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="hero-visual">
                <div className="floating-card card-1">
                  <Building2 className="text-primary" size={24} />
                  <span>School System</span>
                </div>
                <div className="floating-card card-2">
                  <Calculator className="text-success" size={24} />
                  <span>Payroll System</span>
                </div>
                <div className="floating-card card-3">
                  <Heart className="text-danger" size={24} />
                  <span>Hospital System</span>
                </div>
                <div className="floating-card card-4">
                  <Pill className="text-info" size={24} />
                  <span>Pharmacy System</span>
                </div>
                <div className="dashboard-mockup">
                  <div className="mockup-header">
                    <div className="mockup-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="mockup-content">
                    <TrendingUp size={80} color="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="row">
            {stats.map((stat, index) => (
              <div key={index} className="col-6 col-lg-3 mb-4">
                <div className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Software Solutions</h2>
            <p className="section-subtitle">
              Comprehensive management systems designed to streamline operations and boost productivity across various industries.
            </p>
          </div>
          
          <div className="row g-4">
            {allServices.map((service, index) => (
              <div key={index} className="col-lg-6 col-xl-4">
                <div className="service-card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="service-icon">
                    <service.icon size={28} />
                  </div>
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                  <ul className="feature-list">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="feature-item">
                        <CheckCircle size={16} className="text-success" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="service-btn">
                    Learn More <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose LetMeDo?</h2>
            <p className="section-subtitle">
              We deliver enterprise-grade solutions with unmatched reliability and support.
            </p>
          </div>
          
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="feature-card">
                  <div className="feature-icon">
                    <feature.icon size={28} />
                  </div>
                  <h5 className="feature-title">{feature.title}</h5>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="cta-content">
                <Award size={64} className="cta-icon" />
                <h2 className="cta-title">Ready to Transform Your Business?</h2>
                <p className="cta-description">
                  Join hundreds of organizations that trust LetMeDo for their management software needs.
                </p>
                <div className="cta-buttons">
                  <a href="#" className="btn-hero btn-hero-primary">
                    <Headphones size={20} />
                    Schedule Consultation
                  </a>
                  <a href="#services" className="btn-hero btn-hero-secondary">
                    View All Solutions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home