import React from 'react';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "Avinguda dels Alcalans, 13",
    subContent: "46192 Montserrat, Valencia",
    link: "https://maps.google.com/?q=Avinguda+dels+Alcalans,+13,+46192+Montserrat,+Valencia"
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lunes a Viernes",
    subContent: "Mañanas: Cita previa",
    extraContent: "Tardes: 16:00 a 20:00 h"
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+34 621 238 470",
    link: "https://wa.me/34621238470"
  },
  {
    icon: Mail,
    title: "Email",
    content: "clinicaanacervero@gmail.com",
    link: "mailto:clinicaanacervero@gmail.com"
  }
];

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="container">
        <h2 className="text-lg uppercase tracking-widest text-rose-600 text-center mb-4">
          Contacto
        </h2>
        <h3 className="font-display text-4xl md:text-5xl text-rose-800 text-center mb-16">
          ¿Hablamos sobre tu bienestar?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-100 mb-6">
                <info.icon className="w-8 h-8 text-rose-500" />
              </div>
              <h4 className="text-xl font-display text-rose-800 mb-2">{info.title}</h4>
              <a 
                href={info.link} 
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-800 hover:text-rose-500 transition-colors duration-200 ${!info.link && 'pointer-events-none'}`}
              >
                {info.content}
              </a>
              {info.subContent && (
                <p className="text-gray-800">{info.subContent}</p>
              )}
              {info.extraContent && (
                <p className="text-gray-800">{info.extraContent}</p>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-8">
          <a 
            href="https://www.instagram.com/clinicaanacervero/" 
            className="text-rose-500 hover:text-rose-600 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-8 h-8" />
          </a>
          <a 
            href="https://www.facebook.com/clinicaanacervero" 
            className="text-rose-500 hover:text-rose-600 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}