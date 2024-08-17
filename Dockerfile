# Build stage
FROM node:18 AS build-stage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
