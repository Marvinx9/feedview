# Feed View

Aplicação web desenvolvida com React, TypeScript e Vite para simular uma interface de feed social. O projeto apresenta posts, perfil do usuário, comentários, curtidas e remoção de feedbacks, com uma estrutura componentizada e estilos isolados por CSS Modules.

## Funcionalidades

- Listagem de posts com autor, cargo, avatar, conteúdo e data relativa.
- Conversão visual de hashtags no conteúdo dos posts.
- Formulário para adicionar comentários em cada publicação.
- Validação de comentário obrigatório.
- Remoção de comentários.
- Contador de curtidas por comentário.
- Sidebar com informações de perfil.
- Layout responsivo para desktop e dispositivos móveis.

## Tecnologias

- React 19
- TypeScript
- Vite
- CSS Modules
- date-fns
- Phosphor React
- ESLint

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js 20 ou superior
- npm

## Como executar

Clone o repositório e instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Depois, acesse a URL exibida no terminal pelo Vite.

## Scripts disponíveis

```bash
npm run dev
```

Executa a aplicação em modo de desenvolvimento.

```bash
npm run build
```

Gera a versão de produção, executando a validação TypeScript antes do build do Vite.

```bash
npm run preview
```

Serve localmente a versão gerada pelo build.

```bash
npm run lint
```

Executa a análise estática do código com ESLint.

## Estrutura do projeto

```text
src/
  components/
    Avatar/
    Comment/
    Header/
    Post/
    Sidebar/
  App.tsx
  global.css
  main.tsx
  types.ts
```

## Componentes principais

- `Header`: exibe a identidade visual da aplicação.
- `Sidebar`: apresenta informações do usuário e ação de edição de perfil.
- `Post`: renderiza publicações, datas, hashtags e formulário de comentários.
- `Comment`: controla exibição, curtidas e exclusão de comentários.
- `Avatar`: componente reutilizável para imagens de perfil.
