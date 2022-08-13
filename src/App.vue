<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "@/components/Header/Header";
export default {
  components: {Header}
}
</script>

<style lang="scss">
@import './assets/styles/normalize.css';
@import './assets/styles/flex-box.css';
@import './assets/styles/global.css';
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;700&family=Montserrat:wght@300;400&family=Roboto:wght@300;400;500;700&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #002542;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>