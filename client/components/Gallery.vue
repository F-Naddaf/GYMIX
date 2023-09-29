<template>
  <section class="gallery-container">
    <div class="gallery-header">
      <h2 class="title">GYMIX Workplace Gallery</h2>
      <p>
        Our Workplace Gallery features modern office, team collaboration, and
        fun culture. Attracts talents and showcases company's work atmosphere.
      </p>
    </div>
    <div class="images-container">
      <div
        v-for="image in images"
        :key="image.id"
        :id="`item-${image.id}`"
        :style="{ backgroundImage: `url('${image.src}')` }"
      ></div>
    </div>
  </section>
</template>

<script setup>
const images = [
  {
    id: "1",
    src: "/images/gallery/photo-1.png",
  },
  {
    id: "2",
    src: "/images/gallery/photo-2.png",
  },
  {
    id: "3",
    src: "/images/gallery/photo-3.png",
  },
  {
    id: "4",
    src: "/images/gallery/photo-4.png",
  },
  {
    id: "5",
    src: "/images/gallery/photo-5.png",
  },
];
</script>

<style scoped>
.gallery-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
}
.gallery-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: auto;
  z-index: 10;
}
.gallery-header .title {
  color: var(--secondary-color);
  font-size: 40px;
  font-weight: 900;
  letter-spacing: 2px;
  margin: 40px 0 40px 0;
}
.gallery-header p {
  font-size: 16px;
  color: var(--text-color);
  opacity: 0.7;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 1.4;
  text-align: center;
  margin-bottom: 40px;
}
.images-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px;
  height: 100%;
  width: 80%;
  margin: 40px auto;
  overflow: hidden;
  height: auto;
}
.images-container > div {
  object-fit: cover;
  background-size: cover;
  background-position: center;
  filter: grayscale(60%);
  overflow: hidden;
}
#item-1 {
  grid-column-end: 3;
  grid-column-start: 1;
  grid-row-end: 3;
  grid-row-start: 1;
  height: 420px;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
}
#item-2 {
  grid-column-end: 5;
  grid-column-start: 3;
  object-fit: cover;
}
#item-3 {
  grid-column-end: 3;
  grid-column-start: 2;
}
#item-4 {
  grid-row-end: 4;
  grid-row-start: 3;
}
#item-5 {
  grid-row-end: 4;
  grid-row-start: 2;
  grid-column-end: 5;
  grid-column-start: 3;
}
.images-container > div:hover {
  filter: none;
}
</style>
