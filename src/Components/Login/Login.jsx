import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Eye, 
  EyeOff, 
  Facebook,
  Twitter,
  Github,
  User,
  Phone,
  Mail
} from 'lucide-react'
import { toast } from 'react-toastify'
import './Login.css'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  const [signupData, setSignupData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target
    setLoginData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSignupChange = (e) => {
    const { name, value } = e.target
    setSignupData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateSignup = () => {
    const { fullName, mobile, email, password, confirmPassword } = signupData

    if (!fullName.trim()) {
      toast.error('Full name is required')
      return false
    }

    if (!mobile.trim()) {
      toast.error('Mobile number is required')
      return false
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      toast.error('Please enter a valid 10-digit mobile number')
      return false
    }

    if (!email.trim()) {
      toast.error('Email is required')
      return false
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address')
      return false
    }

    if (!password) {
      toast.error('Password is required')
      return false
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long')
      return false
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
      return false
    }

    return true
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    
    if (!loginData.email || !loginData.password) {
      toast.error('Please fill in all required fields')
      return
    }

    if (!loginData.email.includes('@')) {
      toast.error('Please enter a valid email address')
      return
    }

    if (loginData.password.length < 6) {
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

  const handleSignupSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateSignup()) {
      return
    }

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast.success('Account created successfully! Please login.')
      setIsLogin(true)
      // Reset signup form
      setSignupData({
        fullName: '',
        mobile: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    }, 2000)
  }

  const toggleForm = () => {
    setIsLogin(!isLogin)
    setShowPassword(false)
    setShowConfirmPassword(false)
  }

  return (
    <div className="login-container">
      <div className="login-main">
        {/* Left Side - Illustration */}
        <div className="illustration-section">
          <div className="illustration-content">
            <div className="illustration-figure">
              <div className="character">👨‍💻</div>
              
              {/* Chart 1 */}
              <div className="charts chart-1">
                <div className="chart-title">Secure</div>
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
                <div className="chart-title">Fast</div>
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

        {/* Right Side - Forms */}
        <div className="form-section">
          <div className="login-form-wrapper">
            {isLogin ? (
              // Login Form
              <>
                <div className="form-header">
                  <h2>Login</h2>
                  <p>Login to your account<br />Thank you for get back LetMeDo web applications, let's access our the best recommendation for you.</p>
                </div>

                <form onSubmit={handleLoginSubmit} className="login-form">
                  {/* Email Field */}
                  <div className="form-group">
                    <div className="input-wrapper">
                      <Mail size={18} className="input-icon" />
                      <input
                        type="email"
                        name="email"
                        value={loginData.email}
                        onChange={handleLoginChange}
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
                        value={loginData.password}
                        onChange={handleLoginChange}
                        placeholder="••••••"
                        required
                        disabled={isLoading}
                        style={{ paddingLeft: '1rem' }}
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
                        checked={loginData.rememberMe}
                        onChange={handleLoginChange}
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
                    <a href="#" onClick={(e) => { e.preventDefault(); toggleForm(); }}>Create an Account</a>
                  </div>
                </form>
              </>
            ) : (
              // Signup Form
              <>
                <div className="form-header">
                  <h2>Create Account</h2>
                  <p>Join LetMeDo today<br />Create your account and start managing your business efficiently with our solutions.</p>
                </div>

                <form onSubmit={handleSignupSubmit} className="login-form">
                  {/* Full Name Field */}
                  <div className="form-group">
                    <div className="input-wrapper has-icon">
                      <User size={18} className="input-icon" />
                      <input
                        type="text"
                        name="fullName"
                        value={signupData.fullName}
                        onChange={handleSignupChange}
                        placeholder="Full Name"
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  {/* Mobile Number Field */}
                  <div className="form-group">
                    <div className="input-wrapper has-icon">
                      <Phone size={18} className="input-icon" />
                      <input
                        type="tel"
                        name="mobile"
                        value={signupData.mobile}
                        onChange={handleSignupChange}
                        placeholder="Mobile Number"
                        required
                        disabled={isLoading}
                        maxLength="10"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="form-group">
                    <div className="input-wrapper has-icon">
                      <Mail size={18} className="input-icon" />
                      <input
                        type="email"
                        name="email"
                        value={signupData.email}
                        onChange={handleSignupChange}
                        placeholder="Email Address"
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
                        value={signupData.password}
                        onChange={handleSignupChange}
                        placeholder="Password"
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

                  {/* Confirm Password Field */}
                  <div className="form-group">
                    <div className="input-wrapper">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={signupData.confirmPassword}
                        onChange={handleSignupChange}
                        placeholder="Confirm Password"
                        required
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        disabled={isLoading}
                      >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="form-options">
                    <label className="checkbox-wrapper terms-checkbox">
                      <input
                        type="checkbox"
                        required
                        disabled={isLoading}
                      />
                      <span>I agree to the <a href="#" className="terms-link">Terms and Conditions</a></span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Creating Account...' : 'CREATE ACCOUNT'}
                  </button>

                  {/* Login Link */}
                  <div className="signup-link">
                    Already have an account?
                    <a href="#" onClick={(e) => { e.preventDefault(); toggleForm(); }}>Sign In</a>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login