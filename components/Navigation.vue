<template>
  <header>
    <nav>
      <div>
        <NuxtLink :to="{ path: '/' }"><img src="assets/images/growme_logo_grey.webp" alt="" width="170" height="62"></NuxtLink>
      </div>
      <div>
        <ul class="menu-li">
          <li class="upp"><NuxtLink :to="{ path: '/about' }">About</NuxtLink></li>
          <li class="upp"><NuxtLink :to="{ path: '/services' }">Services</NuxtLink></li>
          <li class="upp"><NuxtLink :to="{ path: '/case-studies' }">Case Studies</NuxtLink></li>
          <li class="upp"><NuxtLink :to="{ path: '/contact' }">Contact</NuxtLink></li>
        </ul>
      </div>
      <div>
        <p class="con-btn"><NuxtLink :to="{ path: '/contact' }">Request Consultation</NuxtLink></p>
      </div>
    </nav>
  </header>
</template>

<style scoped>

header {
  width: 100%;
  display: flex;
  justify-content: center;
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
  position: fixed;
  z-index: 1;
  top: 0;
  width: 80%;
  padding: 15px 0px;
}

.menu-li {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}

.upp {
  margin: 0px 20px;
  font-size: 14px; 
}

.con-btn {
  background-color: #E72335;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  text-decoration: none;
  color: #FFFFFF;
}

.con-btn a {
  text-decoration: none;
  color: #FFFFFF;
}

</style>