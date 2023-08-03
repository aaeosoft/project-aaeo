FROM node:20.4-bookworm-slim

WORKDIR /code/app

COPY . .
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install && npm cache clean — force

EXPOSE ${PORT}

CMD [ "npm", "run", "start" ]

