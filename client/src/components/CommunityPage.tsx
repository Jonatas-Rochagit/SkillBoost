import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import { Message } from '../types';
import { fetchMessages, sendMessageToDB, debugShowTables } from '../services/supabaseService';
import { useAuth } from '../contexts/AuthContext';

const CommunityPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    // Simular carregamento
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let mounted = true;
    
    (async () => {
      try {
        // Debug apenas em desenvolvimento
        if (process.env.NODE_ENV === 'development') {
          console.log('=== Debugando dados do Supabase ===');
          await debugShowTables();
        }
        
        const msgs = await fetchMessages();
        if (mounted) {
          setMessages(msgs);
          setLoading(false);
        }
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
        setLoading(false);
      }
    })();

    return () => { mounted = false; };
  }, []);

  const sendMessage = async () => {
    if (!newMessage.trim() || !user) return;
    
    const payload = {
      text: newMessage, // Mudado de content para text
      user: user.name,
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };
    
    const saved = await sendMessageToDB(payload);
    if (saved) {
      setMessages(prev => [...prev, saved]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  if (loading) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando comunidade...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Comunidade SkillBoost</h1>
          <p className="text-xl text-purple-100">Conecte-se com outros alunos e compartilhe conhecimento</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {!user ? (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <MessageSquare className="mx-auto mb-4 text-purple-600" size={64} />
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Junte-se à Comunidade</h2>
            <p className="text-gray-600 mb-6">Faça login para participar das discussões e conhecer outros alunos</p>
            <button
              onClick={() => window.location.href = '/register'}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Entrar na Comunidade
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-slate-800">Chat da Comunidade</h2>
              <p className="text-gray-600">Converse com outros alunos em tempo real</p>
            </div>

            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.length === 0 ? (
                <div className="text-center text-gray-400 mt-20">
                  <MessageSquare size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Nenhuma mensagem ainda. Seja o primeiro a iniciar a conversa!</p>
                </div>
              ) : (
                messages.map(msg => (
                  <div key={msg.id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-purple-600">{msg.user}</span>
                      <span className="text-xs text-gray-500">{msg.time}</span>
                    </div>
                    <span className="text-gray-700">{msg.text}</span> {/* Changed from msg.content to msg.text */}
                  </div>
                ))
              )}
            </div>

            <div className="p-6 border-t border-gray-200">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                />
                <button
                  onClick={sendMessage}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-lg mb-3 text-slate-800">📚 Grupos de Estudo</h3>
            <p className="text-gray-600 text-sm mb-4">Junte-se a grupos focados em cursos específicos</p>
            <button className="text-purple-600 font-semibold text-sm hover:text-purple-700">Ver grupos →</button>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-lg mb-3 text-slate-800">💼 Networking</h3>
            <p className="text-gray-600 text-sm mb-4">Conecte-se com profissionais da sua área</p>
            <button className="text-purple-600 font-semibold text-sm hover:text-purple-700">Explorar →</button>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-lg mb-3 text-slate-800">🎯 Eventos</h3>
            <p className="text-gray-600 text-sm mb-4">Participe de webinars e workshops ao vivo</p>
            <button className="text-purple-600 font-semibold text-sm hover:text-purple-700">Ver agenda →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
