<template>
  <div class="package-question-container">
    <h2>Código para buscar las preguntas hechas en la sala:</h2>
    <div class="room-id-container">
      <p @click="copyRoomId">{{roomId}}</p>
    </div>
    <p class="info-text">Para obtener las preguntas dadas en la sala, dale click al botón, solicitar paquete de preguntas ubicado arriba o aquí mismo.</p>
    <button @click="requestQuestionPackage" class="request-button">Solicitar paquete de preguntas</button>
    <router-link v-if="showExamButton" :to="'/examen/' + roomId" class="request-button">Solicitar examen</router-link>
    <div v-if="showAlert" class="alert">
      <p>{{ alertMessage }}</p>
    </div>
    <div class="questions-grid">
      <div v-for="question in questions" :key="question.id" class="question-card">
        <p>{{ question.text }}</p>
        <button @click="toggleAnswer(question.id)">Mostrar respuesta</button>
        <p v-if="question.showAnswer">{{ question.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { getQuestionsInRoom } from '@/notelive/services/bdservice';
import {isVisibleInitialPage} from "../../router/router";

export default {
  name: 'ThePackageQuestion',
  setup() {
    const roomId = ref(localStorage.getItem('roomId'));
    const questions = ref([]);
    const alertMessage = ref('');
    const showExamButton = ref(false);
    isVisibleInitialPage.value = false;
    const showAlert = ref(false);

    const copyRoomId = () => {
      showExamButton.value = true; // Mostrar el botón del examen si la solicitud es exitosa

    };

    const requestQuestionPackage = async () => {
      try {
        const fetchedQuestions = await getQuestionsInRoom(roomId.value);
        if (fetchedQuestions.length === 0) {
          showAlert.value = true;
          alertMessage.value = 'No hay preguntas en esta sala.';
        } else {
          questions.value = fetchedQuestions.map(question => ({
            ...question,
            showAnswer: false,
          }));
          showAlert.value = false;
          showExamButton.value = true; // Mostrar el botón del examen si la solicitud es exitosa
        }
      } catch (error) {
        console.error('Error fetching questions:', error);
        showAlert.value = true;
        alertMessage.value = 'Hubo un error al cargar las preguntas. Por favor, intenta de nuevo.';
      }
    };

    const toggleAnswer = (questionId) => {
      const question = questions.value.find(q => q.id === questionId);
      if (question) {
        question.showAnswer = !question.showAnswer;
      }
    };

    return {
      roomId,
      questions,
      copyRoomId,
      requestQuestionPackage,
      toggleAnswer,
      showExamButton
    };
  },
};
</script>
<style scoped>
.package-question-container {
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.room-id-container {
  margin: 1rem 0;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333;
  background-color: #FFD8BA;
  padding: 1rem;
  border-radius: 0.5rem;
}

.info-text {
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
}

.request-button {
  background-color: #df711b; /* rgba(223, 113, 27, 0.96) */
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.request-button:hover {
  transform: scale(1.05);
}

.request-button:active {
  transform: translateY(-0.1rem);
}

.questions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.question-card {
  background-color: #f9f9f9; /* #F9F9F9 */
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.question-card p {
  margin: 0.5rem 0;
}

.question-card button {
  background-color: #df711b;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.question-card button:hover {
  transform: scale(1.05);
}

.question-card button:active {
  transform: translateY(-0.1rem);
}
</style>
