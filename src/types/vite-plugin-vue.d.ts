declare module '@vitejs/plugin-vue' {
  import type { Plugin } from 'vite';
  function vuePlugin(options?: Record<string, unknown>): Plugin;
  export default vuePlugin;
}
