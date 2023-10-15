<template>
  <div>
    <PagesHero :title="title" />
    <div class="page-wrapper">
      <div class="classes-container">
        <article v-for="(ourClass, index) in displayedClasses" :key="index">
          <img :src="ourClass.image" :alt="ourClass.class" />
          <div class="class-details">
            <h3>{{ ourClass.class }}<span></span></h3>
            <p>
              <i class="fa-regular fa-user"></i> {{ ourClass.trainer }}
              <i class="fa-regular fa-clock"></i> {{ ourClass.timing }}
            </p>
            <button>Join Now</button>
          </div>
        </article>
      </div>
      <div class="show-btn">
        <button v-if="showMoreText === 'Show Less'" @click="toggleShowMore">
          <i class="fa-solid fa-angles-left"></i>
          <p>
            {{ showMoreText }}
          </p>
        </button>
        <button v-else @click="toggleShowMore">
          <p>
            {{ showMoreText }}
          </p>
          <i class="fa-solid fa-angles-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import classes from "../data/classes.js";
import { ref, computed } from "vue";

const title = ref("Classes");
const pageSize = 6;
const showMore = ref(false);

const displayedClasses = computed(() => {
  return showMore.value ? classes : classes.slice(0, pageSize);
});

const showMoreText = computed(() => {
  if (showMore.value) {
    return "Show Less";
  } else if (classes.length > pageSize) {
    return "Show More";
  } else {
    return "No More Articles";
  }
});

const toggleShowMore = () => {
  showMore.value = !showMore.value;
};
</script>

<style scoped>
.page-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 80px 0;
}
.page-wrapper::before {
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
.classes-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 60px 20px;
  margin: auto;
  width: 80%;
}
article {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 500px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
}
img {
  object-fit: cover;
  width: auto;
  height: 100%;
}
.class-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 40%;
  padding: 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background: rgba(255, 255, 255, 0.4);
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
}
.class-details h3 {
  color: var(--slogan-color);
  color: var(--text-color);
  font-size: 28px;
}
.class-details p {
  color: var(--text-color);
  display: flex;
  align-items: stretch;
  margin: 20px 0;
}
.class-details p i {
  color: var(--text-color);
  padding: 0 10px;
}
.class-details button {
  background: var(--primary-color);
  padding: 10px;
  font-size: 18px;
  font-weight: 700;
  width: 100%;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
.show-btn {
  display: flex;
  justify-content: center;
  margin: 80px auto auto auto;
  width: 75%;
}
.show-btn button {
  display: flex;
  align-items: center;
  width: auto;
  cursor: pointer;
  background: var(--primary-color);
  padding: 10px;
  border-radius: 10px;
  border: none;
  z-index: 10;
}
.show-btn button p {
  font-size: 16px;
  padding: 0 10px;
  color: white;
}
.show-btn button i {
  font-size: 16px;
  color: white;
}
</style>
