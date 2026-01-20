import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { viteSingleFile } from "vite-plugin-singlefile"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  server: {
    host: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
});