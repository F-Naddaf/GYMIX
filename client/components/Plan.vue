<template>
  <section class="plan-container">
    <div class="plan-header">
      <h3 class="title">Choose The Best Plan</h3>
      <p>
        Choose a plan that's right for your growing team. Simple pricing & No
        hidden charges.
      </p>
    </div>
    <div class="price-wrapper">
      <article v-for="card in priceCards" :key="card.id">
        <h3>{{ card.type }}</h3>
        <h1>€{{ card.amount }} <span>/ Per Month</span></h1>
        <ul>
          <li v-for="(desc, index) in card.description" :key="index">
            <img src="/icons/check.png" alt="check mark" />
            <p>{{ desc }}</p>
          </li>
        </ul>
        <NuxtLink class="plan-btn" to="/contact">Choose Plan</NuxtLink>
      </article>
    </div>
  </section>
</template>

<script setup>
const priceCards = [
  {
    id: "1",
    type: "Discover",
    amount: 99,
    description: [
      "5 classes per month",
      "4 group class monthly",
      "Online class access",
      "E-book fitness guide",
    ],
  },
  {
    id: "2",
    type: "Enterprice",
    amount: 299,
    description: [
      "10 classes per month",
      "8 group class monthly",
      "Online class access",
      "E-book fitness guide",
      "7 Extra fitness training",
    ],
  },
  {
    id: "3",
    type: "Professional",
    amount: 199,
    description: [
      "7 classes per month",
      "6 group class monthly",
      "Online class access",
      "E-book fitness guide",
    ],
  },
];
</script>

<style scoped>
.plan-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 40px 0;
  position: relative;
}
.plan-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/images/background.png");
  background-size: cover;
  opacity: 0.3;
}
.plan-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: auto;
  z-index: 10;
}
.plan-header p {
  color: var(--text-color);
}
.plan-header .title {
  color: var(--text-color);
  font-size: 40px;
  font-weight: 900;
  letter-spacing: 2px;
  margin: 40px 0;
}
.plan-header p {
  color: var(--text-color);
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 2px;
}
.price-wrapper {
  width: 70%;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  padding: 40px 0;
  background-size: cover;
  margin: auto;
  z-index: 10;
}
.price-wrapper article {
  display: flex;
  flex-direction: column;
  background-color: var(--secondary-color);
  padding: 30px 40px;
  border-radius: 20px;
  align-items: center;
}
.price-wrapper article h1,
h3,
li {
  color: white;
}
.price-wrapper h3 {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 1px;
  margin-bottom: 30px;
}
.price-wrapper h1 {
  font-size: 45px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 1px;
  margin-bottom: 30px;
}
.price-wrapper h1 span {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 1px;
  margin-bottom: 30px;
}
.price-wrapper ul li {
  display: flex;
  justify-content: flex-start;
  margin: 15px 0;
}
.price-wrapper ul li img {
  filter: brightness(0) invert(1);
  width: 20px;
  margin-right: 10px;
}
.plan-btn {
  padding: 10px 20px;
  border: 1px solid white;
  border-radius: 40px;
  margin-top: 40px;
  color: white;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
}
</style>
