
import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 sm:py-32 bg-slate-800/30">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <div className="lg:w-1/2">
                        <img 
                            src="https://cdn.pixabay.com/photo/2024/11/20/06/49/network-9210511_1280.jpg" 
                            alt="Quantum BI Team Collaboration"
                            className="rounded-xl shadow-2xl w-full h-auto object-cover"
                        />
                    </div>
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                            Acerca de <span className="text-blue-500">QUANTUM BI</span>
                        </h2>
                        <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                            Fundada bajo el principio de que los datos son la nueva moneda, QUANTUM BI se dedica a 
                            ayudar a empresas de todos los tamaños a optimizar sus recursos de información. 
                            Nuestra misión es democratizar la inteligencia empresarial, haciendo que el análisis de datos sofisticado sea accesible, comprensible y práctico para todos.
                        </p>
                        <p className="mt-4 text-lg text-slate-300 leading-relaxed">
                            Nuestro equipo de ingenieros y diseñadores expertos trabajan en colaboración para crear soluciones a medida que no solo cumplen, sino que superan las expectativas de nuestros clientes. Creemos en construir alianzas, no solo productos.
                        </p>
                        <a href="#contact" className="mt-8 inline-block bg-transparent border-2 border-blue-500 text-blue-400 font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-500 hover:text-white transition-colors duration-300">
                            Contactanos
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
