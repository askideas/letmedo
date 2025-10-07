import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import NotFound from './Components/NotFound/NotFound'
import Footer from './Components/Footer/Footer'

const AppContent = () => {
  const location = useLocation();
  
  // Hide header and footer on login page and dashboard for better UX
  const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/dashboard';

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main className={hideHeaderFooter ? '' : 'flex-grow-1'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!hideHeaderFooter && <Footer />}
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

const App = () => {
  return (
    <Router>
      <div className="app-container d-flex flex-column min-vh-100">
        <AppContent />
      </div>
    </Router>
  )
}

export default App