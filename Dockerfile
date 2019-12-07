FROM node:10.17.0-alpine
WORKDIR /app
COPY package.json /app 
COPY package-lock.json /app
RUN npm install 
COPY . /app
CMD ["node","./server.js"] 