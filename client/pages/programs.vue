<template>
  <div>
    <PagesHero :title="title" />
    <div class="weekdays-container">
      <button v-for="(day, index) in weekDays" :key="index">{{ day }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const title = ref("Programs");

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
</script>

<style scoped>
.weekdays-container {
  display: flex;
  justify-content: space-evenly;
  width: 70%;
  margin: 80px auto;
}
button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 45px;
  padding: 10px;
  border: 1px solid #747474;
  border-radius: 45px;
  background: none;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  color: var(--text-color);
  cursor: pointer;
}
button:hover {
  background: var(--primary-color);
  border: 1px solid var(--primary-color);
  color: white;
}
.active {
  background: var(--primary-color);
  border: 1px solid var(--primary-color);
  color: white;
}
</style>
