export default defineNuxtConfig({
  modules: ["@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      Roboto: {
        wght: [100, 200, 400, 600, 700, 900],
      },
    },
  },
  css: ["@fortawesome/fontawesome-free/css/all.css", "/assets/css/style.css"],
});
