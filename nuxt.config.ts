import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    Plugins:[
        {
            src: '@/plugins/plugin',
            mode: 'client'
          }
    ],
    serverMiddleware:[{
        path:"/api",
        handler:"~/express1/api.js"
    }],
})


