FROM node:20.4-bookworm-slim as build
ENV NODE_ENV=production
RUN apt-get update
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
RUN npm run build
CMD [ "npm", "run", "start" ]

FROM nginx:1.16.0
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["/bin/bash", "-c", "nginx -g \"daemon off;\""]
