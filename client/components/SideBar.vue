<template>
  <aside class="side-bar-container" :class="{ open: isShow }">
    <div class="header">
      <img src="/images/side-logo.png" alt="logo" class="logo" />
      <button class="close" @click="closeSidebar">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
    <div v-for="detail in informations" :key="detail.id">
      <div class="about-wrapper">
        <h3>{{ detail.title }}</h3>
        <p>{{ detail.description }}</p>
        <div class="images-container">
          <img
            v-for="(image, index) in detail.images"
            :key="index"
            :src="image"
            :alt="index"
          />
        </div>
      </div>
    </div>
    <div class="contact-container">
      <h3>Contact Info</h3>
      <p>
        <i class="fa-solid fa-location-dot"></i>
        Hobbemastraat 101, Woerden
      </p>
      <p>
        <i class="fa-solid fa-phone"></i>
        +31684744280
      </p>
      <p>
        <i class="fa-solid fa-envelope"></i>
        fady-naddaf@hotmail.com
      </p>
    </div>
    <div class="social-container">
      <h3>Follow Us</h3>
      <div class="icons-wrapper">
        <button>
          <i class="fa-brands fa-linkedin-in"></i>
        </button>
        <button>
          <i class="fa-brands fa-x-twitter"></i>
        </button>
        <button>
          <i class="fa-brands fa-facebook-f"></i>
        </button>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref, defineProps, watchEffect, defineEmits } from "vue";

const props = defineProps({
  show: Boolean,
});

const isShow = ref(props.show);
const emit = defineEmits();

watchEffect(() => {
  isShow.value = props.show;
});

const informations = [
  {
    id: "1",
    title: "About Us",
    description:
      "Find out who we are and what makes us unique. We are a community-driven gym committed to providing personalized fitness experiences for all levels of fitness enthusiasts in a welcoming and supportive environment.",
  },
  {
    id: "2",
    title: "Gallery",
    images: [
      "/images/sidebar/1.png",
      "/images/sidebar/2.png",
      "/images/sidebar/3.png",
      "/images/sidebar/4.png",
      "/images/sidebar/5.png",
      "/images/sidebar/6.png",
    ],
  },
];

const closeSidebar = () => {
  isShow.value = false;
  emit("close-sidebar");
};
</script>

<style scoped>
.side-bar-container {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 450px;
  height: 100vh;
  padding: 40px;
  background: #efefef;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 200;
  transform: translateX(-460px);
  transition: transform 0.3s ease-in-out;
}
.side-bar-container.open {
  transform: translateX(0);
}
.side-bar-container.close {
  transform: translateX(-460px);
}
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
  align-items: center;
}
.header .logo {
  width: 40%;
}
.header button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 25px;
  height: 25px;
  cursor: pointer;
}
.header i {
  font-size: 22px;
  color: var(--primary-color);
}
.about-wrapper {
  margin: 30px 0 60px 0;
}
.side-bar-container h3 {
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 20px;
  letter-spacing: 1px;
}
.side-bar-container p {
  font-size: 14px;
  line-height: 22px;
  opacity: 0.8;
}
.header button:hover {
  background: var(--primary-color);
  border-radius: 20px;
}
.header button:hover i {
  color: var(--text-color);
  font-size: 18px;
}
.images-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.about-wrapper img {
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 3px 8px;
}
.contact-container,
.social-container {
  margin: 30px 0 60px 0;
}
.contact-container p i {
  color: var(--primary-color);
  padding-right: 5px;
}
.contact-container p {
  padding: 5px 0;
}
.social-container .icons-wrapper {
  display: flex;
  margin-top: 20px;
}
.social-container .icons-wrapper button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 35px;
  height: 35px;
  background: var(--primary-color);
  border-radius: 25px;
  margin: 0 10px;
  cursor: pointer;
}
.social-container .icons-wrapper i {
  font-size: 18px;
  color: white;
}
</style>
