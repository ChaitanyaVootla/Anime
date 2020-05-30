<template>
  <router-view></router-view>
</template>

<script>
  export default {
    name: "Home",
    created() {
      // this.$router.go({name: 'Top'});
    }
  };
</script>

<style>
  body {
    background: #191919;
  }
  .main-container {
    display: flex;
    justify-content: center;
  }
  .display-flex {
    display: flex;
    flex-wrap: wrap;
    max-width: 75%;
  }
  .anime-div {
    margin: 10px 20px;
    width: 170px;
  }
  .anime-title {
    white-space: pre-wrap;
    max-width: fit-content;
    padding-top: 10px;
    font-weight: 700;
    color: white;
  }
  .anime-image {
    border-radius: 3px;
    max-height: 250px;
  }
</style>
