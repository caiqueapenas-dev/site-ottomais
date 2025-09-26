import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.%0A%0ATelefone: ${formData.phone}%0AServiço de interesse: ${formData.service}%0A%0AMensagem: ${formData.message}`;
    window.open(
      `https://wa.me/5575999999999?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Entre em</span>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              Contato
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para cuidar da sua saúde. Entre em contato conosco
            para agendar sua consulta ou esclarecer suas dúvidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Endereço
                    </h4>
                    <p className="text-gray-600">
                      Rua Marcela Boiron, 236,
                      <br />
                      Centro, Alagoinhas-BA, 48000-051
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Telefone
                    </h4>
                    <p className="text-gray-600">(75) 9 9952-1983</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">
                      contato@clinicaottomais.com.br
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Horários
                    </h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Segunda a Sexta: 08:00 - 18:00</p>
                      <p>Sábados: 08:00 às 13:00</p>
                      <p>Domingos: Fechado</p>
                      <span className="text-sm">
                        (não fechamos para almoço)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <a
                  href="https://wa.me/5575999999999?text=Olá! Gostaria de agendar uma consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
                >
                  <MessageCircle size={20} />
                  <span>Agendar via WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Convênios Aceitos
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700 font-medium">
                    Unimed
                  </span>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700 font-medium">
                    Bradesco Saúde
                  </span>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700 font-medium">
                    SulAmérica
                  </span>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700 font-medium">
                    Amil
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                E muitos outros convênios. Consulte-nos!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Solicite um Retorno
            </h3>
            <p className="text-gray-600 mb-6">
              Preencha o formulário abaixo e entraremos em contato para agendar
              sua consulta.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="(75) 99999-9999"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Serviço de Interesse
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Otorrinolaringologia">
                    Otorrinolaringologia
                  </option>
                  <option value="Psicologia">Psicologia</option>
                  <option value="Não sei">Não tenho certeza</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Descreva seus sintomas ou dúvidas..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
              >
                <Send size={20} />
                <span>Enviar Mensagem</span>
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Ao enviar este formulário, você será redirecionado para nosso
              WhatsApp com sua mensagem pronta para envio.
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Nossa Localização
            </h3>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15731.063751703!2d-38.4123456!3d-12.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA3JzI0LjQiUyAzOMKwMjQnNDQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Localização central de fácil acesso, com estacionamento próximo e
              transporte público.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
