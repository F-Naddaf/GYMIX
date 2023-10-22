<template>
  <div>
    <PagesHero :title="title" />
    <div class="page-wrapper">
      <div class="classes-container">
        <article v-for="(ourClass, index) in displayedClasses" :key="index">
          <img :src="ourClass.image" :alt="ourClass.class" />
          <div class="class-details">
            <h3>{{ ourClass.class }}<span></span></h3>
            <div class="class-info">
              <p>
                <i class="fa-regular fa-user"></i>
                {{ ourClass.trainer }}
              </p>
              <p>
                <i class="fa-regular fa-clock"></i>
                {{ ourClass.timing }}
              </p>
            </div>

            <NuxtLink to="/contact">Join Now</NuxtLink>
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
  box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 15px;
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
  height: fit-content;
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
.class-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.class-details p {
  color: var(--text-color);
  display: flex;
  align-items: stretch;
  margin: 20px 0;
  font-size: 14px;
}
.class-info i:nth-child(1) {
  color: var(--text-color);
  padding: 0 10px 0 0;
}
.class-info i:nth-child(3) {
  color: var(--text-color);
  padding: 0 10px 0 20px;
}
.class-details a {
  display: flex;
  align-items: center;
  justify-content: center;
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

@media screen and (min-width: 1200px) and (max-width: 1440px) {
  article {
    width: 300px;
    height: 400px;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1199px) {
  .classes-container {
    width: auto;
    padding: 0 60px;
  }
  article {
    width: 275px;
    height: 350px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .classes-container {
    grid-template-columns: repeat(2, 1fr);
    width: auto;
    padding: 0 60px;
  }
  article {
    width: 275px;
    height: 350px;
  }
}

@media screen and (min-width: 390px) and (max-width: 767px) {
  .classes-container {
    grid-template-columns: repeat(1, 1fr);
    width: auto;
    padding: 0 60px;
  }
  article {
    width: 275px;
    height: 350px;
  }
}
</style>
