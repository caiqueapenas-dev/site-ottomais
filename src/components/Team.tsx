import React from 'react';
import { Award, GraduationCap } from 'lucide-react';

interface Doctor {
  name: string;
  specialty: string;
  credentials: string;
  experience: string;
  education: string[];
  image: string;
  description: string;
}

const Team: React.FC = () => {
  const doctors: Doctor[] = [
    {
      name: "Dr. Carlos Eduardo Silva",
      specialty: "Otorrinolaringologista",
      credentials: "CRM-BA 12345",
      experience: "15 anos de experiência",
      education: [
        "Medicina pela UFBA",
        "Residência em Otorrinolaringologia - USP",
        "Especialização em Cirurgia Endoscópica"
      ],
      image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "Especialista em cirurgias minimamente invasivas e tratamentos avançados para distúrbios do sono."
    },
    {
      name: "Dra. Maria Fernanda Costa",
      specialty: "Psicóloga Clínica",
      credentials: "CRP-BA 06/7890",
      experience: "12 anos de experiência",
      education: [
        "Psicologia pela UCSAL",
        "Mestrado em Psicologia Clínica",
        "Especialização em Terapia Cognitivo-Comportamental"
      ],
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "Especialista em transtornos de ansiedade, depressão e terapia de casal com abordagem humanizada."
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Nossa</span>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Equipe</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profissionais altamente qualificados, comprometidos com a excelência no atendimento 
            e com a sua saúde e bem-estar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {doctors.map((doctor, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50/30 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                  <img 
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-32 h-32 object-cover rounded-full mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                    <Award className="text-white" size={16} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                <p className="text-lg text-blue-600 font-semibold mb-1">{doctor.specialty}</p>
                <p className="text-sm text-gray-600 mb-2">{doctor.credentials}</p>
                <p className="text-sm text-gray-500">{doctor.experience}</p>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{doctor.description}</p>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <GraduationCap className="text-blue-600" size={20} />
                    <h4 className="font-semibold text-gray-900">Formação</h4>
                  </div>
                  <ul className="space-y-2">
                    {doctor.education.map((edu, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <a
                  href={`https://wa.me/5575999999999?text=Olá! Gostaria de agendar uma consulta com ${doctor.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Agendar com {doctor.name.split(' ')[0]}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;