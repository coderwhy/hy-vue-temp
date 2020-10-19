<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/img/logo.png">
    <HelloWorld msg="a coderwhy vue template"/>
  </div>
</template>

<script>
import HelloWorld from 'components/HelloWorld.vue';
import request from 'services/request';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created: function() {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
