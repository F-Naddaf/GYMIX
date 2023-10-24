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
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 300px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-300px, 50%);
  animation: swipe 1.2s ease-in-out forwards;
}
@keyframes swipe {
  0% {
    left: -300px;
  }
  100% {
    left: 300px;
  }
}
.page-title {
  color: var(--text-color);
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 3px;
  padding-bottom: 5px;
}
.title-underline {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0px;
  height: 3px;
  background: var(--primary-color);
  transform: translateX(-140px);
  animation: showLine 0.8s ease-in-out forwards 1s;
}
@keyframes showLine {
  0% {
    width: 0px;
  }
  50% {
    width: 140px;
    transform: translateX(0px);
  }
  100% {
    width: 60px;
    transform: translateX(0px);
  }
}

@media screen and (min-width: 500px) and (max-width: 768px) {
  @keyframes swipe {
    0% {
      left: -250px;
    }
    100% {
      left: 250px;
    }
  }
}

@media screen and (min-width: 390px) and (max-width: 519px) {
  @keyframes swipe {
    0% {
      left: -200px;
    }
    100% {
      left: 200px;
    }
  }
}
</style>
