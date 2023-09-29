<template>
  <section class="trainer-container">
    <div class="title-wrapper">
      <img src="/images/title-bg-primary.png" alt="bg" />
      <div>
        <h2>GYMIX Trainers</h2>
      </div>
    </div>
    <div class="info">
      <h4>We Are Offering Best Flexible Classes</h4>
      <p>
        Expert team of coaches helps you succeed in any goal, personalized
        guidance and motivation provided!
      </p>
    </div>
    <div class="card-container">
      <div class="card-wrapper" v-for="trainer in trainers" :key="trainer.id">
        <div class="card">
          <img
            :src="trainer.src"
            :alt="trainer.id"
            :id="`item-${trainer.id}`"
            class="image"
          />
          <img src="/images/trainer-bg.png" alt="trainer-tag" class="tag" />
        </div>
        <div class="tariner-info">
          <div class="open">
            <span class="circle"> <i class="fa-solid fa-angle-up"></i> </span>
          </div>
          <h3>{{ trainer.name }}</h3>
          <p>{{ trainer.specialize }}</p>
          <div class="contact">
            <div class="icon">
              <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div class="icon">
              <i class="fa-brands fa-x-twitter"></i>
            </div>
            <div class="icon">
              <i class="fa-brands fa-instagram"></i>
            </div>
            <div class="icon">
              <i class="fa-regular fa-envelope"></i>
            </div>
          </div>
        </div>
        <span class="underline"></span>
      </div>
    </div>
  </section>
</template>

<script setup>
const trainers = [
  {
    id: "1",
    src: "/images/Trainers/trainer-1.png",
    name: "John Lewis",
    specialize: "Yoga Trainer",
  },
  {
    id: "2",
    src: "/images/Trainers/trainer-2.png",
    name: "Jonathan Doe",
    specialize: "Crossfit Trainer",
  },
  {
    id: "3",
    src: "/images/Trainers/trainer-3.png",
    name: "Anna June",
    specialize: "Personal Trainer",
  },
];
</script>

<style scoped>
.trainer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 60px 0;
  position: relative;
  margin-bottom: 80px;
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
  z-index: 10;
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
.info {
  width: 50%;
  z-index: 10;
}
.trainer-container h4 {
  color: var(--text-color);
  font-size: 28px;
  padding-bottom: 20px;
  letter-spacing: 2px;
  text-align: center;
}
.trainer-container p {
  font-size: 16px;
  color: var(--text-color);
  opacity: 0.7;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 1.4;
  text-align: center;
  margin-bottom: 40px;
}
.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 80%;
  justify-items: center;
  padding-bottom: 40px;
}
.card-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-color: rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.7) 0px 3px 8px;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 420px;
  z-index: 10;
  padding: 60px 20px;
  position: relative;
  overflow: hidden;
}
.tag {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  margin-bottom: -40px;
  align-self: flex-end;
}
.image {
  z-index: 12;
  margin-top: -30px;
  filter: grayscale(100%);
}
.tariner-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  transform: translateY(60px);
  background: rgba(0, 0, 0, 0.8);
  z-index: 20;
  padding-bottom: 30px;
  transition: transform 0.5s ease-in-out;
}
.open {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 10px;
  background: rgb(165, 165, 165);
  z-index: 15;
}
.circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 30px;
  background: rgb(165, 165, 165);
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  position: absolute;
  top: -20px;
}
.circle i {
  color: var(--slogan-color);
  font-size: 24px;
}
.tariner-info h3 {
  color: var(--text-color);
  font-size: 24px;
  padding: 10px 0;
}
.contact {
  width: 60%;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  margin: auto;
}
.contact i {
  color: var(--text-color);
  z-index: 30;
}
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 15px;
  background: none;
  cursor: pointer;
}
.underline {
  width: 20%;
  height: 5px;
  background: var(--primary-color);
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  transition: width 0.5s ease-in-out;
  z-index: 30;
}
.card-wrapper:hover .underline {
  width: 100%;
}
.card-wrapper:hover .image {
  filter: none;
}
.card-wrapper:hover .tariner-info {
  transform: translate(0);
}
.card-wrapper:hover .open,
.card-wrapper:hover .circle {
  background: var(--primary-color);
}
.card-wrapper:hover .circle i {
  color: var(--text-color);
}
.contact .icon:hover {
  background: var(--primary-color);
}
</style>
