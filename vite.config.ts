import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080, // Set the port to 8080
    host: '0.0.0.0' // Expose to network if needed
  }
})