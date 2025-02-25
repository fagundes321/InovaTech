# Etapa 1: Construção do Angular
FROM node:20.17.0 AS builder
WORKDIR /app

# Copia apenas os arquivos essenciais para otimizar cache
COPY package.json package-lock.json ./
RUN npm install 

# Copia o restante do código
COPY . .

# Instala o Angular CLI globalmente e gera o build
RUN npm install -g @angular/cli
RUN npm run build --configuration=production

# Etapa 2: Configuração do Nginx
FROM nginx:alpine

# Copia os arquivos compilados para o servidor Nginx
COPY --from=builder /app/dist/inovatech/browser /usr/share/nginx/html

# Copia os arquivos de configuração
COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types  

# Expõe a porta 80
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]
