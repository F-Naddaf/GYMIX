<template>
  <div class="boxing-game-container">
    <div class="instruction-container" v-if="instruction">
      <BoxingInstructions
        :message="message"
        :span="span"
        :image1="image1"
        :image2="image2"
        :aboutImage3="aboutImage3"
        :image3="image3"
        :aboutImage4="aboutImage4"
        :image4="image4"
        :remaining1="remaining1"
        :remaining2="remaining2"
        @close-instruction="closeInstruction"
      />
    </div>
    <div class="instruction-container" v-if="startGamePopUp">
      <GameMessage
        :showStartButton="showStartButton"
        :showRetryButton="showRetryButton"
        :showAgainButton="showAgainButton"
        @go-back="closeInstruction"
        @start-game="startGame"
      />
    </div>
    <div class="score-container">
      <p>
        Your Score: <span>{{ score }}</span
        >/20
      </p>
    </div>
    <BoxingBall
      :started="started"
      @ball-position="updateBallPosition"
      @ball-locationX="updateBallLocationX"
      @ball-locationY="updateBallLocationY"
    />
    <div class="main-container" ref="mainContainer">
      <div class="boxing-avatar-container" ref="avatar">
        <div v-if="playAnimation" class="start-boxing-animation">
          <img
            src="/images/games/boxing/boxing-avatar-0.png"
            alt="boxing-image-1"
            class="main-image"
          />
          <img
            src="/images/games/boxing/boxing-avatar-1.png"
            alt="boxing-image-1"
            class="first-image"
          />
          <img
            src="/images/games/boxing/boxing-avatar-2.png"
            alt="boxing-image-2"
            class="second-image"
          />
        </div>
        <div v-if="paused" class="pause-boxing-animation">
          <img
            src="/images/games/boxing/boxing-avatar-1.png"
            alt="boxing-image-1"
            class="first-image"
          />
        </div>
        <div v-if="punchRight" class="right-punch-avatar">
          <img
            src="/images/games/boxing/boxing-punch-right.png"
            alt="right-punch"
            class="right-punch"
          />
        </div>
        <div v-if="punchleft" class="left-punch-avatar">
          <img
            src="/images/games/boxing/boxing-punch-left.png"
            alt="left-punch"
            class="left-punch"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from "vue";

definePageMeta({
  layout: "custom",
});

const message = "You need to collect ";
const span = "20";
const remaining1 = "succesfull hits by moving right and left using";
const image1 = "/images/games/boxing/arrow-left.png";
const image2 = "/images/games/boxing/arrow-right.png";
const aboutImage3 = "For punching Left use";
const image3 = "/images/games/boxing/punch-left.png";
const aboutImage4 = "For punching Right use";
const image4 = "/images/games/boxing/punch-right.png";
const remaining2 = " on the keyboard";

const images = [
  {
    id: "1",
    alt: "boxing image 0",
    src: "/images/games/boxing/boxing-avatar-0.png",
  },
  {
    id: "2",
    alt: "boxing image 1",
    src: "/images/games/boxing/boxing-avatar-1.png",
  },
  {
    id: "3",
    alt: "boxing image 2",
    src: "/images/games/boxing/boxing-avatar-2.png",
  },
];

const punchs = [
  { id: "4", alt: "right", src: "/images/games/boxing/boxing-punch-right.png" },
  { id: "5", alt: "left", src: "/images/games/boxing/boxing-punch-left.png" },
];

const instruction = ref(true);
const score = ref(0);
const playAnimation = ref(false);
const paused = ref(true);
const currentIndex = ref(0);
const blockWidth = 360;
let step = 90;
let currentPosition = 0;
const avatar = ref(null);
const mainContainer = ref(null);
const punchRight = ref(false);
const punchleft = ref(false);
const startGamePopUp = ref(false);
const showStartButton = ref(false);
const showRetryButton = ref(false);
const showAgainButton = ref(false);
const showLeftBall = ref(false);
const showRightBall = ref(false);
const started = ref(false);
const ballPosition = ref(null);
const ballLocationX = ref(0);
const ballLocationY = ref(0);

const closeInstruction = () => {
  instruction.value = false;
  startGamePopUp.value = true;
  showStartButton.value = true;
};

const updateBallPosition = (position) => {
  ballPosition.value = position;
};
const updateBallLocationX = (position) => {
  //   console.log(position, "position");
  ballLocationX.value = position;
};

const updateBallLocationY = (translateY) => {
  ballLocationY.value = translateY;
};

const startGame = () => {
  started.value = true;
  startGamePopUp.value = false;
  showStartButton.value = false;
  paused.value = false;
  playAnimation.value = true;

  let keyDPressedTime = 0;

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight" && currentPosition < 270) {
      currentPosition += step;
      if (
        avatar.value.offsetWidth &&
        currentPosition + avatar.value.offsetWidth <=
          mainContainer.value.offsetWidth
      ) {
        avatar.value.style.transform = `translateX(${currentPosition}px)`;
      }
    } else if (event.key === "d") {
      if (
        (ballLocationX.value === currentPosition &&
          ballPosition.value === "right") ||
        (ballLocationX.value === currentPosition - step &&
          ballPosition.value === "right" &&
          ballLocationY.value >= 130 &&
          ballLocationY.value <= 190)
      ) {
        score.value += 1;
      } else {
        return;
      }
      playAnimation.value = false;
      punchRight.value = true;
      setTimeout(() => {
        playAnimation.value = true;
        punchRight.value = false;
      }, 200);
    } else if (event.key === "s") {
      if (
        (ballLocationX.value === currentPosition &&
          ballPosition.value === "right") ||
        (ballLocationX.value === currentPosition - step &&
          ballPosition.value === "right" &&
          ballLocationY.value >= 130 &&
          ballLocationY.value <= 190)
      ) {
        score.value += 1;
      } else {
        return;
      }
      playAnimation.value = false;
      punchleft.value = true;
      setTimeout(() => {
        playAnimation.value = true;
        punchleft.value = false;
      }, 200);
    } else if (event.key === "ArrowLeft" && currentPosition > -270) {
      currentPosition -= step;
      if (
        avatar.value.offsetWidth &&
        currentPosition + avatar.value.offsetWidth <=
          mainContainer.value.offsetWidth
      ) {
        avatar.value.style.transform = `translateX(${currentPosition}px)`;
      }
    }
  };
  document.addEventListener("keydown", handleKeyDown);
};
</script>

<style scoped>
.boxing-game-container {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 100vh;
  margin: auto;
  background-image: url("/images/games/boxing/boxing-background.png");
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
.main-container {
  width: 900px;
  height: fit-content;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  bottom: 320px;
  left: 50%;
  transform: translate(-50%);
}
.boxing-avatar-container {
  position: relative;
  width: 120px;
  height: 200px;
}
.boxing-avatar-container .start-boxing-animation .main-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: auto;
}
.boxing-avatar-container .start-boxing-animation .first-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: auto;
  opacity: 1;
  animation: switchFirstImages 0.5s infinite;
}
@keyframes switchFirstImages {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
.boxing-avatar-container .start-boxing-animation .second-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: auto;
  opacity: 0;
  animation: switchSecondImages 0.5s infinite;
}
@keyframes switchSecondImages {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
.boxing-avatar-container .pause-boxing-animation .first-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: auto;
}
.boxing-avatar-container .right-punch-avatar .right-punch {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: auto;
}
.boxing-avatar-container .left-punch-avatar .left-punch {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: auto;
}
</style>
