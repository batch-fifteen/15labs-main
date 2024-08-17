# Gunakan image Node.js resmi sebagai base image
FROM node:18

# Set working directory di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Instal dependensi aplikasi
RUN npm install

# Salin semua file aplikasi ke dalam container
COPY . .

# Build aplikasi untuk produksi
RUN npm run build

# Ekspos port 8080 untuk aplikasi
EXPOSE 8080

# Jalankan aplikasi
CMD ["npm", "run", "preview"]
