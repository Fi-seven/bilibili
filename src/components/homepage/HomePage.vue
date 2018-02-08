<template>
    <div class="video">
      <div class="test"></div>
      <div class="video-wrapper" ref="videoWrapper">
        <ul>
          <li v-for="item in video"
              class="video-item"
              :key="item.aid">
            <div class="photo">
              <img :src="item.pic" width="160" height="100"/>
            </div>
            <div class="video-text">{{item.description}}</div>
            <div class="video-dec">{{item.typename}}</div>
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
    top 60px
    bottom 46px
    width 100%
    overflow hidden
    background-color: #E5E5E5
    .video-wrapper
      flex 0 0 auto
      width 100%
      height 100%
      .video-item
        position relative
        height 160px
        width 160px
        border-radius 5px
        background-color: #fff
        border 1px solid #ccc
        .video-text
          height 30px
          padding 0px 0px 0px 5px
          font-size 16px
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
        .video-dec
          color gray
          padding 0px 0px 0px 7px
          font-size 14px
</style>
