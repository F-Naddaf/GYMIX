<template>
  <div class="home-container">
    <div v-if="avatar" class="avatar-container">
      <GameAvatar @close-avatar="closeAvatar" />
    </div>
    <div v-else class="avatar-disabled"></div>
    <HeroSection />
    <HomeCard />
    <AboutUs />
    <JoinUs />
    <Featured />
    <Plan />
    <BMI />
    <Gallery3D />
    <Trainers />
    <Feedback />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const avatar = ref(false);

const closeAvatar = () => {
  avatar.value = false;
};

onMounted(() => {
  setTimeout(() => {
    avatar.value = true;
  }, 3000);
});
</script>

<style scoped>
.home-container {
  position: relative;
  height: 100%;
}
.avatar-container {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: sticky;
  top: 78vh;
  left: 92%;
  height: 200px;
  width: 150px;
  z-index: 200;
  animation: fade 2.5s ease-in;
  animation-fill-mode: forwards;
  opacity: 0.8;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.avatar-disabled {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: sticky;
  top: 78vh;
  left: 92%;
  height: 200px;
  width: 150px;
  z-index: 200;
  opacity: 0;
}
h3 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
