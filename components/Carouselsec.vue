<template>
  <div>
    <div class="team-slide-box">
      <h3>The Team to Help You Win</h3>
      <div>
        <VueSlickCarousel v-bind="teamSettings">
          <div><nuxt-img src="/assets/team/growme_tarek.webp" width="177" /></div>
          <div><nuxt-img src="/assets/team/growme_sean-ali.webp" width="177" /></div>
          <div><nuxt-img src="/assets/team/growme_leah.webp" width="177" /></div>
          <div><nuxt-img src="/assets/team/growme_lauren.webp" width="177" /></div>
          <div><nuxt-img src="/assets/team/growme_jules.webp" width="177" /></div>
          <div><nuxt-img src="/assets/team/growme_dulce.webp" width="177" /></div>
          <div><nuxt-img src="/assets/team/growme_ammar.webp" width="177" /></div>
          <div><nuxt-img src="/assets/team/growme_abby.webp" width="177" /></div>
        </VueSlickCarousel>
      </div>
      <div>
        <VueSlickCarousel v-bind="valSettings">
          <div class="val-box">
            <p class="val-head">Good Vibes Only</p>
            <nuxt-img src="/assets/team/image_values-01.webp" width="300" />
            <p>
              Our team is made up of people with positive can-do attitudes who want to help our clients grow.
              We help each other. We treat each other the way we want to be treated, and our happiness cultivates
              company growth.
            </p>
          </div>
          <div class="val-box">
            <p class="val-head">Push It to The Limit</p>
            <nuxt-img src="/assets/team/image_values-02.webp" width="300" />
            <p>
							We always deliver the most value we can for our clients and are always improving.
              Performance and boldness run in the veins of our team and the best is what we strive to be.
            </p>
          </div>
          <div class="val-box">
            <p class="val-head">Keepin' It Real</p>
            <nuxt-img src="/assets/team/image_values-03.webp" width="300" />
            <p>
							Integrity and respect are at the core of our family. Our reputation forms GrowME’s reputation
              and we are committed to honesty, transparency and authenticity. We say what we mean and deliver it.
            </p>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  <div>

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
        teamSettings: {
          autoplay: true,
          infinite: true,
          autoplaySpeed: 100,
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          speed: 800,
          autoplaySpeed: 800,
          cssEase: 'ease',
          swipeToSlide: true,
          pauseOnHover: false,
          draggable: true,
        },
        valSettings: {
          autoplay: true,
        }
      }
    }
}
</script>

<style scoped>
.val-box {
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.val-head {
  color: #222222;
  font-family: 'Permanent Marker', sans-serif;
  font-size: 65px;
}

.team-slide-box {
  width: 708px;
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
</style>