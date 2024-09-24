import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
base: '/Password-Generator/'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
