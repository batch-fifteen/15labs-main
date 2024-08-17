# Step 1: Use an official Node.js runtime as the base image
FROM node:18 AS build

# Step 2: Set the working directory in the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the working directory
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]
