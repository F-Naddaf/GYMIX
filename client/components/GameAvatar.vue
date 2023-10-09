<template>
  <div
    class="game-image-link"
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave"
  >
    <NuxtLink to="/games">
      <div v-if="welcomeMessage" class="welcome-container">
        <div class="message-wrapper">
          <p>Hello There...</p>
        </div>
      </div>
      <div v-if="playMessage" class="play-container">
        <div class="message-wrapper">
          <p>Would you like to try our game?</p>
        </div>
      </div>
      <div v-if="isHover" class="hover-container">
        <div class="message-wrapper">
          <p>Click Me</p>
        </div>
      </div>
      <img
        :src="
          hover ? '/images/avatar/avatar-2.png' : '/images/avatar/avatar-1.png'
        "
      />
    </NuxtLink>
    <button
      v-if="closeBtn"
      class="disable-avatar"
      @click="disable"
      @mouseover="onMouseOver"
      @mouseleave="onMouseLeave"
    >
      <i class="fa-solid fa-xmark"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

let welcomeMessage = ref(false);
let playMessage = ref(false);
let hover = ref(false);
let isHover = ref(false);
let closeBtn = ref(false);

const emit = defineEmits(["close-avatar"]);

const toggleMessages = () => {
  welcomeMessage.value = true;
  setTimeout(() => {
    welcomeMessage.value = false;
    playMessage.value = true;
    setTimeout(() => {
      playMessage.value = false;
    }, 3000);
  }, 3000);
};

const onMouseOver = () => {
  welcomeMessage.value = false;
  playMessage.value = false;
  isHover.value = true;
  closeBtn.value = true;
  hover.value = true;
};

const onMouseLeave = () => {
  isHover.value = false;
  hover.value = false;
  closeBtn.value = false;
  setTimeout(() => {
    toggleMessages();
  }, 1500);
};

const disable = () => {
  emit("close-avatar");
};

onMounted(() => {
  setTimeout(() => {
    toggleMessages();
  }, 3000);
});
</script>

<style scoped>
.game-image-link {
  position: relative;
  height: 150px;
  width: auto;
}
img {
  width: 100%;
  height: 100%;
}
.welcome-container {
  position: absolute;
  top: -26px;
  left: 0;
}
.hover-container {
  position: absolute;
  bottom: 26px;
  left: -10px;
}
.play-container {
  position: absolute;
  top: -60px;
  left: 0;
}
.hover-container .message-wrapper::before {
  content: "";
  position: absolute;
  right: 0;
  top: -6px;
  width: 10px;
  height: 0;
  border-right: 12px solid rgb(243, 247, 149);
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
}
.message-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  position: relative;
  background-color: rgb(243, 247, 149);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.message-wrapper::before {
  content: "";
  position: absolute;
  left: 30px;
  bottom: -6px;
  width: 0;
  height: 0;
  border-right: 12px solid rgb(243, 247, 149);
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
}

.message-wrapper p {
  padding: 10px;
  font-size: 14px;
  color: var(--slogan-color);
  font-weight: 500;
  text-align: center;
}
.disable-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -20px;
  right: 20px;
  width: 20px;
  height: 20px;
  border-radius: 15px;
  background: rgb(146, 146, 146);
  color: var(--slogan-color);
  z-index: 300;
  border: none;
  cursor: pointer;
}
</style>
