<template>
  <div class="rope-game-container">
    <div class="instruction-container" v-if="instruction">
      <GameInstructions
        :message="message"
        :span="span"
        :remaining="remaining"
        @close-instruction="closeInstruction"
      />
    </div>
    <div class="instruction-container" v-if="startGamePopUp">
      <GameMessage
        :showStartButton="showStartButton"
        :showRetryButton="showRetryButton"
        :showNextButton="showNextButton"
        @go-back="closeInstruction"
        @start-game="startGame"
        @try-again="playAgain"
      />
    </div>
    <div class="score-container">
      <p>
        Your Score: <span>{{ score }}</span
        >/5
      </p>
    </div>
    <div class="image-container">
      <img
        :src="currentImage"
        alt="image"
        :class="isJumping ? 'image-up' : 'image-down'"
      />
    </div>
    <div v-if="score === 5" class="win-message">
      <p>Winner...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";

definePageMeta({
  layout: "custom",
});

const message = "You need to collect 5 scores by jumping the rope using the ";
const span = "SPACE";
const remaining = " on the keyboard";

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

const instruction = ref(true);
const disable = ref(false);
const currentIndex = ref(0);
const isJumping = ref(false);
const gameEnded = ref(false);
const canContinue = ref(false);
const startGamePopUp = ref(false);
const showStartButton = ref(false);
const showRetryButton = ref(false);
const showNextButton = ref(false);
const score = ref(0);
const jumpKey = 32;
let intervalId;

const closeInstruction = () => {
  instruction.value = false;
  startGamePopUp.value = true;
  showStartButton.value = true;
};

const currentImage = computed(() => images[currentIndex.value]);
const startButtonDisabled = computed(() => gameEnded.value || isJumping.value);

const startGame = () => {
  startGamePopUp.value = false;
  intervalId = setInterval(changeImage, 100);
  disable.value = true;
};

const playAgain = () => {
  startGamePopUp.value = false;
  showRetryButton.value = false;
  gameEnded.value = false;
  score.value = 0;
  startGame();
};

const continueGame = () => {
  startGamePopUp.value = true;
  showRetryButton.value = false;
  showNextButton.value = true;
  canContinue.value = false;
  currentIndex.value++;
  changeImage();
};

const changeImage = () => {
  if (!gameEnded.value) {
    currentIndex.value = (currentIndex.value + 1) % images.length;
    if (score.value >= 5) {
      showRetryButton.value = false;
      clearInterval(intervalId);
      startGamePopUp.value = true;
      showNextButton.value = true;
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
  startGamePopUp.value = true;
  showRetryButton.value = true;
  showStartButton.value = false;
  showNextButton.value = false;
};

const increaseScore = () => {
  score.value++;
  if (score.value === 5) {
    gameEnded.value = false;
    showStartButton.value = false;
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
  flex-direction: column;
  height: 100vh;
  margin: auto;
  background-image: url("/images/games/rope/rope-background.png");
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: cover;
  position: relative;
}
.instruction-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 50;
}
.score-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 20px 0;
}
.score-container p {
  color: white;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 1px;
  text-shadow: rgba(0, 0, 0) 0px 1px 4px;
}
.score-container p span {
  color: white;
  font-size: 28px;
}
.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.image-container img {
  position: absolute;
  height: 700px;
  width: auto;
  bottom: 70px;
  left: 50%;
  transform: translate(-360px, 0);
}
.win-message {
  position: absolute;
  left: 45%;
  top: 15%;
  transform: scale(0);
  animation: moving 2s ease-out;
  animation-fill-mode: forwards;
  opacity: 0;
}
@keyframes moving {
  0% {
    transform: scale(0) translateY(50%);
    opacity: 1;
    z-index: 4;
  }
  100% {
    transform: scale(3) translateY(15%);
    opacity: 1;
    z-index: 4;
  }
}
.win-message p {
  color: green;
  font-size: 50px;
  font-weight: 900;
  text-shadow: rgb(0, 60, 3) 0px 1px 4px;
  animation: animate 3s linear infinite;
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
    color: green;
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
    color: rgb(195, 255, 195);
    text-shadow: 0 0 5px green, 0 0 7px green, 0 0 9px green, 0 0 11px green,
      0 0 13px green;
  }
}
.btn-container {
  position: absolute;
  bottom: 30px;
  padding: 0 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.disable {
  display: none;
}
.try-again-container {
  position: absolute;
  bottom: 30px;
  padding: 0 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-container button,
.try-again-container .primary {
  padding: 7px 15px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  border: none;
}
.btn-container .primary,
.try-again-container .primary {
  background: var(--primary-color);
  box-shadow: rgb(105, 1, 1) -2px 3px 0px;
  transition: box-shadow 0.1s ease-in-out;
}
.btn-container .green {
  background: green;
  box-shadow: rgb(0, 60, 3) -2px 3px 0px;
  transition: box-shadow 0.1s ease-in-out;
}
.btn-container .primary a {
  color: white;
}
.btn-container .green a {
  color: white;
}
.btn-container .green {
  color: white;
}
.btn-container .primary,
.try-again-container .primary {
  color: white;
}
p {
  color: white;
}
.image-container img.image-up {
  transform: translate(-360px, -20px);
  transition: transform 0.1s;
}
.image-container img.image-down {
  transform: translate(-360px, 0);
  transition: transform 0.1s;
}
</style>
