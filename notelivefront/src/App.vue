<template>


  <the-header/>
  <the-footer/>

  <main-container></main-container>
</template>


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
  <style>
  #app {
    font-family: Roboto,serif;

  }
  </style>
