<template>
  <div class="boxing-game-container">
    <h3 v-if="failScore" class="punch-message-fail">{{ scoreMessage }}</h3>
    <h3 v-if="getScore" class="punch-message-score">{{ scoreMessage }}</h3>
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
        @try-again="playAgain"
      />
    </div>
    <div class="score-container">
      <p>
        Your Score: <span>{{ score }}</span
        >/10
      </p>
    </div>
    <BoxingBall
      :started="started"
      @ball-position="updateBallPosition"
      @ball-locationX="updateBallLocationX"
      @ball-locationY="updateBallLocationY"
      @ball-quantity="updateBallQuantity"
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
import { ref, watch } from "vue";

definePageMeta({
  layout: "custom",
});

const message = "You need to collect ";
const span = "10";
const remaining1 = "succesfull hits by moving right and left using";
const image1 = "/images/games/boxing/arrow-left.png";
const image2 = "/images/games/boxing/arrow-right.png";
const aboutImage3 = "For punching Left use";
const image3 = "/images/games/boxing/punch-left.png";
const aboutImage4 = "For punching Right use";
const image4 = "/images/games/boxing/punch-right.png";
const remaining2 = " on the keyboard";

const instruction = ref(true);
const getScore = ref(false);
const failScore = ref(false);
const scoreMessage = ref("");
const score = ref(0);
const playAnimation = ref(false);
const paused = ref(true);
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
const started = ref(false);
const ballPosition = ref(null);
const ballLocationX = ref(0);
const ballLocationY = ref(0);
const ballQuantity = ref(7);
let punchingTime;
let messageTime;

const closeInstruction = () => {
  instruction.value = false;
  startGamePopUp.value = true;
  showStartButton.value = true;
};

const updateBallPosition = (position) => {
  ballPosition.value = position;
};
const updateBallLocationX = (position) => {
  ballLocationX.value = position;
};

const updateBallLocationY = (translateY) => {
  ballLocationY.value = translateY;
};

const updateBallQuantity = (value) => {
  ballQuantity.value = value;
};

const timingFeedback = () => {
  if (ballLocationY.value < 130) {
    getScore.value = false;
    failScore.value = true;
    scoreMessage.value = "Too Early";
    clearTimeout(messageTime);
    messageTime = setTimeout(() => {
      failScore.value = false;
    }, 1000);
  } else if (ballLocationY.value > 190) {
    getScore.value = false;
    failScore.value = true;
    scoreMessage.value = "Too Late";
    clearTimeout(messageTime);
    messageTime = setTimeout(() => {
      failScore.value = false;
    }, 1000);
  } else if (ballLocationY.value >= 130 && ballLocationY.value <= 190) {
    getScore.value = true;
    failScore.value = false;
    scoreMessage.value = "Score";
    clearTimeout(messageTime);
    messageTime = setTimeout(() => {
      getScore.value = false;
    }, 1000);
    score.value += 1;
  }
};

const addScore = (ball, key, avatarPosition) => {
  const ballAndAvatarAtSamePosition = ballLocationX.value === currentPosition;
  const BallAtPositionA = ballPosition.value === key;
  const BallAtPositionB = ballPosition.value === ball;

  if (ballAndAvatarAtSamePosition && BallAtPositionA) {
    timingFeedback();
  } else if (BallAtPositionB && avatarPosition) {
    timingFeedback();
  }
};

const avatarMoving = () => {
  if (
    avatar.value &&
    avatar.value.offsetWidth &&
    mainContainer.value &&
    mainContainer.value.offsetWidth
  ) {
    if (
      currentPosition + avatar.value.offsetWidth <=
      mainContainer.value.offsetWidth
    ) {
      avatar.value.style.transform = `translateX(${currentPosition}px)`;
    }
  }
};

const punchAnimation = (punchHand) => {
  playAnimation.value = false;
  punchHand.value = true;
  clearTimeout(punchingTime);
  punchingTime = setTimeout(() => {
    playAnimation.value = true;
    punchHand.value = false;
  }, 200);
};

const startGame = () => {
  started.value = true;
  startGamePopUp.value = false;
  showStartButton.value = false;
  paused.value = false;
  playAnimation.value = true;

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight" && currentPosition < 270) {
      currentPosition += step;
      avatarMoving();
    }
    if (event.key === "d") {
      const avatarAtLeftOfBall = currentPosition - step;
      addScore("left", "right", avatarAtLeftOfBall);
      punchAnimation(punchRight);
    }
    if (event.key === "s") {
      const avatarAtRightOfBall = currentPosition + step;
      addScore("right", "left", avatarAtRightOfBall);
      punchAnimation(punchleft);
    } else if (event.key === "ArrowLeft" && currentPosition > -270) {
      currentPosition -= step;
      avatarMoving();
    }
  };
  document.onkeydown = handleKeyDown;
};

const playAgain = () => {
  startGamePopUp.value = false;
  showRetryButton.value = false;
  score.value = 0;
  startGame();
};

watch(ballQuantity, (newBallQuantity, oldBallQuantity) => {
  if (newBallQuantity >= 0 && score.value === 10 && started.value) {
    started.value = false;
    playAnimation.value = false;
    startGamePopUp.value = true;
    paused.value = true;
    showAgainButton.value = true;
  }
  if (newBallQuantity === 0 && score.value < 10 && started.value) {
    started.value = false;
    playAnimation.value = false;
    startGamePopUp.value = true;
    paused.value = true;
    showRetryButton.value = true;
  }
});
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
.punch-message-fail,
.punch-message-score {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%);
  font-size: 20px;
  font-weight: 800;
}
.punch-message-fail {
  color: var(--primary-color);
}
.punch-message-score {
  color: green;
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
