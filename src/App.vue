<template>
  <div id="app">
        <div class="nav">
        <ul>
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
    </div>
     <div class="main">
       <router-view></router-view>
     </div>
     <Msite></Msite>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/footer/footer.vue'
import Msite from './pages/msite/msite.vue'
import home from './components/Home.vue'
import about from './components/About.vue'

export default {
  name: 'app',
  components: {
    Footer,
    Msite,
    home,
    about
  }
}
</script>

<style>

</style>
