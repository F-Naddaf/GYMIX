<template>
  <section class="featured-container">
    <div class="title-wrapper">
      <img src="/images/title-bg-primary.png" alt="bg" />
      <div>
        <h2>Our Featured Class</h2>
      </div>
    </div>
    <h4>We Are Offering Best Flexible Classes</h4>
    <div class="images-container">
      <div class="image-wrapper" v-for="feature in features" :key="feature.id">
        <div
          class="image"
          :style="{ backgroundImage: `url('${feature.image}')` }"
        ></div>
        <div class="tag">
          <img class="icon" :src="feature.icon" />
        </div>
        <div class="description-container">
          <p class="title">{{ feature.title }}</p>
          <p class="timing">{{ feature.timing }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    id: "1",
    title: "Cycling",
    timing: "Wednesday: 9:00am-10:00am",
    icon: "/icons/bike.png",
    image: "/images/featured/cycling.png",
  },
  {
    id: "2",
    title: "Karate",
    timing: "Friday: 10:00am-11:00am",
    icon: "/icons/karate.png",
    image: "/images/featured/karate.png",
  },
  {
    id: "3",
    title: "Power",
    timing: "Saturday: 9:00am-10:00am",
    icon: "/icons/power.png",
    image: "/images/featured/power.png",
  },
  {
    id: "4",
    title: "Meditation",
    timing: "Friday: 1:00pm-2:00pm",
    icon: "/icons/yoga.png",
    image: "/images/featured/yoga.png",
  },
  {
    id: "5",
    title: "Martial Arts",
    timing: "Sunday: 6:00pm-7:00pm",
    icon: "/icons/boxer.png",
    image: "/images/featured/boxing.png",
  },
  {
    id: "6",
    title: "Workout",
    timing: "Monday: 4:00pm-5:00pm",
    icon: "/icons/workout-1.png",
    image: "/images/featured/workout.png",
  },
];
</script>

<style scoped>
.featured-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 120px 0;
  position: relative;
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
.featured-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(34, 34, 34);
  background-image: linear-gradient(
    to right,
    #141414,
    #202020,
    #4b4b4b,
    #202020,
    #141414
  );
  box-shadow: rgba(0, 0, 0, 0.5) 0px -5px 16px, rgba(0, 0, 0, 0.5) 0px 5px 16px;
  background-size: cover;
  opacity: 0.3;
}
.title-wrapper {
  justify-content: center;
  position: relative;
  width: 20%;
  height: fit-content;
}
.title-wrapper img {
  width: 100%;
}
.title-wrapper div {
  display: flex;
  position: absolute;
  justify-content: center;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.title-wrapper h2 {
  color: var(--text-color);
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 1px;
}
.featured-container h4 {
  color: var(--text-color);
  font-size: 28px;
  padding: 20px 0;
  letter-spacing: 2px;
}
.images-container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  gap: 1.75rem;
  height: 100%;
  width: 80%;
  margin-top: 1.75rem;
}
.image-wrapper {
  position: relative;
  height: 320px;
  overflow: hidden;
  width: 100%;
  cursor: pointer;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 10px 0px;
}
.images-container > div:first-child,
.images-container > div:last-child {
  grid-column-end: span 2;
}
.image {
  background-position: 50%;
  background-size: cover;
  box-shadow: inset 2px 2px 8px 160px rgba(0, 0, 0, 0.2);
  filter: grayscale(100%);
  object-fit: cover;
  transition: filter 0.3s ease, transform 0.5s cubic-bezier(0.4, 0, 1, 1);
  height: 100%;
  width: 100%;
  animation: ease-in 0.3s;
  padding: 24px;
}
.tag {
  background-color: hsla(0, 0%, 100%, 0.3);
  border-radius: 0 50px 50px 0;
  top: 25%;
  content: "";
  height: 70px;
  left: -50px;
  position: absolute;
  transform: rotate(30deg);
  transition: all 0.3s;
  width: 140px;
  z-index: 5;
}
.icon {
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 45px;
  z-index: 10;
  transform: rotate(-30deg);
  filter: brightness(0) invert(1);
}
.description-container {
  position: absolute;
  z-index: 10;
  left: 16px;
  bottom: 16px;
  margin: 0 0 10px 5px;
}
.images-container .title {
  color: var(--text-color);
  font-size: 32px;
  font-weight: 900;
  letter-spacing: 2px;
  padding-bottom: 10px;
  text-shadow: rgba(0, 0, 0) 0px 1px 4px;
}
.images-container .timing {
  color: var(--text-color);
  font-size: 16px;
  padding: 5px 10px;
  background-color: var(--primary-color);
}
.image-wrapper:hover .image {
  transition-duration: 0.3s;
  transform: scale(1.15);
  filter: none;
}
.image-wrapper:hover .tag {
  background-color: var(--text-color);
  animation: ease-in 0.3s;
}
.image-wrapper:hover .tag .icon {
  filter: none;
}

@media screen and (min-width: 940px) and (max-width: 1200px) {
  .title-wrapper {
    width: 30%;
  }
}
@media screen and (min-width: 768px) and (max-width: 940px) {
  .title-wrapper {
    width: 35%;
  }
  .images-container > div {
    grid-column-end: span 2;
  }
}
@media screen and (min-width: 500px) and (max-width: 767px) {
  .title-wrapper {
    width: 50%;
  }
  .featured-container h4 {
    font-size: 18px;
    text-align: center;
  }
  .images-container > div {
    grid-column-end: span 4;
  }
  .images-container > div:first-child,
  .images-container > div:last-child {
    grid-column-end: span 4;
  }
}
@media screen and (min-width: 390px) and (max-width: 500px) {
  .title-wrapper {
    width: 70%;
  }
  .featured-container h4 {
    font-size: 18px;
    text-align: center;
  }
  .images-container > div {
    grid-column-end: span 4;
  }
  .images-container > div:first-child,
  .images-container > div:last-child {
    grid-column-end: span 4;
  }
}
</style>
