<template>
  <div class="container">
    <p>{{p1}}</p>
    <p>{{p2}}</p>
    <p>{{p3}}</p>
    <p>{{p4}}</p>
  </div>
</template>

<script>
import copy from '../copy/copy.json'

export default {
  data() {
    return {
      p1: copy.howItWorks.p1,
      p2: copy.howItWorks.p2,
      p3: copy.howItWorks.p3,
      p4: copy.howItWorks.p4
    }
  }
}
</script>

<style lang="scss" scoped>
    h2 {
        font-family: 'Passion One', cursive;
        color: $dark;
        text-align: center;
        margin-bottom: 20px;
    }
    p {
      font-size: 20px;
    }
    .container {
        min-height: 60vh;
        padding: 20px 60px;
    }
</style>