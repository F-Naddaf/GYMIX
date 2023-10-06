<template>
  <div class="rope-game-container">
    <p>Your Score: {{ score }}/5</p>
    <div class="image-container">
      <img
        :src="currentImage"
        alt="image"
        :class="isJumping ? 'image-up' : 'image-down'"
      />
    </div>
    <p v-show="gameEnded" id="lose-message">Sorry, you lose. Try again!</p>
    <p v-show="score === 5" id="win-message">Congratulations!</p>

    <div class="btn-container" v-if="!gameEnded" id="lose">
      <button @click="restartGame">Back</button>
      <button @click="startGame" :disabled="startButtonDisabled">Start</button>
    </div>
    <div class="btn-container" v-if="gameEnded" id="win">
      <button @click="restartGame">Play again</button>
    </div>
    <div class="btn-container" v-if="score === 5" id="win">
      <button @click="continueGame" :disabled="!canContinue">Continue</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";

definePageMeta({
  layout: "custom",
});

const images = [
  "/images/games/rope/photo-1.png",
  "/images/games/rope/photo-2.png",
  "/images/games/rope/photo-3.png",
  "/images/games/rope/photo-4.png",
  "/images/games/rope/photo-5.png",
  "/images/games/rope/photo-6.png",
  "/images/games/rope/photo-7.png",
  "/images/games/rope/photo-8.png",
  "/images/games/rope/photo-9.png",
  "/images/games/rope/photo-10.png",
];

const currentIndex = ref(0);
const isJumping = ref(false);
const gameEnded = ref(false);
const canContinue = ref(false);
const score = ref(0);
const jumpKey = 32;
let intervalId;

const currentImage = computed(() => images[currentIndex.value]);
const startButtonDisabled = computed(() => gameEnded.value || isJumping.value);

const startGame = () => {
  intervalId = setInterval(changeImage, 100);
};

const restartGame = () => {
  location.reload();
};

const continueGame = () => {
  canContinue.value = false;
  currentIndex.value++;
  changeImage();
};

const changeImage = () => {
  console.log("start game");
  if (!gameEnded.value) {
    currentIndex.value = (currentIndex.value + 1) % images.length;
    if (score.value >= 5) {
      clearInterval(intervalId);
    }
  } else {
    clearInterval(intervalId);
    endGame();
  }
};

const jump = () => {
  isJumping.value = true;
  setTimeout(() => {
    isJumping.value = false;
  }, 100);
};

const endGame = () => {
  gameEnded.value = true;
};

const increaseScore = () => {
  score.value++;
  if (score.value === 5) {
    gameEnded.value = true;
  }
};

const handleKeyDown = (e) => {
  if (!gameEnded.value && e.keyCode === jumpKey) {
    if (currentIndex.value !== 5) {
      if (currentIndex.value === 4) {
        increaseScore();
        canContinue.value = true;
      }
      jump();
    } else {
      endGame();
    }
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeyDown);
});
</script>

<style scoped>
.rope-game-container {
  display: flex;
  justify-content: flex-start;
  height: 100vh;
  margin: auto;
  background-image: url("/images/games/fitting/liftting-background.png");
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: cover;
  position: relative;
}
.image-container {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
}

.btn-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
p {
  color: white;
}
.image-up {
  transform: translateY(-20px);
  transition: transform 0.1s;
}
.image-down {
  transform: translateY(0);
  transition: transform 0.1s;
}
</style>
