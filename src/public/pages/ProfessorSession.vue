<template>
  <section class="Session-container">
    <section class="Chat-container">
      <TheChat :roomId="roomId" :userId="userId"></TheChat>
    </section>
    <section class="pdf-container">
      <div class="diaposity-container">
        <button class="nav-button" @click="downloadPDF">Finalizar sesión</button>
        <PdfViewer :roomId="roomId" :userId="userId" :isProfessor="true"></PdfViewer>

      </div>

    </section>
    <section class="questions-container">
      <TheQuestionViewer :roomId="roomId"></TheQuestionViewer>
    </section>
  </section>
</template>

<script>
import { onMounted, ref } from 'vue';
import { modificarSesionIniciadaDelPin } from "@/notelive/services/pinService.";
import {isProfessor, pinvalue} from "../../../router/router";
import TheChat from "@/shared/components/TheChat.vue";
import PdfViewer from "@/shared/components/PdfViewer.vue";
import TheQuestionViewer from "@/shared/components/QuestionViewer.vue";

export default {
  name: "ProfessorSession",
  components: {TheQuestionViewer, PdfViewer, TheChat },
  setup() {
    const pin = pinvalue.value;
    const roomId = ref('');
    const userId = ref('');
    const pdfBlobUrl = ref('');
    isProfessor.value=true;
    const loadSession = async () => {
      roomId.value = localStorage.getItem('roomIdPROFESSOR');
      userId.value = localStorage.getItem('usernamePROFESSOR');
      try {
        await modificarSesionIniciadaDelPin(pin);
      } catch (error) {
        console.error('Error modifying session:', error);
      }
    };

    const downloadPDF = () => {
      const link = document.createElement('a');
      link.href = pdfBlobUrl.value;
      link.download = 'document.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    onMounted(() => {
      loadSession();
    });

    return {
      roomId,
      userId,
      downloadPDF,
    };
  },
};
</script>
<style scoped>
.pdf-viewer {
  width: 80%;
  height: 90%;
  overflow: auto;
}
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
.question-placehold input::placeholder {
  font-size: 1em;
}
.question-placehold input:focus {
  font-size: 1em;
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
.pdf-viewer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pdf-viewer img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
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

.nav-button {
  border: none;
  border-radius: 1.1vh;
  background-color: rgba(223, 113, 27, 0.96);
  width: 15%;
  height: 5%;
  transition: transform 0.3s ease;
  font-size: 1em;
  cursor: pointer;
  position:absolute;
}

.nav-button:hover {
  transform: scale(1.1);
}

.nav-button:active {
  transition: transform 0.5s ease;
  transform: translateY(-5%);
}

.nav-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
