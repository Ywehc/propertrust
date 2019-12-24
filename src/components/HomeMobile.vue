<template>
     <div class="container">
        <h1>{{heading}}</h1>
        <router-link 
            to="/selling" 
            tag="button" 
            class="btn btn-primary btn-lg selling">I'm selling a property
        </router-link>
        <router-link
            to="/buying"
            tag="button"
            class="btn btn-primary btn-lg buying">I'm buying a property
        </router-link>
        <router-link
            to="/how-it-works"
            tag="button"
            class="btn btn-primary btn-lg how-it-works">How it works
        </router-link>
        <br>
        <br>
        <button type="button" class="btn btn-primary btn-sm sign-in">Sign In</button>
        <button type="button" class="btn btn-primary btn-sm contact">Contact Us</button>
      </div>
</template>

<script>
import copy from '../copy/copy.json'


export default {
    data: function() {
        return {
            heading: copy.home.header
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Varela+Round&display=swap');

.container {
    padding: 20px;
    display: flex;
    flex-direction: column;
}
button {
    margin: 6px auto;
    border-color: $dark;
}
button.btn-lg {
    width: 240px;
    }
button.btn-sm {
    width: 140px;
    color: $dark;
    background: white;
}
button.btn-primary.selling {
    background: $light-blue;
}
button.btn-primary.buying {
    background: $mid-blue;
}
button.btn-primary.how-it-works {
    background: $dark-blue;
}
h1 {
  font-size: 30px;
  text-align: center;
  margin-bottom: 40px;
  color: $dark;
}
</style>