<template>
  <div>
    <PagesHero :title="title" />
    <div class="images-container">
      <div
        class="image-wrapper"
        v-for="(image, index) in imageList"
        :key="index"
      >
        <img :src="image" alt="Image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const title = ref("Gallery");

const imageList = ref([
  "images/gallery/photo-1.png",
  "images/gallery/photo-2.png",
  "images/gallery/photo-3.png",
  "images/gallery/photo-4.png",
  "images/gallery/photo-5.png",
  "images/gallery/photo-6.png",
  "images/gallery/photo-7.png",
  "images/gallery/photo-8.png",
  "images/gallery/photo-9.png",
  "images/gallery/photo-10.png",
]);
</script>

<style scoped>
.images-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  width: 80%;
  margin: 80px auto;
  max-width: 100%;
}
.image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 350px;
  border: none;
  overflow: hidden;
  position: relative;
  border-radius: 20px;
  z-index: 5;
  box-shadow: rgb(255 61 74) 0px 0px 8px 2px;
}
img {
  object-fit: cover;
  width: auto;
  height: 100%;
  z-index: 10;
}
</style>
