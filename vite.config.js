import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [basicSsl()],
  server: {
    host: 'local.psb-demo.demo.rooxteam.com',
    https: true,
    port: 3000,
  },
});