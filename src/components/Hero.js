import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-hero-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-yellow-400 hero-text tracking-wider">
            ЕНЕРГІЯ - ЦЕ ЖИТТЯ
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;