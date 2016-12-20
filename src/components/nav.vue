<template>
  <div>

    <div class="l-nav">
      <div class="l-container">
        <div class="nav">
          <div class="nav__logo">
            <img src="../assets/logo.png">
            <h2> {{ name }} </h2>
          </div>
          <div class="nav__links">
            <div> Menu </div>
            <div> Settings </div>
            <div> Login </div>
          </div>
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
@import '../styles/variables';
@import '../styles/layout'; // l-container

.l-nav {
  background-color: $color-nav;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: lightgrey;
  height: 75px;
  width: 100%;
  &__logo {
    display: flex;
    align-items: center;
    img { height: 50px; margin-right: 15px; }
  }
  &__links {
    display: flex;
    div { margin-right: 25px; }
  }
}

</style>
