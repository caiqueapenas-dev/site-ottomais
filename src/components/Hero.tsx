import React from "react";
import { MessageCircle, Calendar, Shield } from "lucide-react";
import Partners from "./Partners";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="pt-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up min-w-0">
            <div className="space-y-4">
              <Partners />
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Cuidado médico de</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  excelência
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Na Ottomais, oferecemos atendimento humanizado e especializado
                em otorrinolaringologia e psicologia, priorizando seu bem-estar
                e saúde.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5575999999999?text=Olá! Gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageCircle size={20} />
                <span>Agendar via WhatsApp</span>
              </a>

              <button
                onClick={() =>
                  document
                    .getElementById("servicos")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Nossos Serviços
              </button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="text-blue-600" size={20} />
                <span>Agendamento fácil</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Shield className="text-blue-600" size={20} />
                <span>Atendimento seguro</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758892108/Vanessa_13_r8cs7j_c938fc.jpg"
                alt="Profissional da saúde"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20"></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
