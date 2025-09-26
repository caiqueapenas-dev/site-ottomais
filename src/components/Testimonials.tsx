import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Ana Carolina Santos",
      service: "Otorrinolaringologia",
      rating: 5,
      comment: "Excelente atendimento! Dr. Carlos foi muito atencioso e explicou todo o tratamento de forma clara. Minha sinusite melhorou muito após o tratamento. Recomendo!",
      date: "Dezembro 2024"
    },
    {
      name: "Roberto Silva",
      service: "Psicologia",
      rating: 5,
      comment: "Dra. Maria é uma profissional excepcional. Me ajudou muito a superar um período difícil. O ambiente da clínica é muito acolhedor e as sessões são produtivas.",
      date: "Novembro 2024"
    },
    {
      name: "Juliana Oliveira",
      service: "Otorrinolaringologia",
      rating: 5,
      comment: "Estava com problemas de audição há meses. O diagnóstico foi preciso e o tratamento eficaz. Hoje posso ouvir normalmente graças ao cuidado da equipe.",
      date: "Outubro 2024"
    },
    {
      name: "Carlos Eduardo",
      service: "Psicologia",
      rating: 5,
      comment: "A terapia me trouxe muito autoconhecimento. Dra. Maria tem uma abordagem muito humana e profissional. Melhorou significativamente minha qualidade de vida.",
      date: "Setembro 2024"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">O que nossos</span>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> pacientes dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos pacientes é nossa maior conquista. 
            Veja os depoimentos de quem confia em nosso trabalho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                <Quote className="text-white" size={16} />
              </div>
              
              <div className="mb-4">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{testimonial.comment}"</p>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-blue-600">{testimonial.service}</p>
                  </div>
                  <p className="text-xs text-gray-400">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Média das Avaliações</h3>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="text-4xl font-bold text-blue-600">5.0</div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-current" size={20} />
                ))}
              </div>
            </div>
            <p className="text-gray-600">Baseado em mais de 100 avaliações</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;