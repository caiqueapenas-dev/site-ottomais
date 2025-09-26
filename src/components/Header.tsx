import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Ottomais
                </h1>
                <p className="text-xs text-gray-500">Clínica Médica</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Sobre
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Serviços
            </button>
            <button onClick={() => scrollToSection('equipe')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Equipe
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contato
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <a 
              href="tel:+5575999999999"
              className="hidden md:flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Phone size={18} />
              <span className="font-medium">(75) 9999-9999</span>
            </a>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Início
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Sobre
              </button>
              <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Serviços
              </button>
              <button onClick={() => scrollToSection('equipe')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Equipe
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Contato
              </button>
              <a 
                href="tel:+5575999999999"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Phone size={18} />
                <span>(75) 9999-9999</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;