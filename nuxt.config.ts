import { defineNuxtConfig } from 'nuxt'

export const useMyFetch = (request, opts) => {
    const config = useRuntimeConfig()
  
    return useFetch(request, { baseURL: config.public.baseURL, ...opts })
  }

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    serverMiddleware:[{
        path:"/api",
        handler:"~/express1/api.js"
    }],
    router:{
        base:'/NuxtLayoutView/'
    }
})


