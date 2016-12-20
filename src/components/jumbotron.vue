<!-- HTML -->
<template>

  <div class="l-jumbotron">
    <div class="l-container">
      <div class="jumbotron">
        <h1> Vue App Test </h1>
        <h3> This is an example of Vue components working in sync. </h3>
      </div>
    </div>
  </div>

</template>

<!-- JS -->
<script>
  export default {
    data() {
      return {
        title: 'VueApp',
        message: 'App to test out Vue.js'
      }
    }
  }
</script>

<!-- CSS -->
<style lang="scss">
@import '../styles/variables';
@import '../styles/layout';

.l-jumbotron {
  background-color: $color-jumbo;
  padding: 25px;
  height: 300px;
}

.jumbotron {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 100%;
  h1 { color: white; margin: 0;}
  h3 { color: lightgrey; }
}

</style>
