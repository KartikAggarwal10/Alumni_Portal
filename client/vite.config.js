import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/updte': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/dmvnt-PI': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/dmvnt-pi': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/donationpi': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/add-ach-api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/gly-updpi': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/login': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/signupt': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/signup': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/send-otp': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/send-proposal': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/send-feedback': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/donation': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/admin-fill-giving': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/rst': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/eventreg': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/eventreg-pi': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/peoplein': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/stdin': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/stdint': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/is-logged-in': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/ddin': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/edin': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/dlusin': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/rstdin': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/send-emails': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/people': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
        }
    }
})
