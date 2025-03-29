import React from 'react';
import { Sparkles, Flower2, Activity, Dumbbell, Heart, Brain } from 'lucide-react';

const serviceCategories = [
  {
    title: "Medicina Estética",
    icon: Sparkles,
    services: [
      "Neuromoduladores para líneas de expresión",
      "Inductores de colágeno",
      "Rellenos dérmicos",
      "Hilos PDO"
    ]
  },
  {
    title: "Tratamientos Faciales",
    icon: Flower2,
    services: [
      "Limpiezas faciales",
      "Peelings químicos",
      "Microneedling",
      "Vitaminas y mesoterapia",
      "Plasmapen",
      "Rutinas personalizadas"
    ]
  },
  {
    title: "Tratamientos Corporales",
    icon: Activity,
    services: [
      "Masajes relajantes",
      "Depilación láser trionda",
      "Mesoterapia corporal",
      "Radiofrecuencia",
      "Presoterapia"
    ]
  },
  {
    title: "Entrenamientos Terapéuticos",
    icon: Dumbbell,
    services: [
      "Personalizados",
      "En pareja y en grupo",
      "Funcional",
      "Para tercera edad y embarazo"
    ]
  },
  {
    title: "Fisioterapia",
    icon: Heart,
    services: [
      "Readaptación de lesiones",
      "Suelo pélvico",
      "Terapia manual",
      "Masajes descontracturantes",
      "Readaptación postural"
    ]
  },
  {
    title: "Nutrición y Psicología",
    icon: Brain,
    services: [
      "Pérdida de peso",
      "Hábitos saludables",
      "Gestión de emociones",
      "Autoconocimiento",
      "Coaching personal"
    ]
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-rose-50">
      <div className="container">
        <h2 className="text-lg uppercase tracking-widest text-rose-600 text-center mb-4">
          Nuestros Servicios
        </h2>
        <h3 className="font-display text-4xl md:text-5xl text-rose-800 text-center mb-16">
          Cuidado integral para tu bienestar
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <category.icon className="w-12 h-12 text-rose-500 mb-6" />
              <h4 className="text-2xl font-display text-rose-800 mb-4">{category.title}</h4>
              <ul className="space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="text-gray-800 font-light">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}