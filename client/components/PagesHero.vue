<template>
  <div class="hero-container">
    <div class="title-contianer">
      <h2 class="page-title">{{ title }}</h2>
      <div class="title-underline"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>

<style scoped>
.hero-container {
  display: flex;
  background-image: url("/images/about-page/about-hero.png");
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 40vh;
  position: relative;
}
.title-contianer {
  position: absolute;
  top: 50%;
  left: -10%;
  animation: swipe 0.8s ease-in-out forwards;
}
@keyframes swipe {
  0% {
    left: -10%;
  }
  100% {
    left: 10%;
  }
}
.page-title {
  color: var(--text-color);
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 3px;
}
.title-underline {
  width: 0px;
  height: 3px;
  background: var(--primary-color);
  animation: showLine 1s ease-in-out forwards 0.8s;
}
@keyframes showLine {
  0% {
    width: 0px;
  }
  70% {
    width: 140px;
    transform: translateX(0px);
  }
  100% {
    width: 80px;
    transform: translateX(60px);
  }
}

h3 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
