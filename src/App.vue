<template>
  <div id="app">
    <Head></Head>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Head from './components/Head.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    Head
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
  width: 100vw;
  height: 100vh;


}
body,div,p,span,h1,h2,h3,h4,h5{
  margin:0;
  padding: 0;
  list-style: none;
}

</style>
