<template>
  <body>
  <init-page></init-page>
  <router-view></router-view>
  </body>

</template>

<script>

import InitPage from "@/public/pages/InitPage.vue";

export default {
name: 'main-container',
components: {InitPage},
data() {
  return {
  };
},
};
</script>

<style scoped>
body{
  margin: 0;
  padding:0;
  height: auto;
  overflow: hidden;

}
</style>
