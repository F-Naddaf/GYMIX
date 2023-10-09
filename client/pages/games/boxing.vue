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
        >/5
      </p>
    </div>
    <div class="target-container">
      <div class="target-wrapper">
        <div class="punch-target">
          <div class="first-circle target"></div>
          <div class="second-circle target"></div>
          <div class="third-circle target"></div>
          <div class="forth-circle target"></div>
          <div class="effect"></div>
        </div>
        <div class="puch-pipe"></div>
      </div>
    </div>
    <div class="btn-container" id="lose">
      <button id="startButton">Start</button>
    </div>
    <div class="main-container">
      <div class="child"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";

definePageMeta({
  layout: "custom",
});

const instruction = ref(true);

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

const closeInstruction = () => {
  instruction.value = false;
};
</script>

<style scoped>
.boxing-game-container {
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
.target-container {
  width: 150px;
  height: 500px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.target-wrapper {
  width: 150px;
  height: 500px;
  position: relative;
  margin: auto;
  overflow: hidden;
  transition: transform 1s;
  transform: scale(0);
}
.animation {
  animation: scaled 0.5s ease-in-out;
  transform: scale(1);
  transition: transform 1s;
  transform-origin: bottom center;
}
@keyframes scaled {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
.punch-target {
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 150px;
  background: red;
}
.target {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}
.first-circle {
  width: 120px;
  height: 120px;
  border-radius: 120px;
  background: rgb(218, 218, 218);
}
.second-circle {
  width: 90px;
  height: 90px;
  border-radius: 90px;
  background: red;
}
.third-circle {
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background: rgb(218, 218, 218);
}
.forth-circle {
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background: red;
}
.effect {
  position: absolute;
  bottom: 2px;
  right: -12px;
  width: 150px;
  height: 75px;
  border-radius: 0 0 150px 150px;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 20;
  transform: rotate(341deg);
}
.puch-pipe {
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  height: 350px;
  width: 15px;
  background-color: rgb(34, 34, 34);
  background-image: linear-gradient(
    to right,
    #363636,
    #5e5e5e,
    #a0a0a0,
    #5e5e5e,
    #363636
  );
  z-index: -2;
}
.main-container {
  width: 900px;
  height: 50px;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.child {
  width: 300px;
  height: 50px;
  background-color: #007bff;
  transition: transform 0.3s ease;
}
</style>
