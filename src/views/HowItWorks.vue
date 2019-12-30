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
  p {
    font-size: 2rem;
    font-family: 'Varela Round', sans-serif;
    color: $dark;
    text-align: left;
  }
  .container {
      min-height: 80vh;
      padding-top: 200px;
  }
@media screen and (max-width: 576px) {
  p {
    font-size: 1.3rem;
    text-align: left;
  }
  .container {
    padding: 10px 40px;
    min-height: 60vh;
    margin-top: 40px;
  }
}
</style>