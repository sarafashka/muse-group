import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  let baseConfig = '';
  if (command === 'build') {
    baseConfig = '/muse-group';
  }
  if (command === 'serve') {
    baseConfig = '/';
  }
  const config = {
    plugins: [react()],
    base: baseConfig,
  };

  return config;
});
