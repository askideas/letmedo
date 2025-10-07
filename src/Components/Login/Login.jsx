import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  ArrowRight, 
  Building2, 
  CheckCircle
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

  return (
    <div className="login-container">
      <div className="container-fluid vh-100">
        <div className="row h-100 g-0">
          
          {/* Left Side - Branding (Desktop only) */}
          <div className="col-lg-6 d-none d-lg-flex">
            <div className="brand-section">
              <div className="brand-content">
                <Link to="/" className="brand-logo">
                  <Building2 size={32} />
                  <div>
                    <h3>LetMeDo</h3>
                    <span>Software Solutions</span>
                  </div>
                </Link>
                
                <div className="welcome-text">
                  <h1>Welcome Back!</h1>
                  <p>Access your management dashboard and continue streamlining your business operations.</p>
                </div>
                
                <div className="features-list">
                  <div className="feature">
                    <CheckCircle size={20} />
                    <span>Secure & Reliable</span>
                  </div>
                  <div className="feature">
                    <CheckCircle size={20} />
                    <span>24/7 Support</span>
                  </div>
                  <div className="feature">
                    <CheckCircle size={20} />
                    <span>Cloud-Based</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="col-12 col-lg-6">
            <div className="form-section">
              {/* Mobile Header */}
              <div className="mobile-brand d-lg-none">
                <Link to="/" className="mobile-logo">
                  <Building2 size={28} />
                  <span>LetMeDo</span>
                </Link>
                <Link to="/" className="back-link">← Back to Home</Link>
              </div>

              <div className="login-form-wrapper">
                <div className="form-header">
                  <h2>Sign In</h2>
                  <p>Enter your credentials to access your account</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                  {/* Email Field */}
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <div className="input-wrapper">
                      <Mail size={18} className="input-icon" />
                      <input
                        type="email"
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
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <div className="input-wrapper">
                      <Lock size={18} className="input-icon" />
                      <input
                        type={showPassword ? 'text' : 'password'}
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
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  {/* Remember & Forgot */}
                  <div className="form-options">
                    <label className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        disabled={isLoading}
                      />
                      <span>Remember me</span>
                    </label>
                    <a href="#" className="forgot-link">Forgot password?</a>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner"></span>
                        Signing in...
                      </>
                    ) : (
                      <>
                        Sign In
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>

                  {/* Sign Up Link */}
                  <div className="signup-link">
                    Don't have an account? 
                    <a href="#"> Request Access</a>
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