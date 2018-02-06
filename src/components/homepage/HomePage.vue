<template>
    <div>i am homepage{{video.aid}}</div>
</template>
<script>
export default {
    data () {
        return {}
    },
  created() {
    this.$axios.get('/api/video')
      .then((res) => {
        res = res.data
        if (res.errno === 0) {
          this.video = res.data
        }
      })
      .catch((error) => {
        alert(error)
      })
  }
}
</script>

<style>

</style>
