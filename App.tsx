import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Locations } from './pages/Locations';
import { Treatments } from './pages/Treatments';
import { Pricing } from './pages/Pricing';
import { About } from './pages/About';
import { Appointment } from './pages/Appointment';
import { AiAssistant } from './components/AiAssistant';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative font-sans text-pastel-dark bg-pastel-bg selection:bg-pastel-clay selection:text-white">
        <Navbar />
        
        <main className="flex-grow relative">
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/locations" element={<Locations />} />
             <Route path="/treatments" element={<Treatments />} />
             <Route path="/pricing" element={<Pricing />} />
             <Route path="/about" element={<About />} />
             <Route path="/appointment" element={<Appointment />} />
           </Routes>
        </main>
        
        <AiAssistant />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;