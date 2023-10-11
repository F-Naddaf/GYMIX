<template>
  <div class="weight-lifting">
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
        :showNextButton="showNextButton"
        :nextGame="nextGame"
        @go-back="closeInstruction"
        @start-game="startGame"
      />
    </div>
    <div class="image-container" v-for="image in images" :key="image.id">
      <img :src="currentImageSrc" :alt="image.id" />
    </div>
    <div class="container">
      <div class="bar-chart">
        <span class="cover-top"></span>
        <div class="strong-reader" id="strongReader">
          <span class="line"></span>
          <p
            class="percentage"
            id="avrage"
            v-for="percantage in percentages"
            :key="percantage"
          >
            {{ percantage }}
          </p>
          <div class="solid" @transitionend="incrementTranslateY"></div>
        </div>
        <span class="cover-bottom"></span>
      </div>
      <div class="btn-container">
        <div class="btn-wrapper" :class="{ clicked: isClicked }">
          <button @click="startTranslate">HELP</button>
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

const message =
  "Help the trainer liftting up the weight by pressing the button";
const span = "HELP";
const remaining = "fast";

const images = [
  {
    id: "1",
    src: "/images/games/fitting/photo-22.png",
  },
  {
    id: "2",
    src: "/images/games/fitting/photo-33.png",
  },
  {
    id: "3",
    src: "/images/games/fitting/photo-1.png",
  },
  {
    id: "4",
    src: "/images/games/fitting/photo-0.png",
  },
];
const percentages = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
const translateY = ref(0);
const isClicked = ref(false);
const currentImageIndex = ref(0);
const instruction = ref(true);
const startGamePopUp = ref(false);
const showStartButton = ref(false);
const showNextButton = ref(false);
const nextGame = ref("/games/rope");
const currentImageSrc = ref(images[currentImageIndex.value].src);

const startTranslate = () => {
  translateY.value -= 5;
  isClicked.value = true;
  setTimeout(() => {
    isClicked.value = false;
  }, 50);
};

const incrementTranslateY = () => {
  if (translateY.value !== 0 && translateY.value > -100) {
    setTimeout(() => {
      translateY.value += 5;
    }, 5);
  }
};

let imageChangeInterval = null;

const closeInstruction = () => {
  instruction.value = false;
  startGamePopUp.value = true;
  showStartButton.value = true;
};

const startGame = () => {
  startGamePopUp.value = false;
};

const changeImage = () => {
  if (translateY.value <= -100) {
    currentImageSrc.value = images[3].src;
    startGamePopUp.value = true;
    showNextButton.value = true;
    showStartButton.value = false;
  } else if (translateY.value < -50 && imageChangeInterval) {
    clearInterval(imageChangeInterval);
    imageChangeInterval = null;
    currentImageSrc.value = images[2].src;
  } else if (translateY.value > -50 && !imageChangeInterval) {
    imageChangeInterval = setInterval(() => {
      currentImageIndex.value = 1 - currentImageIndex.value;
      currentImageSrc.value = images[currentImageIndex.value].src;
    }, 200);
  }
};

changeImage();

watch(translateY, (newTranslateY) => {
  changeImage();

  document.querySelector(
    ".solid"
  ).style.transform = `translateY(${newTranslateY}%)`;
});
</script>

<style scoped>
.weight-lifting {
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
.instruction-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 50;
}
.image-container {
  position: absolute;
  display: flex;
  bottom: 0;
  right: 30%;
  width: 30%;
  height: auto;
  align-items: center;
  justify-content: center;
}
.image-container img {
  width: 130%;
  height: auto;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 60px;
  height: 55%;
  margin: 50px 0 0 100px;
  position: relative;
}
.bar-chart {
  width: 40px;
  height: 75%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.strong-reader {
  height: 100%;
  width: 40px;
  position: relative;
  z-index: 10;
  background: linear-gradient(to top, red, orange, yellow, green);
  overflow: hidden;
}
.strong-reader::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.14) 0%,
    rgba(255, 255, 255, 0.2) 15%,
    rgba(238, 238, 238, 0.53) 20%,
    rgba(0, 0, 0, 0.22) 40%,
    rgba(0, 0, 0, 0.15) 90%,
    rgba(255, 255, 255, 0.28) 95%,
    rgba(0, 0, 0, 0.19) 100%
  );
}
.cover-top,
.cover-bottom {
  position: absolute;
  height: 5%;
  width: 40px;
  background: linear-gradient(
    90deg,
    #000 0%,
    #fff 15%,
    #eee 20%,
    #000 40%,
    #000 90%,
    #fff 95%,
    #000 100%
  );
  left: 0;
  right: 0;
  z-index: 12;
}
.cover-top {
  top: -5%;
}
.cover-bottom {
  bottom: -5%;
}
#avrage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 10%;
  width: 100%;
  box-sizing: border-box;
  color: white;
  text-shadow: 1px 1px 1px #000;
  font-weight: bold;
  font-family: sans-serif;
  margin: 0;
  z-index: 10;
}
.fill {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, red, orange, yellow, green);
  z-index: -1;
}
p {
  display: block;
}
.solid {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #3370ab;
  transform: translateY(0);
  transition: transform 0.2s ease;
  z-index: -1;
}
.solid::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mask: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.14) 0%,
    rgba(255, 255, 255, 0.2) 15%,
    rgba(238, 238, 238, 0.53) 20%,
    rgba(0, 0, 0, 0.22) 40%,
    rgba(0, 0, 0, 0.15) 90%,
    rgba(255, 255, 255, 0.28) 95%,
    rgba(0, 0, 0, 0.19) 100%
  );
}
.btn-container {
  width: 60px;
  height: 60px;
  cursor: pointer;
}
.btn-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: red;
  transition: box-shadow 0.2s ease-in-out;
  box-shadow: inset 3px 4px 4px 1px rgb(117, 1, 1),
    -2px -3px 6px rgba(0, 0, 0, 0.4), -4px -5px 10px rgba(0, 0, 0, 0.2),
    4px 5px 10px rgba(0, 0, 0, 0.2), 2px 3px 36px rgba(0, 0, 0, 0.4);
}
.btn-wrapper button {
  border: none;
  background: none;
  color: var(--text-color);
  font-size: 16px;
  font-weight: 900;
  cursor: pointer;
  z-index: 7;
}
.clicked {
  box-shadow: none;
  box-shadow: inset 3px 4px 4px 1px rgb(117, 1, 1);
  transform: scale(0.95);
}
.game-btn-container {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  bottom: 30px;
  left: 0;
  right: 0;
  padding: 0 30px;
}
.game-btn-container a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 15px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  color: white;
}
.game-btn-container i {
  font-size: 20px;
  color: white;
}
.game-btn-container .back-btn {
  background: var(--primary-color);
  box-shadow: rgb(105, 1, 1) -2px 3px 0px;
  transition: box-shadow 0.1s ease-in-out;
}
.game-btn-container .next-btn {
  background: green;
  box-shadow: rgb(0, 60, 3) -2px 3px 0px;
  transition: box-shadow 0.1s ease-in-out;
}
.game-btn-container .back-btn i {
  padding-right: 8px;
}
.game-btn-container .next-btn i {
  padding-left: 8px;
}
.game-btn-container .back-btn:hover {
  transform: scale(0.9);
  box-shadow: rgb(105, 1, 1) 0px 0px 0px;
}
.game-btn-container .next-btn:hover {
  transform: scale(0.9);
  box-shadow: rgb(0, 60, 3) 0px 0px 0px;
}
</style>
