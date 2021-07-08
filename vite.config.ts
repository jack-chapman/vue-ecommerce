import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import Icons, { ViteIconsResolver } from 'vite-plugin-icons';
import Components from 'vite-plugin-components';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    Components({
      customComponentResolvers: ViteIconsResolver(),
      globalComponentsDeclaration: true,
    }),
    Icons(),
  ],
});
