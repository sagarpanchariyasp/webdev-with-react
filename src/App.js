import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyReact from './components/WhyReact';
import Profit from './components/Profit';
import Contact from './components/contact';
import Footer from './components/Footer';

function App() {
  return <div><Navbar />
  <HeroSection />
  <WhyReact />
  <Profit />
  <Contact />
  <Footer />
  </div>
}

export default App;
