import React, { useState, useEffect } from 'react';
import { Search, Clock, Star, Users } from 'lucide-react';
import { Course } from '../types';
import { fetchCourses } from '../services/supabaseService';

const CoursesPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      const data = await fetchCourses();
      if (!mounted) return;
      setCourses(data);
      setLoading(false);
    })();
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    // Filtrar cursos baseado no termo de busca
    if (searchTerm) {
      const filtered = courses.filter((c: Course) =>
        c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCourses(filtered);
    } else {
      // recarrega do DB (ou mantém o que já está em state)
      (async () => {
        const data = await fetchCourses();
        setCourses(data);
      })();
    }
  }, [searchTerm]);

  if (loading) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando cursos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Explore Nossos Cursos</h1>
          <p className="text-xl text-purple-100">Mais de 200 cursos em diversas áreas da tecnologia</p>
        </div>
      </div>

<div className="max-w-7xl mx-auto px-4 py-8">
  <div className="mb-8">
    <div className="relative">
      <input
        type="text"
        placeholder="Buscar cursos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
      />
      <Search
        className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 pointer-events-none"
        size={20}
      />
    </div>
  </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 h-40 rounded-t-xl flex items-center justify-center text-6xl">
                {course.image}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                  <span className="text-xs text-gray-500">{course.level}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-800">{course.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <span className="flex items-center gap-1">
                    <Clock size={16} /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-400" /> {course.rating}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Users size={16} />
                  {course.students.toLocaleString()} alunos
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-600">{course.price}</span>
                  <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
                    Matricular
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {courses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhum curso encontrado</p>
            <p className="text-gray-400">Tente ajustar sua busca</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
