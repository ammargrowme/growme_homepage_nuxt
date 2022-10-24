<template>
  <header :class="{changeColor: scrollPosition > 50}">
    <nav>
      <div>
        <NuxtLink :to="{ path: '/' }"><img src="assets/images/growme_logo_grey.webp" alt="GrowME Logo" width="170" height="62"></NuxtLink>
      </div>
      <div>
        <ul class="menu-li">
          <li class="upp"><NuxtLink :to="{ path: '/about' }">About</NuxtLink></li>
          <li class="upp"><NuxtLink :to="{ path: '/services' }">Services</NuxtLink></li>
          <li class="upp"><NuxtLink :to="{ path: '/portfolio' }">Portfolio</NuxtLink></li>
          <li class="upp"><NuxtLink :to="{ path: '/contact' }">Contact</NuxtLink></li>
        </ul>
      </div>
      <div>
        <NuxtLink :to="{ path: '/contact' }" class="btn-lin"><p class="con-btn">Request Consultation</p></NuxtLink>
      </div>
    </nav>
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
      if (this.windowWidth <= 954){
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
.changeColor {
  background-color: #333333;
}

header {
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 1;
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

nav {
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