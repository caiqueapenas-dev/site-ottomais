import React from "react";
import { Calendar, ArrowRight, Clock } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
}

const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    {
      title: "Sinais de Alerta: Quando Procurar um Otorrinolaringologista",
      excerpt:
        "Descubra os sintomas que indicam a necessidade de consultar um especialista em ouvido, nariz e garganta.",
      category: "Otorrinolaringologia",
      readTime: "5 min",
      date: "15 Dez 2024",
      image:
        "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
    {
      title: "Cuidando da Saúde Mental: A Importância da Psicoterapia",
      excerpt:
        "Entenda como a psicoterapia pode transformar sua qualidade de vida e bem-estar emocional.",
      category: "Psicologia",
      readTime: "7 min",
      date: "12 Dez 2024",
      image:
        "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
    {
      title: "Prevenção de Problemas Auditivos: Dicas Essenciais",
      excerpt:
        "Aprenda como proteger sua audição no dia a dia e prevenir problemas auditivos comuns.",
      category: "Otorrinolaringologia",
      readTime: "4 min",
      date: "10 Dez 2024",
      image:
        "https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Dicas de</span>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              Saúde
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Confira nossos artigos com informações importantes sobre saúde,
            prevenção e bem-estar para você e sua família.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                  <span className="mr-2">Ler mais</span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
            Ver Todos os Artigos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
