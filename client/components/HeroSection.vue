<template>
  <div class="hero-container">
    <div class="hero-wrapper">
      <aside class="slogan-container">
        <div class="slogan-tag">
          <img src="/images/title-bg.png" alt="tag" />
          <div class="slogan-title">
            <h3>get healthy body</h3>
          </div>
        </div>
        <div class="slogan-desc">
          <h2 class="font-bold">FIND YOUR ENERGY</h2>
          <h2 class="font-normal">MAKE YOUR BODY</h2>
          <h2 class="font-thin">FIT & PERFECT</h2>
        </div>
        <div class="btn-wrapper">
          <button class="classes-btn">
            <NuxtLink to="/classes">
              Our classes <i class="fa-solid fa-arrow-right"></i>
            </NuxtLink>
          </button>
          <span class="btn-border"></span>
        </div>
      </aside>
      <aside class="hero-share">
        <h2>SHARE</h2>
        <span></span>
        <div class="hero-social">
          <i class="fa-brands fa-linkedin-in"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook-f"></i>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.hero-container {
  display: flex;
  background-image: url("/images/hero.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 80vh;
  position: relative;
}
.hero-wrapper {
  display: flex;
  position: absolute;
  width: 45%;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.slogan-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 100%;
}
.slogan-tag {
  width: 60%;
  height: fit-content;
  display: flex;
  position: relative;
  margin-bottom: 20px;
}
.slogan-tag img {
  width: 100%;
  height: auto;
}
.slogan-title {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 10;
  margin: 0;
}
h3 {
  color: var(--slogan-color);
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
}
.slogan-desc {
  display: flex;
  flex-direction: column;
}
h2 {
  color: var(--text-color);
  font-size: 42px;
  text-transform: uppercase;
}
.font-bold {
  font-weight: 900;
}
.font-normal {
  font-weight: 400;
}
.font-thin {
  font-weight: 200;
}
.btn-wrapper {
  position: relative;
}
.classes-btn {
  background: var(--primary-color);
  border: none;
  text-transform: uppercase;
  padding: 15px 20px;
  margin-top: 60px;
  font-weight: 400;
  position: relative;
  z-index: 2;
  cursor: pointer;
}
.classes-btn a {
  color: white;
  font-size: 18px;
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
  border: 1px solid var(--primary-color);
  transition: transform 0.5s ease;
}
.classes-btn:hover::after {
  transform: translate(0);
}
.classes-btn i {
  padding-left: 10px;
}
.hero-share {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 40px;
  margin-top: 30px;
}
.share-wrapper {
  width: fit-content;
  height: fit-content;
}
.hero-share h2 {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
  transform: rotate(-90deg);
}
.hero-share span {
  width: 2px;
  height: 50px;
  background-color: var(--primary-color);
  margin-top: 40px;
}
.hero-social {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
.hero-social i {
  color: white;
  font-size: 18px;
  padding: 8px 0;
  cursor: pointer;
}
.hero-social i:hover {
  color: var(--primary-color);
}
</style>
