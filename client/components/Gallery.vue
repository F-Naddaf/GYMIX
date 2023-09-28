<template>
  <section class="gallery-container">
    <div class="gallery-header">
      <h2 class="title">GYMIX Workplace Gallery</h2>
      <p>
        Our Workplace Gallery features modern office, team collaboration, and
        fun culture. Attracts talents and showcases company's work atmosphere.
      </p>
    </div>
    <div class="images">
      <div v-for="image in images" :key="image.id">
        <img :src="image.src" :alt="image.id" />
      </div>
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
.images {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(4, minmax(0, 1fr));
  gap: 10px;
  height: 100%;
  width: 80%;
  margin: 40px auto;
  overflow: hidden;
  height: 800px;
}
.images > div {
  overflow: hidden;
  display: flex;
  align-items: center;
}
img {
  width: 105%;
  height: auto;
}
.images > div:first-child,
.images > div:last-child {
  grid-column-end: span 2;
  grid-row-end: span 2;
}
.images > div:last-child {
  grid-column-start: 3;
  grid-row-start: 2;
}
.images > div:nth-child(2) {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row: span 1;
}
.images:hover img {
  filter: none;
}
</style>
