import React, { useState } from 'react';
import { Ear, Brain, X, MessageCircle } from 'lucide-react';

interface Service {
  icon: React.ComponentType<{ size: number; className?: string }>;
  title: string;
  description: string;
  treatments: string[];
  details: string;
}

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      icon: Ear,
      title: "Otorrinolaringologia",
      description: "Cuidados especializados para ouvido, nariz e garganta com diagnóstico preciso e tratamentos modernos.",
      treatments: [
        "Tratamento de sinusite e rinite",
        "Distúrbios do sono e ronco",
        "Perda auditiva e zumbido no ouvido",
        "Infecções de ouvido e garganta",
        "Cirurgias minimamente invasivas",
        "Endoscopia nasal"
      ],
      details: "Nossa equipe de otorrinolaringologia utiliza equipamentos de última geração para diagnosticar e tratar problemas relacionados ao ouvido, nariz e garganta. Oferecemos desde consultas preventivas até procedimentos cirúrgicos complexos, sempre priorizando o conforto e a recuperação rápida do paciente."
    },
    {
      icon: Brain,
      title: "Psicologia",
      description: "Acompanhamento psicológico personalizado para promover saúde mental e qualidade de vida.",
      treatments: [
        "Terapia individual para adultos",
        "Psicoterapia de casal",
        "Tratamento de ansiedade e depressão",
        "Acompanhamento em transtornos alimentares",
        "Psicologia organizacional",
        "Avaliação psicológica"
      ],
      details: "Nosso serviço de psicologia oferece um ambiente acolhedor e sigiloso para trabalhar questões emocionais e comportamentais. Utilizamos abordagens terapêuticas comprovadas cientificamente, adaptadas às necessidades específicas de cada paciente, promovendo autoconhecimento e bem-estar."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Nossos</span>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos cuidados especializados em duas áreas fundamentais da saúde, 
            com profissionais qualificados e equipamentos modernos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300">
                    <IconComponent className="text-blue-600 group-hover:text-white transition-colors duration-300" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.treatments.slice(0, 3).map((treatment, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>{treatment}</span>
                    </div>
                  ))}
                  {service.treatments.length > 3 && (
                    <div className="text-sm text-blue-600 font-medium">
                      +{service.treatments.length - 3} outros serviços
                    </div>
                  )}
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                  Ver Detalhes
                </button>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                      <selectedService.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{selectedService.title}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed text-lg">{selectedService.details}</p>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Tratamentos Oferecidos:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedService.treatments.map((treatment, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span>{treatment}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/5575999999999?text=Olá! Gostaria de agendar uma consulta de ${selectedService.title}."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-3 hover:from-green-600 hover:to-green-700 transition-all duration-300"
                  >
                    <MessageCircle size={20} />
                    <span>Agendar Consulta</span>
                  </a>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;