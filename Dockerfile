FROM node:18-alpine
WORKDIR /app
COPY ./build .
RUN npm install -g serve
CMD ["serve", "-s", "./"]
EXPOSE 3000