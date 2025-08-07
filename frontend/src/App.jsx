import React, { useState, useEffect } from 'react';
import JobList from './components/JobList';
import { ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : 
      window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={`app-container ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} shadow-sm sticky-top`}>
        <div className="container">
          <motion.span 
            className="navbar-brand fw-bold d-flex align-items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <i className="bi bi-briefcase-fill me-2"></i>
            MERN Job Board
          </motion.span>

          <div className="form-check form-switch ms-auto d-flex align-items-center">
            <i className={`bi ${darkMode ? 'bi-moon-fill' : 'bi-sun-fill'} me-2`}></i>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="themeSwitch"
              onChange={toggleTheme}
              checked={darkMode}
            />
            <label className="form-check-label" htmlFor="themeSwitch">
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </label>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-4">
        <motion.h2 
          className="text-center mb-4 d-flex justify-content-center align-items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <i className="bi bi-kanban me-3"></i>
          Manage Job Listings
          <i className="bi bi-kanban ms-3"></i>
        </motion.h2>
        <JobList />
      </div>

      {/* Toasts */}
      <ToastContainer 
        position="top-right"
        theme={darkMode ? "dark" : "light"}
        toastStyle={{
          borderRadius: '8px',
          fontFamily: "'Poppins', sans-serif"
        }}
      />

      {/* Footer */}
      <motion.footer 
        className={`text-center py-3 ${darkMode ? 'bg-dark text-light border-top border-light' : 'bg-light text-dark border-top'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        © {new Date().getFullYear()} MERN Job Board | Built with <i className="bi bi-heart-fill text-danger mx-1"></i> by Nitesh
      </motion.footer>
    </div>
  );
}

export default App;