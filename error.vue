<template>
  <div class="error-container">
    <div class="error-wrapper">
      <h2>{{ error.statusCode }}</h2>
      <p>{{ error.message }}</p>
      <NuxtLink to="/">Back To Home</NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps(["error"]);
</script>

<style scoped>
.error-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.error-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(/_nuxt/images/background.png);
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.3;
}
.error-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 420px;
  height: 320px;
  background: var(--text-color);
  padding: 40px;
  border-radius: 10px;
  margin: auto;
  z-index: 20;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-color: rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.7) 0px 3px 8px;
}
.error-wrapper h2 {
  font-size: 88px;
  font-weight: 900;
  color: var(--primary-color);
  text-shadow: 1px 1px #ffffff;
}
.error-wrapper p {
  font-size: 18px;
  font-weight: 700;
  color: white;
}
.error-wrapper a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
  background: var(--primary-color);
  color: white;
  border-radius: 5px;
}
</style>
