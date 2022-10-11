<template>
  <nav>
    <div>
      <img src="assets/images/growme_logo_grey.webp" alt="" width="170" height="62">
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
      <p class="con-btn">Request Consultation</p>
    </div>
  </nav>
</template>

<style scoped>

nav ul {
  list-style: none;
}

li a {
  text-decoration: none;
  color: #FFFFFF;
}

nav {
  text-transform: uppercase;
  color: #FFFFFF;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
}

</style>