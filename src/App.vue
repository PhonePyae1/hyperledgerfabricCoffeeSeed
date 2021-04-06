<template>
  <img alt="logo" src="./assets/coffeelogo.jpg">
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/member">Members</router-link>
  </div>
  <transition
    mode="in-out"
    enter-active-class="animate__animated animate__fadeOut"
    leave-active-class="animate__animated animate__fadeIn"
  >
    <router-view/>
  </transition>
</template>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
img {
  margin-top: 10px;
  border-radius: 50%;
  width: 150px;
  height: 150px;
}
</style>
