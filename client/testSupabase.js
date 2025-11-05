import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config()

console.log('🔌 Iniciando conexão com o Supabase...')

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

console.log('URL:', process.env.SUPABASE_URL)
console.log('KEY:', process.env.SUPABASE_ANON_KEY ? '✅ Encontrada' : '❌ Não encontrada')


async function testConnection() {
  console.log('🚀 Tentando buscar dados da tabela usuarios...')

  const { data, error } = await supabase.from('users').select('*')

  if (error) {
    console.error('❌ Erro ao buscar dados:', error)
  } else {
    console.log('✅ Dados recebidos:', data)
  }
}

testConnection()
