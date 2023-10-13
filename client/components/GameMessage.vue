<template>
  <div class="game-message">
    <p v-if="showStartButton" class="start">{{ startGameMessage }}</p>
    <p v-if="showRetryButton" class="lose">{{ loseTheGame }}</p>
    <p v-if="showNextButton || showAgainButton" class="start">
      {{ winTheGame }}
    </p>
    <div class="button-container">
      <button @click="back" class="back">
        <NuxtLink to="/">Back</NuxtLink>
      </button>
      <button v-if="showStartButton" class="play" @click="startGame">
        Start
      </button>
      <button v-if="showRetryButton" class="play" @click="retryGame">
        Retry
      </button>
      <button v-if="showAgainButton" class="again" @click="retryGame">
        Play Again
      </button>
      <button v-if="showNextButton" class="play">
        <NuxtLink :to="nextGame">Next</NuxtLink>
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["start-game", "try-again"]);

const props = defineProps({
  message: String,
  showStartButton: Boolean,
  showRetryButton: Boolean,
  showNextButton: Boolean,
  showAgainButton: Boolean,
  nextGame: String,
});

const startGameMessage = "Welcome to the game!";
const loseTheGame = "Game Over";
const winTheGame = "Congratulations";

const startGame = () => {
  emit("start-game");
};

const retryGame = () => {
  emit("try-again");
};
</script>

<style scoped>
.game-message {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  height: 100px;
  background: var(--text-color);
  margin: 20% auto auto auto;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
  padding: 16px 0;
}
.game-message {
  font-size: 16px;
  font-weight: 800;
  text-transform: capitalize;
}
.game-message .lose {
  color: var(--primary-color);
}
.game-message .start {
  color: green;
}
.game-message .again {
  background: var(--secondary-color);
}
.button-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
}
.button-container button {
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 6px;
  text-transform: uppercase;
  color: white;
  font-weight: 600;
  box-shadow: rgba(0, 0, 0, 0.4) -2px 2px 3px;
  cursor: pointer;
}
.button-container button a {
  color: white;
}
.button-container .back {
  background: var(--primary-color);
}
.button-container .play {
  background: green;
}
</style>
