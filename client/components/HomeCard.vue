<template>
  <div class="card-container">
    <article
      v-for="article in articles"
      :key="article.id"
      @mouseover="setHovered(article.id)"
      @mouseout="setHovered(null)"
      :class="isHovered === article.id ? 'imageCard' : 'normalCard'"
    >
      <img
        :src="
          isHovered === article.id ? article.whiteImage : article.normalImage
        "
        :alt="article.alt"
      />
      <h3>{{ article.title }}</h3>
      <p>{{ article.description }}</p>
    </article>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isHovered = ref(null);

const setHovered = (id) => {
  isHovered.value = id;
};

const articles = ref([
  {
    id: 1,
    normalImage: "/icons/clock.png",
    whiteImage: "/icons/clock-white.png",
    alt: "clock",
    title: "Progression",
    description:
      "Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.",
  },
  {
    id: 2,
    normalImage: "/icons/workout.png",
    whiteImage: "/icons/workout-white.png",
    alt: "workout",
    title: "Workout",
    description:
      "With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life.",
  },
  {
    id: 3,
    normalImage: "/icons/list.png",
    whiteImage: "/icons/list-white.png",
    alt: "list",
    title: "Nutritions",
    description:
      "Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.",
  },
]);
</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  width: 80%;
  height: auto;
  margin: 40px auto;
  padding: 20px 0 80px 0;
}
.normalCard {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  padding: 60px 20px;
  border-radius: 14px;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  cursor: pointer;
  backdrop-filter: blur(5px);
}

.imageCard {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.5);
  background: none;
  background-image: url("/images/card-1.png");
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  padding: 60px 20px;
  border-radius: 14px;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  cursor: pointer;
  backdrop-filter: blur(5px);
}
img {
  height: auto;
  width: 60px;
  margin-bottom: 30px;
  fill: var(--primary-color);
}
h3 {
  font-size: 20px;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 20px;
}
p {
  text-align: center;
  font-size: 14px;
}
article:hover h3,
article:hover p {
  color: white;
}
</style>
