<template>
  <div class="footer">
    <section class='guide_item'>
      <span>外卖</span>
    </section>
      <section class='guide_item'>
      <span>搜索</span>
    </section>
      <section class='guide_item'>
      <span>订单</span>
    </section>
      <section class='guide_item'>
      <span>我的</span>
    </section>
  </div>
</template>

<script>
export default {
     name: 'footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer{
      position:fixed;
      bottom:0;
      right:0;
      right:0;
      display:flex; 
      box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
      height:50px; 
      width:100%;
      
  }
  .guide_item{
     flex:1;
     text-align:center;
     line-height:50px;
  }
</style>
