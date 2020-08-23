<template>
  <div class="app">
    <router-view />
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {
    // console.log(2323232)
    // this.$http.post('/fs', [{ aaa: 2323, bbb: [{ a: '23' }] }])
  },
  methods: {},
}
</script>
<style lang="scss">
@import url('./css/reset.scss');
.app {
  height: 100%;
}
</style>
