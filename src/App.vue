<template>
  <div id="app">
    <Footer></Footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/footer/footer.vue'

export default {
  name: 'app',
  components: {
    Footer,
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
#app {


}
</style>
