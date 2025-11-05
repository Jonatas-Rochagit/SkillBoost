import { Course, User, Message } from '../types';

// Dados mockados de cursos
export const mockCourses: Course[] = [
  {
    id: '1', // Convertido para string
    title: 'Desenvolvimento Web Full Stack',
    category: 'Programação',
    level: 'Intermediário',
    duration: '40h',
    rating: 4.8,
    students: 15234,
    price: 'R$ 149,90',
    image: '🚀',
    description: 'Aprenda desenvolvimento web completo com as tecnologias mais modernas do mercado.'
  },
  {
    id: '2', // Convertido para string
    title: 'Python para Ciência de Dados',
    category: 'Data Science',
    level: 'Avançado',
    duration: '60h',
    rating: 4.9,
    students: 12890,
    price: 'R$ 199,90',
    image: '🐍',
    description: 'Domine Python e suas bibliotecas para análise de dados e machine learning.'
  },
  {
    id: '3', // Convertido para string
    title: 'UI/UX Design Moderno',
    category: 'Design',
    level: 'Iniciante',
    duration: '30h',
    rating: 4.7,
    students: 18456,
    price: 'R$ 129,90',
    image: '🎨',
    description: 'Crie interfaces modernas e experiências de usuário excepcionais.'
  },
  {
    id: '4', // Convertido para string
    title: 'React e Next.js Avançado',
    category: 'Programação',
    level: 'Avançado',
    duration: '50h',
    rating: 4.9,
    students: 9876,
    price: 'R$ 179,90',
    image: '⚛️',
    description: 'Aprenda React e Next.js do básico ao avançado com projetos reais.'
  },
  {
    id: '5', // Convertido para string
    title: 'Marketing Digital Completo',
    category: 'Marketing',
    level: 'Intermediário',
    duration: '35h',
    rating: 4.6,
    students: 21345,
    price: 'R$ 139,90',
    image: '📱',
    description: 'Domine todas as estratégias de marketing digital para 2024.'
  },
  {
    id: '6', // Convertido para string
    title: 'DevOps e Cloud Computing',
    category: 'Infraestrutura',
    level: 'Avançado',
    duration: '55h',
    rating: 4.8,
    students: 7654,
    price: 'R$ 189,90',
    image: '☁️',
    description: 'Implemente práticas DevOps e gerencie infraestrutura na nuvem.'
  },
  {
    id: '7', // Convertido para string
    title: 'Inteligência Artificial com TensorFlow',
    category: 'IA',
    level: 'Avançado',
    duration: '70h',
    rating: 4.9,
    students: 5432,
    price: 'R$ 249,90',
    image: '🤖',
    description: 'Desenvolva soluções de IA com TensorFlow e aprendizado de máquina.'
  },
  {
    id: '8', // Convertido para string
    title: 'Mobile com Flutter',
    category: 'Mobile',
    level: 'Intermediário',
    duration: '45h',
    rating: 4.7,
    students: 11234,
    price: 'R$ 169,90',
    image: '📱',
    description: 'Crie aplicativos mobile multiplataforma com Flutter.'
  },
  {
    id: '9', // Convertido para string
    title: 'JavaScript Avançado',
    category: 'Programação',
    level: 'Avançado',
    duration: '35h',
    rating: 4.8,
    students: 15678,
    price: 'R$ 159,90',
    image: '⚡',
    description: 'Domine JavaScript moderno, ES6+ e frameworks avançados.'
  },
  {
    id: '10', // Convertido para string
    title: 'Node.js e Express',
    category: 'Programação',
    level: 'Intermediário',
    duration: '40h',
    rating: 4.7,
    students: 12345,
    price: 'R$ 149,90',
    image: '🟢',
    description: 'Desenvolva APIs robustas com Node.js e Express.'
  },
  {
    id: '11', // Convertido para string
    title: 'Banco de Dados SQL',
    category: 'Banco de Dados',
    level: 'Iniciante',
    duration: '25h',
    rating: 4.6,
    students: 9876,
    price: 'R$ 119,90',
    image: '🗄️',
    description: 'Aprenda SQL do básico ao avançado com PostgreSQL e MySQL.'
  },
  {
    id: '12', // Convertido para string
    title: 'Docker e Kubernetes',
    category: 'DevOps',
    level: 'Avançado',
    duration: '50h',
    rating: 4.9,
    students: 6789,
    price: 'R$ 199,90',
    image: '🐳',
    description: 'Containerização e orquestração de aplicações com Docker e Kubernetes.'
  }
];

// Dados mockados de usuários
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'João Silva',
    email: 'joao@email.com',
    createdAt: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    name: 'Maria Santos',
    email: 'maria@email.com',
    createdAt: '2024-01-20T14:15:00Z'
  },
  {
    id: '3',
    name: 'Pedro Costa',
    email: 'pedro@email.com',
    createdAt: '2024-02-01T09:45:00Z'
  }
];

// Dados mockados de mensagens
export const mockMessages: Message[] = [
  {
    id: '1',
    user: 'João Silva',
    text: 'Olá pessoal! Alguém está fazendo o curso de React?',
    time: '14:30',
    createdAt: '2024-01-15T14:30:00Z'
  },
  {
    id: '2',
    user: 'Maria Santos',
    text: 'Oi João! Estou fazendo sim, está muito bom!',
    time: '14:32',
    createdAt: '2024-01-15T14:32:00Z'
  },
  {
    id: '3',
    user: 'Pedro Costa',
    text: 'Também estou fazendo. Alguém quer formar um grupo de estudo?',
    time: '14:35',
    createdAt: '2024-01-15T14:35:00Z'
  },
  {
    id: '4',
    user: 'Ana Lima',
    text: 'Adorei o curso de Python! Recomendo muito.',
    time: '15:20',
    createdAt: '2024-01-15T15:20:00Z'
  },
  {
    id: '5',
    user: 'Carlos Oliveira',
    text: 'Alguém tem dicas para o projeto final do curso de Full Stack?',
    time: '16:45',
    createdAt: '2024-01-15T16:45:00Z'
  }
];

// Função para gerar dados aleatórios
export const generateRandomUser = (): User => {
  const names = ['Ana', 'Bruno', 'Carla', 'Diego', 'Elena', 'Felipe', 'Gabriela', 'Henrique', 'Isabela', 'João'];
  const surnames = ['Silva', 'Santos', 'Costa', 'Oliveira', 'Lima', 'Pereira', 'Rodrigues', 'Almeida', 'Ferreira', 'Carvalho'];
  
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
  const randomNumber = Math.floor(Math.random() * 1000);
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    name: `${randomName} ${randomSurname}`,
    email: `${randomName.toLowerCase()}.${randomSurname.toLowerCase()}${randomNumber}@email.com`,
    createdAt: new Date().toISOString()
  };
};

export const generateRandomMessage = (user: User): Message => {
  const messages = [
    'Olá pessoal! Como estão os estudos?',
    'Alguém está fazendo o curso de React?',
    'Recomendo muito este curso!',
    'Alguém quer formar um grupo de estudo?',
    'Estou com dificuldade no projeto final, alguém pode ajudar?',
    'Adorei a aula de hoje!',
    'Alguém tem dicas para estudar melhor?',
    'Este curso está mudando minha vida!',
    'Alguém já terminou o curso?',
    'Recomendo fazer os exercícios práticos!'
  ];
  
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    user: user.name,
    text: randomMessage,
    time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    createdAt: new Date().toISOString()
  };
};

export {}
