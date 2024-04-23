<script>
export default {
  name: "elMensaje",
  props: {
    nombre: String,
    texto: String
  }
}

</script>

<template>
<div>
  <Avatar icon="pi pi-user" shape="circle" size="large" />
  <h4>{{ nombre }}</h4>
  <p>{{ texto }}</p>
</div>
</template>

<style scoped>

</style>