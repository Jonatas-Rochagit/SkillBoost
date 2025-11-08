export interface User {
  id: string;
  name: string; // Adicionado
  email: string;
  created_at: string;
}

export interface Message {
  id: string;
  text: string;     // Campo principal para o conteúdo da mensagem
  user: string;     // Nome do usuário que enviou
  time: string;     // Hora formatada para exibição
  created_at: string;// Timestamp ISO para ordenação
}

export interface Course {
  id: string;
  title: string;
  description?: string;
  category: string;
  level: string;
  duration: string;
  rating: number;
  students: number;
  price: string;
  image?: string;
}

export interface Usuario {
  id_usuario?: string;
  nome: string;
  email: string;
  senha: string;
  tipo_usuario: 'admin' | 'aluno' | 'professor';
  created_at?: string;
  id_pf: number;
}
