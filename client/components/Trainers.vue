<template>
  <section class="trainer-container">
    <div class="title-wrapper">
      <img src="/images/title-bg-primary.png" alt="bg" />
      <div>
        <h2>Our Featured Class</h2>
      </div>
    </div>
    <h4>We Are Offering Best Flexible Classes</h4>
  </section>
</template>

<script setup>
const Trainers = [
  {
    id: "1",
    src: "/images/trainers/photo-1",
  },
];
</script>

<style scoped>
.trainer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 40px 0;
  position: relative;
}
.trainer-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/images/background.png");
  background-size: cover;
  opacity: 0.3;
}
.title-wrapper {
  justify-content: center;
  position: relative;
  width: 20%;
  height: fit-content;
  margin: 40px auto;
}
.title-wrapper img {
  width: 100%;
}
.title-wrapper div {
  display: flex;
  position: absolute;
  justify-content: center;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.title-wrapper h2 {
  color: var(--text-color);
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 1px;
}
.featured-container h4 {
  color: var(--text-color);
  font-size: 28px;
  padding: 20px 0;
  letter-spacing: 2px;
}
</style>
