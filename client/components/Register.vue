<template>
  <div>
    <div class="wrapper">
      <div class="header-btn">
        <button @click="toggleRegister" :class="show ? 'big-text' : 'normal'">
          Register
        </button>
      </div>
      <form>
        <input placeholder="User Name" type="text" required />
        <input placeholder="E-mail" type="email" required />
        <input placeholder="Password" type="password" required />
        <div class="btn-container">
          <NuxtLink to="/" class="register-btn">Register</NuxtLink>
          <NuxtLink to="/" class="back-btn">Back</NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { ref } from "vue";

const props = defineProps({
  show: Boolean,
});

const emit = defineEmits(["show-register"]);

const isClicked = ref(false);

const toggleRegister = () => {
  isClicked.value = true;
  emit("show-register", isClicked.value);
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 420px;
  height: auto;
  margin: auto;
  padding: 20px 20px 100px 20px;
  border-radius: 60% / 10%;
  background: var(--secondary-color);
  z-index: 20;
}
.header-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.header-btn .normal {
  color: white;
  border: none;
  background: none;
  font-size: 18px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: 0.8s ease-in-out;
}
.header-btn .big-text {
  color: white;
  border: none;
  background: none;
  font-size: 24px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: 0.8s ease-in-out;
}
form {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 40px;
}
form input {
  padding: 5px 10px;
  margin: 10px 0;
}
.message {
  display: flex;
  width: 100%;
  margin-top: 10px;
}
.message p {
  color: var(--text-color);
  font-size: 14px;
}
.message a {
  color: var(--secondary-color);
  font-size: 14px;
  margin-left: 10px;
  text-decoration: underline;
}
.btn-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
  justify-content: space-between;
}
.register-btn,
.back-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 30px;
  cursor: pointer;
  border-radius: 5px;
}
.register-btn {
  color: var(--secondary-color);
  background: white;
  border: none;
  margin-bottom: 10px;
}
.back-btn {
  color: white;
  background: none;
  border: 1px solid white;
}
.register-btn:hover,
.back-btn:hover {
  transform: scale(0.95);
}
</style>
