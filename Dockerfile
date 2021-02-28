 FROM node:12.18.1
 ENV NODE_ENV=production
 WORKDIR /fibonacci
 COPY ["package.json", "package-lock.json*", "./"]
 COPY . .
 CMD [ "node", "server.js" ]