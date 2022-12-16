<template>
  <footer>
    <div class="footer-direct">
      <div class="first-box">
        <NuxtLink :to="{ path: '/' }"><nuxt-img src="/assets/images/logo_only_white.webp" width="180.6" height="79.6"/></NuxtLink>
        <a href="tel:1231231234"><p>(855) 5-GrowME</p></a>
        <a href="tel:1231231234"><p>(855) 547-6963</p></a>
      </div>
      <div>
        <p class="location-red">CALGARY</p>
        <a href="tel:1231231234"><p>(403) 547-6963</p></a>
        <p class="addy">1950 10 Ave SW Unit 201 <br>Calgary, AB T3C 0J8</p>
      </div>
      <div>
        <p class="location-red">TORONTO</p>
        <a href="tel:1231231234"><p>(647) 955-4903</p></a>
        <p class="addy">28 Logan Avenue <br>Toronto, ON M4M 2M8</p>
      </div>
      <div>
        <p class="location-red">VANCOUVER</p>
        <a href="tel:1231234"><p>(604) 210-1553</p></a>
        <p class="addy">319 W Hastings St #400 <br>Vancouver, BC V6B 1H6</p>
      </div>
      <div>
        <p class="direct-header">COMPANY</p>
        <ul>
          <NuxtLink :to="{ path: '/' }"><li>Our Story</li></NuxtLink>
          <NuxtLink :to="{ path: '/' }"><li>Our Team</li></NuxtLink>
          <NuxtLink :to="{ path: '/' }"><li>Case Studies</li></NuxtLink>
          <NuxtLink :to="{ path: '/' }"><li>Contact</li></NuxtLink>
        </ul>
      </div>
      <div>
        <p class="direct-header">MARKETING</p>
        <ul>
          <NuxtLink :to="{ path: '/' }"><li>Digital Marketing</li></NuxtLink>
          <NuxtLink :to="{ path: '/' }"><li>Social Media Marketing</li></NuxtLink>
          <NuxtLink :to="{ path: '/' }"><li>Google Advertisement</li></NuxtLink>
          <NuxtLink :to="{ path: '/' }"><li>Marketing Consultant</li></NuxtLink>
        </ul>
      </div>
      <div>
        <p class="direct-header">SEO</p>
        <ul>
          <NuxtLink :to="{ path: '/' }"><li>SEO Services</li></NuxtLink>
          <NuxtLink :to="{ path: '/' }"><li>Calgary SEO</li></NuxtLink>
          <NuxtLink :to="{ path: '/' }"><li>Toronto SEO</li></NuxtLink>
          <NuxtLink :to="{ path: '/' }"><li>Vancouver SEO</li></NuxtLink>
        </ul>
      </div>
      <div>
        <p class="direct-header">BRANDING</p>
        <ul>
          <NuxtLink :to="{ path: '/' }"><li>Brand Creation</li></NuxtLink>
          <NuxtLink :to="{ path: '/' }"><li>Logo Design</li></NuxtLink>
        </ul>
        <p class="direct-header">WEB DESIGN</p>
        <ul>
          <NuxtLink :to="{ path: '/' }"><li>Custom Web Design</li></NuxtLink>
        </ul>
      </div>
    </div>
    <div>

    </div>
  </footer>
</template>

<script>

</script>

<style>
footer {
  background-color: #232323;
}

.first-box a p {
  padding: 5px 0px;
  margin: 0px;
  font-weight: 600;
}

.first-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.first-box img {
  width: 180.6px;
  height: 79.6px;
}

.location-red {
  color: #D80303;
  font-family: "Kanit", Sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1em;
  letter-spacing: 2px;
}

.footer-direct a {
  text-decoration: none;
  color: #FFFFFF;
  font-family: "Kanit", Sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1em;
  transition: 400ms;
}

.footer-direct a:hover {
  color: #D80303;
}

.direct-header {
  color: #FFFFFF;
  font-family: "Kanit", Sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1em;
  padding: 0px;
  margin: 0px;
}

.footer-direct ul {
  list-style: none;
  padding-left: 10px;
  margin-top: 10px;
}

.footer-direct li {
  padding: 5px 0px;
}

.addy {
  color: #FFFFFF;
  font-family: "Kanit", Sans-serif;
  font-size: 14px;
  font-weight: 200;
  line-height: 1em;
}

.footer-direct {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  margin: 0px auto;
  padding: 3rem 0px;
  max-width: 1400px;
}

.footer-direct div {
  width: 220px;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
}

@media (max-width: 724px) {
  .footer-direct div {
    align-items: center;
    text-align: center;
  }
  .footer-direct ul {
    padding: 0px;
  }
}
</style>