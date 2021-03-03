 FROM node-docker
 WORKDIR /home/node/app
 USER node
 COPY package*.json ./
 COPY ./index.js .
 RUN npm install --production
 COPY . ./
 EXPOSE 3000
 CMD ["node", "index.js"]