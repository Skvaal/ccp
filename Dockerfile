FROM node
RUN mkdir /app
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm i
COPY . /app
EXPOSE 4000
CMD npm start index.js
