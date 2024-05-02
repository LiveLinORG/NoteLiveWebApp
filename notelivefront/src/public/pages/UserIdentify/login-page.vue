<script>
import {defineComponent} from "vue";
import TheHeader from "@/App.vue";
import TheFooter from "@/App.vue";

export default defineComponent({
  components: {TheFooter, TheHeader}
})

</script>

<template>
  <the-header/>
  <div class="container-login-page">

  </div>
  <the-footer/>
</template>

<style>

</style>