<template>
  <div class="card-container">
    <article
      v-for="article in articles"
      :key="article.id"
      @mouseover="setHovered(article.id)"
      @mouseout="setHovered(null)"
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
}
article {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  background: rgba(255, 255, 255, 0.2);
  padding: 60px 20px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
  cursor: pointer;
}

article::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  background-image: url("/images/card-1.png");
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}
article:hover::before {
  opacity: 1;
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
}
article:hover h3,
article:hover p {
  color: white;
}
</style>
