
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
