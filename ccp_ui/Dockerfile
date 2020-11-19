FROM node
RUN mkdir /app
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm i
COPY . /app
EXPOSE 4100
CMD npm start
