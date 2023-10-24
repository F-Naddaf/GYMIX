<template>
  <div class="instuction-wrapper">
    <div class="close-btn">
      <p class="instuctions">instructions</p>
      <button @click="closeInstruction">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
    <div class="message-container">
      <p>
        {{ message }} <span>{{ span }}</span> {{ remaining }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["close-instruction"]);

const props = defineProps({
  message: String,
  span: String,
  remaining: String,
});

const closeInstruction = () => {
  emit("close-instruction");
};

const handleKeyDown = (event) => {
  if (event.key === "Escape") {
    emit("close-instruction");
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeyDown);
});
</script>

<style scoped>
.instuction-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 450px;
  height: 100px;
  background: var(--text-color);
  margin: 20% auto auto auto;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
}
.close-btn {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: var(--primary-color);
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  padding: 2px 5px;
}
.instuctions {
  color: var(--text-color);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.close-btn button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 20px;
  height: 20px;
  background: none;
  cursor: pointer;
}
.close-btn button i {
  color: white;
  font-size: 16px;
  padding: 0;
  margin: 0;
}
.instuction-wrapper .message-container {
  width: 90%;
  margin: auto;
}
.instuction-wrapper .message-container p {
  font-size: 16px;
  font-weight: 400;
  color: var(--slogan-color);
  line-height: 22px;
  text-align: center;
}
.instuction-wrapper .message-container p span {
  color: var(--primary-color);
  font-weight: 600;
}
</style>
