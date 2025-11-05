import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import CoursesPage from './components/CoursesPage';
import RecommendationsPage from './components/RecommendationsPage';
import CommunityPage from './components/CommunityPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'register':
        return <RegisterPage setCurrentPage={setCurrentPage} />;
      case 'courses':
        return <CoursesPage />;
      case 'recommendations':
        return <RecommendationsPage />;
      case 'community':
        return <CommunityPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {renderPage()}
      </div>
    </AuthProvider>
  );
}

export default App;
