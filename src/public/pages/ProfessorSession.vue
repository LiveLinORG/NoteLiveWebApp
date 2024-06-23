<template>
  <section class="Session-container">
    <section class="Chat-container">
      <TheChat :roomId="roomId" :userId="userId"></TheChat>
    </section>
    <section class="diaposity-container">
      <section class="ppt"></section>
      <section class="question-sender">
        <input type="text" class="question-placehold" placeholder="Ingresa una pregunta para el profesor..." />
        <button class="send-svg"></button>
      </section>
    </section>
    <section class="questions-container">
      <PreguntaCard pregunta="¿Cómo afecta la inmutabilidad en .NET a la concurrencia en aplicaciones multi-hilo?" nombre="Carlos Sánchez"></PreguntaCard>
    </section>
  </section>
</template>

<script>
import {onMounted, ref} from 'vue';
import TheChat from "@/shared/components/TheChat.vue";
import PreguntaCard from "@/shared/components/PreguntaCard.vue";
import {modificarSesionIniciadaDelPin} from "@/notelive/services/pinService.";
import {iduser, pinvalue} from "../../../router/router";


export default {
  name: "ProfessorSession",
  components: { PreguntaCard, TheChat },
   setup() {
    // Emit socket event
     const pin =pinvalue.value;
     const roomId = ref('');
     const userId = ref('');
    onMounted(() => {
      roomId.value = pinvalue.value; // Asigna el valor del pinvalue a roomId
      userId.value = iduser.value; // Aquí debes obtener el userId del usuario actual, asegúrate de tener esta lógica implementada

      modificarSesionIniciadaDelPin(pin);
    });

    return {
      roomId,
      userId,
    };
  }
};
</script>
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
  height: 95%;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:0;
  justify-content: flex-start;
}
.ppt{
  width:100%;
  height:90%;
  background-color:red;
}
.question-sender{
  height:20%;
  width:100%;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  gap:3vw;
}
.question-placehold{
  border:none;
  width:60%;
  height:40%;
  border-radius:1.1vh;
  transition: transform 0.3s ease;
  font-size: 1em;
  padding-left: 4vh;

}
.question-placehold:hover{
  transform: scale(1.05);
}
.question-placehold:active{
  transition: transform 0.5s ease;
  transform: translateY(-5%);
}
.question-placehold input::placeholder {
  font-size: 1em;

}


.question-placehold input:focus {
  font-size: 1em;
}
.send-svg{
  border:none;
  border-radius:1.1vh;
  background-color:#DF711B;
  width:13%;
  height:40%;
  transition: transform 0.3s ease;
}
.send-svg:hover {
  transform: scale(1.1);
}
.send-svg:active {
  transition: transform 0.5s ease;
  transform: translateY(-5%);
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