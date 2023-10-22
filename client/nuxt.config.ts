export default {
  modules: ["@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      Lato: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },
  build: {
    rollupOptions: {
      external: ["@fortawesome/fontawesome-free/css/all.css"],
    },
  },
};
