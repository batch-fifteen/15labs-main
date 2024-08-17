# Build stage
FROM node:18 AS build-stage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

EXPOSE 5173
CMD ["nginx", "-g", "daemon off;"]
