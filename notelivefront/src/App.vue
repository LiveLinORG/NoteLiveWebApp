<template>

<the-footer></the-footer>

<the-header></the-header>

  <HelloWorld />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheFooter from "@/shared/components/TheFooter.vue";
import TheHeader from "@/shared/components/Theheader.vue";

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    HelloWorld
  }
}
</script>

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
