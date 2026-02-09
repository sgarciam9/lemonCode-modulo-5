// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: ['@nuxtjs/tailwindcss'],
  
  app: {
    head: {
      title: 'Casas Rurales - Encuentra tu casa perfecta',
      meta: [
        { name: 'description', content: 'Descubre las mejores casas rurales para tus vacaciones en España' }
      ]
    }
  }
})
