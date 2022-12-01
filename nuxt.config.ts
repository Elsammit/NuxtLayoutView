import { defineNuxtConfig } from 'nuxt'

export const useMyFetch = (request, opts) => {
    const config = useRuntimeConfig()
  
    return useFetch(request, { baseURL: config.public.baseURL, ...opts })
  }

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target:'static',
    serverMiddleware:[{
        path:"/api",
        handler:"~/express1/api.js"
    }],
    app:{
        baseURL:'/NuxtLayoutView/'
    }
})


