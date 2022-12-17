<template>
  <div class="temp-box">
    <div class="flex-rev-gog">
      <h2 class="review-head">What Clients Are Saying About GrowME</h2>
      <div class="google-logo-box">
        <nuxt-img src="assets/images/google_review_logo.webp" width="140" loading="lazy"/>
        <div class="starbox rev-star">
          <fa icon="star"/>
          <fa icon="star"/>
          <fa icon="star"/>
          <fa icon="star"/>
          <fa icon="star"/>
        </div>
        <p class="upper-rev">4.9 Google Rating</p>
        <p class="lower-rev">Based on 103 Reviews</p>
      </div>
    </div>
    <div class="review-box">
      <div v-for="review in reviews" :key="review.id" class="review">
        <p class="review-text">{{ review.text }}</p>
        <div class="rev-star">
          <fa icon="star"/>
          <fa icon="star"/>
          <fa icon="star"/>
          <fa icon="star"/>
          <fa icon="star"/>
        </div>
        <strong><p class="comp-rev">{{ review.company }}</p></strong>
      </div>
    </div>
    <a class="con-btn-md" href="https://g.page/growmemarketing?share"><p class="to-up">See More Reviews</p></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviews : [
        {id: 1, text: 'Mach 6 Started working with GrowME a couple years ago when we were not getting a lot of traffic through our doors. GrowME really helped us turn things around. We went from that to now having to scale back our services with them since we can not keep up with the calls. They are a victim of their own success but we will definitely continue using them for our current venture and any future ones we decide to start up. The team is professional and delivered what they promised. Thanks a buch for all the help to everyone at GrowME!', company: 'Mach 6 Mechanical', },
        {id: 2, text: 'Our growth is amazing! 4 years ago we hired GrowME to develope our brand, design a custom website and bring us new customers for Mastered Home Renovations. We are extremely pleased with our return on investment of well over 2,000%. They take care of our website, SEO, advertising and social media, all working together to bring us customers each month. You will be taken care of with great results and service with these guys!', company: 'Mastered Home Renovations', },
        {id: 3, text: 'We have been working with GrowME for just over 18 months and have nothing but great things to say. There are many companies out there to choose from, and we have worked with a few groups in the past, however GrowME has been the only ones to come through on their commitment. Having this company on your side is essentially like having a full time marketing / SEO person on your team, but one that has the backing of an entire team of professionals at their disposal. I highly recommend these guys.', company: 'EVOLVsolar', },
        {id: 4, text: 'GrowME Marketing started managing our small businesses digital marketing and SEO over 1 year ago and we have been very happy with the quality service they provide. We are ranking number 1 on 4 key words and they succeeded in driving many organic viewers to our new webpage that they designed for us. I would recommend them to anyone looking to improve their digital marketing presence and SEO.', company: 'Strive Physiotherapy', },
        {id: 5, text: 'I would highly recommend GrowME Marketing. Prior to making the move to them earlier this year, we had been with another SEO company and had always thought we were doing pretty well with our rankings. What we had no idea, was the value partnering with an actual end to end full-service Marketing Agency. Their account team is amazing, dedicated and goes above and beyond. Not only have our SEO ranking already improved, but their website design and creative team is awesome. We got a new truly beautiful website and they helped us with content and a social media presence that was more impactful. They are amazing and I would recommend them to anyone. Thanks for the amazing partnership.', company: 'Partners for Home Care', },
        {id: 6, text: 'Where would we be without GrowME Marketing? They build us a new e-commerce store from scratch for our 5 locations and took care of all of our concerns along the way. Our new website is the biggest and best in our industry; the web design team dis a fantastic job! We’ll also be relying on GrowME for SEO and digital marketing services. Already the marketing help they’ve provided has had a huge impact on the way we run our company. I look forward to many more years with GrowME.', company: 'Cloudi Hookah', },
      ]
    }
  }
}
</script>

<style scoped>
.flex-rev-gog {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1180px;
  margin: 0 auto;
}

.google-logo-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.google-logo-box img {
  padding: 5px;
}

.starbox {
  display: flex;
}

.upper-rev {
  color: #CE241E;
  font-family: "Noto Sans", Sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin: 0;
}

.lower-rev {
  color: #FFFFFF;
  font-family: "Open Sans", Sans-serif;
  font-size: 14px;
  margin: 0;
}

.temp-box {
  width: 1300px;
}

.rev-star {
  color: #CE141C;
}

.review-text {
  color: #232323;
  font-family: "Open Sans", Sans-serif;
  font-size: 16px;
  line-height: 1.8em;
  font-weight: 300;
}
.comp-rev {
  color: #222222;
  font-family: "Kanit", Sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.8em;
  margin: 0;
}

.review {
  height: 540px;
  width: 340px;
  padding: 1rem;
  margin: 1rem;
  background-color: #FFFFFFD1;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.review-box {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.review-head {
  color: #D80303;
  font-family: "Kanit", Sans-serif;
  font-size: 3.7em;
  font-weight: 500;
  line-height: 1em;
  letter-spacing: 1px;
  width: 650px;
  padding: 0 1rem 0 0;
  margin: 2rem 0 1rem 0;
}

@media only screen and (max-width: 1024px) {
  .flex-rev-gog {
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
  }
  .review-head {
    font-size: 45px;
  }
  .temp-box {
    max-width: 95%;
  }
  .review {
    height: 100%;
  }
}
</style>