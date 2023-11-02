FROM node:20.9.0-bullseye-slim

ENV PORT=3000

WORKDIR /usr/src/app

COPY . .

RUN yarn

RUN yarn build

CMD [ "yarn", "start:prod" ]
