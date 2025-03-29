import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50">
      <div className="container">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <h1 className="font-display text-2xl text-rose-800">Ana Cerveró</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#inicio" className="nav-link">Inicio</a>
            <a href="#servicios" className="nav-link">Servicios</a>
            <a href="#contacto" className="nav-link">Contacto</a>
            <a 
              href="https://wa.me/34621238470"
              target="_blank"
              rel="noopener noreferrer" 
              className="btn-primary flex items-center text-sm uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 mr-2" />
              Reservar
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-rose-800" />
            ) : (
              <Menu className="h-6 w-6 text-rose-800" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-rose-100">
            <div className="flex flex-col space-y-6 items-center">
              <a href="#inicio" className="nav-link">Inicio</a>
              <a href="#servicios" className="nav-link">Servicios</a>
              <a href="#contacto" className="nav-link">Contacto</a>
              <a 
                href="https://wa.me/34621238470"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center text-sm uppercase tracking-wider"
              >
                Reservar Cita
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}