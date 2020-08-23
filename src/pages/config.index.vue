<template>
  <div class="box">
    <div class="top"></div>
    <div class="center">
      <div id="a" class="a"></div>
      <div id="b" class="b"></div>
      <div id="c" class="c"></div>
    </div>
    <div class="bottom"></div>
  </div>
</template>
<script>
import bar_1 from '@/chartconfig/bar_1.js'
import pie_1 from '@/chartconfig/pie_1.js'
import line_1 from '@/chartconfig/line_1.js'
export default {
  components: {},
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {
    const a = this.$echarts.init(document.getElementById('a'))
    a.setOption(bar_1)
    const b = this.$echarts.init(document.getElementById('b'))
    b.setOption(line_1)
    const c = this.$echarts.init(document.getElementById('c'))
    c.setOption(pie_1)
  },
  methods: {},
}
</script>
<style lang="scss">
.box {
  width: 100%;
  height: 100%;
  background: #4291eb;
  background-image: linear-gradient(#0e2251 0, #2b69aa 100%);
  background-image: radial-gradient(circle, #2b69aa, #0e2251);
  position: relative;
  overflow: hidden;
  & > div {
    position: absolute;
    width: 120%;
    background: azure;
    height: 50%;
  }
  .top {
    border-radius: 50%;
    top: -30%;
    left: -10%;
  }
  .center {
    z-index: 1;
    width: 100%;
    top: 20%;
    background: rgba(66, 145, 235, 0);
    transform-style: preserve-3d;
    transform-origin: 50% 50%;
    transform: perspective(880px);
    // animation: look 8s ease 2s infinite normal forwards;
    & > div {
      position: absolute;
      width: 30%;
      height: 90%;
      background: rgba(77, 131, 231, 0);
      //   border: 1px solid rgb(61, 126, 247);
      //   box-shadow: 0 0 3px 3px rgba(36, 114, 240, 0.4) inset, 0 0 8px 8px rgba(36, 114, 240, 0.3);
      box-shadow: 0 0 20px 4px rgba(76, 203, 245, 0.452) inset;
    }
    .a {
      left: 2%;
      width: 18%;
      transform-origin: left;
      transform: rotateY(90deg);
    }
    .b {
      width: 55%;
      left: 23%;
      height: 70%;
      top: 10%;
      //   transform: translateZ(-50px);
    }
    .c {
      right: 2%;
      width: 18%;
      transform-origin: right;
      transform: rotateY(-90deg);
    }
  }
  .bottom {
    height: 60%;
    width: 110%;
    border-radius: 50%;
    bottom: -25%;
    left: -5%;
  }
}
@keyframes look {
  0% {
    transform: rotateX(40deg) rotateY(40deg);
  }
  50% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(40deg) rotateY(-40deg);
  }
}
</style>
