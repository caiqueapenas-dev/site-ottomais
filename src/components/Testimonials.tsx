import React from "react";
import { Star, Quote } from "lucide-react";

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
      name: "Fernanda Lima",
      service: "Otorrinolaringologia",
      rating: 5,
      comment:
        "Fiz acompanhamento com a Dra. Vanessa e fiquei impressionada com a atenção aos detalhes. O tratamento para meu distúrbio do sono trouxe resultados já nas primeiras semanas. Recomendo de olhos fechados!",
      date: "Setembro 2025",
    },
    {
      name: "Paulo Henrique",
      service: "Otorrinolaringologia",
      rating: 5,
      comment:
        "Excelente profissional! Dra. Vanessa explicou cada etapa da cirurgia endoscópica com muita clareza e me deixou tranquilo. A recuperação foi rápida e sem complicações.",
      date: "Agosto 2025",
    },
    {
      name: "Mariana Souza",
      service: "Nutrição",
      rating: 5,
      comment:
        "O plano alimentar elaborado pela Dra. Angelica transformou meus hábitos e minha saúde. Perdi peso de forma saudável e ganhei mais disposição para o dia a dia.",
      date: "Setembro 2025",
    },
    {
      name: "Ricardo Almeida",
      service: "Nutrição",
      rating: 5,
      comment:
        "A Dra. Angelica tem uma abordagem muito humanizada. Consegui melhorar minha alimentação e controlar o colesterol com o acompanhamento dela. Profissional incrível!",
      date: "Agosto 2025",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">O que nossos</span>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              pacientes dizem
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos pacientes é nossa maior conquista. Veja os
            depoimentos de quem confia em nosso trabalho.
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
                    <Star
                      key={i}
                      className="text-yellow-500 fill-current"
                      size={16}
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  "{testimonial.comment}"
                </p>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-blue-600">
                      {testimonial.service}
                    </p>
                  </div>
                  <p className="text-xs text-gray-400">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Média das Avaliações
            </h3>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="text-4xl font-bold text-blue-600">4.8</div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-500 fill-current"
                    size={20}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-600">Baseado em mais de 277 avaliações</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
