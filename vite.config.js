import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      './app.css': path.resolve(__dirname, './src/App.css'),
      'App.css': path.resolve(__dirname, './src/App.css')
    }
  }
})
