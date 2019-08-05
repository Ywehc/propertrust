<template>
  <div>
    <footer>
        <p> {{ message }}</p>
    </footer>
  </div>
</template>

<script>

import copy from '../copy/copy.json'

export default {
  name: 'Footer',
  props: {
    msg: String,
  },
  data: function() {
    return {
    message: copy.footer.copyright
    };
  }
}

</script>

<style style lang="scss" scoped>

footer {
    height: 20vh;
    background: $dark;
    color: $light;
}

p {
    text-align: center;
    margin: 30px;
    padding: 30px;
}

</style>
