<template>
  <router-view />
</template>

<style lang='scss'>
body {
  text-align: center;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 1px;
  background-image: url('https://images4.alphacoders.com/108/108584.jpg');
  background-repeat: repeat;
  background-attachment: fixed;
  background-size: cover;
  -webkit-animation: backgroundScroll 30s linear 1;
  -webkit-animation-fill-mode: both;
  animation: backgroundScroll linear 30s 1;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
  -webkit-animation-direction: alternate-reverse;
}

@keyframes backgroundScroll {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -200px 0px;
  }
}

@-webkit-keyframes backgroundScroll {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -200px 0px;
  }
}

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
</style>
