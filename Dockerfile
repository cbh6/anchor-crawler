FROM node:14 AS client
WORKDIR /app
COPY client/package.json client/package-lock.json ./
RUN npm install
COPY client .
RUN npm run build

FROM node:14
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
# COPY --from=client /app/client/build admin  # <-----
EXPOSE 5000
CMD ["node", "server.js"]