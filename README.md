# Portfólio 2026

Um portfólio moderno e responsivo desenvolvido com Vite, React, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **Vite** - Build tool rápida e moderna
- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utility-first
- **JSON** - Gerenciamento de conteúdo simples

## 📦 Instalação

1. Clone o repositório ou navegue até a pasta do projeto
2. Instale as dependências:

```bash
npm install
```

## 🛠️ Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:3000`

## 🏗️ Build

Para criar uma build de produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`

## 📝 Gerenciamento de Conteúdo

Todo o conteúdo do portfólio é gerenciado através de arquivos JSON na pasta `src/data/`:

- `personal.json` - Informações pessoais e contato
- `projects.json` - Projetos e portfólio
- `skills.json` - Habilidades e tecnologias
- `experience.json` - Experiência profissional
- `education.json` - Formação acadêmica

### Personalizando o Conteúdo

1. Edite os arquivos JSON em `src/data/`
2. As alterações serão refletidas automaticamente no portfólio
3. Para adicionar imagens, coloque-as na pasta `public/` e referencie no JSON

## 📁 Estrutura do Projeto

```
portfolio-2026/
├── public/          # Arquivos estáticos (imagens, etc)
├── src/
│   ├── components/  # Componentes React
│   ├── data/        # Arquivos JSON com conteúdo
│   ├── types/       # Definições TypeScript
│   ├── App.tsx      # Componente principal
│   ├── main.tsx     # Entry point
│   └── index.css    # Estilos globais
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## 🎨 Personalização

### Cores

As cores podem ser personalizadas no arquivo `tailwind.config.js`:

```js
colors: {
  primary: {
    // Suas cores personalizadas
  }
}
```

### Componentes

Todos os componentes estão em `src/components/` e podem ser modificados conforme necessário.

## 📄 Licença

Este projeto é open source e está disponível sob a licença MIT.

