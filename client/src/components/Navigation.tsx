import React, { useState } from 'react';
import { Menu, X, BookOpen, Home, UserPlus, MessageSquare, Star, TrendingUp } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setCurrentPage('home');
  };

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              SkillBoost
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => setCurrentPage('home')} 
              className={`hover:text-purple-400 transition flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 border ${
                currentPage === 'home' ? 'text-purple-400' : ''
              }`}
            >
              <Home size={18} /> Home
            </button>
            <button 
              onClick={() => setCurrentPage('courses')} 
              className={`hover:text-purple-400 transition flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 border ${
                currentPage === 'courses' ? 'text-purple-400' : ''
              }`}
            >
              <BookOpen size={18} /> Cursos
            </button>
            <button 
              onClick={() => setCurrentPage('recommendations')} 
              className={`hover:text-purple-400 transition flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 border ${
                currentPage === 'recommendations' ? 'text-purple-400' : ''
              }`}
            >
              <Star size={18} /> Recomendações
            </button>
            <button 
              onClick={() => setCurrentPage('community')} 
              className={`hover:text-purple-400 transition flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 border ${
                currentPage === 'community' ? 'text-purple-400' : ''
              }`}
            >
              <MessageSquare size={18} /> Comunidade
            </button>
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm">Olá, {user.name}</span>
                <button 
                  onClick={handleLogout} 
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition"
                >
                  Sair
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setCurrentPage('register')} 
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-4 py-2 rounded-full font-medium transition-all duration-300 border"
              >
                <UserPlus size={18} /> Entrar
              </button>
            )}
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} 
              className="block w-full text-left py-2 hover:text-purple-400"
            >
              Home
            </button>
            <button 
              onClick={() => { setCurrentPage('courses'); setIsMenuOpen(false); }} 
              className="block w-full text-left py-2 hover:text-purple-400"
            >
              Cursos
            </button>
            <button 
              onClick={() => { setCurrentPage('recommendations'); setIsMenuOpen(false); }} 
              className="block w-full text-left py-2 hover:text-purple-400"
            >
              Recomendações
            </button>
            <button 
              onClick={() => { setCurrentPage('community'); setIsMenuOpen(false); }} 
              className="block w-full text-left py-2 hover:text-purple-400"
            >
              Comunidade
            </button>
            {user ? (
              <button 
                onClick={() => { handleLogout(); setIsMenuOpen(false); }} 
                className="block w-full text-left py-2 text-red-400"
              >
                Sair
              </button>
            ) : (
              <button 
                onClick={() => { setCurrentPage('register'); setIsMenuOpen(false); }} 
                className="block w-full text-left py-2 text-purple-400"
              >
                Entrar / Cadastrar
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
