
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative flex items-center justify-center min-h-screen text-center text-white bg-slate-900 px-6 overflow-hidden">
             <div className="absolute inset-0 bg-grid-slate-800/40 [mask-image:linear-gradient(to_bottom,white_0%,transparent_100%)]"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase">
                    Desbloqueando Inteligencia empresarial
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-slate-300">
                    QUANTUM BI transforma sus datos en información práctica con soluciones de software de vanguardia. Desde paneles interactivos hasta análisis predictivos, impulsamos sus decisiones.
                </p>
                <div className="mt-8">
                    <a href="#services"
                       className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/30">
                        Explora nuestros servicios
                    </a>
                </div>
            
            </div>
        </section>
    );
};

export default Hero;
