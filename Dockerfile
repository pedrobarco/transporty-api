FROM node:argon

RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm install

COPY . /app

EXPOSE 1918

CMD ["npm", "start"]