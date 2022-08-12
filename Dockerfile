FROM node:14.20.0-alpine3.15
WORKDIR /usr/src/app
COPY --chown=node:node . /usr/src/app
COPY ex1/ .
RUN npm ci --only=production
RUN chown -R node:node .
USER node
EXPOSE 3000
