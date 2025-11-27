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
pnpm install
```

3. Configure as variáveis de ambiente para o formulário de contato:

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Como obter as credenciais do EmailJS:**
1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/) e crie uma conta gratuita
2. Crie um serviço de email (Gmail, Outlook, etc.)
3. Crie um template de email com as variáveis: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. Copie o Service ID, Template ID e Public Key
5. Cole no arquivo `.env`

**Plano gratuito:** 200 emails/mês - mais que suficiente para um portfólio pessoal!

## 🛠️ Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
pnpm dev
```

O projeto estará disponível em `http://localhost:3000`

## 🏗️ Build

Para criar uma build de produção:

```bash
pnpm build
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

