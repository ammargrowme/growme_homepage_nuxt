<template>
  <section class="main-help">
    <h2 class="to-up help-h2">How Can We Help?</h2>
        <div class="help-flex">
          <div @mouseover="showBox = true" @mouseleave="showBox = false" class="help-flex-child">
            <nuxt-img src="assets/images/image_lead-generation-1.webp"/>
            <p>Lead Generation &amp; Marketing</p>
            <Transition name="fade">
              <div class="help-hover-box" v-if="showBox">
                <NuxtLink :to="{ path: '/' }"><p>Temporary Link</p></NuxtLink>
                <NuxtLink :to="{ path: '/' }"><p>Temporary Link</p></NuxtLink>
                <NuxtLink :to="{ path: '/' }"><p>Temporary Link</p></NuxtLink>
                <NuxtLink :to="{ path: '/' }"><p>Temporary Link</p></NuxtLink>
              </div>
            </Transition>
          </div>
          <div @mouseover="showBox2 = true" @mouseleave="showBox2 = false" class="help-flex-child">
            <nuxt-img src="assets/images/image_search-engine-optimization.webp"/>
            <p>Search Engine Optimization</p>
            <Transition name="fade">
              <div class="help-hover-box" v-if="showBox2">
                <NuxtLink :to="{ path: '/' }"><p>Temporary Link</p></NuxtLink>
                <NuxtLink :to="{ path: '/' }"><p>Temporary Link</p></NuxtLink>
                <NuxtLink :to="{ path: '/' }"><p>Temporary Link</p></NuxtLink>
                <NuxtLink :to="{ path: '/' }"><p>Temporary Link</p></NuxtLink>
              </div>
            </Transition>
          </div>
          <div @mouseover="showBox3 = true" @mouseleave="showBox3 = false" class="help-flex-child">
            <nuxt-img src="assets/images/image_branding-identity-1.webp"/>
            <p>Branding &amp; Strategy</p>
            <Transition name="fade">
              <div class="help-hover-box" v-if="showBox3">
                <NuxtLink :to="{ path: '/' }"><p>Temporary Link</p></NuxtLink>
                <NuxtLink :to="{ path: '/' }"><p>Temporary Link</p></NuxtLink>
                <NuxtLink :to="{ path: '/' }"><p>Temporary Link</p></NuxtLink>
                <NuxtLink :to="{ path: '/' }"><p>Temporary Link</p></NuxtLink>
              </div>
            </Transition>
          </div>
          <div @mouseover="showBox4 = true" @mouseleave="showBox4 = false" class="help-flex-child">
            <nuxt-img src="assets/images/image_web-design-1.webp"/>
            <p>Website Design &amp; Creative</p>
            <Transition name="fade">
              <div class="help-hover-box" v-if="showBox4">
                <NuxtLink :to="{ path: '/' }"><p>Temporary Link</p></NuxtLink>
                <NuxtLink :to="{ path: '/' }"><p>Temporary Link</p></NuxtLink>
                <NuxtLink :to="{ path: '/' }"><p>Temporary Link</p></NuxtLink>
                <NuxtLink :to="{ path: '/' }"><p>Temporary Link</p></NuxtLink>
              </div>
            </Transition>
          </div>
        </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showBox: false,
      showBox2: false,
      showBox3: false,
      showBox4: false,
    };
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.help-hover-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(35,35,35,0.66);
  padding: 20px;
  width: 85%;
  height: 380px;
  position: absolute;
}

.help-hover-box a {
  text-decoration: none;
  max-width: 80%;
  margin: 5px 0px;
}

.help-hover-box p {
  font-size: 16px;
  color: #D80303;
  font-family: 'Kanit';
  font-weight: 300;
  background-color: #FFFFFF;
  padding: 5px 20px;
  border-radius: 100px;
  margin: 10px 0px;
  max-width: 80%;
  transition: 400ms;
  border: 1px solid #FFFFFF;
}

.help-hover-box p:hover {
  color: #FFFFFF;
  background-color: transparent;
}

.main-help {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.help-flex-child {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.help-flex-child img {
  max-width: 290px;
}

.help-flex-child p {
  width: 260px;
  margin-top: 0;
  line-height: 1.1em;
}

.help-flex {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  background-color: #e1e1e1;
  margin-top: 1rem;
  height: 140px;
  padding-bottom: 9rem;
}

.help-flex:nth-child(2) {
  color: #232323;
  text-align: center;
  font-family: "Noto Sans", sans-serif;
  font-size: 28px;
  font-weight: 700;
}

.help-h2 {
  font-family: "Noto Sans", sans-serif;
  font-size: 6.5em;
  font-weight: 700;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px #919191;
  text-align: center;
}
</style>