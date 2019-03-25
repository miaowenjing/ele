<template>
  <div class="shoplist_container">
    <ul>
      <router-link to="/foo">
        to foo
        <section>
          <img src="../images/activity.png" alt>
        </section>
        <hgroup class="shop_right">
          <header class="shop_detail_header">
            <h4 class="shop_title">您好</h4>
            <ul class="shp_detail_ul">
              <li class="supports">保</li>
              <li class="supports">准</li>
              <li class="supports">票</li>
            </ul>
          </header>
          <div class="rating_order_num">
            <section></section>
          </div>
        </hgroup>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { shopList } from "src/service/getData";
import { imgBaseUrl } from "src/config/env";

export default {
  props: {
    msg: String
  },
  methods: {
    initData() {
      let res = shopList(32.03965, 118.78664, 0);
      console.log(res);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>


