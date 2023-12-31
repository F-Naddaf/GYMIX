<template>
  <section class="join-container" ref="joinContainer">
    <aside class="join-aside right" id="right" ref="slideRightElement">
      <h3>Why Should People Choose GYMIX Services</h3>
      <article v-for="(reason, index) in reasons" :key="index">
        <div class="title">
          <i class="fa-solid fa-check"></i>
          <h2>{{ reason.title }}</h2>
        </div>
        <p>{{ reason.description }}</p>
      </article>
      <div class="btn-container">
        <Button
          to="/programs"
          buttonText="Join with us"
          :color="color"
          class="button"
        />
      </div>
    </aside>
    <aside class="join-aside left" id="left" ref="slideLeftElement">
      <div class="heart-container">
        <aside class="heart-wrapper">
          <img src="/icons/heart-rate.png" alt="heart rate" class="heart" />
        </aside>
        <aside class="heart-reading">
          <h3 class="heart-rate">70 bpm</h3>
          <p>Heart Rate</p>
        </aside>
      </div>
      <span class="image-wrapper">
        <img src="/images/choose-us-1.png" alt="choose us" class="choose" />
      </span>
      <div class="fat-container">
        <aside class="fat-wrapper">
          <img src="/icons/fire.png" alt="fat burning" class="fat" />
        </aside>
        <aside class="fat-reading">
          <h3 class="fat-rate">24%</h3>
          <p>Flat Burning</p>
        </aside>
      </div>
    </aside>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const joinContainer = ref(null);
const slideRightElement = ref(null);
const slideLeftElement = ref(null);
const isScrollAtPosition = ref(false);

const color = "secondary";

const reasons = [
  {
    title: "Personal Training",
    description:
      "Our personal trainers can help you create a personalized fitness plan and track your progress.",
  },
  {
    title: "Expert Trainer",
    description:
      "Our GYM is proud ro offer a team of highly skilled and certified trainer help achieve your health & fitness goals.",
  },
  {
    title: "Flexible Time",
    description:
      "There are many fitness classes that are offered during off-peak hours, such as early morning or late evening.",
  },
];

const checkScrollPosition = () => {
  if (typeof window !== "undefined") {
    const scrollPosition = window.scrollY;
    const slideRight = document.getElementById("right");
    const slideLeft = document.getElementById("left");
    const windowHeight = window.innerHeight;
    const elementRect = joinContainer.value.getBoundingClientRect();
    const elementPosition = elementRect.top + windowHeight * 0.5;

    if (scrollPosition >= elementPosition) {
      isScrollAtPosition.value = true;
      slideRight.classList.add("slide-right");
      slideLeft.classList.add("slide-left");
    } else {
      isScrollAtPosition.value = false;
      slideRight.classList.remove("slide-right");
      slideLeft.classList.remove("slide-left");
    }
  }
};

onMounted(() => {
  slideRightElement.value = document.getElementById("right");
  slideLeftElement.value = document.getElementById("left");

  window.addEventListener("scroll", checkScrollPosition);
  checkScrollPosition();
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScrollPosition);
});
</script>

