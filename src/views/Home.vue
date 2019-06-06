<template>
  <div class="home">
    <Experience/>
  </div>
</template>

<script>

import Experience from '../components/Experience'

export default {
  name: "home",
  components: {
    Experience,
  }
};
</script>

<style scoped lang="scss">
.home {
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    position: absolute;
    top: 0;
}
</style>