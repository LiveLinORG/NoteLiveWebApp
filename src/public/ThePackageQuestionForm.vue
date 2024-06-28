<template>
  <div class="package-question-container">
    <h2>Código para buscar las preguntas hechas en la sala:</h2>
    <div class="room-id-container">
      <input v-model="roomId" placeholder="Ingresa la ID de la sala" class="room-id-input" />
    </div>
    <p class="info-text">Para obtener las preguntas dadas en la sala, dale click al botón, solicitar paquete de preguntas ubicado arriba o aquí mismo.</p>
    <button @click="requestQuestionPackage" class="request-button">Solicitar paquete de preguntas</button>

    <router-link v-if="showExamButton" :to="'/examen/' + roomId" class="request-button">Solicitar examen</router-link>

    <div v-if="showAlert" class="alert">
      <p>{{ alertMessage }}</p>
    </div>

    <div class="questions-grid" v-if="questions.length > 0">
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

export default {
  name: 'ThePackageQuestion',
  setup() {
    const roomId = ref('');
    const questions = ref([]);
    const showAlert = ref(false);
    const alertMessage = ref('');
    const showExamButton = ref(false); // Control para mostrar el botón del examen

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
      requestQuestionPackage,
      toggleAnswer,
      showAlert,
      alertMessage,
      showExamButton,
    };
  },
};
</script>

<style scoped>
.package-question-container {
  padding: 2rem;
  background-color: #ffe5d4;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.room-id-container {
  margin: 1rem 0;
}

.room-id-input {
  width: 100%;
  padding: 1rem;
  font-size: 1.5rem;
  border: 2px solid #df711b;
  border-radius: 0.5rem;
}

.info-text {
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
}

.request-button {
  background-color: #df711b;
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

.alert {
  background-color: #f8d7da;
  color: #721c24;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
}

.questions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.question-card {
  background-color: #ffd8ba;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.question-card p {
  margin: 0.5rem 0;
}

.question-card button {
  background-color: #ab734a;
  color: #2b2102;
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
