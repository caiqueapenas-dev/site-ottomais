import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems: FAQItem[] = [
    {
      question: "Como funciona o agendamento de consultas?",
      answer: "Você pode agendar através do nosso WhatsApp clicando no botão 'Agendar via WhatsApp' ou ligando diretamente para nossa clínica. Nossa recepção está disponível de segunda a sexta das 8h às 18h e sábados das 8h às 12h."
    },
    {
      question: "Quais convênios são aceitos?",
      answer: "Atendemos os principais convênios de saúde da região, incluindo Unimed, Bradesco Saúde, SulAmérica, Amil, e outros. Para confirmar se seu convênio é aceito, entre em contato conosco pelo WhatsApp ou telefone."
    },
    {
      question: "Preciso de encaminhamento médico?",
      answer: "Para consultas de otorrinolaringologia, não é necessário encaminhamento médico. Você pode agendar diretamente conosco. Para psicologia, também não é necessário encaminhamento, podendo ser agendado diretamente."
    },
    {
      question: "Como é a primeira consulta?",
      answer: "Na primeira consulta, o profissional fará uma anamnese completa, conhecendo seu histórico de saúde e sintomas. Traga seus exames anteriores, carteirinha do convênio e documento de identidade. A consulta tem duração média de 40 minutos."
    },
    {
      question: "Vocês realizam exames no local?",
      answer: "Sim, realizamos diversos exames de otorrinolaringologia em nossa clínica, incluindo endoscopia nasal, audiometria e outros. Para exames mais complexos, temos parcerias com laboratórios de referência."
    },
    {
      question: "Qual o tempo de espera para consulta?",
      answer: "Trabalhamos com agenda organizada para minimizar o tempo de espera. Em casos de urgência, priorizamos o atendimento. O agendamento permite escolher horários mais convenientes para você."
    },
    {
      question: "Como funciona o atendimento psicológico?",
      answer: "As sessões de psicoterapia têm duração de 50 minutos e frequência semanal, podendo ser ajustada conforme a necessidade de cada caso. Mantemos total sigilo profissional e oferecemos um ambiente acolhedor para o tratamento."
    },
    {
      question: "Posso remarcar minha consulta?",
      answer: "Sim, pedimos apenas que seja feito com pelo menos 24 horas de antecedência, sempre que possível, para que possamos organizar nossa agenda e oferecer o horário para outros pacientes."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Dúvidas</span>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as perguntas mais comuns sobre nossos serviços, 
            agendamentos e procedimentos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">{item.question}</h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <Minus className="text-blue-600" size={24} />
                    ) : (
                      <Plus className="text-blue-600" size={24} />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-8 pb-6 pt-2">
                    <div className="border-t pt-4">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Ainda tem dúvidas? Entre em contato conosco!</p>
          <a
            href="https://wa.me/5575999999999?text=Olá! Tenho algumas dúvidas sobre os serviços da clínica."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Falar Conosco no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;