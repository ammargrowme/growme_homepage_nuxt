<template>
  <div class="carousel-main">
    <div class="slide-flex">
      <div class="team-slide-box">
        <h3>The Team to Help You Win</h3>
        <VueSlickCarousel v-bind="teamSettings">
          <nuxt-img src="/assets/team/growme_tarek.webp" height="253.5" loading="lazy"/>
          <nuxt-img src="/assets/team/growme_sean-ali.webp" height="253.5" loading="lazy"/>
          <nuxt-img src="/assets/team/growme_leah.webp" height="253.5" loading="lazy"/>
          <nuxt-img src="/assets/team/growme_lauren.webp" height="253.5" loading="lazy"/>
          <nuxt-img src="/assets/team/growme_jules.webp" height="253.5" loading="lazy"/>
          <nuxt-img src="/assets/team/growme_dulce.webp" height="253.5" loading="lazy"/>
          <nuxt-img src="/assets/team/growme_ammar.webp" height="253.5" loading="lazy"/>
          <nuxt-img src="/assets/team/growme_abby.webp" height="253.5" loading="lazy"/>
        </VueSlickCarousel>
        <p class="team-tex">Meet the passionate high performance team behind our successful clients GrowME is a team of 30+ in-house marketing experts, artists, designers, developers, writers, creators, managers, and more committed to helping you achieve outstanding results.</p>
        <NuxtLink class="con-btn-md" :to="{ path: '/team' }"><p>Meet The Team</p></NuxtLink>
      </div>
      <div class="val-slide-box">
        <h3>The Culture that Guides Us</h3>
        <div class="val-flex">
          <fa class="nexprevBtn" @click="showBefore" icon="chevron-left" />
          <VueSlickCarousel v-bind="valSettings" ref="carouselVal">
            <div class="val-box">
              <p class="val-head">Good Vibes Only</p>
              <nuxt-img src="/assets/team/image_values-01.webp" width="300" loading="lazy"/>
              <p class="bot-val-tex">
                Our team is made up of people with positive can-do attitudes who want to help our clients grow.
                We help each other. We treat each other the way we want to be treated, and our happiness cultivates
                company growth.
              </p>
            </div>
            <div class="val-box">
              <p class="val-head">Push It to The Limit</p>
              <nuxt-img src="/assets/team/image_values-02.webp" width="300" loading="lazy"/>
              <p class="bot-val-tex">
                We always deliver the most value we can for our clients and are always improving.
                Performance and boldness run in the veins of our team and the best is what we strive to be.
              </p>
            </div>
            <div class="val-box">
              <p class="val-head">Keepin' It Real</p>
              <nuxt-img src="/assets/team/image_values-03.webp" width="300" loading="lazy"/>
              <p class="bot-val-tex">
                Integrity and respect are at the core of our family. Our reputation forms GrowME???s reputation
                and we are committed to honesty, transparency and authenticity. We say what we mean and deliver it.
              </p>
            </div>
          </VueSlickCarousel>
          <fa class="nexprevBtn" @click="showNext" icon="chevron-right" />
        </div>
      </div>
    </div>
    <div class="sales-machine">
      <div class="machine-text">
        <h3>How To Build An Online Sales Machine</h3>
        <p>FIND OUT MORE ON FORBES</p>
      </div>
      <div class="machine-img">
        <nuxt-img src="/assets/images/copywrighter.webp" loading="lazy"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        teamSettings: {
          autoplay: true,
          infinite: true,
          autoplaySpeed: 1000,
          arrows: false,
          slidesToShow: 4,
          speed: 1000,
          cssEase: 'linear',
          swipeToSlide: false,
          draggable: false,
          pauseOnHover: false,
        },
        valSettings: {
          autoplay: true,
          arrows: false,
        }
      }
    },
    methods: {
      showNext() {
        this.$refs.carouselVal.next()
      },
      showBefore() {
        this.$refs.carouselVal.prev()
      }
    }
}
</script>

<style>
.let-drag {
  pointer-events: none;
  width: 100%;
}

.machine-img img {
  border-radius: 300px;
  width: 300px;
  height: 300px;
}

.machine-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 580px;
  text-align: center;
  line-height: 1;
}

.sales-machine {
  background-image: linear-gradient(rgba(206, 36, 30, 0.9), rgba(206, 36, 30, 0.9)), url("/assets/images/urban-pattern-red-bg.webp");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  max-height: 260px;
  margin: 4rem auto;
  max-width: 1000px;
}

.sales-machine h3 {
  color: #ffffff;
  font-family: "Noto Sans", Sans-serif;
  font-size: 44px;
  font-weight: 800;
  margin: 0px;
}

.sales-machine p {
  font-family: "Open Sans", Sans-serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2.2px;
  color: #D80303;
  background-color: #FFFFFF;
  border-radius: 100px;
  padding: 15px 50px;
}

.val-flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.val-slide-box button {
  max-height: 45px;
}

.slide-flex {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}

.slide-flex .slick-slider {
  min-width: 400px;
}

.bot-val-tex {
  color: #232323;
  font-family: "Open Sans",Sans-serif;
  font-size: 16px;
  line-height: 1.8em;
  text-align: center;
  max-width: 300px;
  margin: 0;
}

.val-box {
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 430px;
}

.val-head {
  color: #222222;
  font-family: 'Permanent Marker', sans-serif;
  font-size: 65px;
  max-width: 300px;
  text-align: center;
  line-height: 1;
  margin: 0;
}

.team-slide-box {
  width: 700px;
}

.team-tex {
  color: #1a2444;
  font-family: "Noto Sans",Sans-serif;
  font-size: 20px;
  font-weight: 100;
  line-height: 1.3em;
  text-align: center;
}

.team-slide-box img {
  pointer-events: none;
}

.team-slide-box h3 {
  color: #ce241e;
  font-family: 'Noto Sans', sans-serif;
  font-size: 54px;
  font-weight: 800;
  line-height: 1;
  width: 450px;
  text-align: center;
  margin: 1rem auto;
}

.val-slide-box {
  width: 470px;
  padding: 40px 20px;
  background-color: #FFFFFF;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  max-height: 880px;
}

.val-slide-box h3 {
  color: #ce241e;
  font-family: 'Noto Sans', sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
}

@media only screen and (max-width: 724px) {
  .team-tex {
    max-width: 400px;
    margin: 0px auto;
    padding: 1rem 0px
  }
  .carousel-main {
    max-width: 90%;
    margin: 0px auto;
  }
  .val-slide-box {
    max-width: 80vw;
    margin: 0px auto;
  }
  .sales-machine {
    min-height: 600px;
    padding: 1rem;
    flex-flow: row wrap;
  }
  .val-box img {
    max-width: 230px;
  }
  .val-head {
    font-size: 30px;
  }
  .val-flex .slick-slider {
    min-width: 280px;
  }
}
</style>