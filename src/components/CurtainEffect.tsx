import { useEffect, useState } from 'react';

const CurtainEffect = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Left Curtain */}
      <div 
        className={`absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r transform transition-transform duration-2000 ease-in-out ${
          isOpen ? '-translate-x-full' : 'translate-x-0'
        }`}
        style={{
          background: 'linear-gradient(45deg, #1a0000, #400000, #800000)',
          boxShadow: 'inset -20px 0 40px rgba(0,0,0,0.8)'
        }}
      >
        <div className="absolute right-0 top-0 h-full w-4 bg-gradient-to-r from-transparent to-amber-500 opacity-40"></div>
      </div>

      {/* Right Curtain */}
      <div 
        className={`absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l transform transition-transform duration-2000 ease-in-out ${
          isOpen ? 'translate-x-full' : 'translate-x-0'
        }`}
        style={{
          background: 'linear-gradient(-45deg, #1a0000, #400000, #800000)',
          boxShadow: 'inset 20px 0 40px rgba(0,0,0,0.8)'
        }}
      >
        <div className="absolute left-0 top-0 h-full w-4 bg-gradient-to-l from-transparent to-amber-500 opacity-40"></div>
      </div>

      {/* Center Logo - appears briefly before curtains open */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold neon-text mb-4 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">BISHA</h1>
          <p className="text-xl md:text-2xl text-amber-300">STUDIOS</p>
        </div>
      </div>
    </div>
  );
};

export default CurtainEffect;
