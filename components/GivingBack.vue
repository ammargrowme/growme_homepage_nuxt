<template>
  <div class="give-back-bg">
    <div class="give-back-flex">
      <div class="give-left">
        <h3>Giving Back with</h3>
        <nuxt-img src="assets/images/growmentor-small-letters-dark.webp" width="280" height="80"/>
      </div>
      <div class="give-right">
        <p class="give-p">When you partner with GrowME for your marketing and website needs, you're helping youth achieve their dreams.</p>
        <p class="give-p">Led by GrowME CEO, GrowMEntor is a course designed to help youth realize and achieve their full potential.</p>
        <NuxtLink :to="{ path: '/' }" class="con-btn-md"><p>Learn More</p></NuxtLink>
      </div>
    </div>
    <div class="btm-slider">
      <p class="giving-btm">GrowME is a proud sponsor of community, youth, and educational programs</p>
      <div class="give-img">
        <nuxt-img src="assets/giveback/calgary-board_logos.webp" width="150" height="150"/>
        <nuxt-img src="assets/giveback/empowering-minds_logos.webp" width="150" height="150"/>
        <nuxt-img src="assets/giveback/haskayne_logos.webp" width="150" height="150"/>
        <nuxt-img src="assets/giveback/jci_logos.webp" width="150" height="150"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.give-left {
  max-width: 300px;
  margin: 0px;
}

.give-left h3 {
  margin: 0px;
  width: 100%;
}

.give-back-bg {
  background-image: url('/assets/images/give-back-bg.webp');
  max-width: 1100px;
  margin: 4rem auto;
  border: 20px solid #ce241e;
  background-position: center right;
  background-repeat: no-repeat;
  background-size: cover;
}

.give-back-flex {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 3rem;
}

.give-back-flex h3 {
  color: #000000;
  font-family: "Noto Sans",Sans-serif;
  font-size: 60px;
  font-weight: 600;
  line-height: 1.1em;
  margin: 0px;
}

.give-p {
  color: #232323;
  font-family: "Noto Sans",Sans-serif;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.4em;
  text-align: center;
}

.give-right {
  max-width: 500px;
  margin: 2rem 0;
}

.giving-btm {
  color: #ce241e;
  font-family: "Noto Sans",Sans-serif;
  font-size: 25px;
  font-weight: 700;
  line-height: 1.4em;
  max-width: 350px;
}
.give-img {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
}
.btm-slider {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
  background-color: #FFFFFF;
  padding: 0px 2rem;
}

.give-img img {
  margin: 10px;
  width: 130px;
  height: 130px;
}

@media only screen and (max-width: 1024px) {
  .giving-btm {
    text-align: center;
    font-size: 20px;
  }
  .give-back-flex {
    justify-content: center;
    align-items: center;
  }
  .give-left h3 {
    font-size: 40px;
    text-align: center;
    margin-top: 1rem;
  }
  .give-p {
    font-size: 18px;
  }
  .give-left img {
    width: 200px;
    height: 60px;
    padding: 1rem;
  }
  .give-left {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 100%;
  }
  .give-right {
    margin-top: 0px;
  }
}
</style>