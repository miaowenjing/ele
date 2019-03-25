<template>
  <div class="hello">
   	<div class="shop_list_container">
	    	<header class="shop_header">
	    		<span class="shop_header_title">附近商家</span>
	    	</header>
        <shopList></shopList>
    	</div>
     <Footer></Footer>
  </div>
</template>

<script>
import shopList from '../../components/shoplist.vue'
import Footer from '../../components/footer/footer.vue'
export default {
   name: 'Msite',
   components: {
    Footer,
    shopList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
