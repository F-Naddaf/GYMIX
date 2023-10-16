export default defineNuxtConfig({
  modules: ["@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      Lato: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },
  css: ["@fortawesome/fontawesome-free/css/all.css", "/assets/css/style.css"],
  runtimeConfig: {
    googleMapsApiKey: "AIzaSyDNNpH1sD9o7WUF8alRkoLIk2nyEY7mXQ8",
  },
});
