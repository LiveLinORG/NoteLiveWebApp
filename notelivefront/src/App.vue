<<<<<<< Updated upstream
<template>


  <the-header/>
  <the-footer/>

  <main-container></main-container>
</template>
=======
  <template>
    <the-header/>
    <main-container></main-container>

    <the-footer/>

  </template>
>>>>>>> Stashed changes

  <script>
  import TheFooter from "@/shared/components/TheFooter.vue";
  import TheHeader from "@/shared/components/Theheader.vue";
  import MainContainer from "@/components/main-contaienr.vue";

  export default {
    name: 'App',
    components: {
      MainContainer,
      TheHeader,
      TheFooter
    }
  }
  </script>

<<<<<<< Updated upstream
<style>
#app {
  font-family: Roboto,serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
=======
  <style>
  #app {
    font-family: Roboto,serif;

  }
  </style>
>>>>>>> Stashed changes
