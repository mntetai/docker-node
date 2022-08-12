FROM node:14.20.0-alpine3.15
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY ex1/ .
RUN npm ci --only=production
USER node
COPY --chown=node:node . /opt/app
EXPOSE 3000
