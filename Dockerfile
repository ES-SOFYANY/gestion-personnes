FROM node:12.14.1-alpine3.9
WORKDIR .
COPY . .
RUN npm install
EXPOSE 6000
CMD ["npm","run","start:prod"]
