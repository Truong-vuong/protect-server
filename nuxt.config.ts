// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title:'Nuxt app',
            meta:[
                { name: 'description', content: 'This is Nuxt app'},
            ],
            link: [
                { type: 'icon/image' },
            ],
        },
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@nuxtjs/color-mode',
        'nuxt-icon',
    ], 
    typescript: {
        shim: false
    },
    plugins: [
        { src: '~/plugins/notify', mode: 'client' }
    ],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
        exposeConfig: false,
        injectPosition: 0,
        viewer: true,
    },
    runtimeConfig: {
        // Private keys are only available on the server
        apiSecret: '123',
        // Public keys that are exposed to the client
        public: {
          apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
        }
      }
})