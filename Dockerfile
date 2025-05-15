# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.15.0

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
ENV NODE_ENV production

WORKDIR /usr/src/app

# Instalar dependências
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copiar o restante dos arquivos do projeto
COPY . .

# Expor a porta que o servidor utiliza
EXPOSE 3000

# Executar o servidor
CMD ["npm", "start"]
