import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import NameShape from './Components/NameShape';

// Lazy load pages
const Landing = React.lazy(() => import('./Pages/Landing'));
const Me = React.lazy(() => import('./Pages/Me'));
const Resume = React.lazy(() => import('./Pages/Resume'));
const Portfolio = React.lazy(() => import('./Pages/Portfolio'));
const Contact = React.lazy(() => import('./Pages/Contact'));

function App() {
  return (
    <Router>
      <Suspense fallback={<NameShape />}>
        <Navbar />
        <PageTransitions />
      </Suspense>
      <Footer />
    </Router>
  );
}

function PageTransitions() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/me" element={<Me />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/lets-talk" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
