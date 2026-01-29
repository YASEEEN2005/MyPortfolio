import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-text-primary selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      
      {/* Background Decor (Light Mode) */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full mix-blend-multiply"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent/10 blur-[100px] rounded-full mix-blend-multiply"></div>
      </div>
    </div>
  );
}

export default App;
