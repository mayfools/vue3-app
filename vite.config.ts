import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
function pathResolve(dir: string): string {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    })
  ],
  resolve: {
    alias: {
      '@': pathResolve('src')
    }
  },
  server: {
    host: '0.0.0.0', //ip地址
    port: 8080, //端口号
    open: true //启动后是否自动打开浏览器
  }
})
