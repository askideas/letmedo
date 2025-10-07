import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Eye, 
  EyeOff, 
  Facebook,
  Twitter,
  Github
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
      <div className="login-main">
        {/* Left Side - Login Form */}
        <div className="form-section">
          <div className="login-form-wrapper">
            <div className="form-header">
              <h2>Login</h2>
              <p>Login to your account<br />Thank you for get back Neiel web applications, let's access our the best recommendation for you.</p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              {/* Email Field */}
              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="wrapcode.info@gmail.com"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="••••••"
                    required
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                    style={{ position: 'absolute', right: '1rem', background: 'none', border: 'none', cursor: 'pointer' }}
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
                  <span>Remember Me</span>
                </label>
                <a href="#" className="forgot-link">Forget password?</a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="submit-btn"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'LOGIN'}
              </button>

              {/* Divider */}
              <div className="divider">
                <span>OR</span>
              </div>

              {/* Social Login Buttons */}
              <div className="social-login">
                <button type="button" className="social-btn facebook">
                  <Facebook size={20} />
                </button>
                <button type="button" className="social-btn twitter">
                  <Twitter size={20} />
                </button>
                <button type="button" className="social-btn github">
                  <Github size={20} />
                </button>
              </div>

              {/* Sign Up Link */}
              <div className="signup-link">
                Don't have an account?
                <a href="#">Create an Account</a>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="illustration-section">
          <div className="illustration-content">
            <div className="illustration-figure">
              <div className="character">👨‍💻</div>
              
              {/* Chart 1 */}
              <div className="charts chart-1">
                <div className="chart-title">$682.5</div>
                <div className="chart-bars">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              </div>
              
              {/* Chart 2 */}
              <div className="charts chart-2">
                <div className="chart-title">$682.5</div>
                <div className="chart-bars">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login