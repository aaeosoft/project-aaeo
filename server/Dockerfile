FROM node:18

ENV PORT 8080

WORKDIR /code/app

COPY . .
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install && npm cache clean — force

EXPOSE $PORT

CMD [ "npm", "run", "start" ]

