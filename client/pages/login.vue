<template>
  <div class="login-container">
    <div class="wrapper">
      <div class="header">
        <h2>Login</h2>
      </div>
      <form>
        <input placeholder="E-mail" type="email" required />
        <input placeholder="Password" type="password" required />
        <div class="message">
          <p>You don't have an account?</p>
          <NuxtLink to="/register">Register</NuxtLink>
        </div>
        <div class="btn-container">
          <NuxtLink to="/" class="login-btn">Login</NuxtLink>
          <NuxtLink to="/" class="back-btn">Back</NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});
</script>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 100vh;
}
.login-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(/_nuxt/images/background.png);
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.3;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 420px;
  height: auto;
  margin: auto;
  padding: 40px 20px;
  border-radius: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-color: rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.7) 0px 3px 8px;
  z-index: 20;
}
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.header h2 {
  color: var(--primary-color);
  font-size: 28px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
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
.login-btn,
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
.login-btn {
  color: white;
  background: var(--primary-color);
  border: none;
  margin-bottom: 10px;
}
.back-btn {
  color: var(--primary-color);
  background: none;
  border: 1px solid var(--primary-color);
}
.login-btn:hover,
.back-btn:hover {
  transform: scale(0.95);
}
</style>
