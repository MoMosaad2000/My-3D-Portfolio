// import { defineConfig } from 'vite';
// // import reactRefresh from '@vitejs/plugin-react-refresh';
// // import { VitePluginWindiCSS } from 'vite-plugin-windicss';

// export default defineConfig({
//   plugins: [
//     // reactRefresh(),
//     // VitePluginWindiCSS(),
//   ],
// });
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})