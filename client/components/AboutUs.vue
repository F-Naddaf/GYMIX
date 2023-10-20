<template>
  <section :class="containerClass" ref="aboutContainer">
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
            <img src="/icons/workout-icon.png" alt="workout" />
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
        <Button to="/about" buttonText="Take a Tour" :color="color" />
      </div>
    </aside>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const color = "white";
const aboutContainer = ref(null);
const isScrollAtPosition = ref(false);
const route = useRoute();

const checkScrollPosition = () => {
  if (typeof window !== "undefined") {
    const scrollPosition = window.scrollY;
    const container = aboutContainer.value;
    const windowHeight = window.innerHeight;

    if (container) {
      if (scrollPosition >= windowHeight * 0.6) {
        isScrollAtPosition.value = true;
        container.classList.add("slide-in");
      } else {
        isScrollAtPosition.value = false;
        container.classList.remove("slide-in");
      }
    }
  }
};

const containerClass = computed(() => {
  return route.path === "/" ? "home-about-container" : "about-container";
});

onMounted(() => {
  if (route.path === "/") {
    window.addEventListener("scroll", checkScrollPosition);
    checkScrollPosition();
  } else {
    window.removeEventListener("scroll", checkScrollPosition);
  }
});
</script>

<style scoped>
.home-about-container {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 120px 0;
  background-color: rgb(34, 34, 34);
  background-image: linear-gradient(
    to right,
    #141414,
    #202020,
    #4b4b4b,
    #202020,
    #141414
  );
  box-shadow: rgba(0, 0, 0, 0.5) 0px -5px 16px, rgba(0, 0, 0, 0.5) 0px 5px 16px;
  margin: auto;
  position: relative;
  overflow: hidden;
  transform: perspective(100px) translateZ(-35px);
  opacity: 0;
  transition: opacity 1s, transform 1s;
}
.about-container {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 120px 0;
  background-color: rgb(34, 34, 34);
  background-image: linear-gradient(
    to right,
    #141414,
    #202020,
    #4b4b4b,
    #202020,
    #141414
  );
  box-shadow: rgba(0, 0, 0, 0.5) 0px -5px 16px, rgba(0, 0, 0, 0.5) 0px 5px 16px;
  margin: auto;
  position: relative;
  overflow: hidden;
}
.slide-in {
  transform: perspective(200px) translateZ(0);
  opacity: 1;
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

@media screen and (min-width: 940px) and (max-width: 1200px) {
  .image-wrapper {
    width: 80%;
  }
  .title-wrapper {
    width: 35%;
  }
}

@media screen and (min-width: 768px) and (max-width: 940px) {
  .image-wrapper {
    width: 80%;
  }
  .title-wrapper {
    width: 40%;
  }
}
@media screen and (min-width: 500px) and (max-width: 768px) {
  .home-about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0;
  }
  aside {
    width: 90%;
  }
  .about-title {
    margin-top: 40px;
    align-items: center;
  }
  .title-wrapper {
    width: 40%;
  }
  .about-info-container {
    padding: 0 10px;
    align-items: center;
  }
  .about-info-container h4 {
    font-size: 22px;
    text-align: center;
  }
  .about-info-container p {
    font-size: 14px;
    text-align: center;
  }
  .icon-container article p {
    font-size: 12px;
    letter-spacing: 1px;
  }
}

@media screen and (min-width: 390px) and (max-width: 500px) {
  .home-about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0;
  }
  aside {
    width: 90%;
  }
  .about-title {
    margin-top: 40px;
    align-items: center;
  }
  .title-wrapper {
    width: 40%;
  }
  .about-info-container {
    padding: 0 10px;
    align-items: center;
  }
  .about-info-container h4 {
    font-size: 22px;
    text-align: center;
  }
  .about-info-container p {
    font-size: 14px;
    text-align: center;
  }
  .icon-container article p {
    font-size: 12px;
    letter-spacing: 1px;
  }
}
</style>
