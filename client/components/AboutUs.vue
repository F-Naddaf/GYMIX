<template>
  <div class="about-container">
    <aside class="image-container">
      <div class="image-wrapper">
        <img src="/images/tradmill.png" alt="tradmill" />
      </div>
    </aside>
    <aside class="about-title">
      <div class="title-wrapper">
        <img src="/images/title-bg-primary.png" alt="bg" />
        <div>
          <h2>Who we are</h2>
        </div>
      </div>
      <div class="about-info-container">
        <h4>Take Your Health And Body To Next Level</h4>
        <p>
          Take your health and body to the next level with our comprehensive
          program designed to help you reach your fitness goals.
        </p>
        <section class="icon-container">
          <article>
            <img src="/icons/workout.png" alt="workout" />
            <p>Professional Trainers</p>
          </article>
          <article>
            <img src="/icons/dumbbells.png" alt="dumbbells" />
            <p>Modern Equipments</p>
          </article>
          <article>
            <img src="/icons/machine.png" alt="workout" />
            <p>Fancy GYM Machines</p>
          </article>
        </section>
        <div class="btn-wrapper">
          <NuxtLink to="/classes" class="classes-btn">
            <p>Take a Tour</p>
            <i class="fa-solid fa-arrow-right"></i>
          </NuxtLink>
          <span class="btn-border"></span>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup></script>

<style scoped>
.about-container {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 120px 0;
  background-color: rgb(34, 34, 34);
  margin: 40px auto;
}
aside {
  display: flex;
  width: 50%;
}
.image-container {
  justify-content: center;
}
.image-wrapper {
  display: flex;
  justify-content: center;
  width: 70%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  overflow: hidden;
}
.image-wrapper img {
  width: 100%;
  height: auto;
}
.about-title {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.title-wrapper {
  justify-content: center;
  position: relative;
  width: 25%;
  height: fit-content;
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
.about-info-container {
  display: flex;
  flex-direction: column;
  width: 90%;
}
.about-info-container h4 {
  color: var(--text-color);
  font-size: 28px;
  padding: 20px 0;
  letter-spacing: 2px;
}
.about-info-container p {
  color: var(--description-color);
  font-size: 14px;
  padding: 20px 0;
  letter-spacing: 2px;
}
.icon-container {
  display: flex;
  width: 100%;
  justify-content: space-around;
}
.icon-container article {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
}
.icon-container article img {
  width: 40%;
}
.icon-container article p {
  color: var(--text-color);
  font-size: 14px;
  padding: 5px 0;
  letter-spacing: 2px;
  text-align: center;
}
.btn-wrapper {
  position: relative;
  width: fit-content;
}
.classes-btn {
  display: flex;
  align-items: center;
  background: var(--text-color);
  width: 100%;
  border: none;
  margin-top: 40px;
  position: relative;
  z-index: 2;
  padding: 0 20px;
  cursor: pointer;
}
.classes-btn p {
  color: rgb(34, 34, 34);
  text-transform: uppercase;
  font-weight: 400;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 0;
}
.classes-btn i {
  color: rgb(34, 34, 34);
}
.classes-btn::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(15px, -15px);
  width: 99%;
  height: 98%;
  z-index: -1;
  border: 1px solid var(--text-color);
  transition: transform 0.5s ease;
}
.classes-btn:hover {
  background: var(--primary-color);
}
.classes-btn:hover p,
.classes-btn:hover i {
  color: var(--text-color);
}
.classes-btn:hover::after {
  border: 1px solid var(--primary-color);
  transition: transform 0.5s ease;
  transform: translate(0);
}
.classes-btn i {
  padding-left: 10px;
}
</style>
