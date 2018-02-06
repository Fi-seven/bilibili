<template>
    <div class="video">
      <div class="video-wrapper" ref="videoWrapper">
        <ul>
          <li v-for="item in video"
              class="video-item"
              :key="item.aid">
            <div class="pic">{{item.aid}}</div>
            <div class="text"></div>
            <div class="dec"></div>

          </li>
        </ul>
      </div>
    </div>
</template>
<script>
  import IScroll from 'iscroll/build/iscroll-probe'
export default {
  props: {
    video: Object
  },
    data () {
        return {}
    },
  created() {
    this.$axios.get('/api/video')
      .then((res) => {
        res = res.data
        if (res.errno === 0) {
          this.video = res.data
          //            The iScroll needs to be initiated when the DOM is ready
//            保证需要用到iscroll的element内容必须加载完毕
          this.$nextTick(() => {
            this._initScroll()
          })
        }
      })
      .catch((error) => {
        alert(error)
      })
  },
  methods: {
    _initScroll() {
      this.videoWrapper = new IScroll(this.$refs.videoWrapper, {
        click: true
      })
      let self = this
      this.videoWrapper.on('scroll', function () {
        self.scrollY = Math.abs(Math.round(this.y))
      })
    }
  },
  components: {
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .video
    display flex
    position absolute
    top 100px
    bottom 46px
    width 100%
    overflow hidden
    background-color: #E5E5E5
    .video-wrapper
      flex 0 0 170px
      /*width 100px*/
      height 100%
      /*display inline-block*/
      .video-item
        position relative
        height 170px
        width 160px
        border-radius 5px
        background-color: #fff
        border 1px solid #000
</style>
