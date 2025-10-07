import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  ArrowRight, 
  Building2, 
  CheckCircle,
  Shield,
  Users,
  Zap
} from 'lucide-react'
import { toast } from 'react-toastify'
import './Login.css'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.email || !formData.password) {
      toast.error('Please fill in all required fields')
      return
    }

    if (!formData.email.includes('@')) {
      toast.error('Please enter a valid email address')
      return
    }

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters long')
      return
    }

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast.success('Welcome back! Redirecting to dashboard...')
      setTimeout(() => {
        navigate('/dashboard')
      }, 1000)
    }, 2000)
  }

  const features = [
    { icon: Shield, text: 'Enterprise-grade security' },
    { icon: Users, text: '500+ satisfied customers' },
    { icon: Zap, text: 'Lightning-fast performance' },
    { icon: CheckCircle, text: '99.9% uptime guarantee' }
  ]

  return (
    <div className="login-container">
      <div className="login-background"></div>
      
      <div className="container-fluid h-100">
        <div className="row h-100 g-0">
          {/* Left Panel - Branding & Features */}
          <div className="col-lg-7 d-none d-lg-block">
            <div className="brand-panel glass-card" style={{ borderRadius: 0 }}>
              <div className="brand-content">
                {/* Logo and Navigation */}
                <div className="brand-header">
                  <Link to="/" className="brand-logo d-flex align-items-center text-decoration-none">
                    <div className="logo-icon me-3">
                      <Building2 size={28} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white mb-0">LetMeDo</h4>
                      <small className="text-white-50">Software Solutions</small>
                    </div>
                  </Link>
                  
                  <Link to="/" className="btn btn-outline-light btn-sm">
                    ← Back to Home
                  </Link>
                </div>

                {/* Main Content */}
                <div className="brand-main">
                  <div className="welcome-content">
                    <h1 className="display-4 text-white mb-4 fw-bold">
                      Welcome to the Future of 
                      <span className="text-gradient d-block">Business Management</span>
                    </h1>
                    
                    <p className="lead text-white-75 mb-5">
                      Join thousands of organizations worldwide who trust our comprehensive 
                      software solutions to streamline their operations and drive growth.
                    </p>

                    {/* Features List */}
                    <div className="features-grid">
                      {features.map((feature, index) => (
                        <div key={index} className="feature-item d-flex align-items-center mb-3">
                          <div className="feature-icon me-3">
                            <feature.icon size={20} />
                          </div>
                          <span className="text-white">{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="testimonial mt-5 p-4">
                      <div className="stars mb-2">
                        ⭐⭐⭐⭐⭐
                      </div>
                      <p className="text-white-75 mb-3 fst-italic">
                        "LetMeDo transformed how we manage our school operations. 
                        The system is intuitive, reliable, and the support team is exceptional."
                      </p>
                      <div className="d-flex align-items-center">
                        <div className="testimonial-avatar me-3"></div>
                        <div>
                          <div className="text-white fw-medium">Sarah Johnson</div>
                          <small className="text-white-50">Principal, Oakwood Academy</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="floating-elements">
                  <div className="floating-card card-1">
                    <Building2 size={16} className="text-primary" />
                    <span>School System</span>
                  </div>
                  <div className="floating-card card-2">
                    <Shield size={16} className="text-success" />
                    <span>Secure Login</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Login Form */}
          <div className="col-lg-5">
            <div className="login-panel glass-card" style={{ borderRadius: 0 }}>
              <div className="login-form-container">
                {/* Mobile Header */}
                <div className="mobile-header d-lg-none mb-4">
                  <Link to="/" className="d-flex align-items-center text-decoration-none mb-3">
                    <Building2 size={24} className="text-primary me-2" />
                    <span className="fw-bold text-dark">LetMeDo</span>
                  </Link>
                  <Link to="/" className="btn btn-outline-primary btn-sm">
                    ← Back to Home
                  </Link>
                </div>

                {/* Form Header */}
                <div className="form-header text-center mb-4">
                  <h2 className="fw-bold mb-2">Welcome Back</h2>
                  <p className="text-muted">Sign in to access your dashboard</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="login-form">
                  {/* Email Field */}
                  <div className="form-group mb-3">
                    <label htmlFor="email" className="form-label fw-medium">
                      Email Address
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <Mail size={18} className="text-muted" />
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="form-group mb-3">
                    <label htmlFor="password" className="form-label fw-medium">
                      Password
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <Lock size={18} className="text-muted" />
                      </span>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Enter your password"
                        required
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        disabled={isLoading}
                      />
                      <label className="form-check-label text-muted" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-primary text-decoration-none">
                      Forgot password?
                    </a>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-primary w-100 mb-4 py-2"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Signing In...
                      </>
                    ) : (
                      <>
                        Sign In
                        <ArrowRight size={18} className="ms-2" />
                      </>
                    )}
                  </button>

                  {/* Divider */}
                  <div className="divider mb-4">
                    <span>or</span>
                  </div>

                  {/* Social Login Options */}
                  <div className="social-login mb-4">
                    <button type="button" className="btn btn-outline-secondary w-100 mb-2">
                      <img src="/api/placeholder/20/20" alt="Google" className="me-2" />
                      Continue with Google
                    </button>
                    <button type="button" className="btn btn-outline-secondary w-100">
                      <img src="/api/placeholder/20/20" alt="Microsoft" className="me-2" />
                      Continue with Microsoft
                    </button>
                  </div>

                  {/* Sign Up Link */}
                  <div className="text-center">
                    <p className="text-muted mb-0">
                      Don't have an account?{' '}
                      <a href="#" className="text-primary text-decoration-none fw-medium">
                        Request Access
                      </a>
                    </p>
                    <small className="text-muted">
                      Contact our sales team for enterprise accounts
                    </small>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login