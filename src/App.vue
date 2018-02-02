<template>
  <div id="app">
    <ele-header/>
    <div class="tab">
      <div class="tab-item">
        <router-link to="homepage"><div class="icon-home"></div>首页</router-link>
      </div>
      <div class="tab-item">
        <router-link to="partitions"><div class="icon-hangouts"></div>分区</router-link>
      </div>
      <div class="tab-item">
        <router-link to="dynamic"><div class="icon-basecamp"></div>动态</router-link>
      </div>
      <div class="tab-item">
        <router-link to="message"><div class="icon-hangouts"></div>消息</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import EleHeader from './components/header/Header'
export default {
  name: 'App',
  components: {
    EleHeader
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  .tab
    position absolute
    left 0
    bottom 0
    display flex
    width 100%
    height 40px
    line-height 40px
    .tab-item
      flex 1
      text-align center
      & > a
          position relative
          bottom 5px
          display block
          font-size 14px
          color #B1B0AF
          &.active
            color #FA7299
</style>
