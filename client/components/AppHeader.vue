<template>
  <header :data-shadow="isJoinButtonHovered">
    <nav>
      <Logo background="header" />
      <div v-if="isMobile">
        <button @click="showDropDown" class="menu-btn">
          <i v-if="!isDropdownVisible" class="fa-solid fa-bars"></i>
          <i v-else class="fa-solid fa-xmark"></i>
        </button>
        <div
          :class="{
            'drop-menu': !isDropdownVisible,
            active: isDropdownVisible,
          }"
        >
          <ul>
            <li v-for="menuItem in menuItems" :key="menuItem.id">
              <NuxtLink :to="menuItem.link" @click="scrollToTop">{{
                menuItem.label
              }}</NuxtLink>
            </li>
          </ul>
          <div class="join-container">
            <button
              class="btn-join"
              @mouseover="isJoinButtonHovered = true"
              @mouseout="isJoinButtonHovered = false"
            >
              <NuxtLink to="/login">
                <h3>Join class now</h3>
              </NuxtLink>
            </button>
          </div>
        </div>
      </div>
      <div v-if="!isMobile" class="routes">
        <ul>
          <li v-for="menuItem in menuItems" :key="menuItem.id">
            <NuxtLink :to="menuItem.link" @click="scrollToTop">{{
              menuItem.label
            }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div v-if="!isMobile" class="btns-container">
        <button class="btn-user">
          <NuxtLink to="/login">
            <i class="fa-regular fa-user"></i>
          </NuxtLink>
        </button>
        <button class="btn-menu" @click="openSidebar">
          <i class="fa-solid fa-chart-bar"></i>
        </button>
        <button
          class="btn-join"
          @mouseover="isJoinButtonHovered = true"
          @mouseout="isJoinButtonHovered = false"
        >
          <NuxtLink to="/login">
            <h3>Join class now</h3>
          </NuxtLink>
        </button>
      </div>
    </nav>
    <div v-if="isMobile" class="mobile-btns-container">
      <button class="btn-user">
        <NuxtLink to="/login">
          <i class="fa-regular fa-user"></i>
        </NuxtLink>
      </button>
      <button class="btn-menu" @click="openSidebar">
        <i class="fa-solid fa-chart-bar"></i>
      </button>
    </div>
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

const menuItems = [
  { id: 1, link: "/", label: "Home" },
  { id: 2, link: "/about", label: "About" },
  { id: 3, link: "/gallery", label: "Gallery" },
  { id: 4, link: "/programs", label: "Programs" },
  { id: 5, link: "/blog", label: "Blog" },
  { id: 6, link: "/classes", label: "Classes" },
  { id: 7, link: "/contact", label: "Contact" },
];

const isSidebarVisible = ref(false);
const isJoinButtonHovered = ref(false);
const isDropdownVisible = ref(false);
const isMobile = ref(false);

const openSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};

const showDropDown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};

if (typeof window !== "undefined") {
  if (window.innerWidth <= 1024) {
    isMobile.value = true;
  }
}
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
  box-shadow: 0px 0px 10px var(--primary-color);
  position: relative;
}
nav {
  display: flex;
  width: 98%;
  justify-content: space-between;
  align-items: center;
}
.menu-btn {
  background: none;
  border: none;
  cursor: pointer;
}
.fa-bars,
.fa-xmark {
  color: white;
  margin-right: 20px;
  font-size: 22px;
}
.drop-menu {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 10vh;
  right: 0;
  width: 30%;
  padding: 0;
  height: 0;
  background: #4f5155;
  overflow: hidden;
  transition: height 1s ease-in-out;
  z-index: 1;
}
.active {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 10vh;
  right: 0;
  width: 30%;
  padding: 0;
  height: 450px;
  background: #4f5155;
  overflow: hidden;
  transition: height 1s ease-in-out;
}
.active ul,
.drop-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
}
.active ul li {
  width: 100%;
}
.active ul li a,
.drop-menu ul li a {
  display: flex;
  justify-content: center;
  color: var(--text-color);
  font-size: 14px;
  text-decoration: none;
  padding: 5px 0;
  transition: color 0.2s;
  width: 100%;
}
.active .join-container,
.drop-menu .join-container {
  margin-top: 40px;
}
.active ul li:hover {
  color: white;

  background: var(--primary-color);
}
.active ul li:hover a {
  font-weight: 700;
  font-size: 16px;
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
.mobile-btns-container {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-100px, -50%);
}
.btn-user,
.btn-menu {
  background: none;
  border: none;
  margin-right: 20px;
}
.join-container {
  margin-top: 0;
}
.btn-join {
  background: var(--primary-color);
  border-radius: 8px;
  border: none;
  padding: 15px 20px;
  margin-left: 20px;
}
.btn-join h3 {
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
.mobile-btns-container button,
.btn-container button {
  cursor: pointer;
}
.btn-user:hover i {
  color: var(--primary-hover);
}
.btn-menu:hover i {
  color: var(--primary-hover);
}
.btn-join:hover {
  background-color: var(--secondary-color);
}
header[data-shadow="true"] {
  box-shadow: 0px 0px 10px var(--secondary-color);
}
</style>
