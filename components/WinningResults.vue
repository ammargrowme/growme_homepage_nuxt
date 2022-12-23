<template>
  <div class="winning-box">
    <h2>You Can Count On Winning Results</h2>
    <h3>Our leading marketing agency is meeting the needs of modern businesses</h3>
    <p>You don’t just need a marketing company, you need the best marketing and <a href="/">branding agency</a> that can handle the needs of your modern business. We turn traffic into clients and clicks into customers. All aspects of our digital marketing strategy conjoin and combine to create a process that’s proven to launch your company towards next-level results. GrowME’s formula for success is interwoven into the framework of our business, and your company’s growth is at the centre of everything we do.</p>
    <div class="award-box">
      <div class="first-ch"><nuxt-img src="/assets/awards/Google-partner.webp" width="150" height="150" loading="lazy"/></div>
      <div class="first-ch"><nuxt-img src="/assets/awards/image_growme-google-ads-1.webp" width="150" height="150" loading="lazy"/></div>
      <div class="first-ch"><nuxt-img src="/assets/awards/image_growme-google-analytics.webp" width="150" height="150" loading="lazy"/></div>
      <div class="first-ch"><nuxt-img src="/assets/awards/image_semrush.webp" width="150" height="150" loading="lazy"/></div>
      <div class="sec-ch"><nuxt-img src="/assets/awards/image_three-best-2018.webp" width="150" height="150" loading="lazy"/></div>
      <div class="sec-ch"><nuxt-img src="/assets/awards/image_three-best-2021.webp" width="150" height="150" loading="lazy"/></div>
      <div class="sec-ch"><nuxt-img src="/assets/awards/image_three-best-2022-01.webp" width="150" height="150" loading="lazy"/></div>
      <div class="sec-ch"><nuxt-img src="/assets/awards/image_growme-certified-professional-hootsuite.webp" width="150" height="150" loading="lazy"/></div>
      <div class="sec-ch"><nuxt-img src="/assets/awards/image_forbes.webp" width="150" height="150" loading="lazy"/></div>
    </div>
  </div>
</template>

<style scoped>

.first-ch {
  width: 25%;
}

.sec-ch {
  width: 20%;
}

.award-box {
  display: flex;
  flex-flow: row wrap;
  background-color: #FFFFFF;
  justify-content: space-evenly;
  padding: 2rem;
}

.winning-box {
  text-align: center;
  max-width: 65%;
  margin: 0 auto;
}
.winning-box h2 {
  color: #ffffff;
  font-family: "Noto Sans", Sans-serif;
  font-size: 65px;
  font-weight: 800;
  max-width: 600px;
  margin: 1rem auto;
  border-bottom: 1px solid #D80303;
  line-height: 1;
}
.winning-box h3 {
  color: #ffffff;
  font-family: "Noto Sans", Sans-serif;
  font-size: 23px;
  font-weight: 100;
  text-transform: none;
  line-height: 1.4em;
  max-width: 500px;
  margin: 1rem auto;
  padding: 1rem;
}
.winning-box p {
  text-align: center;
  color: #ffffff;
  font-family: "Open Sans", Sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5em;
  padding: 0 0 2rem 0;
}

.winning-box a {
  color: #D80303;
  font-weight: 500;
  text-decoration: underline;
}

@media only screen and (max-width: 1024px) {
  .winning-box h2 {
    font-size: 40px;
  }
  .winning-box h3 {
    font-size: 20px;
  }
  .winning-box p {
    font-size: 16px;
  }
  .award-box img {
    width: 120px;
    height: 120px;
  }
  .winning-box {
    max-width: 90%;
  }
  .first-ch {
    width: 50%;
  }
  .sec-ch {
    width: 50%;
  }
}

</style>