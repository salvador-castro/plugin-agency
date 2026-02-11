import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Method from './components/Method';
import Services from './components/Services';
import WorkPacks from './components/WorkPacks';
import About from './components/About';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Problem />
      <Method />
      <Services />
      <WorkPacks />
      <About />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
