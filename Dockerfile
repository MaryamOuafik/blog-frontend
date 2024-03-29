FROM node:18.12.1-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
