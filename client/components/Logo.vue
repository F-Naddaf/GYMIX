<template>
  <div class="logo-container">
    <NuxtLink to="/" @click="scrollToTop" class="logo-wrapper"
      ><img class="logo" src="/images/logo-1.png" alt="logo" />
      <div class="heart-container">
        <div class="heart-rate">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="30px"
            height="20px"
            viewBox="0 0 38.469 21.386"
            enable-background="new 0 0 38.469 21.386"
            xml:space="preserve"
          >
            <path
              fill="#ff2332"
              d="M20.417,0c-1.443,4.371-2.67,8.093-4.115,12.469c-1.399-3.258-2.489-5.801-3.85-8.973
      c-0.707,1.914-1.261,3.412-1.778,4.806c0,0-0.668,0-1.115,0H0v5.591h9.559c0.85-0.046,1.318-1.742,1.764-2.197
      c0.516-0.521,0.87-0.743,1.129-0.743c0.389,0,0.577,0.491,0.799,1.21c0.866,2.793,2.898,8.835,2.984,8.835
      c0.091,0,2.779-7.473,4.186-11.646c0.603,1.878,1.158,3.612,1.7,5.295c0.724,2.262,1.422,4.433,2.16,6.739
      c0.428-0.816,1.243-6.017,3.454-7.493h10.733V8.302H27.735c-0.787,0.053-2.652,3.129-3.654,3.276
      c-0.643-2.033-1.287-4.061-1.96-6.195C21.581,3.678,21.019,1.906,20.417,0L20.417,0z"
            />
          </svg>
          <div
            :class="background === 'header' ? 'fade-in' : 'fade-in-footer'"
          ></div>
          <div
            :class="background === 'header' ? 'fade-out' : 'fade-out-footer'"
          ></div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  background: String,
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style scoped>
.logo-container {
  width: 18%;
}
.logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
}
img {
  height: 70px;
  z-index: 10;
}
.heart-container {
  position: absolute;
  top: 31px;
  left: 21px;
}
.heart-rate {
  position: relative;
  overflow: hidden;
}
.fade-in {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  top: 0;
  right: 0;
  animation: heartRateIn 2.5s linear infinite;
}
.fade-in-footer {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  top: 0;
  right: 0;
  animation: heartRateIn 2.5s linear infinite;
}
.fade-out {
  position: absolute;
  width: 110%;
  height: 100%;
  background: rgba(0, 0, 0, 1);
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0) 100%
  );
  top: 0;
  right: -110%;
  animation: heartRateOut 2.5s linear infinite;
}
.fade-out-footer {
  position: absolute;
  width: 110%;
  height: 100%;
  background: rgba(0, 0, 0, 1);
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0) 100%
  );
  top: 0;
  right: -110%;
  animation: heartRateOut 2.5s linear infinite;
}
@keyframes heartRateIn {
  0% {
    width: 100%;
  }
  50% {
    width: 0;
  }
  100% {
    width: 0;
  }
}
@keyframes heartRateOut {
  0% {
    left: -110%;
  }
  30% {
    left: -110;
  }
  100% {
    left: 0;
  }
}
@media screen and (min-width: 390px) and (max-width: 500px) {
  .logo-container {
    width: 15%;
  }
  img {
    height: 50px;
    z-index: 10;
  }
  .heart-container {
    top: 20px;
    left: 16px;
  }
  .heart-container svg {
    width: 20px;
    height: 12px;
  }
}
</style>
