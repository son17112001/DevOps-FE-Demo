FROM node:16.19.0-alpine

ENV NODE_ENV=DEV

WORKDIR /code

COPY package.json .

RUN npm install

EXPOSE 5000

COPY . .

CMD ["npm","start"]