// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    // module for state management (recommended usage)
    "@nuxtjs/harlem",
  ],
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "31177226-859a5cf09f2bbe6c3066342d2",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "https://pixabay.com/api",
    },
  },
});
