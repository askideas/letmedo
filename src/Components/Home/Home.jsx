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
    },
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
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Platform',
      description: 'Complete online store solution with payment processing, inventory sync, and order management.',
      features: ['Online Store Builder', 'Payment Gateway', 'Order Processing', 'Customer Management']
    },
    {
      icon: GraduationCap,
      title: 'Learning Management System',
      description: 'Online education platform with course creation, student tracking, and assessment tools.',
      features: ['Course Creation', 'Student Progress', 'Online Assessments', 'Certificate Management']
    },
    {
      icon: Briefcase,
      title: 'Project Management Tool',
      description: 'Team collaboration platform with task assignment, progress tracking, and resource management.',
      features: ['Task Management', 'Team Collaboration', 'Progress Tracking', 'Resource Planning']
    },
    {
      icon: FileText,
      title: 'Document Management System',
      description: 'Digital document workflow with version control, approval processes, and secure storage.',
      features: ['Version Control', 'Approval Workflow', 'Secure Storage', 'Search & Retrieval']
    },
    {
      icon: Car,
      title: 'Vehicle Management System',
      description: 'Fleet management solution with GPS tracking, maintenance scheduling, and driver management.',
      features: ['GPS Tracking', 'Maintenance Scheduling', 'Driver Management', 'Fuel Monitoring']
    },
    {
      icon: TrendingUp,
      title: 'Business Analytics Platform',
      description: 'Data-driven insights with custom dashboards, reporting tools, and predictive analytics.',
      features: ['Custom Dashboards', 'Advanced Reporting', 'Data Visualization', 'Predictive Analytics']
    },
    {
      icon: Globe,
      title: 'Website & Portal Development',
      description: 'Custom web applications with responsive design, user portals, and content management.',
      features: ['Responsive Design', 'User Portals', 'Content Management', 'SEO Optimization']
    },
    {
      icon: Shield,
      title: 'Security Management System',
      description: 'Access control and monitoring solution with biometric integration and real-time alerts.',
      features: ['Access Control', 'Biometric Integration', 'Real-time Monitoring', 'Security Alerts']
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
                <div className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-4">
                  <Star size={16} className="me-2" />
                  Trusted by 500+ Organizations
                </div>
                
                <h1 className="display-4 fw-bold mb-4 hero-title">
                  Transform Your Business with
                  <span className="text-primary d-block">Smart Software Solutions</span>
                </h1>
                
                <p className="lead text-muted mb-5">
                  Streamline operations with our comprehensive management systems. From schools to hospitals, 
                  we provide cutting-edge software solutions that boost efficiency and drive growth.
                </p>
                
                <div className="d-flex flex-wrap gap-3 mb-5">
                  <button className="btn btn-primary btn-lg px-4">
                    <ArrowRight size={20} className="me-2" />
                    Get Started
                  </button>
                  <button className="btn btn-outline-primary btn-lg px-4">
                    Request Demo
                  </button>
                </div>
                
                <div className="d-flex align-items-center gap-4">
                  <div className="d-flex -space-x-2">
                    <div className="avatar bg-primary"></div>
                    <div className="avatar bg-success"></div>
                    <div className="avatar bg-warning"></div>
                    <div className="avatar bg-info"></div>
                  </div>
                  <div>
                    <div className="fw-bold">Join 500+ satisfied customers</div>
                    <div className="small text-muted">⭐⭐⭐⭐⭐ 4.9/5 average rating</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="hero-image-container">
                <div className="floating-card glass-card card-1 animate-float">
                  <Building2 className="text-primary" size={24} />
                  <span>School System</span>
                </div>
                <div className="floating-card glass-card card-2 animate-float" style={{ animationDelay: '0.5s' }}>
                  <Calculator className="text-success" size={24} />
                  <span>Payroll System</span>
                </div>
                <div className="floating-card glass-card card-3 animate-float" style={{ animationDelay: '1s' }}>
                  <Heart className="text-danger" size={24} />
                  <span>Hospital System</span>
                </div>
                <div className="floating-card glass-card card-4 animate-float" style={{ animationDelay: '1.5s' }}>
                  <Pill className="text-info" size={24} />
                  <span>Pharmacy System</span>
                </div>
                <div className="hero-main-visual">
                  <div className="dashboard-mockup glass-card">
                    <div className="mockup-header">
                      <div className="mockup-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <div className="mockup-content">
                      <TrendingUp size={80} className="text-primary opacity-75" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5">
        <div className="container">
          <div className="row">
            {stats.map((stat, index) => (
              <div key={index} className="col-6 col-lg-3 text-center mb-4">
                <div className="stat-item">
                  <h3 className="display-6 fw-bold text-primary mb-2">{stat.number}</h3>
                  <p className="text-muted mb-0">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="display-5 fw-bold mb-4">Our Software Solutions</h2>
              <p className="lead text-muted">
                Comprehensive management systems designed to streamline operations and boost productivity across various industries.
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-lg-6">
                <div className="service-card glass-card h-100 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="service-icon">
                    <service.icon size={32} />
                  </div>
                  <h4 className="fw-bold mb-3">{service.title}</h4>
                  <p className="text-muted mb-4">{service.description}</p>
                  <ul className="feature-list">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="d-flex align-items-center mb-2">
                        <CheckCircle size={16} className="text-success me-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="btn btn-outline-primary mt-3">
                    Learn More <ArrowRight size={16} className="ms-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="display-5 fw-bold mb-4">Why Choose LetMeDo?</h2>
              <p className="lead text-muted">
                We deliver enterprise-grade solutions with unmatched reliability and support.
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="feature-item text-center">
                  <div className="feature-icon mx-auto mb-3">
                    <feature.icon size={24} />
                  </div>
                  <h5 className="fw-bold mb-3">{feature.title}</h5>
                  <p className="text-muted">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="cta-content">
                <Award size={64} className="text-primary mb-4" />
                <h2 className="display-5 fw-bold mb-4 text-white">Ready to Transform Your Business?</h2>
                <p className="lead mb-5 text-white-50">
                  Join hundreds of organizations that trust LetMeDo for their management software needs.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <button className="btn btn-light btn-lg px-4">
                    <Headphones size={20} className="me-2" />
                    Schedule Consultation
                  </button>
                  <button className="btn btn-outline-light btn-lg px-4">
                    View All Solutions
                  </button>
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