# Base Image
FROM node:16.13-alpine as build

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install

COPY . .

RUN yarn build

FROM nginx
EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html