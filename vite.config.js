import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Jing-Portfolio/', // 必须和 GitHub 仓库名大小写完全一致
  plugins: [react()],
})