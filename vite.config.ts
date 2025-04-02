import { resolve } from 'node:path'
import UnoCSS from 'unocss/vite'
import { defineConfig, loadEnv } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import MotionResolver from 'motion-v/resolver'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    base: '/',
    plugins: [
      vue(),
      UnoCSS(),
      AutoImport({
        imports: ['vue', 'pinia', '@vueuse/core', 'vue-router'],
        dts: 'types/dts/auto-imports.d.ts',
        dirs: ['src/api', 'src/store', 'src/hooks', 'src/utils'],
      }),
      Components({
        dts: 'types/dts/components.d.ts',
        dirs: ['src/components'],
        // resolvers: [MotionResolver()],
      }),
    ],
    resolve: {
      alias: {
        '~': resolve(__dirname, './'),
        '@': resolve(__dirname, 'src'),
        '#': resolve(__dirname, 'types'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
    },
  }
})
