<template>
<div>
  <Navigation/>
  <main>
    <div class="cta">
      <Typed/>
    </div>
    <section class="success-hed">
      <div class="success-sec">
        <div class="block-tex-rig">
          <h3 class="success-lg">Growing Your Business Is Why We Exist</h3>
          <p>Founded amid one of the largest economic downturns in the last 50 years, we know how to help clients prosper and excel during good and hard times. We can unlock the growth you’ve always wanted. Because we’ve done it ourselves.</p>
        </div>
        <div class="block-tex-lef">
          <nuxt-img class="team-bg" src="assets/images/growme_team-new-800px.webp" width="418" height="278.48"/>
          <p>Powered by a team of industry virtuosos, we offer more than any in-house employee ever could and more than other marketing agencies ever will. With expertise in brand development, customer acquisition, digital marketing and website development, we are fully stacked to deliver on your marketing goals.</p>
        </div>
      </div>
      <div class="work-head">
        <div class="animate-tex-box">
          <p>Our strategy has been extensively tested.</p>
          <p>Only the highest-performing campaigns selected.</p>
          <p>Our culture is results and client-centric.</p>
          <h4>We are GrowME and we are ready to Grow You.</h4>
        </div>
        <div class="con-btn-hed">
          <p class="work-with-us">Work With Calgary's Leading Marketing Agency</p>
          <NuxtLink class="con-btn-md" :to="{ path: '/' }"><p>Talk To The Experts</p></NuxtLink>
        </div>
        <div class="feat-box">
          <p class="feature-text">Featured In:</p>
          <div class="feat-sec">
            <nuxt-img src="assets/images/featured-in-forbes.webp" width="163" />
            <nuxt-img src="assets/images/featured-in-haskayne.webp" width="163" />
            <nuxt-img src="assets/images/featured-in-upcity.webp" width="163" />
          </div>
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
      <Clientsuccess/>
    </section>
    <section class="team-sec">
      <Carouselsec/>
    </section>
    <section class="review-sec">
      <Growmereviews/>
    </section>
    <section class="detail-sec">
      <Details />
    </section>
    <section class="winning-sec">
      <WinningResults/>
    </section>
    <section class="great-sec">
      <MakesUsGreat/>
      <div class="consult-cta">
        <h2>Let's Start with a Hello. Let's Talk.</h2>
        <NuxtLink class="consult-btn" :to="{ path: '/contact' }"><p>Request A Consultation</p></NuxtLink>
      </div>
    </section>
    <section>
      <GivingBack />
    </section>
  </main>
  <Footer />
</div>
</template>

<script>
export default {
  head () {
    return {
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' }
      ]
    }
  }
}
</script>

<style>
html, body {
  overflow-x: hidden;
}

.feat-box {
  max-width: 600px;
  margin: 0px auto;
}

.work-head {
  max-width: 1200px;
  margin: 0px auto;
}

.work-with-us {
  color: #000000;
  font-family: "Noto Sans", Sans-serif;
  font-size: 18px;
  font-weight: 600;
  max-width: 250px;
  text-align: center;
  margin: 0px auto;
}

.animate-tex-box {
  max-width: 600px;
  margin: 0px auto;
}

.animate-tex-box h4 {
  color: #D80303;
  font-family: "Kanit", Sans-serif;
  font-size: 2.2em;
  font-weight: 500;
  line-height: 1em;
  letter-spacing: 1.9px;
  text-align: center;
}

.animate-tex-box p {
  padding: 10px 0px;
  margin: 0px;
  text-align: center;
  color: #232323;
  font-family: "Lato", Sans-serif;
  font-size: 23px;
  font-weight: 700;
  line-height: 1.8em;
}

.consult-btn {
  text-decoration: none;
  display: block;
}

.consult-btn p {
  background-color: #FFFFFF;
  color: #ce241e;
  max-width: 350px;
  font-family: "Open Sans",Sans-serif;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 2rem auto 0 auto;
  padding: 10px;
  border-radius: 25px;
  text-align: center;
}

.consult-cta h2 {
  color: #FFFFFF;
  font-family: "Noto Sans",Sans-serif;
  font-size: 55px;
  font-weight: 800;
  text-transform: uppercase;
  line-height: 1em;
  letter-spacing: 0;
  text-shadow: 0 0 10px rgba(0,0,0,.2);
  max-width: 25ch;
  text-align: center;
  margin: 0 auto;
}

.consult-cta {
  background-image: linear-gradient(rgba(206, 36, 30, 0.9), rgba(206, 36, 30, 0.9)), url("/assets/images/urban-pattern-red-bg.webp");
  padding: 5rem 0;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}

.great-sec {
  background-image: linear-gradient( rgba(122, 122, 122, 1), rgba(122, 122, 122, 0.9)), url("/assets/images/image_background-downtown.webp");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  padding: 4rem 0 0 0;
}

.detail-sec {
  height: 110vh;
}

.winning-sec {
  background-image: linear-gradient(rgba(4, 4, 14, 0.7), rgba(4, 4, 14, 0.7)), url("/assets/images/image_background-analytics.webp");
  height: 100vh;
  background-repeat: no-repeat;
  padding: 5rem 0;
  background-size: cover;
}

.review-sec {
  padding: 1rem 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url("/assets/images/image_computer-desk-blur.webp");
  background-size: cover;
  display: flex;
  justify-content: center;
}

.feature-text {
  color: #1a2444;
  font-family: 'Noto Sans', sans-serif;
  font-size: 20px;
  font-weight: 100;
}

.team-sec {
  background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 1) 45%), url("/assets/images/image_background.webp");
  background-size: cover;
  padding-top: 5rem;
  overflow: hidden;
}

.to-up {
  text-transform: uppercase;
}

.con-btn-md p, .new-mid p {
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
  min-width: 250px;
}

.con-btn-md {
  position: relative;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.con-btn-lg {
  position: relative;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.con-btn-lg p {
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
  margin: 0 0 20px 0;
}

.team-bg {
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
  max-width: 380px;
}

.block-tex-lef p {
  color: #232323;
  font-family: "Open Sans", Sans-serif;
  font-size: 16px;
  line-height: 1.8em;
  font-weight: 300;
  padding: 1rem 0px;
}

.block-tex-rig {
  max-width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.block-tex-rig p {
  color: #232323;
  font-family: "Lato", Sans-serif;
  font-size: 27px;
  font-weight: 300;
  line-height: 1.8em;
}

.success-sec {
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  max-width: 1200px;
  margin: 0px auto;
  padding: 5rem 0px 1rem 0px;
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

@media only screen and (max-width: 724px) {
  .success-lg {
    font-size: 40px;
  }
  .block-tex-rig p {
    font-size: 20px;
  }
  .block-tex-lef {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .block-tex-rig {
    padding: 0px 2rem 2rem 2rem;
  }
  .help-h2 {
    font-size: 50px !important;
    width: 90vw;
  }
  .team-bg {
    max-width: 95%;
    margin: 0px auto;
  }
  .animate-tex-box {
    max-width: 95%;
  }
  .feat-box img {
    max-width: 120px;
  }
  .feat-box {
    max-width: 95%;
  }
  .detail-sec {
    height: 100%;
  }
  .winning-sec {
    height: 100%;
  }
  .con-btn-lg p {
    font-size: 15px;
  }
  .con-btn-md p {
    font-size: 15px;
  }
  .consult-cta h2 {
    font-size: 35px;
  }
  .consult-cta {
    padding: 4rem;
  }
}
</style>