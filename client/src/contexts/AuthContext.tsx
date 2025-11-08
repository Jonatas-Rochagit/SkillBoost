import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';
import { fetchCurrentUser } from '../services/supabaseService';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simular carregamento inicial
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const u = await fetchCurrentUser();
      if (!mounted) return;
      setUser(u);
    })();
    return () => { mounted = false; };
  }, []);

  const login = async (email: string, password: string) => {
    // Simular delay de login
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Validação específica para admin/admin
    if (email !== 'admin' || password !== 'admin') {
      throw new Error('Credenciais inválidas. Use admin/admin para fazer login');
    }

    // Criar usuário admin
    const adminUser: User = {
      id: 'admin-001',
      name: 'Administrador',
      email: 'admin',
      created_at: new Date().toISOString()
    };
    
    localStorage.setItem('token', 'admin-token-' + Date.now());
    setUser(adminUser);
  };

  const register = async (name: string, email: string, password: string) => {
    // Simular delay de registro
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simular validação básica
    if (!name || !email || !password) {
      throw new Error('Todos os campos são obrigatórios');
    }

    // Criar usuário mockado
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      created_at: new Date().toISOString()
    };
    
    localStorage.setItem('token', 'mock-token-' + Date.now());
    setUser(mockUser);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
