FROM node:lts-alpine3.19

LABEL maintainer="kevin.gouyet@epitech.eu"

RUN mkdir -p /var/www/proxy.local

WORKDIR /var/www/proxy.local

COPY ./apps/proxy-app /var/www/proxy.local

RUN rm -rf node_modules
RUN yarn && yarn build

CMD yarn start:dev
