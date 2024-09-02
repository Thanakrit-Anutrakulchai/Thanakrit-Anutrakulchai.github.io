import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                blog: resolve(__dirname, 'blog.html'),
                timeline: resolve(__dirname, 'timeline.html'),
                projects: resolve(__dirname, 'projects.html'),
                cv_transcript: resolve(__dirname, 'cv_transcript.html')
            }
        }
    }
})
