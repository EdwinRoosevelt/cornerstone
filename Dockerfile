FROM node:latest

WORKDIR /usr/src/cornerstone

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]
