<template>
  <div>
    <the-chat/>
    <PreguntaCard :pregunta="pregunta" :nombre="nombre"></PreguntaCard>
    <OrangeCard :pin="pin"></OrangeCard>
  </div>
</template>

<script>
import TheChat from "@/shared/components/TheChat.vue";
import PreguntaCard from "@/shared/components/PreguntaCard.vue";
import OrangeCard from "@/shared/components/OrangeCard.vue";

export default {
  name: 'main-container',
  components: {OrangeCard, TheChat, PreguntaCard },
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
/* Puedes agregar estilos aquí si es necesario */
</style>
