
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';

import AboutUs from './pages/about/AboutUs';
import Carriers from './pages/carriers/Carriers';
import Contact from './pages/contact/Contact';
import ContactSuccess from './pages/contact/ContactSuccess';
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
          <Route path="/carriers" element={<Carriers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/form-submission" element={<ContactSuccess />} />
        </Routes>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