<style scoped>
.join-container {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 40px 0;
  position: relative;
  overflow: hidden;
}
.join-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/images/background.png");
  background-size: cover;
  opacity: 0.3;
}
.join-container .join-aside h3 {
  color: var(--text-color);
  z-index: 10;
  font-size: 40px;
  font-weight: 900;
  letter-spacing: 2px;
  margin-bottom: 40px;
}
.join-aside {
  display: flex;
  flex-direction: column;
  width: 45%;
  margin: 80px 0;
  position: relative;
  height: auto;
  align-items: center;
  justify-content: center;
}
.right {
  transform: translateX(-150%);
}
.left {
  transform: translateX(150%);
}
.slide-right {
  transform: translateX(0);
  transition: transform 2s ease;
}
.slide-left {
  transform: translateX(0);
  transition: transform 2s ease;
}
.join-aside h2,
p,
i {
  color: var(--text-color);
}
.title {
  display: flex;
  align-items: center;
  margin: 20px 0 10px 0;
}
.join-aside i {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-color);
  width: 25px;
  height: 25px;
  border-radius: 50%;
  font-size: 14px;
  color: white;
}
.join-aside h2 {
  margin-left: 20px;
  color: var(--secondary-color);
  font-size: 24px;
}
.join-aside p {
  font-size: 14px;
  letter-spacing: 1px;
  width: 90%;
  font-weight: 400;
  margin-bottom: 20px;
}
.btn-container {
  position: absolute;
  bottom: -20px;
  right: 10%;
  transform: scale(0.9);
}
.image-wrapper {
  position: relative;
}
.choose {
  width: 100%;
}
.heart-container {
  display: flex;
  position: absolute;
  top: 20%;
  right: 0;
  width: 220px;
  height: 85px;
  background-color: var(--text-color);
  border-radius: 10px;
  z-index: 8;
}
.heart-container .heart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35%;
  height: 100%;
}
.heart-wrapper .heart {
  width: 60%;
  height: 50%;
  animation: heartbeat 0.5s infinite;
}
@keyframes heartbeat {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}
.heart-container .heart-reading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 65%;
  height: 100%;
}
.heart-container .heart-reading .heart-rate {
  color: var(--slogan-color);
  font-size: 26px;
  font-weight: 900;
  margin: 0;
}
.heart-container .heart-reading p {
  color: var(--slogan-color);
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}
.fat-container {
  display: flex;
  position: absolute;
  bottom: 15%;
  left: 0;
  width: 220px;
  height: 85px;
  background-color: var(--text-color);
  border-radius: 10px;
  z-index: 8;
}
.fat-container .fat-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35%;
  height: 100%;
}
@keyframes burn {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(0) rotate(10deg);
  }
  75% {
    transform: translateY(0) rotate(-10deg);
  }
}
.fat-wrapper .fat {
  width: 60%;
  height: 50%;
  animation: burn 0.5s infinite;
}
.fat-container .fat-reading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 65%;
  height: 100%;
}
.fat-container .fat-reading .fat-rate {
  color: var(--slogan-color);
  font-size: 26px;
  font-weight: 900;
  margin: 0;
}
.fat-container .fat-reading p {
  color: var(--slogan-color);
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}

@media screen and (min-width: 940px) and (max-width: 1200px) {
  .btn-container {
    bottom: -70px;
  }
  .join-container .join-aside h3 {
    font-size: 30px;
  }
}
@media screen and (min-width: 768px) and (max-width: 940px) {
  .join-container {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding: 80px 0 120px 0;
  }
  .join-aside {
    width: 80%;
    margin: 20px 0;
  }
  .btn-container {
    bottom: -70px;
  }
}
@media screen and (min-width: 500px) and (max-width: 768px) {
  .join-container {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding: 40px 0 120px 0;
  }
  .join-aside {
    width: 80%;
    margin: 20px 0;
    align-items: center;
  }
  .btn-container {
    bottom: -90px;
    right: 10%;
  }
}
@media screen and (min-width: 390px) and (max-width: 500px) {
  .join-container {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding: 40px 0 120px 0;
  }
  .join-aside {
    width: 80%;
    margin: 20px 0;
    align-items: center;
  }
  .heart-container {
    top: 0;
    right: 0;
    width: 150px;
    height: 60px;
  }
  .heart-container .heart-reading .heart-rate,
  .fat-container .fat-reading .fat-rate {
    font-size: 18px;
  }
  .heart-container .heart-reading p,
  .fat-container .fat-reading p {
    font-size: 14px;
  }
  .join-container .join-aside h3 {
    font-size: 30px;
    text-align: center;
  }
  .fat-container {
    bottom: 10%;
    left: 0;
    width: 150px;
    height: 60px;
  }
  .btn-container {
    bottom: -90px;
    right: 25%;
    transform: scale(0.8);
  }
}
</style>
