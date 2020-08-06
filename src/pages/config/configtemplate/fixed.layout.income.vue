<template>
  <div>
    hhhh
  </div>
</template>
<script>
import qs from 'qs'
export default {
  name: 'FixedIncome',
  components: {},
  mounted() {
    console.log(
      qs.stringify({
        test: function () {
          return 10
        },
        test2: 2,
      })
    )
  },
}
</script>
<style lang=""></style>
