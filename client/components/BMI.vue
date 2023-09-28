<template>
  <section class="bmi-container">
    <div class="bmi-wrraper">
      <h3 class="title">Let's Calculate Your <span>BMI</span></h3>
      <div class="info-container">
        <p class="info">
          Easily determine your body mass index with our accurate calculation
          tool.
        </p>
      </div>
      <div class="input-container">
        <div class="weight-container">
          <input placeholder="Weight / Kg" v-model="weight" />
          <p>
            Your BMI is: <span class="result">{{ bmi }}</span>
          </p>
        </div>
        <div class="height-container">
          <input placeholder="Height / cm" v-model="height" />
          <p>
            Your weight is: <span class="result">{{ message }}</span>
          </p>
        </div>
      </div>
      <div class="btn-container">
        <button @click="calcBmi">Calculate</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const weight = ref(null);
const height = ref(null);
const bmi = ref("");
const message = ref("");

let calcBmi = () => {
  if (weight.value === 0 || height.value === 0) {
    alert("Please enter a valid weight and height");
  } else {
    let calculatedBmi = weight.value / ((height.value * height.value) / 10000);
    bmi.value = calculatedBmi.toFixed(1);

    if (calculatedBmi < 20) {
      message.value = "Underweight";
    } else if (calculatedBmi >= 20 && calculatedBmi < 27) {
      message.value = "Normal";
    } else {
      message.value = "Overweight";
    }
  }
};
</script>

<style scoped>
.bmi-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 500px;
  padding: 40px 0;
  position: relative;
  margin-bottom: 80px;
}
.bmi-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/images/BMI.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right bottom;
  opacity: 0.6;
}
.bmi-wrraper {
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 50%;
  z-index: 10;
  padding-left: 80px;
}
.title {
  color: var(--text-color);
  font-size: 44px;
  font-weight: 700;
  margin-bottom: 20px;
}
.title span {
  color: var(--primary-color);
  font-size: 52px;
  font-weight: 900;
}
.info-container {
  width: 80%;
}
.info {
  font-size: 16px;
  color: var(--text-color);
  opacity: 0.7;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 1.4;
}
.input-container {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 80%;
}
.weight-container,
.height-container {
  display: flex;
  flex-direction: column;
  width: 40%;
}
.input-container input {
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  background: transparent;
  outline: none;
  color: var(--text-color);
  border: 1px solid var(--text-color);
  margin-bottom: 20px;
}
.input-container p {
  font-size: 16px;
  color: var(--text-color);
}
.result {
  font-size: 18px;
  font-weight: 600;
  color: var(--primary-color);
}
.btn-container {
  margin-top: 60px;
}
.btn-container button {
  text-transform: uppercase;
  color: var(--text-color);
  background: var(--background-color);
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
}
.btn-container button:hover {
  background: var(--primary-color);
  font-weight: 600;
}
</style>
