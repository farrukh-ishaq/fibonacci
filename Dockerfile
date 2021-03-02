 FROM node-docker
 WORKDIR /home/node/app
 RUN mkdir -p ./node_modules && chown -R node:node ./
 USER node
 COPY package*.json ./
 COPY ./index.js .
 RUN npm install --production
 COPY . ./
 EXPOSE 3000
 CMD ["node", "index.js"]