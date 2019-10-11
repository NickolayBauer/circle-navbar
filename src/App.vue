<template>
  <div id="app">
    <Circle></Circle>
  </div>
</template>

<script>
import Circle from './components/circle.vue'

export default {
  name: 'app',
  components: {
    Circle
  }
}
</script>

<style lang="scss">
  
  $color-bg: #212F3D;
  
  body {
    padding: 50px;
    background:$color-bg;
  }
</style>
