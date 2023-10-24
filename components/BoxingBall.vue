<template>
  <div class="challenge-container" ref="challengeContainer">
    <div class="left-ball-wrapper" v-if="showLeftBall" ref="leftBall">
      <div class="ball"></div>
    </div>
    <div
      class="right-ball-wrapper"
      id="right-wrapper"
      v-if="showRightBall"
      ref="rightBall"
    >
      <div class="ball"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, watch, defineProps, defineEmits } from "vue";

const props = defineProps({
  started: Boolean,
});

const emits = defineEmits([
  "ball-position",
  "ball-locationX",
  "ball-locationY",
  "ball-quantity",
]);

const challengeContainer = ref(null);
const leftBall = ref(null);
const rightBall = ref(null);
const showLeftBall = ref(false);
const showRightBall = ref(false);
const gameIsStarted = ref(false);
let remainingBalls = ref(7);
let translateY = 0;

let myInterval;

const getRandomBall = () => {
  const ballPositions = ["left", "right"];
  const randomIndex = Math.floor(Math.random() * ballPositions.length);
  return ballPositions[randomIndex];
};

const getRandomLocation = () => {
  const ballLocation = [-270, -180, -90, 0, 90, 180, 270];
  const randomIndex = Math.floor(Math.random() * ballLocation.length);
  const randomLocation = ballLocation[randomIndex];
  return randomLocation;
};

const moveBall = () => {
  if (translateY >= 200) {
    clearInterval(myInterval);
  } else if (challengeContainer.value) {
    translateY += 10;
    emits("ball-locationY", translateY);
    challengeContainer.value.style.transform = `translate(-50%, ${translateY}px)`;
  }
};

const generateRandomBallPositions = async (iterations) => {
  if (iterations > 0 && gameIsStarted.value) {
    const randomBall = getRandomBall();
    emits("ball-position", randomBall);
    const randomBallLocations = getRandomLocation();
    emits("ball-locationX", randomBallLocations);
    if (randomBall === "right") {
      showRightBall.value = true;
      showLeftBall.value = false;
      await nextTick();
      translateY = 0;
      if (challengeContainer.value) {
        challengeContainer.value.style.transform = `translate(-50%, ${translateY}px)`;
      }
      if (rightBall.value?.style) {
        rightBall.value.style.transform = `translateX(${randomBallLocations}px)`;
      }
      myInterval = setInterval(moveBall, 50);
      setTimeout(() => {
        showRightBall.value = false;
      }, 2000);
    } else {
      showLeftBall.value = true;
      await nextTick();
      translateY = 0;
      if (challengeContainer.value) {
        challengeContainer.value.style.transform = `translate(-50%, ${translateY}px)`;
      }
      if (leftBall.value?.style) {
        leftBall.value.style.transform = `translateX(${randomBallLocations}px)`;
      }
      myInterval = setInterval(moveBall, 50);
      showRightBall.value = false;
      setTimeout(() => {
        showLeftBall.value = false;
      }, 2000);
    }
    iterations -= 1;
    setTimeout(() => {
      generateRandomBallPositions(iterations);
      remainingBalls.value = iterations;
      emits("ball-quantity", remainingBalls.value);
    }, 3000);
  }
};

watch(
  () => props.started,
  (newValue, oldValue) => {
    gameIsStarted.value = newValue;
    generateRandomBallPositions(14);
  }
);
</script>

<style scoped>
.challenge-container {
  width: 900px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  top: 280px;
  left: 50%;
  transform: translate(-50%, 0);
}
.left-ball-wrapper {
  display: flex;
  width: 120px;
  justify-content: flex-start;
}
.right-ball-wrapper {
  display: flex;
  width: 120px;
  justify-content: flex-end;
}
.ball {
  width: 40px;
  height: 40px;
  background: rgb(211, 103, 2);
  border-radius: 20px;
}

@media (width: 1024px) {
  .challenge-container {
    top: 220px;
  }
}
</style>
