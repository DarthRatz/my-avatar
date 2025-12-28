import { defineConfig, type Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [vue() as Plugin],
});
