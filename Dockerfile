FROM node:12

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

RUN apt-get update; apt-get install libpng-dev vim -y

WORKDIR /home/node/app

RUN npm install -g gatsby-cli

# COPY --chown=node:node . .

USER node

EXPOSE 8000
