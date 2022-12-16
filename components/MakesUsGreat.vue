<template>
  <div class="great-flex">
    <h2>What Makes Us Great</h2>
    <div class="great-flex-child">
      <div class="fir-box">
        <nuxt-img class="back-img" src="/assets/images/image_happy-handshake-peuxiwjyi9ffcllrhymfg5ygvpa6eabsxerd2i4weg.webp" width="350" height="500" />
        <h3>Every Client Stays Happy</h3>
        <NuxtLink class="new-mid" :to="{ path: '/contact' }"><p>Check Out Our Work</p></NuxtLink>
      </div>
      <div class="second-tex-box">
        <p>We want to be your success partners, but we don’t just care about results, we care about your overall satisfaction. One of the biggest complaints we hear from clients coming from other marketing agencies is the lack of communication they experienced. Having taken the time to hone our skills as expert communicators, we listen and respond with passion and intent. </p>
        <h4>What To Expect</h4>
        <ul>
          <li>Strategic Planning &amp; Excellent Execution</li>
          <li>Transparent Communication &amp; Proactive Project Management</li>
          <li>Accelerated Return On Investment</li>
          <li>Perfected Customer Experience &amp; Ultimate Peace Of Mind</li>
        </ul>
      </div>
    </div>
    <div class="great-flex-child">
      <div class="fir-box mobile-fir">
        <nuxt-img class="back-img" src="/assets/images/image_investment-1-peuxl3iegcfifuf2owr39m16s2h0cv1989k5dqvtvs.webp" width="350" height="500" />
        <h3>Worthwhile Investment</h3>
        <NuxtLink class="new-mid" :to="{ path: '/contact' }"><p>Stop Paying More for Less</p></NuxtLink>
      </div>
      <div class="second-tex-box">
        <p>Wondering whether to hire an in-house marketing team or to out-source with us? Your money will always go further with GrowME. Incorporating the diversity and skill offered by large agencies and the specialized, personal approach of a boutique marketing firm, we have perfected the customer experience and discovered a model proven to deliver the best ROI. Pay less for GrowME’s team of experts than for a single in-house marketing employee.</p>
        <h4>Everything You Need</h4>
        <ul>
          <li>Professional Leadership and Management Team</li>
          <li>Talented Design and Development Team</li>
          <li>Full Digital Marketing Team (SEO, PPC, Social Media, Advertising)</li>
        </ul>
      </div>
      <div class="fir-box desktop-fir">
        <nuxt-img class="back-img" src="/assets/images/image_investment-1-peuxl3iegcfifuf2owr39m16s2h0cv1989k5dqvtvs.webp" width="350" height="500" />
        <h3>Worthwhile Investment</h3>
        <NuxtLink class="new-mid" :to="{ path: '/contact' }"><p>Stop Paying More for Less</p></NuxtLink>
      </div>
    </div>
    <div class="great-flex-child">
      <div class="fir-box">
        <nuxt-img class="back-img" src="/assets/images/image_passion-commitment-peuxnx0yygah9qbm84msqweyxokng689m80l7mpb7s.webp" width="350" height="500" />
        <h3>Passion &amp; Commitment</h3>
        <NuxtLink class="new-mid" :to="{ path: '/contact' }"><p>Get to Know Our Awesome Team</p></NuxtLink>
      </div>
      <div class="second-tex-box">
        <p>We’re proud of where we’ve come from, we’re excited about where we’re going, and we hope you’ll join us for the ride. Our passion lies in bolstering your business growth and delivering websites and branding strategies that will out-perform your best salespeople. At its heart, GrowME is a group of artists, committed and devoted to various crafts. And while we love what we do, you, our client, is at the centre of why we do it.</p>
        <h4>Our GrowME Values</h4>
        <ul>
          <li>Everyone Deserves Respect</li>
          <li>We Expect Accountability</li>
          <li>Communication is Key</li>
          <li>Passion For Our Craft</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.great-flex-child {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  margin: 3rem 0px;
}

.great-flex-child div {
  margin: 5rem 0px;
}

.second-tex-box {
  max-width: 600px;
}

.second-tex-box p {
  color: #f4f4f4;
  font-family: "Open Sans",Sans-serif;
  font-size: 17px;
  font-weight: 500;
  font-style: italic;
  line-height: 1.8em;
}

.second-tex-box h4 {
  color: #FFFFFF;
  font-family: "Noto Sans",Sans-serif;
  font-size: 25px;
  font-weight: 700;
}

.second-tex-box ul {
  color: #fff;
  font-family: "Open Sans",Sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.8em;
}

.great-flex h2 {
  color: #FFFFFF;
  font-family: "Noto Sans",Sans-serif;
  font-size: 40px;
  font-weight: 700;
  margin: 0px;
  text-align: center;
}

.great-flex h3 {
  color: #fff;
  font-family: "Noto Sans",Sans-serif;
  font-size: 69px;
  font-weight: 800;
  text-shadow: 0 0 10px rgba(0,0,0,.55);
  line-height: 1;
  margin: 1rem 0;
  position: relative;
  z-index: 1;
}

.great-flex {
  max-width: 1200px;
  margin: 0 auto;
}

.back-img {
  position: absolute;
  z-index: 0;
  box-shadow: -16px 17px 0px 0px #d7e3e6;
}

.fir-box {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.new-mid {
  position: relative;
  text-decoration: none;
}

.mobile-fir {
  display: none;
}

@media only screen and (max-width: 1024px) {
  .great-flex h2 {
    font-size: 33px;
    margin-bottom: 2rem;
  }
  .back-img {
    width: 250px;
    height: 370px;
  }
  .great-flex h3 {
    font-size: 40px;
    width: 250px;
  }
  .new-mid p {
    font-size: 14px;
    padding: 15px 30px;
  }
  .fir-box {
    justify-content: center;
    align-items: center;
  }
  .great-flex-child {
    max-width: 90%;
    margin: 0px auto;
  }
  .desktop-fir {
    display: none;
  }
  .mobile-fir {
    display: flex;
  }
}
</style>