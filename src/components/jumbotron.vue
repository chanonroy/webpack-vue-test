<!-- HTML -->
<template>

  <div class="l-jumbotron">
    <div class="l-container">
      <div class="jumbotron">
        <h1> {{ title }} </h1>
        <h3> {{ message }} </h3>
        <img src="../assets/santa-claus.svg" alt="santa">
      </div>
    </div>
  </div>

</template>

<!-- JS -->
<script>
  export default {
    data() {
      return {
        title: 'Vue Application Test',
        message: 'This is an example of Vue components working in sync.'
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
  img { height: 100px; }
}

</style>
