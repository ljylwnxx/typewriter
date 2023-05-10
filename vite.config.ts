import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'                   // 增加此行代码
const pathSrc = path.resolve(__dirname, 'src')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {                              
    alias: {              // 增加此行代码                
      '@': pathSrc,
    },                                
  },  
})
