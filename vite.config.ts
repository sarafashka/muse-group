import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/muse-group/', // Replace 'my-react-app' with your repository name
  plugins: [react()],
});
