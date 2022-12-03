<template>
  <div class="detail-box">
    <h2 class="det-h2">It’s All In The Details</h2>
    <p class="pushin-p">Our proprietary approach to scaling business growth</p>
    <div class="detail-slide-flex">
      <fa class="nexprevBtn" @click="showBefore" icon="chevron-left" />
      <VueSlickCarousel v-bind="detSettings" ref="carousel">
        <div>
          <div class="car-box">
            <nuxt-img class="spin" src="/assets/details/background-texture.webp" width="320" height="320"/>
            <p class="det-num">1</p>
            <nuxt-img class="top-pic" width="392" height="392" src="/assets/details/image_process-discovery-partnership.webp"/>
          </div>
          <div class="car-text">
            <p>Discovery &amp; Partnership</p>
            <p>GrowME is more than just a marketing agency. As a team of talented designers, developers, writers, administrators, innovators, and strategists, there is tremendous power in our collective minds brainstorming, planning, and working together for the growth of your company. From the initial consultation to the official onboarding and beyond, you’ll discover that nothing about GrowME’s process is cookie-cutter.</p>
          </div>
        </div>
        <div>
          <div class="car-box">
            <nuxt-img class="spin" src="/assets/details/background-texture.webp" width="320" height="320"/>
            <p class="det-num">2</p>
            <nuxt-img class="top-pic" width="392" height="392" src="/assets/details/image_process-research-analysis.webp"/>
          </div>
          <div class="car-text">
            <p>Research &amp; Analysis</p>
            <p>Our advertising agency remains current with every new update to Google and every shift in the marketing industry. We launch our industry-specific research for your campaign from our foundation of extensive market knowledge and experience. Relevant research and analysis allow us to help you create appropriately targeted advertising campaigns and a brand that will resonate with your focus clientele.</p>
          </div>
        </div>
        <div>
          <div class="car-box">
            <nuxt-img class="spin" src="/assets/details/background-texture.webp" width="320" height="320"/>
            <p class="det-num">3</p>
            <nuxt-img class="top-pic" width="392" height="392" src="/assets/details/image_process-branding-strategy.webp"/>
          </div>
          <div class="car-text">
            <p>Branding &amp; Strategy</p>
            <p>Reaching your growth goals comes down to having the right strategy, and at GrowME, we are masters at developing killer strategies to help you knock out and blow past your competition. Success begins by understanding that a powerful branding strategy impacts everything from brand positioning and public perception to online visibility and lead trajectory.</p>
          </div>
        </div>
        <div>
          <div class="car-box">
            <nuxt-img class="spin" src="/assets/details/background-texture.webp" width="320" height="320"/>
            <p class="det-num">4</p>
            <nuxt-img class="top-pic" width="392" height="392" src="/assets/details/image_process-launch.webp"/>
          </div>
          <div class="car-text">
            <p>Launch Your Campaign</p>
            <p>Whether you’ve come to us for a new custom website design, content marketing, SEO strategy, print materials, or brand research and analytics, we deliver a flawless launch of your campaign and execution of all tangible deliverables. We create websites designed to be your best salesperson, supported by materials to build brand awareness and generate and convert quality leads.</p>
          </div>
        </div>
        <div>
          <div class="car-box">
            <nuxt-img class="spin" src="/assets/details/background-texture-arrow2.webp" width="320" height="320"/>
            <p class="det-num">5</p>
            <nuxt-img class="top-pic" width="392" height="392" src="/assets/details/image_process-evaluate-optimize-1.webp"/>
          </div>
          <div class="car-text">
            <p>Evaluate &amp; Optimize</p>
            <p>The job of a digital marketing agency is never complete, and so your journey with GrowME never truly comes to an end. With consistent changes to the ways we access information, neverending algorithmic updates, and organic shifts to consumer perceptions and perspectives, you don’t need a company just to build you a new website and then move on to the next client. You need a marketing agency willing to partner with you for the long term, continually supplying you with research, advice, and support on your journey to better growth. At GrowME, we consistently evaluate, analyze, adjust, and optimize your marketing strategy.</p>
          </div>
        </div>
      </VueSlickCarousel>
      <fa class="nexprevBtn" @click="showNext" icon="chevron-right" />
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
    components: { VueSlickCarousel },
    data() {
      return {
        detSettings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 7000,
          arrows: false,
        },
      }
    },
    methods: {
      showNext() {
        this.$refs.carousel.next()
      },
      showBefore() {
        this.$refs.carousel.prev()
      }
    }
}
</script>

<style>
.pushin-p {
  color: #1a2444;
  font-family: "Noto Sans", Sans-serif;
  font-size: 20px;
  font-weight: 100;
  margin: 0px;
  text-align: center;
}

.det-h2 {
  color: #ce241e;
  font-family: "Noto Sans", Sans-serif;
  font-size: 41px;
  font-weight: 800;
  margin: 0px;
  text-align: center;
}

.car-text {
  text-align: center;
}

.car-text p:first-child {
  color: #ce241e;
  font-family: "Noto Sans", Sans-serif;
  font-size: 30px;
  font-weight: 800;
  font-style: italic;
}

.car-text p:last-child {
  color: #232323;
  font-family: "Open Sans", Sans-serif;
  font-size: 16px;
  line-height: 1.4em;
  font-weight: 300;
  font-style: italic;
}

.detail-slide-flex {
  height: 85%;
}

.detail-slide-flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.detail-slide-flex .slick-slider {
  min-width: 800px;
}

.nexprevBtn {
  padding: 12px 14px;
  color: #FFFFFF;
  background-color: #E72335;
  border-radius: 100px;
  cursor: pointer;
}

.detail-box {
  width: 65%;
  margin: 0 auto;
  height: 100vh;
  padding: 4rem 0 0 0;
}

.spin {
  border-radius: 180px;
  border: 10px solid #FFFFFF;
  animation: rotation 40s infinite linear;
  box-shadow: rgba(150, 150, 150, 0.08) 2px 0px 10px 10px;
  position: absolute;
  z-index: 3;
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.det-num {
  font-family: 'Noto Sans', sans-serif;
  font-weight: 800;
  font-size: 250px;
  position: absolute;
  z-index: 4;
  color: #FFFFFF;
}

.top-pic {
  position: absolute;
  z-index: 5;
}

.car-box {
  height: 400px;
  width: 100%;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  pointer-events: none;
}
</style>