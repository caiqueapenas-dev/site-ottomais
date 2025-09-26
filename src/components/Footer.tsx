import React from "react";
import {
  Heart,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* Logo da Ottomais */}
              <img
                src="https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758894286/branco_-_ottomais_-_logo_mv6e4f.png"
                alt="Ottomais Logo"
                className="w-32 h-auto"
              />
            </div>

            <p className="text-gray-400 leading-relaxed">
              Cuidando da sua saúde com excelência, humanização e tecnologia
              moderna. Sua confiança é nossa maior conquista.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/5575999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#servicos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Otorrinolaringologia
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Psicologia Clínica
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Exames Especializados
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Procedimentos Cirúrgicos
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#sobre"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#equipe"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin
                  className="text-blue-400 mt-1 flex-shrink-0"
                  size={16}
                />
                <span className="text-gray-400 text-sm">
                  Rua Marcela Boiron, 236,
                  <br />
                  Centro, Alagoinhas-BA, 48000-051
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="text-blue-400 flex-shrink-0" size={16} />
                <span className="text-gray-400 text-sm">(75) 9 9952-1983</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="text-blue-400 flex-shrink-0" size={16} />
                <span className="text-gray-400 text-sm">
                  contato@clinicaottomais.com.br
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Feito com</span>
              <Heart className="text-red-500" size={16} />
              <span>para cuidar da sua saúde</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {currentYear} Clínica Ottomais. Todos os direitos reservados.
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              CRM-BA 12345 • CRP-BA 06/7890 • Responsável Técnico: Dra. Vanessa
              Morais
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
