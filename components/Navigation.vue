<template>
  <header :class="{changeColor: scrollPosition > 50}">
    <nav class="desk-nav">
      <div>
        <NuxtLink :to="{ path: '/' }"><nuxt-img src="/assets/images/logo_only_white.webp" alt="GrowME Logo" width="180.6" height="79.6" class="main-logo"/></NuxtLink>
      </div>
      <div>
        <ul v-show="!mobile" class="menu-li">
          <li class="upp"><NuxtLink :to="{ path: '/about' }">About</NuxtLink></li>
          <li class="upp"><NuxtLink :to="{ path: '/services' }">Services</NuxtLink></li>
          <li class="upp"><NuxtLink :to="{ path: '/portfolio' }">Portfolio</NuxtLink></li>
          <li class="upp"><NuxtLink :to="{ path: '/contact' }">Contact</NuxtLink></li>
        </ul>
      </div>
      <div v-show="mobile" class="phone-box">
        <a href="tel:+18555476963" class="btn-lin"><fa icon="phone" /></a>
      </div>
      <div class="con-box">
        <NuxtLink :to="{ path: '/' }" class="btn-lin"><p class="con-btn">Request Consultation</p></NuxtLink>
      </div>
      <div @click="toggleMobileNav" v-show="mobile" class="hamburger" :class="{'hamburger open' : mobileNav}">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
    <Transition name="navfade">
      <nav v-show="mobileNav" class="mobile-nav open" :class="{'mobile-nav open' : toggleMobileNav }">
        <ul>
          <li><NuxtLink :to="{ path: '/about' }">About</NuxtLink></li>
          <li><NuxtLink :to="{ path: '/services' }">Services</NuxtLink></li>
          <li><NuxtLink :to="{ path: '/portfolio' }">Portfolio</NuxtLink></li>
          <li><NuxtLink :to="{ path: '/contact' }">Contact</NuxtLink></li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>

<script>
export default {
  name: 'navigation',
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      changeBackground: null,
      scrollPosition: null,
    }
  },
  mounted() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },
    checkScreen() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 1024){
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileNav = false
      return
    },
    updateScroll() {
       this.scrollPosition = window.scrollY
    },
  }
}
</script>


<style scoped>
/* ********** */
/* Mobile Nav */
/* ********** */
.navfade-enter-active,
.navfade-leave-active {
  transition: opacity 200ms ease;
}

.navfade-enter,
.navfade-leave-to {
  opacity: 0;
}
.hamburger {
  display: none;
  cursor: pointer;
}

.bar {
  display: block;
  width: 26px;
  height: 3px;
  margin: 6px auto;
  border-radius: 15px;
  background-color: #FFFFFF;
  transition: 300ms;
}

@media screen and (max-width: 1024px) {
  .phone-box svg {
    font-size: 16px;
    color: #e72335;
    padding: 8px 9px;
    transition: 300ms;
  }
  .phone-box {
    border: 3px solid #e72335;
    border-radius: 50px;
    transition: 300ms;
  }
  .phone-box:hover {
    background-color: #e72335;
  }
  .phone-box:hover svg {
    color: #FFFFFF;
  }
  .con-btn {
    width: 83px;
    text-align: center;
    border-radius: 50px !important;
    font-size: 12px !important;
  }

  .desk-nav {
    min-width: 100vw;
    height: 100px;
  }
  header {
    display: block !important;
  }
  .main-logo {
    max-width: 130px;
    max-height: 59px;
  }
  .desktop-nav {
    display: none;
  }
  .hamburger {
    display: block;
    background-color: #e72335;
    padding: 5px 10px;
  }
  .hamburger.open .bar:nth-child(2){
    opacity: 0;
  }
  .hamburger.open .bar:nth-child(1){
    transform: translateY(9px) rotate(45deg);
  }
  .hamburger.open .bar:nth-child(3){
    transform: translateY(-8.5px) rotate(-45deg);
  }
  .mobile-nav {
    display: block;
    position: relative;
    width: 100%;
    background-color: #333333;
    margin-bottom: 20px;
    font-family: 'Noto Sans', sans-serif;
    text-transform: uppercase;
  }
  .mobile-nav.open {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .mobile-nav.open ul {
    margin: auto 0px;
    padding: 0px;
  }
  .mobile-nav.open li {
    list-style-type: none;
    font-size: 14px;
    padding: 25px
  }
}

/* *********** */
/* Desktop Nav */
/* *********** */

.main-logo {
  width: 180.6px;
  height: 79.6px;
}

.changeColor {
  background-color: #333333;
}

header {
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 10;
  top: 0;
  transition: 300ms;
}

nav ul {
  list-style: none;
}

li a {
  text-decoration: none;
  color: #FFFFFF;
}

.desk-nav {
  font-family: 'Noto Sans', sans-serif;
  text-transform: uppercase;
  color: #FFFFFF;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 85%;
  padding: 10px 0px;
}

.btn-lin {
  text-decoration: none;
}

.menu-li {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}
/* test */
.con-btn {
  background-color: #E72335;
  padding: 6px 20px;
  border-radius: 20px;
  font-size: 14px;
  text-decoration: none;
  color: #FFFFFF;
  transition: 300ms;
}

.con-btn:hover {
  background-color: #d42030;
}

.con-btn a {
  text-decoration: none;
  color: #FFFFFF;
}

.upp a {
  margin: 0px 20px;
  font-size: 14px;
  transition: 500ms;
}

.upp a:hover {
  color: #E72335;
}

</style>