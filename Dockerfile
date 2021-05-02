FROM node:10-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
WORKDIR /app/client
RUN npm install
RUN npm run build
WORKDIR /app
EXPOSE 5000
CMD ["node", "server.js"]