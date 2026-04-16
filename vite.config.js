import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // 必须和 GitHub 仓库名完全一致
  base: '/Jing-Portfolio/',
  plugins: [react()],
})