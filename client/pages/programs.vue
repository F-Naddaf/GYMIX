<template>
  <div>
    <PagesHero :title="title" />
    <div class="weekdays-container">
      <button
        v-for="(day, index) in weekDays"
        :key="index"
        @click="filterClasses(day)"
        :class="{ active: day === selectedDay }"
      >
        {{ day }}
      </button>
    </div>
    <div v-if="selectedDay" class="classes">
      <ul v-for="(classData, index) in filteredClasses" :key="index">
        <li>
          Class Name: <span>{{ classData.Class }}</span>
        </li>
        <li>
          Timing:<span> {{ classData.Timing }}</span>
        </li>
        <li>
          Trainer: <span>{{ classData.trainer }} </span>
        </li>
        <li>
          <button class="join">Join Now</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import Programs from "../data/porgrams.js";
import { ref, computed } from "vue";

const title = ref("Programs");
const programsArray = Programs;

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const selectedDay = ref("Monday");

const filterClasses = (day) => {
  selectedDay.value = day;
};

const filteredClasses = computed(() => {
  const selectedClasses = programsArray.find(
    (item) => item[selectedDay.value.toLowerCase()]
  );
  return selectedClasses
    ? selectedClasses[selectedDay.value.toLowerCase()]
    : [];
});
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
  background: var(--secondary-color);
  border: 1px solid var(--secondary-color);
  color: white;
}
.active {
  background: var(--secondary-color);
  border: 1px solid var(--secondary-color);
  color: white;
}
.classes {
  margin: 20px 0 80px 0;
}
ul {
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 80px;
  margin: 20px auto;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-color: rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.7) 0px 3px 8px;
  align-items: center;
}
li {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: rgba(255, 255, 255, 0.5);
}
span {
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 1px;
  padding-top: 10px;
  color: white;
}
.join {
  background: #747474;
}
</style>
