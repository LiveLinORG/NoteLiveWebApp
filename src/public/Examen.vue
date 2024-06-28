<template>
  <div class="examen-container">
    <h2>Examen</h2>
    <template v-if="loading">
      <p>Cargando preguntas...</p>
    </template>
    <template v-else-if="questions.length > 0">
      <div v-if="currentQuestionIndex < questions.length">
        <h3>Pregunta {{ currentQuestionIndex + 1 }}:</h3>
        <p>{{ questions[currentQuestionIndex].text }}</p>
        <textarea v-model="studentAnswer" rows="4" placeholder="Escribe tu respuesta aquí"></textarea>
        <button @click="submitAnswer">Enviar respuesta</button>
      </div>
      <div v-else>
        <h3>Examen completado</h3>
        <p>Puntos obtenidos: {{ pointsEarned }}</p>
        <p>Puntos máximos posibles: {{ maxPoints }}</p>
        <p>Porcentaje de acierto: {{ accuracyPercentage }}%</p>
      </div>
    </template>
    <template v-else>
      <p>No hay preguntas disponibles para este examen.</p>
    </template>
  </div>
</template>

<script>
import {computed, onMounted, ref} from 'vue';
import {getQuestionsInRoom} from "@/notelive/services/bdservice";

// Función para normalizar y calcular similitud de cadenas
function normalizeString(str) {
  return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '');
}

// Función para calcular la distancia de Levenshtein
function levenshteinDistance(a, b) {
  const matrix = [];
  const lenA = a.length;
  const lenB = b.length;

  for (let i = 0; i <= lenB; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= lenA; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= lenB; i++) {
    for (let j = 1; j <= lenA; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[lenB][lenA];
}

// Función para calcular la similitud porcentaje entre dos cadenas
function similarityPercentage(str1, str2) {
  const normalizedStr1 = normalizeString(str1);
  const normalizedStr2 = normalizeString(str2);

  const maxLen = Math.max(normalizedStr1.length, normalizedStr2.length);
  if (maxLen === 0) return 100;

  const distance = levenshteinDistance(normalizedStr1, normalizedStr2);
  const similarity = ((maxLen - distance) / maxLen) * 100;

  return similarity.toFixed(2);
}

export default {
  name: 'ExamenComponent',
  props: {
    roomId: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const questions = ref([]);
    const loading = ref(true);
    const currentQuestionIndex = ref(0);
    const studentAnswer = ref('');
    const pointsEarned = ref(0);
    const maxPoints = ref(0);

    onMounted(async () => {
      try {
        questions.value = await getQuestionsInRoom(props.roomId);
        // Calcular los puntos máximos posibles
        maxPoints.value = questions.value.length * 5; // 5 puntos máximos por pregunta
      } catch (error) {
        console.error('Error al cargar las preguntas:', error);
      } finally {
        loading.value = false;
      }
    });

    const submitAnswer = () => {
      const currentQuestion = questions.value[currentQuestionIndex.value];
      const similarity = parseFloat(similarityPercentage(studentAnswer.value, currentQuestion.answer));

      // Calcular puntos basados en el porcentaje de similitud
      let points = 0;
      if (similarity >= 80) points = 5;
      else if (similarity >= 60) points = 4;
      else if (similarity >= 40) points = 3;
      else if (similarity >= 20) points = 2;
      else if (similarity > 0) points = 1;

      pointsEarned.value += points;
      currentQuestionIndex.value++;
      studentAnswer.value = '';
    };

    const accuracyPercentage = computed(() => {
      if (maxPoints.value === 0) return 0;
      return ((pointsEarned.value / maxPoints.value) * 100).toFixed(2);
    });

    return {
      questions,
      loading,
      currentQuestionIndex,
      studentAnswer,
      pointsEarned,
      maxPoints,
      submitAnswer,
      accuracyPercentage
    };
  }
};
</script>

<style scoped>
.examen-container {
  padding: 2rem;
  background-color: #ffd8ba;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

textarea {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  margin: 1rem 0;
  border: 2px solid #ab734a;
  border-radius: 0.5rem;
}

button {
  background-color: #df711b;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #af5711;
}

button:active {
  transform: translateY(-0.1rem);
}
</style>
