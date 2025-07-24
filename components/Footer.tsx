
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-800/50 border-t border-slate-800">
            <div className="container mx-auto px-6 py-6 text-center text-slate-400">
                <p>&copy; {new Date().getFullYear()} QUANTUM BI. Todos los derechos reservados</p>
                <p className="text-sm mt-1">Soluciones de datos inteligentes para un futuro más inteligente.</p>
            </div>
        </footer>
    );
};

export default Footer;
