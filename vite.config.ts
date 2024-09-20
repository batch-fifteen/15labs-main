import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string): string | undefined {
          if (id.includes("node_modules")) {
            const parts = id.split("node_modules/");
            if (parts.length > 1) {
              const moduleName = parts[1].split("/")[0];
              return moduleName;
            }
          }
          return undefined;
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase chunk size limit
  },
});
