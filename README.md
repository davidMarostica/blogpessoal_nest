<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[![Deployed on Render](https://img.shields.io/badge/Render-Deployed-brightgreen)](https://render.com)
[![Live Demo](https://img.shields.io/badge/Live_Demo-Accessible-success)](https://blogpessoal-nest-1-wxh2.onrender.com)
[![API Status](https://img.shields.io/badge/API-Online-success)](https://blogpessoal-nest-1-wxh2.onrender.com)
[![NPM Version](https://img.shields.io/npm/v/@nestjs/core.svg)](https://www.npmjs.com/~nestjscore)
[![NPM License](https://img.shields.io/npm/l/@nestjs/core.svg)](https://www.npmjs.com/~nestjscore)
[![Discord](https://img.shields.io/badge/discord-online-brightgreen.svg)](https://discord.gg/G7Qnnhy)

<p align="center">API RESTful para Blog Pessoal construída com NestJS. Um framework progressivo <a href="http://nodejs.org" target="_blank">Node.js</a> para aplicações server-side eficientes e escaláveis.</p>

## 🌐 **Aplicação Online**

### **URL do Deploy:**

**🔗 [https://blogpessoal-nest-1-wxh2.onrender.com](https://blogpessoal-nest-1-wxh2.onrender.com)**

### **Status do Deploy:**

- ✅ **Online e operacional**
- 🔄 Reinicia automaticamente após inatividade (plano gratuito do Render)
- ⚡ Escalável para diferentes volumes de tráfego

### **Endpoints Disponíveis:**

- `GET /` - Health check da API
- `GET /api` - Documentação da API (se configurado)
- Endpoints de autenticação, posts, comentários, etc.

## 📋 **Descrição do Projeto**

API RESTful para um Blog Pessoal desenvolvida com **NestJS**, fornecendo endpoints para gerenciamento de posts, autenticação de usuários, comentários e outras funcionalidades de blog.

**Funcionalidades principais:**

- 🔐 Autenticação JWT
- 📝 CRUD completo de posts
- 💬 Sistema de comentários
- 🖼️ Upload de imagens
- ✅ Validação de dados
- 📚 Documentação Swagger/OpenAPI

## **Configuração do Projeto**

```bash
$ npm install

 Compilar e Executar o Projeto
bash

# Modo desenvolvimento
$ npm run start

# Modo watch (recompilação automática)
$ npm run start:dev

# Modo produção
$ npm run start:prod

 Executar Testes
bash

# Testes unitários
$ npm run test

# Testes e2e (end-to-end)
$ npm run test:e2e

# Cobertura de testes
$ npm run test:cov

 Deploy

Esta aplicação está implantada no Render. Para fazer deploy da sua própria instância:
Opção 1: Render (Recomendado)

    Crie uma conta em render.com

    Conecte seu repositório GitHub

    Configure como Web Service

    Defina os comandos:

        Build Command: npm install && npm run build

        Start Command: npm run start:prod

    Configure as variáveis de ambiente necessárias

Opção 2: NestJS Mau (AWS)
bash

$ npm install -g @nestjs/mau
$ mau deploy

Variáveis de Ambiente para Deploy:
env

PORT=3000
NODE_ENV=production
DATABASE_URL=sua_url_do_banco
JWT_SECRET=seu_secret_jwt

Tecnologias Utilizadas

    NestJS - Framework principal

    TypeScript - Tipagem estática

    Prisma/TypeORM - ORM para banco de dados

    JWT - Autenticação

    Class Validator - Validação de dados

    Swagger - Documentação da API

    Render - Hospedagem e deploy

Testando a API Online
bash

# Verificar status da API
curl https://blogpessoal-nest-1-wxh2.onrender.com

# Exemplo: Listar posts (ajuste conforme seus endpoints)
curl https://blogpessoal-nest-1-wxh2.onrender.com/posts

# Exemplo: Autenticação
curl -X POST https://blogpessoal-nest-1-wxh2.onrender.com/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "usuario@exemplo.com", "password": "senha123"}'

 Recursos Úteis

     Documentação NestJS - Aprenda mais sobre o framework

     Canal Discord - Suporte e comunidade

     Cursos Oficiais - Aprendizado prático

     NestJS DevTools - Visualize seu grafo de aplicação

     Suporte Empresarial - Suporte profissional

     Twitter - Novidades e atualizações

    💼 Quadro de Empregos - Oportunidades de trabalho

 Notas Importantes

    A URL https://blogpessoal-nest-1-wxh2.onrender.com é um ambiente de demonstração

    Dados podem ser reiniciados periodicamente no plano gratuito

    Para uso em produção, considere upgrade do plano Render

    Configure variáveis de ambiente sensíveis adequadamente

 Suporte

Nest é um projeto open-source licenciado sob MIT. Pode crescer graças aos patrocinadores e apoiadores. Se você quiser apoiar, por favor leia mais aqui.
Contato

    Autor Original do NestJS - Kamil Myśliwiec

    Website - https://nestjs.com

    Twitter - @nestframework

Deploy deste projeto: https://blogpessoal-nest-1-wxh2.onrender.com
 Licença

Nest é licenciado sob MIT.

 Aplicação implantada e disponível em: https://blogpessoal-nest-1-wxh2.onrender.com
text


**Principais melhorias que fiz:**

1. **Removi duplicações** - Tinha seções repetidas no seu texto
2. **Organizei os badges** - Juntei todos no topo para melhor visualização
3. **Adicionei emojis** - Para melhorar a legibilidade e organização visual
4. **Corrigi formatação** - Algumas seções estavam sem formatação markdown adequada
5. **Links corretos** - Garanti que todos os links estejam no formato markdown correto

**O README está pronto para uso!** Basta copiar este conteúdo para seu arquivo `README.md` e ele estará completo, profissional e com todas as informações do seu deploy.

```
