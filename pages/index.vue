<template>
<div>
  <Navigation/>
  <main>
    <div class="cta">
      <Typed/>
    </div>
    <section class="success-hed">
      <div class="success-sec">
        <div class="block-tex-lef">
          <nuxt-img class="stairs-img" src="assets/images/image_business-stairs-1.webp" width="342" />
          <div class="success-text">
            <h3 class="success-h3">Growing Your Business Is Why We Exist</h3>
            <p class="thin-red">Our Calgary marketing agency is proof — there's a better way to grow.</p>
          </div>
          <div class="con-btn-hed">
            <NuxtLink class="con-btn-md" :to="{ path: '/contact' }"><p>Talk To The Experts</p></NuxtLink>
          </div>
          <p class="feature-text">Featured In:</p>
          <div class="feat-sec">
            <nuxt-img src="assets/images/featured-in-forbes.webp" width="163" />
            <nuxt-img src="assets/images/featured-in-haskayne.webp" width="163" />
            <nuxt-img src="assets/images/featured-in-upcity.webp" width="163" />
          </div> 
        </div>
        <div class="block-tex-rig">
          <h3 class="success-lg">Success Driven Marketing Agency</h3>
          <p>At GrowME, nothing is more important to us than ensuring your business success and overall happiness through our award-winning, industry-leading, client-focused methods.</p>
          <p>As a full-service marketing agency with experts in Calgary SEO, we love the thrill of growing our clients’ market share to be leaders in their respective industries. Our approach to digital marketing is interdisciplinary, meaning we leave no stone unturned in our efforts to take your business to the next level and grow your sales.</p>
          <p>Our fully-stacked team of in-house experts are the best at what they do, from skilled designers to talented wordsmiths to SEO brainiacs and marketing wizards led by a dedicated and imaginative group of managers. Our expertise includes high-quality website design and development, industry-leading SEO in Calgary, compelling Google and remarketing advertising services, top-notch social media management, and more.</p>
          <p>Many companies consider hiring an in-house marketing expert rather than a dedicated marketing company, but you know how the saying goes — jack of all trades, master of none. And hiring an entire in-house crew of masters falls outside the budget for most of our clients.</p>
          <p>GrowME Marketing is a top-rated, award-winning marketing agency based in Calgary, Alberta, serving clients across Canada. We are relentless about producing results that meet all of your marketing requirements for less than the cost of hiring an in-house team. Take advantage of our winning solutions in branding, advertising and website design.</p>
        </div>
      </div>
    </section>
    <section>
      <Help/>
    </section>
    <section>
      <Clients/>
    </section>
    <section>
      <div class="client-suc-container">
        <div v-for="client in clients" :key="client.id" :class="client.class">
          <NuxtLink class="con-btn-sm" :to="`${client.id}`"><p>See Case Study</p></NuxtLink>
          <div class="client-suc-text">
            <fa :icon="client.logo" />
            <p class="benefit-tex">{{ client.benefit }}</p>
            <p class="border-up">{{ client.name }} | {{ client.industry }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>
</template>

<script>
export default {
  data() {
  return {
    clients : [
      { id: 1, logo: 'arrow-pointer', name: 'Edwards Injury Law', industry: 'LEGAL', benefit: '50% of Sales Now Generated From Website Traffic', class: 'client-1 client-card' },
      { id: 2, logo: 'medal', name: 'Ultimate Renovations', industry: 'HOME RENOVATIONS', benefit: '#1 Position on Google in Less Than 12 Months!', class: 'client-2 client-card' },
      { id: 3, logo: 'earth-americas', name: 'Pick-n-Pull', industry: 'AUTOMOTIVE', benefit: 'Canada-Wide Growth', class: 'client-3 client-card' },
      { id: 4, logo: 'paintbrush', name: 'Toronto Family Hearing', industry: 'HEALTH', benefit: 'Enhanced Brand Positioning & Messaging', class: 'client-4 client-card' },
      { id: 5, logo: 'store', name: 'Unison', industry: 'REAL ESTATE', benefit: '300% Increase in Leads from Online Inquiries', class: 'client-5 client-card' },
      { id: 6, logo: 'arrow-turn-up', name: 'Prime Hair Clinic', industry: 'HEALTH', benefit: 'Unprecedented Growth Due to Online Visibility', class: 'client-6 client-card' },
    ]
    }
  }
}
</script>

<style>

.client-6 {
  background-image: url("/assets/images/portfolio_case-study_prime-hair-bg.webp");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.client-5 {
  background-image: url("/assets/images/portfolio_case-study_unison-bg.webp");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.client-4 {
  background-image: url("/assets/images/portfolio-tfh-bg.webp");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.client-3 {
  background-image: url("/assets/images/case-study-pick-n-pull-bw.webp");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.client-2 {
  background-image: url("/assets/images/ultimate-behind.png");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.client-1 {
  background-image: url("/assets/images/image_law.webp");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.client-card svg, .client-card path , .client-card fa {
  height: 1em;
  width: 1em;
  font-size: 30px;
}

.client-suc-text {
  width: 100%;
}

.border-up {
  width: 98%;
  color: #ffffff;
  font-family: "Open Sans", Sans-serif;
  font-size: 15px;
  font-weight: 300;
  border-top: 1px solid #FFFFFF;
  text-align: center;
  padding: 5px;
}

.benefit-tex {
  font-family: "Noto Sans", Sans-serif;
  font-size: 18px;
  font-weight: 700;
  max-width: 260px;
  height: 40px;
  margin-top: 5px;
}

.con-btn-sm p {
  text-transform: uppercase;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  letter-spacing: 2.2px;
  border-radius: 100px;
  padding: 10px 50px;
  background-color: #E72335;
  color: #FFFFFF;
  text-align: center;
  transition: 300ms;
}

.con-btn-sm {
  text-decoration: none;
  margin-top: 17rem;
}

.client-suc-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0,0,0,0.47);
  padding-top: 10px;
  width: 99%;
}

.client-card {
  width: 33.33%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #FFFFFF;
  text-align: center;
}

.client-suc-container {
  display: flex;
  flex-flow: row wrap;
}

.to-up {
  text-transform: uppercase;
}

.feature-text {
  color: #1a2444;
  font-family: 'Noto Sans', sans-serif;
  font-size: 20px;
  font-weight: 100;
}

.success-text {
  margin: 10rem 0 1.5rem 0;
}

.con-btn-md p {
  text-transform: uppercase;
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  letter-spacing: 2.2px;
  border-radius: 100px;
  padding: 15px 50px;
  background-color: #E72335;
  color: #FFFFFF;
  display: inline-block;
  text-align: center;
  transition: 300ms;
  width: 250px;
}

.con-btn-md {
  position: relative;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.con-btn-md p:hover {
  background-color: #d42030;
}

.success-lg {
  color: #D80303;
  font-family: 'Noto Sans', sans-serif;
  font-size: 55px;
  font-weight: 800;
  line-height: 1em;
  letter-spacing: 0px;
  text-shadow: 0px 0px 10px rgb(0 0 0 / 20%);
  text-align: center;
  margin: 0 0 20px 0;
}

.stairs-img {
  position: absolute;
  left: 25%;
  bottom: -600px;
  box-shadow: -16px 17px 0px 0px #d7e3e6;
}

.thin-red {
  color: #ce241e;
  font-family: 'Noto Sans', sans-serif;
  font-size: 22px;
  font-weight: 100;
  line-height: 1.2em;
  width: 300px;
  background-color: #FFFFFF;
  padding: 20px;
  position: relative;
}

.success-hed {
  background-image: url("/assets/images/topography_grey_reverse2.webp");
  background-position: top center;
  background-repeat: repeat-x;
  background-size: contain;
}

.success-h3 {
  font-family: 'Noto Sans', sans-serif;
  font-size: 44px;
  width: 300px;
  line-height: 1;
  font-weight: 700;
  background-color: #FFFFFF;
  padding: 20px;
  position: relative;
  margin: 0 0 20px 0;
}

.feat-sec {
  display: flex;
  justify-content: space-around;
}

.block-tex-lef {
  width: 35%;
}

.block-tex-rig {
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 6rem;
}

.block-tex-rig p {
  color: #232323;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.8em;
}

.success-sec {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cta {
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/assets/images/image_marketing-agency-banner-copy.webp");
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
}

body {
  margin: 0px;
  padding: 0px;
}
</style>