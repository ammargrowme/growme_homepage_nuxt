<template>
  <div class="detail-box">
    <h2>It’s All In The Details</h2>
    <p>Our proprietary approach to scaling business growth</p>
    <div class="detail-slide-flex">
      <fa class="nexprevBtn" @click="showBefore" icon="chevron-left" />
      <VueSlickCarousel v-bind="detSettings" ref="carousel">
        <div class="car-box">
          <nuxt-img class="spin" src="/assets/details/background-texture.webp" width="320" height="320"/>
          <p class="det-num">1</p>
          <nuxt-img class="top-pic" width="392" height="392" src="/assets/details/image_process-discovery-partnership.webp"/>
          <div class="car-text">
            <p>Discovery & Partnership</p>
            <p>GrowME is more than just a marketing agency. As a team of talented designers, developers, writers, administrators, innovators, and strategists, there is tremendous power in our collective minds brainstorming, planning, and working together for the growth of your company. From the initial consultation to the official onboarding and beyond, you’ll discover that nothing about GrowME’s process is cookie-cutter.</p>
          </div>
        </div>
        <div class="car-box">
          <nuxt-img class="spin" src="/assets/details/background-texture.webp" width="320" height="320"/>
          <p class="det-num">2</p>
          <nuxt-img class="top-pic" width="392" height="392" src="/assets/details/image_process-research-analysis.webp"/>
        </div>
        <div class="car-box">
          <nuxt-img class="spin" src="/assets/details/background-texture.webp" width="320" height="320"/>
          <p class="det-num">3</p>
          <nuxt-img class="top-pic" width="392" height="392" src="/assets/details/image_process-branding-strategy.webp"/>
        </div>
        <div class="car-box">
          <nuxt-img class="spin" src="/assets/details/background-texture.webp" width="320" height="320"/>
          <p class="det-num">4</p>
          <nuxt-img class="top-pic" width="392" height="392" src="/assets/details/image_process-launch.webp"/>
        </div>
        <div class="car-box">
          <nuxt-img class="spin" src="/assets/details/background-texture-arrow2.webp" width="320" height="320"/>
          <p class="det-num">5</p>
          <nuxt-img class="top-pic" width="392" height="392" src="/assets/details/image_process-evaluate-optimize-1.webp"/>
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
.car-text {}

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
  width: 60%;
  margin: 0 auto;
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
  width: 980px;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  pointer-events: none;
}
</style>