<template>
  <div>
    <header>
      <nav>
        <div class="logo-container">
          <NuxtLink to="/"
            ><img class="logo" src="../public/images/logo.png" alt="logo"
          /></NuxtLink>
        </div>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/gallery">Gallery</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/program">Program</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog">Blog</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/classes">Classes</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
header {
  height: 10vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}
nav {
  display: flex;
  width: 95%;
  justify-content: space-between;
}
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: fit-content;
}
.logo {
  height: 90%;
}
ul {
  list-style: none;
  display: flex;
  align-items: center;
}
li {
  display: block;
  padding: 10px;
}
li a {
  font-family: sans-serif;
  color: #bdbdbd;
  color: rgb(243, 243, 243);
  font-weight: 100;
  text-decoration: none;
}
.router-link-exact-active {
  color: #ff2332;
}
</style>
