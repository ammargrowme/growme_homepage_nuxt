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
        <NuxtLink :to="{ path: '/contact' }" class="btn-lin"><p class="con-btn">Request Consultation</p></NuxtLink>
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