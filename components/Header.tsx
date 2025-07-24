import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = [
        { href: '#services', text: 'Services' },
        { href: '#about', text: 'About' },
        { href: '#contact', text: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="#" className="relative inline-block text-center p-2 no-underline">
                        {/* The circuit border */}
                        
                        {/* The text content, kept relative to be on top */}
                        <div className="relative">
                            <div className="text-xl font-bold text-white leading-tight">
                                QUANTUM<span className="text-blue-500">BI</span>
                            </div>
                            <div className="text-xs font-normal mt-0.5 tracking-widest text-slate-400">
                                S.A.S
                            </div>
                        </div>
                    </a>
                    
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="text-slate-300 hover:text-blue-400 transition-colors duration-200 font-medium">
                                {link.text}
                            </a>
                        ))}
                    </nav>

                    <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden mt-4 ${isOpen ? 'block' : 'hidden'}`}>
                    <nav className="flex flex-col space-y-4 items-center bg-slate-800 p-4 rounded-lg">
                         {navLinks.map((link) => (
                            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-slate-200 hover:text-blue-400 transition-colors duration-200 font-medium py-2">
                                {link.text}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;