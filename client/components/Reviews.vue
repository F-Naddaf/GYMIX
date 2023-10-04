<template>
  <section class="testimonials-container">
    <div class="testimonials-header">
      <h2 class="title">Feedback</h2>
    </div>
    <div class="testimonials-content">
      <aside class="testimonials-info">
        <h3>What Our Happy Clients say About Us</h3>
        <p>
          I've been a member of Fitness within for about 6 months now and I
          absolutely love it! The Ttrainers are so motivate and they really help
          to reach fitness goals.
        </p>
        <div class="rate-container">
          <div class="rate-images">
            <div v-for="reviewer in reviewers" :key="reviewer.id">
              <div
                class="user-image"
                :style="{ backgroundImage: `url('${reviewer.src}')` }"
              ></div>
            </div>
          </div>
          <div class="rate-icon">
            <i class="fa-solid fa-star"></i>
            <p>4.9 (450 Reviews)</p>
          </div>
        </div>
      </aside>
      <aside class="card-container">
        <div class="slider">
          <div
            class="slider-inner"
            :style="{ transform: `translateX(-${currentIndex * cardWidth}px)` }"
          >
            <div
              v-for="reviewer in reviewers"
              :key="reviewer.id"
              class="slider-view"
            >
              <article class="card">
                <div class="reviewer-header">
                  <div class="reviewer-image-container">
                    <img :src="reviewer.src" :alt="reviewer.id" />
                  </div>
                  <div class="reviewer-info">
                    <h3>{{ reviewer.name }}</h3>
                    <p>{{ reviewer.class }}</p>
                  </div>
                </div>
                <div class="rate-stars">
                  <i
                    v-for="star in 5"
                    :key="star"
                    :class="[
                      'fa-solid fa-star',
                      { 'gold-star': star <= reviewer.rate },
                    ]"
                  ></i>
                </div>
                <div class="message-wrapper">
                  <p>{{ reviewer.message }}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div class="btns-container">
          <button
            @click="prevCard"
            class="prev-button"
            :class="{ 'disabled-button': currentIndex === 0 }"
            :disabled="currentIndex === 0"
          >
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <button
            @click="nextCard"
            class="next-button"
            :class="{
              'disabled-button': currentIndex === reviewers.length - 1,
            }"
            :disabled="currentIndex === reviewers.length - 1"
          >
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
        <div class="pagination-container">
          <div
            v-for="index in reviewers.length"
            :key="index"
            :class="{
              'circle-fill': currentIndex === index - 1,
              circle: currentIndex !== index - 1,
            }"
          ></div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const reviewers = [
  {
    id: "1",
    name: "Farhan Rio",
    class: "Power Lifting",
    src: "/images/testimonials/photo-1.png",
    rate: 5,
    message:
      "I can't say enough good things about this app! It's been a game-changer for me. The user-friendly interface makes it incredibly easy to navigate, and the features are top-notch. I've been using it for months now, and it has greatly improved my productivity. I highly recommend it to anyone looking for a reliable and efficient app.",
  },
  {
    id: "2",
    name: "Emily Johnson",
    class: "Meditation",
    src: "/images/testimonials/photo-2.png",
    rate: 4,
    message:
      "I've been using this app for a while, and it's pretty good. The interface is intuitive, and it has helped me stay on top of my tasks. However, I'd love to see more customization options in future updates. Overall, it's a solid app that gets the job done.",
  },
  {
    id: "3",
    name: "Michael Davis",
    class: "Workout",
    src: "/images/testimonials/photo-3.png",
    rate: 4,
    message:
      "I'm quite impressed with this app. It's been reliable for my needs, and I appreciate the regular updates that enhance its performance. My only minor gripe is the need for more templates, but that's just me being picky. Keep up the good work!",
  },
  {
    id: "4",
    name: "Sarah Williams",
    class: "Cycling",
    src: "/images/testimonials/photo-4.png",
    rate: 5,
    message:
      "This app deserves all the stars! It's become an essential part of my daily routine. The seamless synchronization across devices is a lifesaver. The recent updates have made it even better. I'm more organized and efficient thanks to this app. Keep up the excellent work!",
  },
];

const currentIndex = ref(0);
const cardWidth = 460;

const nextCard = () => {
  currentIndex.value = (currentIndex.value + 1) % reviewers.length;
};

const prevCard = () => {
  currentIndex.value =
    (currentIndex.value - 1 + reviewers.length) % reviewers.length;
};
</script>

