<template>
  <section class="join-container">
    <div class="join-header">
      <img src="/images/title-bg-primary.png" alt="tag" />
      <h3>We Are Always Providing Best Fitness Service For You</h3>
      <Button to="/classes" buttonText="Join with us" :color="color" />
    </div>
  </section>
</template>

<script setup>
const color = "default";
</script>

<style scoped>
.join-container {
  display: flex;
  width: 100%;
  margin: 80px 0;
}
.join-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 70%;
  height: 150px;
}
.join-header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  border-top: 150px solid red;
  border-right: 50px solid transparent;
  height: 0;
  width: 100%;
}
.join-header img {
  filter: brightness(0) grayscale(100%) hue-rotate(180deg);
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-20%, -50%) rotate(-3deg);
  width: 50%;
  opacity: 0.2;
}
.join-header h3 {
  display: flex;
  color: var(--text-color);
  z-index: 10;
  font-size: 40px;
  font-weight: 900;
  flex-wrap: wrap;
  width: 60%;
}
</style>
