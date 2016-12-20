<template>
  <div>

    <div class="l-nav">
      <div class="l-container">
        <div class="nav">
          <img class="nav__logo" src="../assets/logo.png">
          <h2> {{ name }}</h2>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'VueApp'
    }
  }
}
</script>

<style lang="scss" scoped>
$color-red: orange;
.nav {
  background-color: $color-red;
}
</style>
