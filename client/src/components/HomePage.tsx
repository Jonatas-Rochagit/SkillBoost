import React from 'react';
import { ChevronRight, Award, Users, TrendingUp, BookOpen } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const { user } = useAuth();

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Eleve seu futuro com <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">tecnologia</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Plataforma de qualificação profissional. Aprenda, pratique e destaque-se no mercado de trabalho.
              </p>
              <button 
                onClick={() => setCurrentPage(user ? 'courses' : 'register')} 
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105 flex items-center gap-2"
              >
                Começar Agora <ChevronRight />
              </button>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl opacity-30"></div>
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-2xl">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-slate-700/50 p-4 rounded-lg">
                      <Award className="text-yellow-400" size={32} />
                      <div>
                        <p className="font-semibold">50+ Certificações</p>
                        <p className="text-sm text-gray-400">Reconhecidas no mercado</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-700/50 p-4 rounded-lg">
                      <Users className="text-green-400" size={32} />
                      <div>
                        <p className="font-semibold">100k+ Alunos</p>
                        <p className="text-sm text-gray-400">Comunidade ativa</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-700/50 p-4 rounded-lg">
                      <TrendingUp className="text-blue-400" size={32} />
                      <div>
                        <p className="font-semibold">95% Satisfação</p>
                        <p className="text-sm text-gray-400">Avaliação dos alunos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">Nossa História</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">Missão</h3>
            <p className="text-gray-600">Democratizar o acesso à educação de qualidade em tecnologia, preparando profissionais para os desafios do mercado digital.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">Visão</h3>
            <p className="text-gray-600">Ser a principal plataforma de educação tecnológica da América Latina, transformando vidas através do conhecimento.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Award className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">Valores</h3>
            <p className="text-gray-600">Excelência, inovação, acessibilidade e compromisso com o sucesso de cada aluno em sua jornada de aprendizado.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl">
          <h3 className="text-3xl font-bold mb-6 text-center text-slate-800">Por que escolher a SkillBoost?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-purple-600 mt-1">✓</div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Conteúdo Atualizado</h4>
                <p className="text-gray-600">Cursos sempre atualizados com as últimas tendências e tecnologias do mercado.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-purple-600 mt-1">✓</div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Instrutores Especialistas</h4>
                <p className="text-gray-600">Aprenda com profissionais que atuam no mercado e compartilham experiências reais.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-purple-600 mt-1">✓</div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Certificação Reconhecida</h4>
                <p className="text-gray-600">Certificados validados e reconhecidos pelas principais empresas do setor.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-purple-600 mt-1">✓</div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Comunidade Ativa</h4>
                <p className="text-gray-600">Networking com milhares de alunos e profissionais da área de tecnologia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
