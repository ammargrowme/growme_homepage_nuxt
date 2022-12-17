<template>
  <div class="cta-tex">
    <h2>Grow</h2>
    <div class="inline-tex">
      <p>Your&nbsp;</p>
      <vue-typed-js :strings="['Brand', 'Sales']" :typeSpeed="80" :loop="true" :backSpeed="60" :backDelay="1200"><span class="typing"></span></vue-typed-js>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.inline-tex {
  display: flex;
  flex-flow: row wrap;
  margin: -5rem 0 0 1rem;
  color: #FFFFFF;
  font-size: 90px;
  text-transform: uppercase;
  font-weight: 700;
  text-shadow: 1px 1px 2px #000000;
}

.cta-tex {
  font-family: 'Montserrat', sans-serif;
  margin-left: 2rem;
}

.cta-tex h2 {
  margin: 0px;
  color: #e92226;
  font-size: 200px;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 10px;
}

@media only screen and (max-width: 1024px) {
  .inline-tex {
    font-size: 40px;
    text-align: center;
    margin-left: 0px;
  }
  .cta-tex h2 {
    font-size: 95px;
    margin: 2rem 0px;
    text-align: center;
    letter-spacing: 3px;
  }
  .cta-tex {
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>