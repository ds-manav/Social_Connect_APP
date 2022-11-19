FROM node:lts-alpine
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY ["./social_connect_app_frontend/package.json", "./social_connect_app_frontendpackage-lock.json*", "./"]
RUN  npm install -g npm@9.1.2
RUN npm i --legacy-peer-deps
COPY ./social_connect_app_frontend ./usr/src/app
EXPOSE 3000
RUN npm i react-scripts
USER node
CMD ["npm","run","start"]
