import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Homepage';
import About from './pages/ProfileHimpunan';
import Header from './components/Header';
import Footer from './components/Footer';
import Komnews from './pages/Komnews';
import KomnewsSingle from './pages/KomnewsSingle';

function AppContent() {


  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/komnews" element={<Komnews />} />
          <Route path="/komnews/:slug" element={<KomnewsSingle />} /> {/* Pastikan ini ada */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
