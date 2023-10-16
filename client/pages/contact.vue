<template>
  <div>
    <PagesHero :title="title" />
    <main>
      <section class="contact-wrapper">
        <div class="contact-details">
          <h3>We are here for help you! To Shape Your Body.</h3>
          <p>
            At Gymate, we are dedicated to helping you achieve the body of your
            dreams. Our expert trainers and nutritionists will work with you to
            create a personalized fitness and nutrition plan that helps you
            reach your specific goals.
          </p>
          <div class="contact-info">
            <div class="div">
              <h4>New York City, USA</h4>
              <div class="underline"></div>
              <p>85 Briston Mint Street, London, E1 8LG, USA</p>
            </div>
            <div class="div">
              <h4>Opening Hours</h4>
              <div class="underline"></div>
              <p>Mon to Sun: 08:30 am — 08:00 pm</p>
              <p>Mon to Sun: 08:30 am — 08:00 pm</p>
            </div>
            <div class="div">
              <h4>Information</h4>
              <div class="underline"></div>
              <p>Phone: +31 684 744 280</p>
              <p>Email: fady-naddaf@hotmail.com</p>
            </div>
            <div class="div">
              <h4>Follow Us On</h4>
              <div class="underline"></div>
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
            </div>
          </div>
        </div>
        <form class="user-info-form">
          <div class="title">
            <h3>Leave Us Your Info</h3>
          </div>
          <input placeholder="Full Name*" type="text" required />
          <input placeholder="Email Address*" type="email" required />
          <select>
            <option>Select Class*</option>
            <option>Body Building</option>
            <option>Boxing</option>
            <option>Running</option>
            <option>Power Lifting</option>
            <option>Fitness</option>
            <option>Yoga</option>
            <option>Workout</option>
            <option>Katate</option>
            <option>Meditation</option>
            <option>Cycling</option>
            <option>Crossfit</option>
          </select>
          <textarea placeholder="Comment" rows="8"></textarea>
          <button class="submit-btn">Submit</button>
        </form>
      </section>
      <section class="google-map"></section>
    </main>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus velit
      mollitia harum quasi cupiditate atque reprehenderit sit! Ut, vitae porro.
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const title = ref("Contact Us");
</script>

<style scoped>
main {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 80px 0;
}
.contact-wrapper {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
}
.contact-details {
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 45%;
}
.contact-details h3 {
  font-size: 36px;
  margin-bottom: 20px;
  color: var(--text-color);
  text-align: justify;
}
p {
  font-size: 14px;
  color: var(--description-color);
  line-height: 20px;
  text-align: justify;
}
.contact-details p {
  margin: 20px 0;
}
.contact-info h4 {
  font-size: 18px;
  color: var(--text-color);
  font-weight: 700;
}
.contact-info .underline {
  width: 30px;
  height: 2px;
  background: var(--primary-color);
  margin: 4px 0 10px 0;
}
.contact-info p {
  margin: 0;
}
.contact-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 40px;
  height: auto;
  justify-content: space-between;
}
.contact-info .div {
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
}
.social-media {
  display: flex;
  justify-content: space-between;
  width: 80%;
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
.user-info-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  width: 45%;
  background: rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-color: rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.7) 0px 3px 8px;
}
.user-info-form .title {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.user-info-form h3 {
  font-size: 36px;
  color: var(--primary-color);
  text-align: justify;
}
.user-info-form input,
select,
textarea,
button {
  padding: 5px 10px;
  margin: 10px 0;
}
.submit-btn {
  border: none;
  background: var(--primary-color);
  color: white;
  font-size: 18px;
  font-weight: 800;
  text-transform: uppercase;
}
</style>
