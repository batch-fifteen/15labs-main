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

# Step 6: Build the React Vite app
RUN npm run build

# Step 7: Use an official NGINX image to serve the build
FROM nginx:alpine

# Step 8: Copy the build files from the previous stage to the NGINX html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Step 9: Expose port 80
EXPOSE 80

# Step 10: Start NGINX
CMD ["nginx", "-g", "daemon off;"]
