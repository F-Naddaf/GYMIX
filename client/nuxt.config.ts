export default {
  modules: ["@nuxtjs/google-fonts"],
  
  build: {
    rollupOptions: {
      external: ["@fortawesome/fontawesome-free/css/all.css"],
    },
  },
};
