// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio/', // 👈 THIS IS THE IMPORTANT FIX
  plugins: [react()],
});
