<script>
import TheChat from "@/shared/components/TheChat.vue";

export default {
  name: "studentSession",
  components: {TheChat},
  title: "Student Session"
}
</script>

<template>
  <section class="Session-container">
    <section class="Chat-container">
      <TheChat></TheChat>
    </section>
    <section class="diaposity-container"></section>
    <section class="questions-container"></section>
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
  background-color: yellow;
  height: 95%;

}

.questions-container {
  grid-column: 3 / 4;
  background-color: red;
}

</style>