export default {
  buildModules: ["@nuxtjs/google-fonts", "@fortawesome/fontawesome-free"],

  googleFonts: {
    families: {
      Roboto: true,
      "Josefin+Sans": true,
      Lato: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Raleway: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },
  css: ["@fortawesome/fontawesome-free/css/all.css", "/assets/css/style.css"],
};
