import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts';
import Certificate from './components/Certificate';
import Documentation from './components/Documentation';
import Profiles from './components/Profiles';
import Location from './components/Location';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header isScrolled={isScrolled} />

        <Routes>
          {/* ✅ Halaman utama */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Products />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* ✅ Halaman All Products */}
          <Route path="/all-products" element={<AllProducts />} />

          {/* ✅ Halaman Certificate */}
          <Route path="/certificate" element={<Certificate />} />

          {/* ✅ Halaman Documentation */}
          <Route path="/documentation" element={<Documentation />} />

          {/* Halaman Profile */}
          <Route path="/profile" element={<Profiles />} />

          <Route path="/location" element={<Location />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
