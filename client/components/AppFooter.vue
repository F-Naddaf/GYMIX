<template>
  <footer class="footer-container">
    <aside class="logo-content">
      <Logo background="footer" />
      <p>
        Take your health and body to the next level with our comprehensive
        program designed to help you reach your fitness goals.
      </p>
      <div class="social-media">
        <div>
          <i class="fa-brands fa-facebook-f"></i>
        </div>
        <div>
          <i class="fa-brands fa-x-twitter"></i>
        </div>
        <div>
          <i class="fa-brands fa-pinterest"></i>
        </div>
        <div>
          <i class="fa-brands fa-youtube"></i>
        </div>
      </div>
      <div class="policy">
        <p>Privacy Policy | © 2023 Gymix</p>
        <p>Design by RadiusTheme</p>
      </div>
    </aside>
    <aside class="classes-container">
      <div class="title">
        <h3>Our Classes</h3>
        <span class="underline"></span>
      </div>
      <NuxtLink to="classes">Fitness Classes</NuxtLink>
      <NuxtLink to="classes">Aerobics Classes</NuxtLink>
      <NuxtLink to="classes">Power Yoga</NuxtLink>
      <NuxtLink to="classes">Learn Machines</NuxtLink>
      <NuxtLink to="classes">Full-body Strength</NuxtLink>
    </aside>
    <aside class="timing-container">
      <div class="title">
        <h3>Working Hours</h3>
        <span class="underline"></span>
      </div>
      <h4>Monday - Friday:</h4>
      <p>7:00am - 21:00pm</p>
      <h4>Saturday:</h4>
      <p>7:00am - 19:00pm</p>
      <h4>Sunday - Closed</h4>
    </aside>
  </footer>
</template>

<script setup></script>

<style scoped>
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  width: 100%;
  height: 420px;
  margin: auto;
  background: black;
  box-shadow: 0px 0px 10px var(--primary-color);
}
aside {
  width: 30%;
  margin: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.logo-content p {
  color: var(--text-color);
  padding: 30px 0;
  font-size: 14px;
  text-align: justify;
  line-height: 20px;
}
.social-media {
  display: flex;
  justify-content: space-between;
  width: 50%;
}
.social-media > div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: #b3b3b3;
  border-radius: 20px;
  cursor: pointer;
}
.social-media > div i {
  font-size: 18px;
  color: var(--slogan-color);
}
.social-media > div:hover {
  background: var(--primary-color);
}
.social-media > div:hover i {
  color: var(--text-color);
}
.policy {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
}
.policy p {
  padding: 0;
}
.classes-container {
  justify-content: space-between;
  align-items: center;
}
.title {
  display: flex;
  flex-direction: column;
}
.title h3 {
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 1px;
  color: var(--text-color);
}
.title span {
  width: 60px;
  height: 4px;
  background: var(--primary-color);
  margin-bottom: 30px;
}
.classes-container a {
  color: var(--text-color);
  opacity: 0.8;
  padding: 10px 0;
}
.classes-container a:hover {
  color: var(--primary-color);
  transform: scale(1.05);
  font-weight: 800;
  opacity: 1;
}
.timing-container {
  justify-content: space-between;
  align-items: center;
}
.timing-container h4 {
  color: var(--text-color);
  font-size: 18px;
  opacity: 0.8;
  padding: 10px 0;
  font-weight: 800;
}
.timing-container p {
  color: var(--text-color);
  opacity: 0.8;
  padding: 10px 0;
}
</style>
