import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { writeFileSync } from 'fs';

export default defineConfig(({ command }) => ({
  base: '/Portfolio/',
  plugins: [
    react(),
    {
      name: 'create-nojekyll',
      closeBundle() {
        writeFileSync('dist/.nojekyll', '');
      }
    }
  ],
}));

