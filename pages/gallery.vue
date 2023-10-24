<template>
  <div>
    <PagesHero :title="title" id="images" />
    <div class="images-container">
      <div
        class="image-wrapper"
        v-for="(image, index) in visibleImages"
        :key="index"
      >
        <img :src="image" alt="Image" />
      </div>
    </div>
    <div class="pagination">
      <button @click="changePage(-1)" :disabled="currentPage === 1">
        <i class="fa-solid fa-angles-left"></i>
      </button>
      <span class="page-number">{{ currentPage }}</span>
      <button @click="changePage(1)" :disabled="currentPage === totalPages">
        <i class="fa-solid fa-angles-right"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

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
  "images/gallery/photo-11.png",
  "images/gallery/photo-12.png",
  "images/gallery/photo-13.png",
  "images/gallery/photo-14.png",
  "images/gallery/photo-15.png",
  "images/gallery/photo-16.png",
  "images/gallery/photo-17.png",
]);

const imagesPerPage = 9;
const currentPage = ref(1);

const totalPages = computed(() =>
  Math.ceil(imageList.value.length / imagesPerPage)
);

const visibleImages = computed(() => {
  const startIndex = (currentPage.value - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  return imageList.value.slice(startIndex, endIndex);
});

function changePage(step) {
  const newPage = currentPage.value + step;
  const imagesContainer = document.getElementById("images");
  if (imagesContainer) {
    imagesContainer.scrollIntoView({ behavior: "smooth" });
    if (newPage >= 1 && newPage <= totalPages.value) {
      currentPage.value = newPage;
    }
  }
}
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
.pagination {
  text-align: center;
  margin: 20px 0 80px 0;
}
button {
  margin: 0 10px;
  padding: 6px 15px;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
button i {
  font-size: 16px;
}
.page-number {
  font-size: 18px;
  padding: 0 10px;
  font-weight: 700;
  color: var(--primary-color);
}

@media screen and (min-width: 1024px) and (max-width: 1400px) {
  .image-wrapper {
    width: 100%;
    height: 250px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .image-wrapper {
    width: 100%;
    height: 200px;
  }
}

@media screen and (min-width: 500px) and (max-width: 767px) {
  .images-container {
    grid-template-columns: repeat(2, 1fr);
  }
  .image-wrapper {
    width: 100%;
    height: 200px;
  }
}

@media screen and (min-width: 390px) and (max-width: 499px) {
  .images-container {
    grid-template-columns: repeat(1, 1fr);
  }
  .image-wrapper {
    width: 100%;
    height: 250px;
  }
}
</style>
