# frontend-tarefas

Interface web para gerenciamento de tarefas, construída com React e Vite. Consome a [api-tarefas](https://github.com/Karllyson-Paula/api-tarefas) em produção.

## 🚀 Acesso

A API consumida está em produção:
https://api-tarefas-production-afa5.up.railway.app

## Tecnologias

- React
- Vite
- JavaScript (ES6+)

## Funcionalidades

- Cadastro e login de usuários
- Autenticação com JWT
- Criar, listar, concluir e deletar tarefas
- Dados persistidos em banco PostgreSQL via API
- Token salvo no localStorage

## Como rodar localmente

git clone https://github.com/Karllyson-Paula/frontend-tarefas.git
cd frontend-tarefas
npm install
npm run dev

Configure o `.env` na raiz do projeto:

VITE_API_URL=https://api-tarefas-production-afa5.up.railway.app

## Estrutura

```
frontend-tarefas/
src/
components/
Header.jsx     ← título da aplicação
Login.jsx      ← tela de login e cadastro
Tarefa.jsx     ← item da lista de tarefas
services/
api.js         ← chamadas à API
App.jsx          ← componente principal
main.jsx         ← entrada da aplicação

```

## Autor

Karllyson Eduardo — [@Karllyson-Paula](https://github.com/Karllyson-Paula)