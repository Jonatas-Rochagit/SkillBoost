import { supabase } from '../data/db';
import type { Course, Message, User, Usuario } from '../types';

export const fetchCourses = async (): Promise<Course[]> => {
  console.log('[supabaseService] Fetching courses...');
  const { data, error } = await supabase.from('courses').select('*');
  
  if (error) {
    console.error('[supabaseService] Error fetching courses:', error);
    return [];
  }
  
  console.log('[supabaseService] Courses fetched:', data);
  return data || [];
};

export const fetchMessages = async (): Promise<Message[]> => {
  console.log('[supabaseService] Fetching messages...');
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .order('created_at', { ascending: true });
  
  if (error) {
    console.error('[supabaseService] Error fetching messages:', error);
    return [];
  }
  
  return data || [];
};

export const sendMessageToDB = async (payload: Omit<Message, 'id' | 'created_at'>): Promise<Message | null> => {
  const { data, error } = await supabase
    .from('messages')
    .insert([
      {
        text: payload.text,
        user: payload.user,
        time: payload.time,
        created_at: new Date().toISOString()
      }
    ])
    .select()
    .single();

  if (error) {
    console.error('[supabaseService] Error sending message:', error);
    return null;
  }

  return data;
};

export const fetchCurrentUser = async (): Promise<User | null> => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      console.log('[supabaseService] Nenhum usuário autenticado');
      return null;
    }

    const { data: { user: u }, error } = await supabase.auth.getUser();
    
    if (error || !u) {
      console.error('[supabaseService] Erro ao buscar usuário:', error);
      return null;
    }

    return {
      id: u.id,
      name: (u.user_metadata?.name as string) || u.email || 'Usuário',
      email: u.email || '',
      created_at: u.created_at || new Date().toISOString()
    };
  } catch (error) {
    console.error('[supabaseService] Erro ao buscar usuário:', error);
    return null;
  }
};

export const createUser = async (userData: Omit<Usuario, 'id_usuario' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('usuarios')
      .insert([userData])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw error;
  }
};

// Função de debug para mostrar dados das tabelas
export const debugShowTables = async () => {
  console.log('=== DEBUG: Supabase Data ===');
  
  try {
    // Verificar autenticação primeiro
    const { data: { session } } = await supabase.auth.getSession();
    console.log('Session:', session ? 'Autenticado' : 'Não autenticado');

    // Cursos (não precisa de auth)
    const { data: courses } = await supabase.from('courses').select('*');
    console.log('Courses:', courses);
    
    // Mensagens (não precisa de auth)
    const { data: messages } = await supabase.from('messages').select('*');
    console.log('Messages:', messages);
    
    // Usuário atual (só mostra se estiver autenticado)
    if (session) {
      const { data: { user } } = await supabase.auth.getUser();
      console.log('Current User:', user);
    } else {
      console.log('Current User: Não autenticado');
    }
  } catch (error) {
    console.error('Erro ao debugar tabelas:', error);
  }
};
