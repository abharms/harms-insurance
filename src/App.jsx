
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';

import AboutUs from './pages/about/AboutUs';
import Claims from './pages/claims/Claims';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Products from './pages/products/Products';

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/claims" element={<Claims />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
