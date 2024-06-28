<template>
  <div class="package-question-container">
    <h2>Código para buscar las preguntas hechas en la sala:</h2>
    <div class="room-id-container">
      <input v-model="roomId" placeholder="Ingresa la ID de la sala" class="room-id-input" />
    </div>
    <p class="info-text">Para obtener las preguntas dadas en la sala, dale click al botón, solicitar paquete de preguntas ubicado arriba o aquí mismo.</p>
    <button @click="requestQuestionPackage" class="request-button">Solicitar paquete de preguntas</button>
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
import { isVisibleInitialPage } from "../../router/router";

export default {
  name: 'ThePackageQuestion',
  setup() {
    const roomId = ref('');
    const questions = ref([]);
    isVisibleInitialPage.value = false;

    const requestQuestionPackage = async () => {
      try {
        const fetchedQuestions = await getQuestionsInRoom(roomId.value);
        questions.value = fetchedQuestions.map(question => ({
          ...question,
          showAnswer: false,
        }));
      } catch (error) {
        console.error('Error fetching questions:', error);
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

.questions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.question-card {
  background-color: #d0c182;
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
