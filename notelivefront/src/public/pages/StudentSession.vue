<script>
import TheChat from "@/shared/components/TheChat.vue";
import PreguntaCard from "@/shared/components/PreguntaCard.vue";

export default {
  name: "studentSession",
  components: {PreguntaCard, TheChat},
  title: "Student Session"
}
</script>

<template>
  <section class="Session-container">
    <section class="Chat-container">
      <TheChat></TheChat>
    </section>
    <section class="diaposity-container"></section>
    <section class="questions-container">
      <PreguntaCard pregunta="¿Cómo afecta la inmutabilidad en .NET a la concurrencia en aplicaciones multi-hilo?" nombre="Carlos Sánchez"></PreguntaCard>
      <PreguntaCard pregunta="¿Cuáles son las mejores prácticas para diseñar clases inmutables en C#?" nombre="Laura González"></PreguntaCard>
      <PreguntaCard pregunta="¿Qué ventajas ofrece la inmutabilidad en el desarrollo de software en el ecosistema .NET?" nombre="Pedro Rodríguez"></PreguntaCard>
      <PreguntaCard pregunta="¿Cómo puede la inmutabilidad mejorar el rendimiento de las aplicaciones en .NET?" nombre="Alejandro Pérez"></PreguntaCard>

    </section>
  </section>
</template>

<style scoped>
.Session-container {
  height: 80vh;
  padding:5vh;
  display: grid;
  grid-template-columns: 0.5fr 2fr 0.5fr;
  grid-template-rows: auto;
  grid-gap:10vh;
}
.Chat-container {
  grid-column: 1 / 2;
  height: 90%;

}

.diaposity-container {
  grid-column: 2 / 3;
  background-color: rgba(255, 255, 255, 0.36);
  height: 95%;

}

.questions-container {
  grid-column: 3 / 4;
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:center;
  gap:3vh;
  padding:1vh;
}

</style>