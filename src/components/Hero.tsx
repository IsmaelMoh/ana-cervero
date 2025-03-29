import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center" id="inicio">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Tratamiento facial"
        />
        <div className="absolute inset-0 bg-white/50"></div>
      </div>
      
      <div className="relative container">
        <div className="max-w-2xl">
          <h2 className="text-lg uppercase tracking-widest text-rose-600 mb-4">
            Clínica de Dermoestética
          </h2>
          <h1 className="font-display text-5xl md:text-7xl text-rose-800 mb-8">
            Tu bienestar,<br />nuestra pasión
          </h1>
          <p className="text-xl text-gray-800 mb-12 font-light leading-relaxed">
            Descubre una experiencia única donde la ciencia y el cuidado personal 
            se unen para realzar tu belleza natural y mejorar tu calidad de vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="https://wa.me/34621238470"
              className="btn-primary inline-flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Reservar Cita
            </a>
            <a
              href="#servicios"
              className="btn-secondary inline-flex items-center justify-center group"
            >
              Descubrir Servicios
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}