<template>
    <!--
    <the-chat/>
    <PreguntaCard :pregunta="pregunta" :nombre="nombre"></PreguntaCard>
    <OrangeCard :pin="pin"></OrangeCard>
    -->
  <init-page></init-page>
  <router-view></router-view>
</template>

<script>

import InitPage from "@/public/pages/InitPage.vue";

export default {
name: 'main-container',
components: {InitPage},
data() {
  return {
    sidebarVisible: false,
    pregunta: "¿Qué es la programación orientada a objetos?",
    nombre: "Juan Pérez",
    pin: "12345",
  };
},
};
</script>

<style scoped>

</style>
