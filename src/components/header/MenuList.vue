<template>
    <div class="menu-wrapper">
      <transition name="fold">
        <div class="menu-list">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
          </ul>
        </div>
      </transition>
      <div class="list-mask" @click="togglelist()"></div>
    </div>
</template>
<script>
    export default {
      data() {
        return {fold: true}
      },
      methods: {
        togglelist() {
          this.fold = !this.fold
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .menu-list
    position absolute
    top 0
    left 0
    width 80%
    transition all 0.5s
    &.fold-enter, &.fold-leave-to
      opacity 0
      transform translateX(100%)
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
