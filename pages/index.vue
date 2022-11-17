<template>
<div>
  <Navigation/>
  <main>
    <div class="cta">
      <Typed/>
    </div>
    <div class="success-hed">
      <section class="success-sec">
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
      </section>
    </div>
    <div>
      <Help/>
    </div>
    <div>
      <Clients/>
    </div>
  </main>
</div>
</template>

<script>
export default {

}
</script>

<style>

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