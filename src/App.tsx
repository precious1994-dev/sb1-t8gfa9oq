import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Ministries } from './pages/Ministries';
import { MinistryPage } from './pages/MinistryPage';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

export function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <>
                <Header />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/ministries" element={<Ministries />} />
                    <Route path="/ministries/:id" element={<MinistryPage />} />
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}