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
    background: $dark;
    color: $light;
    height: 200px;
}

p {
    text-align: center;
    margin:30px ;
    padding: 60px;
}
@media only screen and (min-height: 950px) {
  footer {
    height: 400px;
  }
  p {
    padding-top: 150px;
  }
}

</style>
