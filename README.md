# SkillBoost Platform

Plataforma de qualificação profissional com React e TypeScript.

## 🚀 Funcionalidades

- **Autenticação**: Sistema completo de login e registro (dados mockados)
- **Cursos**: Catálogo de cursos com busca e filtros
- **Recomendações**: Sugestões personalizadas baseadas no perfil
- **Comunidade**: Chat em tempo real entre alunos
- **Interface Moderna**: Design responsivo com Tailwind CSS

## 🛠️ Tecnologias

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (ícones)
- Dados mockados (sem backend)

## 📦 Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd projeto
```

2. **Instale as dependências**
```bash
# Instalar dependências do frontend
npm run install-all
```

## 🚀 Execução

### Desenvolvimento
```bash
# Executar aplicação React
npm run dev
```

Isso irá:
- Iniciar o React em modo desenvolvimento na porta 3000
- Abrir automaticamente no navegador
- Usar dados mockados (sem necessidade de backend)

### Produção
```bash
# Build do frontend
npm run build
```

## 📁 Estrutura do Projeto

```
projeto/
├── package.json           # Scripts principais
├── client/                # Aplicação React
│   ├── src/
│   │   ├── components/    # Componentes React
│   │   ├── contexts/     # Context API
│   │   ├── data/        # Dados mockados
│   │   └── types/        # Tipos TypeScript
│   ├── public/
│   └── package.json      # Dependências do frontend
└── README.md
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Executa o React em desenvolvimento
- `npm run build` - Gera build de produção
- `npm run install-all` - Instala dependências do frontend

## 📊 Dados Mockados

A aplicação usa dados mockados para simular:
- **Usuários**: Geração automática de perfis
- **Cursos**: 12 cursos pré-cadastrados
- **Mensagens**: Chat da comunidade com mensagens de exemplo
- **Autenticação**: Sistema simulado sem backend

## 🎨 Interface

A aplicação possui:
- **Design Responsivo**: Funciona em desktop, tablet e mobile
- **Tema Moderno**: Gradientes purple/blue
- **Navegação Intuitiva**: Menu fixo no topo
- **Componentes Interativos**: Botões, formulários e cards

## 🔒 Segurança

- Senhas simuladas (sem hash real)
- Tokens mockados
- Validação de entrada nos formulários
- Dados armazenados apenas no localStorage

## 📱 Funcionalidades por Página

### Home
- Apresentação da plataforma
- Estatísticas e benefícios
- Call-to-action para registro

### Cursos
- Catálogo completo
- Busca em tempo real
- Filtros por categoria
- Informações detalhadas

### Recomendações
- Sugestões personalizadas
- Trilhas de aprendizado
- Baseado no perfil do usuário

### Comunidade
- Chat em tempo real
- Grupos de estudo
- Networking
- Eventos

## 🚀 Deploy

Para fazer deploy em produção:

1. Execute `npm run build` para gerar o build do frontend
2. Configure um servidor web (nginx, Apache) para servir os arquivos estáticos
3. Os arquivos estarão na pasta `client/build`

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes."# SkillBoost" 
