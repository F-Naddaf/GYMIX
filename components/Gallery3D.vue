<template>
  <section class="gallery-container">
    <div class="gallery-header">
      <h2 class="title">GYMIX Workplace Gallery</h2>
      <p>
        Our Workplace Gallery features modern office, team collaboration, and
        fun culture. Attracts talents and showcases company's work atmosphere.
      </p>
    </div>
    <div class="slider">
      <span
        v-for="image in images"
        :key="image.id"
        :id="`item-${image.id}`"
        :style="`--i:${image.id}`"
      >
        <img :src="image.src" :alt="image.id"
      /></span>
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
  {
    id: "6",
    src: "/images/gallery/photo-6.png",
  },
  {
    id: "7",
    src: "/images/gallery/photo-7.png",
  },
  {
    id: "8",
    src: "/images/gallery/photo-8.png",
  },
];
</script>

<style scoped>
.gallery-container {
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    to right,
    #141414,
    #202020,
    #4b4b4b,
    #202020,
    #141414
  );
  box-shadow: rgba(0, 0, 0, 0.5) 0px -5px 16px, rgba(0, 0, 0, 0.5) 0px 5px 16px;
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
.slider {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 120px auto 80px auto;
  transform-style: preserve-3d;
  animation: rotate 30s linear infinite;
}
@keyframes rotate {
  0% {
    transform: perspective(1000px) rotateY(0deg);
  }
  100% {
    transform: perspective(1000px) rotateY(360deg);
  }
}
.slider span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: center;
  transform-style: preserve-3d;
  transform: rotateY(calc(var(--i) * 315deg)) translateZ(350px);
  cursor: pointer;
}
.slider span img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  transition: 1s;
  filter: grayscale(60%);
}
.slider span:hover img {
  transform: translateY(-50px) scale(1.2);
  filter: none;
}

@media screen and (min-width: 940px) and (max-width: 1024px) {
  .slider span {
    width: 80%;
    height: 80%;
    transform: rotateY(calc(var(--i) * 315deg)) translateZ(278px);
  }
}

@media screen and (min-width: 768px) and (max-width: 940px) {
  .gallery-header {
    width: 75%;
  }
  .slider span {
    width: 70%;
    height: 70%;
    transform: rotateY(calc(var(--i) * 314deg)) translateZ(240px);
  }
}

@media screen and (min-width: 500px) and (max-width: 767px) {
  .gallery-header {
    width: 80%;
  }
  .gallery-header .title {
    font-size: 34px;
    text-align: center;
  }
  .slider {
    margin: 40px auto 80px auto;
    width: 150px;
    height: 150px;
  }
  .slider span {
    width: 100%;
    height: 100%;
    transform: rotateY(calc(var(--i) * 315deg)) translateZ(215px);
  }
}

@media screen and (min-width: 390px) and (max-width: 499px) {
  .gallery-header {
    width: 90%;
  }
  .gallery-header .title {
    font-size: 28px;
    text-align: center;
  }
  .slider {
    margin: 40px auto 80px auto;
    width: 100px;
    height: 100px;
  }
  .slider span {
    width: 100%;
    height: 100%;
    transform: rotateY(calc(var(--i) * 315deg)) translateZ(158px);
  }
}
</style>
