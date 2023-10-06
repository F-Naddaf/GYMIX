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
    <!-- <p v-show="gameEnded" id="lose-message">Sorry, you lose. Try again!</p>
        <p v-show="score === 5" id="win-message">Congratulations!</p> -->

    <div class="btn-container" v-if="!gameEnded">
      <button class="primary">
        <NuxtLink to="/" @click="restartGame">Back</NuxtLink>
      </button>
      <button
        class="green"
        v-if="!startOver && !disable"
        @click="startGame"
        :disabled="startButtonDisabled"
      >
        Start
      </button>
    </div>
    <div class="btn-container" v-if="gameEnded && score === 5">
      <button v-if="score === 5" class="primary" @click="playAgain">
        Play again
      </button>
      <button class="green">
        <NuxtLink
          v-if="score === 5"
          to="/games/boxing"
          @click="continueGame"
          :disabled="!canContinue"
        >
          Next
          <i class="fa-solid fa-angle-right"></i>
        </NuxtLink>
      </button>
    </div>
    <div class="try-again-container" v-if="gameEnded && score !== 5">
      <button class="primary" @click="playAgain">Try again</button>
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
const startOver = ref(false);
const currentIndex = ref(0);
const isJumping = ref(false);
const gameEnded = ref(false);
const canContinue = ref(false);
const score = ref(0);
const jumpKey = 32;
let intervalId;

const closeInstruction = () => {
  instruction.value = false;
};

const currentImage = computed(() => images[currentIndex.value]);
const startButtonDisabled = computed(() => gameEnded.value || isJumping.value);

const startGame = () => {
  intervalId = setInterval(changeImage, 100);
  disable.value = true;
};

const restartGame = () => {
  location.reload();
};
const playAgain = () => {
  startOver.value = true;
  gameEnded.value = false;
  score.value = 0;
  startGame();
};

const continueGame = () => {
  canContinue.value = false;
  currentIndex.value++;
  changeImage();
};

const changeImage = () => {
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
