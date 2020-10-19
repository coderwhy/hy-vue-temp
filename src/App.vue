<template>
  <div id="app">
    <router-view></router-view>
    <div>
      <router-link to="/home">首页</router-link>
      <router-link to="/login">登录</router-link>
    </div>
    <img alt="Vue logo" src="./assets/img/logo.png">
    <HelloWorld msg="a coderwhy vue template"/>
  </div>
</template>

<script>
import HelloWorld from 'components/HelloWorld.vue';

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
