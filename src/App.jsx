import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './pages/Auth';
import LandingPage from './pages/Landing';
import Dashboard from './pages/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    // Simple check for local storage session
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);

    // Watch for storage changes (e.g. login/logout)
    const handleStorageChange = () => {
      setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  if (isAuthenticated === null) return null; // Wait for the initial check

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Page: Redirects to dashboard if already logged in */}
        <Route 
          path="/" 
          element={!isAuthenticated ? <AuthPage /> : <Navigate to="/dashboard" />} 
        />
        
        {/* Dashboard: Restricted to authenticated users */}
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} 
        />
        
        {/* Landing page is always accessible */}
        <Route path="/landing" element={<LandingPage />} />

        {/* Catch-all: Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;