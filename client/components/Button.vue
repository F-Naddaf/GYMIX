<template>
  <div class="btn-wrapper" :color="color">
    <NuxtLink
      :to="to"
      :class="
        color === 'white'
          ? 'white-btn'
          : color === 'primary'
          ? 'primary-btn'
          : 'default-btn'
      "
      class="btn"
    >
      <p>{{ buttonText }}</p>
      <i class="fa-solid fa-arrow-right"></i>
    </NuxtLink>
    <span class="btn-border"></span>
  </div>
</template>

<script setup>
const props = defineProps({
  to: String,
  buttonText: String,
  color: String,
});
</script>

<style scoped>
.btn-wrapper {
  position: relative;
  width: fit-content;
}
.white-btn {
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
.white-btn::after {
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
.white-btn p {
  color: rgb(34, 34, 34);
  text-transform: uppercase;
  font-weight: 400;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 0;
}
.white-btn i {
  color: rgb(34, 34, 34);
  padding-left: 10px;
}
.btn:hover {
  background: var(--primary-color);
}
.btn:hover p,
.btn:hover i {
  color: var(--text-color);
}
.white-btn:hover::after {
  border: 1px solid var(--primary-color);
  transition: transform 0.5s ease;
  transform: translate(0);
}

/* primary */
.primary-btn {
  display: flex;
  width: 100%;
  align-items: center;
  background: var(--primary-color);
  border: none;
  text-transform: uppercase;
  padding: 0 20px;
  margin-top: 50px;
  font-weight: 400;
  position: relative;
  z-index: 2;
  cursor: pointer;
}
.primary-btn::after {
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
.primary-btn:hover::after {
  border: 1px solid var(--primary-color);
  transition: transform 0.5s ease;
  transform: translate(0);
}
.primary-btn p {
  color: var(--text-color);
  text-transform: uppercase;
  font-weight: 400;
  font-size: 20px;
  font-weight: 600;
  padding: 15px 0;
}
.primary-btn i {
  color: var(--text-color);
  padding-left: 10px;
}

/* default */

.default-btn {
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
.default-btn p {
  color: rgb(34, 34, 34);
  text-transform: uppercase;
  font-weight: 400;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 0;
}
.default-btn i {
  color: rgb(34, 34, 34);
}
.default-btn::after {
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
.default-btn:hover {
  background: var(--text-color);
}
.default-btn:hover p,
.default-btn:hover i {
  color: rgb(34, 34, 34);
}
.default-btn:hover::after {
  border: 1px solid var(--text-color);
  transition: transform 0.5s ease;
  transform: translate(0);
}
.default-btn i {
  padding-left: 10px;
}
</style>
