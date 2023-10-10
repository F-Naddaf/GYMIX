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
    <div class="score-container">
      <p>
        Your Score: <span>{{ score }}</span
        >/20
      </p>
    </div>
    <div class="btn-container" id="lose">
      <button id="startButton">Start</button>
    </div>
    <div class="main-container" ref="mainContainer">
      <img :src="currentImage" alt="boxing-image" ref="avatar" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from "vue";

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
    alt: "boxing image 1",
    src: "/images/games/boxing/boxing-avatar-1.png",
  },
  {
    id: "2",
    alt: "boxing image 2",
    src: "/images/games/boxing/boxing-avatar-2.png",
  },
];

const punchs = [
  { id: "3", alt: "right", src: "/images/games/boxing/boxing-punch-right.png" },
  { id: "4", alt: "left", src: "/images/games/boxing/boxing-punch-left.png" },
];

const instruction = ref(true);
const score = ref(0);
const currentIndex = ref(0);
const blockWidth = 360;
let step = 90;
let currentPosition = 0;
const avatar = ref(null);
const mainContainer = ref(null);
const sKeyPressed = ref(false);

const punchRightImage = punchs.find((punch) => punch.alt === "right");
// const punchRightImageSrc = computed(() => {
//   const punchRightImage = punchs.find((punch) => punch.alt === "right");
//   return punchRightImage ? punchRightImage.src : "";
// });

const handleSKeyPress = () => {
  sKeyPressed.value = true;
  images[currentIndex.value].src = punchRightImage.src;
  //   currentImage.value = punchRightImageSrc.value;
  //   images[currentIndex.value].src = punchRightImageSrc.value;
  setTimeout(() => {
    sKeyPressed.value = false;
    changeImage(); // Resume the changeImage function
  }, 100);
};

const currentImage = computed(() => images[currentIndex.value].src);

const closeInstruction = () => {
  instruction.value = false;
};

const changeImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

onMounted(() => {
  setInterval(changeImage, 200);

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
    } else if (event.key === "ArrowLeft" && currentPosition > -270) {
      currentPosition -= step;
      if (
        avatar.value.offsetWidth &&
        currentPosition + avatar.value.offsetWidth <=
          mainContainer.value.offsetWidth
      ) {
        avatar.value.style.transform = `translateX(${currentPosition}px)`;
      }
    } else if (event.key === "s" && !sKeyPressed.value) {
      handleSKeyPress();
    }
  };

  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("keydown", handleSKeyPress);

  onUnmounted(() => {
    document.removeEventListener("keydown", handleKeyDown);
  });
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
img {
  width: 120px;
  height: auto;
}
.main-container {
  width: 900px;
  height: fit-content;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  bottom: 250px;
  left: 50%;
  transform: translate(-50%);
}

.child {
  width: 300px;
  height: 50px;
  background-color: #007bff;
  transition: transform 0.3s ease;
}
</style>
