<template>
    <div class="our-clients">
      <h3>Our Clients</h3>
      <p class="client-p">We develop lasting partnerships with top brands and businesses who share our values and want results. Those we partner with commend us for the personalized approach and attentive devotion they receive from our team.</p>
      <div class="client-img">
        <nuxt-img src="assets/images/redline-real-estate_logos-150x150-1.webp" />
        <nuxt-img src="assets/images/calgaryppf_logos-150x150-1.webp" />
        <nuxt-img src="assets/images/ruthschris_logos-150x150-1.webp" />
        <nuxt-img src="assets/images/supreme-security_logos-150x150-2.webp" />
        <nuxt-img src="assets/images/windowsealwest_logos-150x150-1.webp" />
        <nuxt-img src="assets/images/unison_logos-150x150-1.webp" />
        <nuxt-img src="assets/images/our-clients-lakeview-insurance-150x150-1.webp" />
        <nuxt-img src="assets/images/our-clients-calitso-150x150-1.webp" />
        <nuxt-img src="assets/images/horizon_logos-150x150-1.webp" />
        <nuxt-img src="assets/images/our-clients-airdrie-confidental-150x150-1.webp" />
        <nuxt-img src="assets/images/our-client-pharmasave-150x150-1.webp" />
        <nuxt-img src="assets/images/cdn_logos-01-150x150-1.webp" />
        <nuxt-img src="assets/images/our-clients-cangas-150x150-1.webp" />
        <nuxt-img src="assets/images/our-clients-picknpull-150x150-1.webp" />
        <nuxt-img src="assets/images/our-clients-ultimate-renovations-150x150-1.webp" />
        <nuxt-img src="assets/images/our-clients-hubbard-exteriors-150x150-1.webp" />
        <nuxt-img src="assets/images/our-clients-xact-150x150-1.webp" />
        <nuxt-img src="assets/images/our-clients-tf-energy-solutions-150x150-1.webp" />
      </div>
      <div class="industry-blurb">
        <div>
          <fa icon="building-columns" />
          <p>Commerce</p>
        </div>
        <div>
          <fa icon="location-dot" />
          <p>Real Estate</p>
        </div>
        <div>
          <fa icon="gear" />
          <p>Trades</p>
        </div>
        <div>
          <fa icon="money-bill-1" />
          <p>Finance</p>
        </div>
        <div>
          <fa icon="graduation-cap" />
          <p>Education</p>
        </div>
        <div>
          <fa icon="lightbulb" />
          <p>Energy</p>
        </div>
    </div>
  </div>
</template>

<style scoped>
.industry-blurb p {
  margin: 5px 0px 0px 0px;
  padding: 0px;
  color: #FFFFFF;
  font-family: "Open Sans", Sans-serif;
  font-size: 17px;
  font-weight: 400;
}

.industry-blurb path {
  fill: #FFFFFF;
}

.industry-blurb div {
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.industry-blurb {
  display: flex;
  flex-flow: row nowrap;
  background-color: #232323;
  border-radius: 15px;
  margin: 1.5rem;
  width: 1190px;
}

.client-img {
  max-width: 1190px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.client-img img {
  margin: 0px 20px;
}

.our-clients {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  background-image: linear-gradient(0deg, rgba(215, 227, 230, 0.9), rgba(215, 227, 230, 0.9)), url("/assets/images/image_logo-designer-1.webp");
  background-repeat: no-repeat;
  background-size: cover;

}
.our-clients h3 {
  text-align: center;
  color: #ce241e;
  font-family: "Noto Sans", sans-serif;
  font-size: 40px;
  font-weight: 700;
  margin: 3rem 0 0 0;
}

.client-p {
  width: 600px;
  text-align: center;
  color: #232323;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8em;
}

@media only screen and (max-width: 1024px) {
  .client-p {
    max-width: 95%;
  }
  .our-clients {
    margin-top: 0px;
  }
  .industry-blurb {
    max-width: 95%;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
  }
  .industry-blurb div {
    max-width: 40%;
  }
}

</style>