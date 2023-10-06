<template>
  <div class="message-container">
    <div class="close-btn">
      <button @click="closeInstruction">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
    <p>
      {{ message }} <span>{{ span }}</span> {{ remaining }}
    </p>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const { emit } = defineEmits(["close-instruction"]);

const props = defineProps({
  message: String,
  span: String,
  remaining: String,
});

const closeInstruction = () => {
  context.emit("close-instruction");
};
</script>

<style scoped>
.message-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  height: 100px;
  background: var(--text-color);
  margin: 20% auto auto auto;
  border-radius: 10px;
  padding: 10px;
}
.close-btn {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}
.close-btn button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: var(--primary-color);
  cursor: pointer;
}
.close-btn button i {
  color: white;
  padding: 0;
  margin: 0;
}
.message-container p {
  font-size: 16px;
  font-weight: 400;
  color: var(--slogan-color);
  line-height: 22px;
  text-align: center;
  padding-bottom: 10px;
}
.message-container p span {
  color: var(--primary-color);
  font-weight: 600;
}
</style>
