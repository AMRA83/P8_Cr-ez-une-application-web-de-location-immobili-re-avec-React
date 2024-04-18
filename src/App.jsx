import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home/Home';
import About from '../src/pages/about/About';
import Accommodation from '../src/pages/accommodation/Accommodation';
import Error404 from '../src/pages/Error404/Error404';
import Footer from './components/footer/Footer';
import Header from './components/Header/Header';
import './App.css'
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accommodation/:id" element={<Accommodation />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;