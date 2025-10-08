import React, { useEffect } from 'react'
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

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

const AppContent = () => {
  const location = useLocation();
  
  // Hide header and footer on login page and dashboard for better UX
  const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/dashboard';

  return (
    <>
      <ScrollToTop />
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