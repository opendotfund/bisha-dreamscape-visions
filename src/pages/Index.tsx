
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ConceptsSection from '../components/ConceptsSection';
import TechnologySection from '../components/TechnologySection';
import Footer from '../components/Footer';
import CurtainEffect from '../components/CurtainEffect';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-amber-50 overflow-x-hidden">
      <CurtainEffect />
      <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <TechnologySection />
        <ConceptsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
