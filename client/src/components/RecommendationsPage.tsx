import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { Course } from '../types';
import { fetchCourses } from '../services/supabaseService';
import { useAuth } from '../contexts/AuthContext';

const RecommendationsPage: React.FC = () => {
  const [recommendedCourses, setRecommendedCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      const all = await fetchCourses();
      if (!mounted) return;
      const recommended = user ? all.slice(0, 4) : all.slice(2, 6);
      setRecommendedCourses(recommended);
      setLoading(false);
    })();
    return () => { mounted = false; };
  }, [user]);

  if (loading) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando recomendações...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Recomendações Personalizadas</h1>
          <p className="text-xl text-purple-100">
            {user ? `Cursos selecionados especialmente para você, ${user.name}` : 'Cursos em destaque para você começar'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {!user && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
            <p className="text-blue-900 font-semibold mb-2">💡 Dica: Faça login para recomendações personalizadas!</p>
            <p className="text-blue-800">Com sua conta, podemos sugerir cursos baseados no seu perfil e interesses.</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {recommendedCourses.map(course => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 flex gap-6">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-24 h-24 rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
                {course.image}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    <Star size={14} className="text-yellow-400" /> {course.rating}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-800">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-3">
                  {course.level} • {course.duration} • {course.students.toLocaleString()} alunos
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-purple-600">{course.price}</span>
                  <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
                    Ver Curso
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-purple-100 to-blue-100 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Trilhas de Aprendizado</h2>
          <p className="text-gray-700 mb-6">Siga uma trilha completa e torne-se especialista na área escolhida</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">🎯 Front-end Developer</h3>
              <p className="text-sm text-gray-600">8 cursos • 320 horas</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-blue-600 mb-2">⚙️ Back-end Developer</h3>
              <p className="text-sm text-gray-600">10 cursos • 400 horas</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-green-600 mb-2">📊 Data Science</h3>
              <p className="text-sm text-gray-600">12 cursos • 480 horas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationsPage;
