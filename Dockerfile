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

# Build the app for production with Vite
RUN npm run build

# Expose port 3000 for the development server (if needed)
# EXPOSE 3000

# If you want to serve the app using a development server (useful for testing),
# you can use this command. Otherwise, you can remove the CMD line since
# the build output can be served by any static file server.
CMD ["npm", "run", "dev"]

# For production, you'll typically want to serve the built files using
# a static file server like Nginx or serve directly using Vite preview:
# CMD ["npm", "run", "preview"]