FROM node:8-alpine

# Create app directory
WORKDIR /usr/app

# set app directoy ownership to user node of group node
RUN chown -R node:node .

# change user
USER node

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --only=production

# build time argument to add tools for development
ARG NODE_ENV=production

# root level operations start here
USER root

# global install needs root privileges. Only installed during development
RUN if [ "$NODE_ENV" = "development" ] ; then npm install -g nodemon ; fi

# COPY always copies files as root. change owner after copy
COPY ./src ./src
RUN chown -R node:node ./src/*

USER node

EXPOSE 4000
CMD [ "node", "src/index.js" ]