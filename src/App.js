import { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router';
import ScrollToTop from './HOC/ScrollToTop';
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import Aos from 'aos';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          {/*  <Route path="/industries" element={<Industries />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
