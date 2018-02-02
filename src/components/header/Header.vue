<template>
    <div class="header">
      <div class="content-wrapper">
        <div class="menu" @click="togglelist()">
          <div class="icon-menu" ></div>
        </div>
        <div class="avatar"></div>

        <div class="content">
          <div class="icon-tv-logo" ></div>
          <div class="icon-cloud-download"></div>
          <div class="icon-folder-download"></div>
          <div class="icon-search"></div>
        </div>
      </div>
      <transition name="fold">
        <div class="menu-list" v-show="listShow" ref="linsContent">
          13456789
        </div>
      </transition>
      <div class="list-mask" v-show="listShow" @click="togglelist()"></div>
    </div>
</template>
<script>
  import IScroll from 'iscroll'
  import Velocity from 'velocity-animate'
    export default {
        data() {
            return {fold: true}
        },
      computed: {
        listShow() {
          let show = !this.fold
          if (show) {
            this.$nextTick(() => {
              if (!this.scroll) {
                // eslint-disable-next-line
                this.scroll = new IScroll(this.$refs.linsContent, {
                  click: true
                })
              } else {
                this.scroll.refresh()
              }
            })
          }
          return show
        }
      },
      methods: {
        togglelist() {
          this.fold = true
        }
      },
      component: {
          Velocity,
          IScroll
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  /*@import "../../common/stylus/index.styl"*/
  .header
    width 100%
    height 60px
    background-color #FA7299
    position relative
    font-size 0
    .content-wrapper
      vertical-align center
      line-height 25px
      .menu
        color white
        position absolute
        line-height 25px
        font-size 24px
        display block
        margin 15px 15px 15px 0px
      .avatar
        position absolute
        width 40px
        height 40px
        left 30px
        margin 10px
        display inline-block
        border-radius 50px
        background-color: #fff
      .content
        font-size 24px
        color white
        float right
        margin 15px
        & > div
          margin 5px
          float left

    .menu-list
      position absolute
      top 0
      left 0
      width 80%
      height 100%
      transition all 0.5s
      &.fold-enter, &.fold-leave-to
        opacity 0
        transform translateY(100%)
    .list-mask
      position fixed
      top 0
      left 0
      width 100%
      height 100%
      z-index 1
      background-filter: blur(10px)
      background rgba(7, 17, 27, 0.6)
</style>
