<template>
  <header>
    <nav>
      <Logo background="header" />
      <div class="routes">
        <ul>
          <li>
            <NuxtLink to="/" @click="scrollToTop">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" @click="scrollToTop">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/gallery" @click="scrollToTop">Gallery</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/program" @click="scrollToTop">Program</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog" @click="scrollToTop">Blog</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/classes" @click="scrollToTop">Classes</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" @click="scrollToTop">Contact</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="btns-container">
        <button class="btn-user">
          <i class="fa-regular fa-user"></i>
        </button>
        <button class="btn-menu" @click="openSidebar">
          <i class="fa-solid fa-chart-bar"></i>
        </button>
        <button class="btn-join">
          <h3>Join class now</h3>
        </button>
      </div>
    </nav>
    <SideBar
      :show="isSidebarVisible"
      @close-sidebar="isSidebarVisible = false"
    />
  </header>
</template>

<script setup>
import { ref } from "vue";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const isSidebarVisible = ref(false);

const openSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};
</script>

<style scoped>
header {
  height: 10vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 100;
}
nav {
  display: flex;
  width: 98%;
  justify-content: space-between;
  align-items: center;
}
.routes {
  display: flex;
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
  color: var(--text-color);
  letter-spacing: 1px;
  display: block;
  text-decoration: none;
  font-size: 14px;
}
li a:hover {
  color: var(--primary-hover);
}
.routes .router-link-exact-active {
  color: var(--primary-color);
  font-size: 14px;
}
.btns-container .btn-user,
.btn-menu {
  background: none;
  border: none;
  margin-right: 20px;
}
.btns-container .btn-join {
  background: var(--primary-color);
  border-radius: 8px;
  border: none;
  padding: 15px 20px;
  margin-left: 20px;
}
.btns-container .btn-join h3 {
  font-weight: 600;
  font-size: 16px;
  color: white;
  letter-spacing: 1px;
  text-transform: uppercase;
}
i {
  color: var(--text-color);
  font-size: 20px;
}
.btns-container button {
  cursor: pointer;
}
.btns-container .btn-user:hover i {
  color: var(--primary-hover);
}
.btns-container .btn-menu:hover i {
  color: var(--primary-hover);
}
.btns-container .btn-join:hover {
  background-color: var(--primary-btn-hover);
}
</style>
