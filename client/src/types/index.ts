export interface User {
  id: string;
  name: string; // Adicionado
  email: string;
  createdAt: string;
}

export interface Message {
  id: string;
  text: string;     // Campo principal para o conteúdo da mensagem
  user: string;     // Nome do usuário que enviou
  time: string;     // Hora formatada para exibição
  createdAt: string;// Timestamp ISO para ordenação
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