<style scoped>
.testimonials-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
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
  margin: auto;
}
.testimonials-header {
  display: inline-block;
  flex-direction: column;
  align-items: center;
  margin: auto;
  z-index: 10;
}
.testimonials-header .title {
  position: relative;
  color: var(--secondary-color);
  font-size: 40px;
  font-weight: 900;
  letter-spacing: 2px;
  margin: 40px 0;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0008);
  line-height: 0.7em;
  outline: none;
  animation: animate 5s linear infinite;
}
@keyframes animate {
  0%,
  18%,
  20%,
  50.1%,
  60%,
  65.1%,
  80%,
  90.1%,
  92% {
    color: var(--secondary-color);
    text-shadow: none;
  }
  18.1%,
  20.1%,
  30%,
  50%,
  60.1%,
  65%,
  80.1%,
  90%,
  92.1%,
  100% {
    color: #fff;
    text-shadow: 0 0 10px #ff8e4d, 0 0 20px #ff8e4d, 0 0 40px #ff8e4d,
      0 0 80px #ff8e4d, 0 0 160px #ff8e4d;
  }
}
.testimonials-header p {
  font-size: 16px;
  color: var(--text-color);
  opacity: 0.7;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 1.4;
  text-align: center;
  margin-bottom: 40px;
}
.testimonials-content {
  display: flex;
  width: 90%;
  padding-bottom: 40px;
}
.testimonials-info {
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 10px 0 10px 40px;
}
.testimonials-info h3 {
  color: var(--text-color);
  font-size: 38px;
  font-weight: 700;
  width: 70%;
  margin-bottom: 40px;
}
.testimonials-info p {
  color: var(--text-color);
  font-size: 14px;
  width: 70%;
  margin-bottom: 40px;
  opacity: 0.7;
  line-height: 24px;
  letter-spacing: 1px;
}
.rate-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
}
.rate-images {
  display: flex;
  align-items: center;
  width: 50%;
}
.rate-container div .user-image {
  width: 50px;
  height: 50px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 25px;
  outline: 3px solid #a5644b;
  box-shadow: rgba(0, 0, 0, 0.5) -7px 8px 8px;
  overflow: auto;
}
.rate-container .rate-images > *:not(:first-child) {
  margin-left: -10px;
}
.rate-icon {
  display: flex;
  align-items: center;
  width: 50%;
}
.rate-icon i {
  color: gold;
}
.rate-icon p {
  margin: 0 0 0 20px;
  color: var(--secondary-color);
  opacity: 1;
}
.card-container {
  width: 50%;
  height: auto;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.slider {
  display: flex;
  width: 460px;
  height: 260px;
  overflow: hidden;
  position: relative;
  align-items: center;
}
.slider-inner {
  display: flex;
  transition: transform 0.5s ease;
}
.btns-container {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 50%;
  transform: translateY(-50%);
  width: 460px;
}
.prev-button,
.next-button {
  background: var(--secondary-color);
  width: 35px;
  height: 35px;
  border-radius: 17px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: var(--text-color);
  z-index: 2;
}
.prev-button {
  margin-left: -18px;
}
.next-button {
  margin-right: -18px;
}
.disabled-button {
  background: rgb(141, 141, 141);
  width: 35px;
  height: 35px;
  border-radius: 17px;
  border: none;
  font-size: 18px;
  color: var(--text-color);
  z-index: 3;
}
.slider .slider-view {
  width: 460px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  border-radius: 12px;
  width: 100%;
  height: 260px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-color: rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.1);
  margin: auto -60px;
}
.reviewer-header {
  display: flex;
  align-items: center;
  width: 100%;
}
.reviewer-image-container {
  width: 70px;
  height: 70px;
  border-radius: 40px;
  overflow: hidden;
}
.card .reviewer-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card .reviewer-info {
  margin-left: 20px;
}
.card .reviewer-info h3 {
  font-size: 22px;
  font-weight: 800;
  color: var(--text-color);
}
.card .reviewer-info p {
  font-size: 16px;
  font-weight: 400;
  padding-top: 5px;
  color: var(--text-color);
}
.rate-stars {
  display: flex;
  margin-left: 10px;
}
.rate-stars i {
  color: var(--text-color);
  padding-right: 2px;
}
.rate-stars .gold-star {
  color: gold;
}
.message-wrapper {
  display: flex;
  justify-content: center;
}
.message-wrapper p {
  color: var(--text-color);
  font-size: 14px;
  text-align: justify;
  line-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.pagination-container {
  position: absolute;
  display: flex;
  bottom: -20px;
  left: 50%;
  transform: translate(-50%);
}
.circle-fill {
  width: 10px;
  height: 10px;
  background: var(--secondary-color);
  border-radius: 5px;
  margin: 0 5px;
}
.circle {
  width: 10px;
  height: 10px;
  background: var(--text-color);
  border-radius: 5px;
  margin: 0 5px;
}
</style>
