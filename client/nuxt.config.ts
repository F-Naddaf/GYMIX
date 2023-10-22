export default {
  modules: ["@nuxtjs/google-fonts"],

  app: {
    head: {
      title: "GYMIX",
      meta: [{ name: "description", content: "Sport App with Nuxt 3" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },

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
  build: {
    rollupOptions: {
      external: ["@fortawesome/fontawesome-free/css/all.css"],
    },
  },
};
