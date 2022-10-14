<template>
<div>
  <div class="cta">
    <Navigation/>
      <div class="cta-tex">
        <h2>Grow</h2>
        <p>Your Sales</p>
      </div>
  </div>
    <section class="success-sec">
      <div>
        <h3>Growing Your Business Is Why We Exist</h3>
        <p>Our Calgary marketing agency is proof — there's a better way to grow.</p>
        <NuxtLink :to="{ path: '/contact' }"><p>Talk To The Experts</p></NuxtLink>
      </div>
      <div>
        <h3>Success Driven Marketing Agency</h3>
        <p>At GrowME, nothing is more important to us than ensuring your business success and overall happiness through our award-winning, industry-leading, client-focused methods.</p>
        <p>As a full-service marketing agency with experts in Calgary SEO, we love the thrill of growing our clients’ market share to be leaders in their respective industries. Our approach to digital marketing is interdisciplinary, meaning we leave no stone unturned in our efforts to take your business to the next level and grow your sales.</p>
        <p>Our fully-stacked team of in-house experts are the best at what they do, from skilled designers to talented wordsmiths to SEO brainiacs and marketing wizards led by a dedicated and imaginative group of managers. Our expertise includes high-quality website design and development, industry-leading SEO in Calgary, compelling Google and remarketing advertising services, top-notch social media management, and more.</p>
        <p>Many companies consider hiring an in-house marketing expert rather than a dedicated marketing company, but you know how the saying goes — jack of all trades, master of none. And hiring an entire in-house crew of masters falls outside the budget for most of our clients.</p>
        <p>GrowME Marketing is a top-rated, award-winning marketing agency based in Calgary, Alberta, serving clients across Canada. We are relentless about producing results that meet all of your marketing requirements for less than the cost of hiring an in-house team. Take advantage of our winning solutions in branding, advertising and website design.</p>
      </div>
    </section>
</div>
</template>

<script>
export default {

}
</script>

<style>

.success-sec {
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  width: 60vw;
}
/* Comment */
.cta {
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/assets/images/image_marketing-agency-banner-copy.webp");
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}

body {
  margin: 0px;
  padding: 0px;
}

.cta-tex {
  margin-top: 10rem;
}

.cta-tex p {
  margin: 0px;
  color: #FFFFFF;
  font-size: 90px;
}

.cta-tex h2 {
  margin: 0px;
  color: #e92226;
  font-size: 200px;
}

</style>