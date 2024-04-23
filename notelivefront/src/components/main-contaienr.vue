<template>
  <div>
    <the-chat/>
    <PreguntaCard :pregunta="pregunta" :nombre="nombre"></PreguntaCard>
  </div>
</template>

<script>
import TheChat from "@/shared/components/TheChat.vue";
import PreguntaCard from "@/shared/components/PreguntaCard.vue";

export default {
  name: 'main-container',
  components: { TheChat, PreguntaCard },
  data() {
    return {
      sidebarVisible: false,
      pregunta: "¿Qué es la programación orientada a objetos?",
      nombre: "Juan Pérez"
    };
  },
};
</script>

<style scoped>
/* Puedes agregar estilos aquí si es necesario */
</style>
