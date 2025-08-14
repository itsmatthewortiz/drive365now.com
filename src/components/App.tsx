import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import FullWidthPhoto from './FullWidthPhoto';
import About from './About';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <FullWidthPhoto />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;