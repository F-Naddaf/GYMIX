<template>
    <div class="message-container">
      <div class="close-btn">
        <button @click="closeInstruction">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <p>
        {{ message }} <span>{{ span }}</span>
        {{ remaining1 }}
        <img :src="image1" alt="image" />
        <img :src="image2" alt="image" />
        {{ aboutImage3 }}
        <img :src="image3" alt="image" id="third" />
        {{ aboutIimage4 }}
        <img :src="image4" alt="image" id="forth" />
        {{ remaining2 }}
      </p>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from "vue";
  
  const emit = defineEmits(["close-instruction"]);
  
  const props = defineProps({
    message: String,
    span: String,
    remaining1: String,
    remaining2: String,
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    aboutImage3: String,
    aboutIimage4: String,
  });
  
  const closeInstruction = () => {
    emit("close-instruction");
  };
  </script>
  
  <style scoped>
  .message-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 350px;
    height: 150px;
    background: #ffffff;
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
    font-weight: 800;
    font-size: 20px;
  }
  img {
    height: 20px;
    transform: translateY(5px);
    padding: 0 2px;
  }
  #third,
  #forth {
    height: 25px;
    transform: translateY(5px);
  }
  </style>
  