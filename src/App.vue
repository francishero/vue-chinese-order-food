<template>
  <div id="app">
    <app-header :seller="seller"></app-header>
    <div class="tab border-1px">
        <div class="tab-item">
          <router-link to="/goods">Goods</router-link>
        </div>
      <div class="tab-item">
        <router-link to="/ratings">Ratings</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">Seller</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import header from './components/header/header'
  export default {
  data () {
    return {
      seller: {}
    }
  },
  components: {
    'app-header': header
  },
    created () {
    this.$http.get('http://ustbhuangyi.com/sell/api/seller').then(response => {
      response = response.body
      if (response.errno === 0) {
        this.seller = response.data
      }
      console.log(this.seller)
    })
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      border-1px(rgba(7, 17, 27, 0.1))
      .tab-item
        flex: 1
        text-align: center
        & > a
          display: block
          font-size: 14px
          color: rgb(77,85,93)
          &.active
            color: rgb(240,20,20)
</style>
