<script>
export default {
  props: {
    text: String,
  }
}

</script>

<template>
  <li>{{text}}</li>

</template>

<style scoped>
li{
  list-style-type: none;

}

</style>