<template>
  <section class="Session-container">
    <section class="Chat-container">
      <TheChat :roomId="roomId" :userId="userId"></TheChat>
    </section>
    <section class="diaposity-container">
      <section class="pdf-container">
        <PdfViewer :roomId="roomId" :userId="userId" :isProfessor="false"></PdfViewer>
      </section>
      <section class="question-sender">
        <input type="text" class="question-placehold" v-model="questionText" placeholder="Ingresa una pregunta para el profesor..." />
        <button class="send-svg" @click="sendQuestion">Enviar</button>
      </section>
    </section>
    <section class="questions-container">
      <TheQuestionViewer :roomId="roomId"></TheQuestionViewer>
    </section>
  </section>
</template>

<script>
import TheChat from "@/shared/components/TheChat.vue";
import { onMounted, ref } from 'vue';
import {isProfessor, pinvalue} from "../../../router/router";
import {modificarSesionIniciadaDelPin} from "@/notelive/services/pinService.";
import PdfViewer from "@/shared/components/PdfViewer.vue";
import TheQuestionViewer from "@/shared/components/QuestionViewer.vue";
import {getUserByUsername, postQuestion} from "@/notelive/services/bdservice";

export default {
  name: "ProfessorSession",
  components: {TheQuestionViewer, PdfViewer, TheChat },
  setup() {
    const roomId = ref('');
    const userId = ref('');
    const questionText = ref('');
    const useridfrombd=ref('');
    onMounted(async () => {
      console.log(localStorage.getItem('nameROOMBD'));
      console.log(localStorage.getItem('nameROOMBD'));

      console.log(localStorage.getItem('nameROOMBD'));

      console.log(localStorage.getItem('nameROOMBD'));
      isProfessor.value=false;
      console.log('VALOR DE SI ES PROFESSOR O NO',isProfessor.value)

      console.log('VALOR DE SI ES PROFESSOR O NO',isProfessor.value)

      roomId.value = localStorage.getItem('roomId');
      userId.value = localStorage.getItem('usernameSTUDENT');
      const userbd=await getUserByUsername(userId.value);
      useridfrombd.value=userbd.id;

      await modificarSesionIniciadaDelPin(pinvalue.value);
    });
    const sendQuestion = async () => {
      if (!questionText.value) return; // Evitar enviar preguntas vacías

      try {
        const createQuestionData = {
          roomId: roomId.value,
          userId: useridfrombd.value,
          text: questionText.value,
        };
        await postQuestion(createQuestionData);
        questionText.value = ''; // Limpiar el campo después de enviar la pregunta

        // Esperar un segundo y luego actualizar las preguntas
        setTimeout(() => {
          const questionViewer = document.querySelector('.questions-container');
          if (questionViewer && questionViewer.fetchQuestions) {
            questionViewer.fetchQuestions();
          }
        }, 1000);
      } catch (error) {
        console.error('Error sending question:', error);
      }
    };


    return {
      roomId,
      userId,
      questionText,
      sendQuestion,
      useridfrombd
    };
  },
};
</script>


<style scoped>
.Session-container {
  height: 80vh;
  padding: 5vh;
  display: grid;
  grid-template-columns: 0.5fr 2fr 0.5fr;
  grid-template-rows: auto;
  grid-gap: 10vh;
}

.Chat-container {
  grid-column: 1 / 2;
  height: 90%;
}

.diaposity-container {
  grid-column: 2 / 3;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  justify-content: flex-start;
}

.ppt {
  width: 100%;
  height: 90%;
  background-color: red;
}

.question-sender {
  height: 20%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3vw;
}

.question-placehold {
  border: none;
  width: 60%;
  height: 40%;
  border-radius: 1.1vh;
  transition: transform 0.3s ease;
  font-size: 1em;
  padding-left: 4vh;
}

.question-placehold:hover {
  transform: scale(1.05);
}

.question-placehold:active {
  transition: transform 0.5s ease;
  transform: translateY(-5%);
}

.question-placehold input::placeholder {
  font-size: 1em;
}

.question-placehold input:focus {
  font-size: 1em;
}

.send-svg {
  border: none;
  border-radius: 1.1vh;
  background-color: #df711b;
  width: 13%;
  height: 40%;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3vh;
  padding: 1vh;
}
.pdf-container{
  height: 90%;
  width: 75%;
}

</style>