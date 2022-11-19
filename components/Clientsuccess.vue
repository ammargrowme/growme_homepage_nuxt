<template>
    <div class="client-suc-container">
        <div v-for="client in clients" :key="client.id" :class="client.class">
          <div :class="client.classImg"></div>
          <NuxtLink class="con-btn-sm" :to="`${client.id}`"><p>See Case Study</p></NuxtLink>
          <div class="client-suc-text">
            <fa :icon="client.logo"/>
            <p class="benefit-tex">{{ client.benefit }}</p>
            <p class="border-up">{{ client.name }} | {{ client.industry }}</p>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
  return {
    clients : [
      { id: 1, logo: 'arrow-pointer', name: 'Edwards Injury Law', industry: 'LEGAL', benefit: '50% of Sales Now Generated From Website Traffic', class: 'client-1 client-card', classImg: 'img-box1' },
      { id: 2, logo: 'medal', name: 'Ultimate Renovations', industry: 'HOME RENOVATIONS', benefit: '#1 Position on Google in Less Than 12 Months!', class: 'client-2 client-card', classImg: 'img-box2' },
      { id: 3, logo: 'earth-americas', name: 'Pick-n-Pull', industry: 'AUTOMOTIVE', benefit: 'Canada-Wide Growth', class: 'client-3 client-card', classImg: 'img-box3' },
      { id: 4, logo: 'paintbrush', name: 'Toronto Family Hearing', industry: 'HEALTH', benefit: 'Enhanced Brand Positioning & Messaging', class: 'client-4 client-card', classImg: 'img-box4' },
      { id: 5, logo: 'store', name: 'Unison', industry: 'REAL ESTATE', benefit: '300% Increase in Leads from Online Inquiries', class: 'client-5 client-card', classImg: 'img-box5' },
      { id: 6, logo: 'arrow-turn-up', name: 'Prime Hair Clinic', industry: 'HEALTH', benefit: 'Unprecedented Growth Due to Online Visibility', class: 'client-6 client-card', classImg: 'img-box6' },
    ]
    }
  }
}
</script>

<style scoped>
.client-6:hover .img-box6 {
  background-image: url("/assets/client-img/case-studies_prime-logo-fc-2.webp");
}

.client-6:hover {
  background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url("/assets/client-img/portfolio_case-study_prime-hair-bg.webp");
}

.img-box6 {
  width: 300px;
  height: 200px;
  background-image: url("/assets/client-img/case-studies_prime-logo-white-2.webp");
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: 400ms;
}

.client-5:hover .img-box5 {
  background-image: url("/assets/client-img/case-studies_unison-logo-fc-2.webp");
}

.client-5:hover {
  background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url("/assets/client-img/portfolio_case-study_unison-bg.webp");
}

.img-box5 {
  width: 300px;
  height: 200px;
  background-image: url("/assets/client-img/case-studies_unison-logo-white-3.webp");
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: 400ms;
}

.client-4:hover .img-box4 {
  background-image: url("/assets/client-img/portfolio-tfh-logo-color.png");
}

.client-4:hover {
  background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url("/assets/client-img/portfolio-tfh-bg.webp");
}

.img-box4 {
  width: 300px;
  height: 200px;
  background-image: url("/assets/client-img/portfolio-tfh-logo-white.png");
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: 400ms;
}

.client-3:hover .img-box3 {
  background-image: url("/assets/client-img/logo-pick-n-pull-black.webp");
}

.client-3:hover {
  background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url("/assets/client-img/case-study-pick-n-pull-bw.webp");
}

.img-box3 {
  width: 200px;
  height: 150px;
  background-image: url("/assets/client-img/logo-pick-n-pull-white.webp");
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: 400ms;
}

.img-box1 {
  width: 200px;
  height: 150px;
  background-image: url("/assets/client-img/edwards-injury-law_logo-01.webp");
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: 400ms;
}

.client-1:hover .img-box1 {
  background-image: url("/assets/client-img/edwards-injury-law_logo-02.webp");
}

.client-1:hover {
  background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url("/assets/client-img/image_law.webp");
}

.img-box2 {
  width: 200px;
  height: 150px;
  background-image: url("/assets/client-img/ultimate-renovations-logo-portfolio-scaled.png");
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: 400ms;
}

.client-2:hover .img-box2 {
  background-image: url("/assets/client-img/logo-ultimate-renovations-colored.png");
}

.client-2:hover {
  background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url("/assets/client-img/ultimate-behind.png");
}

.client-6 {
  background-image: url("/assets/client-img/portfolio_case-study_prime-hair-bg.webp");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: 400ms;
}

.client-5 {
  background-image: url("/assets/client-img/portfolio_case-study_unison-bg.webp");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: 400ms;
}

.client-4 {
  background-image: url("/assets/client-img/portfolio-tfh-bg.webp");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: 400ms;
}

.client-3 {
  background-image: url("/assets/client-img/case-study-pick-n-pull-bw.webp");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: 400ms;
}

.client-2 {
  background-image: url("/assets/client-img/ultimate-behind.png");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: 400ms;
}

.client-1 {
  background-image: url("/assets/client-img/image_law.webp");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: 400ms;
}

.client-card svg {
  font-size: 30px;
}

.client-suc-text {
  width: 100%;
}

.border-up {
  width: 98%;
  color: #ffffff;
  font-family: "Open Sans", Sans-serif;
  font-size: 15px;
  font-weight: 300;
  border-top: 1px solid #FFFFFF;
  text-align: center;
  padding: 5px;
}

.benefit-tex {
  font-family: "Noto Sans", Sans-serif;
  font-size: 18px;
  font-weight: 700;
  max-width: 260px;
  height: 40px;
  margin-top: 5px;
}

.con-btn-sm p {
  text-transform: uppercase;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  letter-spacing: 2.2px;
  border-radius: 100px;
  padding: 10px 50px;
  background-color: #E72335;
  color: #FFFFFF;
  text-align: center;
  transition: 300ms;
}

.con-btn-sm {
  text-decoration: none;
}

.client-suc-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0,0,0,0.47);
  padding-top: 10px;
  width: 99%;
}

.client-card {
  width: 33.3333%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #FFFFFF;
  text-align: center;
}

.client-suc-container {
  display: flex;
  flex-flow: row wrap;
}

.to-up {
  text-transform: uppercase;
}

.feature-text {
  color: #1a2444;
  font-family: 'Noto Sans', sans-serif;
  font-size: 20px;
  font-weight: 100;
}

.success-text {
  margin: 0 0 1.5rem 0;
}
</style>