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
}
.error-wrapper h2 {
  font-size: 88px;
  font-weight: 900;
  color: var(--primary-color);
}
.error-wrapper p {
  font-size: 18px;
  font-weight: 700;
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
