import { supabase } from '../data/db';
import type { Course, Message, User } from '../types';

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
    .order('createdAt', { ascending: true });
  
  if (error) {
    console.error('[supabaseService] Error fetching messages:', error);
    return [];
  }
  
  return data || [];
};

export const sendMessageToDB = async (payload: Omit<Message, 'id' | 'createdAt'>): Promise<Message | null> => {
  const { data, error } = await supabase
    .from('messages')
    .insert([
      {
        text: payload.text,
        user: payload.user,
        time: payload.time,
        createdAt: new Date().toISOString()
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
      createdAt: u.created_at || new Date().toISOString()
    };
  } catch (error) {
    console.error('[supabaseService] Erro ao buscar usuário:', error);
    return null;
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