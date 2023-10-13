<template>
  <div>
    <PagesHero :title="title" />
    <AboutUs />
    <div class="about-wrapper">
      <div class="about">
        <div
          class="about-details"
          v-for="about in aboutUsVisions"
          :key="about.id"
        >
          <div v-if="about.desc" class="about-info">
            <img :src="about.icon" :alt="about.title" />
            <h3>{{ about.title }}</h3>
            <p>{{ about.desc }}</p>
          </div>
          <div v-if="about.image" class="image-container">
            <img :src="about.image" :alt="about.title" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const title = "About Us";

const aboutUsVisions = [
  {
    id: "1",
    icon: "/icons/target.png",
    title: "Our Target",
    desc: "At our GYMIX, we're here to help you lead a healthier, more active life. Our dedicated trainers and top-notch equipment make reaching your fitness goals easier than ever. We believe fitness should be accessible and enjoyable for all. Join us for a stronger, healthier you.",
  },
  {
    id: "2",
    image: "/images/about-page/photo-1.png",
  },
  {
    id: "3",
    icon: "/icons/history.png",
    title: "Our History",
    desc: "Our GYMIX, founded by fitness enthusiasts, has been a trusted fitness partner, evolving and expanding to inspire a healthier lifestyle. We're proud of our past and excited for the future",
  },
  {
    id: "4",
    image: "/images/about-page/photo-2.png",
  },
];
</script>

<style scoped>
.about-wrapper {
  width: 100%;
  margin: 80px 0;
}
.about {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 70%;
  margin: auto;
}
.about-details {
  width: 100%;
  order: 2;
}
.about-info {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
}
.about-details:nth-child(3) {
  order: 4;
}
.about-details:nth-child(4) {
  order: 3;
}
.about-info img {
  width: 20%;
  height: auto;
  object-fit: cover;
}
.about-info h3 {
  font-size: 26px;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--primary-color);
  letter-spacing: 2px;
}
.about-info p {
  font-size: 16px;
  text-align: justify;
  line-height: 22px;
  padding: 0 40px;
  color: var(--text-color);
}
.about-details div {
  width: 100%;
  margin: auto;
}
.image-container {
  display: flex;
  box-sizing: border-box;
  border: 4px solid var(--primary-color);
}
.image-container img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
