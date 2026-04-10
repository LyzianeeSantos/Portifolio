# Lyziane Santos Portfolio

Portfólio profissional com identidade fashion-tech, painel administrativo e arquitetura pronta para produção.

## Stack

- Next.js 16 + App Router
- TypeScript
- Tailwind CSS
- shadcn/ui base components
- Framer Motion + Lenis
- NextAuth com login por credenciais
- Prisma + PostgreSQL
- React Hook Form + Zod
- Upload local de imagens para `public/uploads`

## Funcionalidades

- Landing page editorial, responsiva e altamente visual
- Hero com sensação cinematográfica, glow, parallax e resposta ao mouse
- Seções editáveis de sobre, stacks, educação, projetos e contato
- Login e área administrativa protegida
- CRUD completo de projetos
- Upload de imagens para hero, sobre e projetos
- Persistência de contatos no banco
- Envio opcional de e-mail via SMTP
- Seed inicial com os dados da Lyziane

## Setup

1. Instale as dependências:

```bash
npm install
```

2. Configure o arquivo de ambiente:

```bash
cp .env.example .env
```

3. Suba um PostgreSQL e ajuste `DATABASE_URL`.

4. Gere e aplique o banco:

```bash
npm run prisma:generate
npx prisma migrate dev --name init
npm run prisma:seed
```

5. Rode o projeto:

```bash
npm run dev
```

## Credenciais iniciais

- E-mail: `admin@lyziane.dev`
- Senha: `Lyziane@2026`

Troque essas credenciais em produção.

## SMTP opcional

Se quiser que o formulário envie mensagens para seu e-mail além de salvar no banco, preencha:

- `CONTACT_RECEIVER_EMAIL`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASSWORD`
- `SMTP_FROM`

## Validação

- `npm run lint`
- `npm run build`
