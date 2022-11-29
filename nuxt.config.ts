import { defineNuxtConfig } from 'nuxt'

export const useMyFetch = (request, opts) => {
    const config = useRuntimeConfig()
  
    return useFetch(request, { baseURL: config.public.baseURL, ...opts })
  }

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
    runtimeConfig:{
        public:{
            baseURL: process.env.BASE_URL || 'https://elsammit.github.io/NuxtLayoutView/'
        }
    }
})


