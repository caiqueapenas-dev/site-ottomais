import React from 'react';
import { Heart, Award, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: "Cuidado Humanizado",
      description: "Tratamos cada paciente com carinho, respeito e atenção individualizada."
    },
    {
      icon: Award,
      title: "Excelência Médica",
      description: "Profissionais especializados com formação nas melhores instituições do país."
    },
    {
      icon: Users,
      title: "Equipe Multidisciplinar",
      description: "Time integrado de especialistas para oferecer o melhor tratamento."
    },
    {
      icon: Clock,
      title: "Atendimento Ágil",
      description: "Horários flexíveis e processo de agendamento simplificado."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Sobre a</span>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Ottomais</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Há mais de uma década cuidando da saúde e bem-estar de nossa comunidade, 
            a Clínica Ottomais se destaca pela excelência no atendimento e compromisso 
            com a recuperação de nossos pacientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Nossa Missão</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Proporcionar cuidados médicos de alta qualidade, combinando tecnologia moderna 
              com atendimento humanizado. Acreditamos que cada paciente merece atenção 
              personalizada e tratamento baseado nas melhores práticas médicas.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Nossos Valores</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Compromisso com a excelência médica</li>
                <li>• Respeito e dignidade para cada paciente</li>
                <li>• Transparência em todos os tratamentos</li>
                <li>• Educação e prevenção em saúde</li>
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Interior da clínica"
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600">Anos de experiência</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300">
                  <IconComponent className="text-blue-600 group-hover:text-white transition-colors duration-300" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;