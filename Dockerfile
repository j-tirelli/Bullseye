FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install artillery

COPY . .

EXPOSE 3003

CMD [ "node", "server/start.js" ]
