<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

    <my-header></my-header>
    <my-header></my-header>
    
    <router-view/>

    <!-- <router-view name="title1" />
    <router-view name="title2" /> -->
  </div>
</template>

<script>
import MyHeader from '@/components/myHeader'
export default {
  name: 'App',
  components: {
    MyHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
