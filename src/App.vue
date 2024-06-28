<template>

  <the-header/>
  <main-container></main-container>
  <the-footer/>

</template>


  <script>
  import TheFooter from "@/shared/components/TheFooter.vue";
  import TheHeader from "@/shared/components/Theheader.vue";
  import MainContainer from "@/notelive/components/main-contaienr.vue";

  export default {
    name: 'App',
    components: {
      MainContainer,
      TheHeader,
      TheFooter
    },
    mounted() {
      fetch("./assets/db.json").then(res => res.json()).then(data=>console.log(data));
    }
  }
  </script>
  <style>
  #app {
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings:
        "slnt" 0;
  }

  </style>
