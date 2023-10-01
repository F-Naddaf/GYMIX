<template>
  <div class="card-container" id="cards">
    <div class="card-wrapper">
      <article
        v-for="(article, index) in articles"
        :key="article.id"
        @mouseover="setHovered(article.id)"
        @mouseout="setHovered(null)"
        :class="{
          imageCard: isHovered === article.id,
          normalCard: isHovered !== article.id,
          activeCard: isScrollAtPosition && index <= activeIndex,
        }"
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
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isHovered = ref(null);
const isScrollAtPosition = ref(false);
const activeIndex = ref(-1);

const setHovered = (id) => {
  isHovered.value = id;
};

const checkScrollPosition = () => {
  if (typeof window !== "undefined") {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition >= 0.2 * windowHeight) {
      isScrollAtPosition.value = true;
    } else {
      isScrollAtPosition.value = false;
    }

    if (isScrollAtPosition.value) {
      const articleIndex = Math.floor(scrollPosition / (0.2 * windowHeight));
      activeIndex.value = articleIndex;
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", checkScrollPosition);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", checkScrollPosition);
});

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
    normalImage: "/icons/workout-0.png",
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
.activeCard {
  transition: transform 0.6s, opacity 0.6s;
  transform: perspective(200px) translateZ(0px);
  opacity: 1;
}
.activeCard:nth-child(1) {
  transition-delay: 0s;
}
.activeCard:nth-child(2) {
  transition-delay: 0.2s;
}
.activeCard:nth-child(3) {
  transition-delay: 0s;
}
.card-container {
  position: relative;
  width: 100%;
  padding: 20px 0;
}
.card-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/images/background.png");
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.3;
}
.card-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  width: 80%;
  margin: auto;
  padding: 50px 0 50px 0;
}
article {
  transform: perspective(100px) translateZ(50px);
  opacity: 0;
}
.normalCard {
  z-index: 10;
  display: flex;
  height: auto;
  width: 300px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-color: rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.7) 0px 3px 8px;
  padding: 60px 20px;
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
}
h3 {
  font-size: 20px;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: var(--secondary-color);
}
p {
  text-align: center;
  font-size: 14px;
  color: var(--description-color);
}
article:hover h3,
article:hover p {
  color: white;
}
</style>
