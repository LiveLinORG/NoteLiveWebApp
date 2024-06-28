<template>
<div v-if="!answered" :class="['question-card', { 'highlighted': likes > 0 }]">
<div class="question-header">
  <div class="nombre">{{ userName }}</div>
  <div class="likes">Likes: {{ likes }}</div>
  <button @click="likeQuestion" :class="{ 'liked': liked }" class="like-button">
    <i class="fa fa-thumbs-up"></i>
  </button>
</div>
<div class="question-text">{{ pregunta }}</div>
<button v-if="isProfessor" @click="openAnswerModal" class="answer-button">
  Answer Question
</button>
</div>
</template>

<script>
import { ref } from 'vue';
import { getUserById, likeQuestion as likeQuestionService, answerQuestion } from '@/notelive/services/bdservice';
import { isProfessor } from "../../../router/router";

export default {
  props: {
    nombre: {
      type: String,
      required: true
    },
    pregunta: {
      type: String,
      required: true
    },
    likes: {
      type: Number,
      default: 0
    },
    questionId: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const liked = ref(false);
    const userName = ref('');
    const answered = ref(false);

    const likeQuestion = async () => {
      try {
        await likeQuestionService(props.questionId);
        liked.value = !liked.value;
      } catch (error) {
        console.error('Error liking question:', error);
      }
    };

    const fetchUserName = async () => {
      try {
        const user = await getUserById(props.nombre);
        userName.value = user.username || 'Usuario desconocido';
      } catch (error) {
        console.error('Error fetching user name:', error);
        userName.value = 'Usuario desconocido';
      }
    };

    const openAnswerModal = () => {
      const answer = prompt('Ingrese la respuesta a la pregunta:');
      if (answer) {
        submitAnswer(answer);
      }
    };

    const submitAnswer = async (answer) => {
      try {
        await answerQuestion(props.questionId, answer);
        answered.value = true;
      } catch (error) {
        console.error('Error answering question:', error);
      }
    };


    fetchUserName();

    return {
      liked,
      userName,
      answered,
      isProfessor,
      likeQuestion,
      openAnswerModal
    };
  }
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

.question-card {
  border-radius: 1.9%;
  background-color: #FDE49C;
  padding: 1.5vh;
  transition: all 0.3s ease;
}

.question-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  margin-left: 1%;
  padding: 1vh;
}

.nombre {
  font-weight: bold;
  color: black;
  font-family: Inter, sans-serif;
}

.like-button {
  background-color: transparent;
  padding: 0.8%;
  font-size: 100%;
  cursor: pointer;
  border: none;
  border-radius: 50%;
}

.like-button:hover {
  background: #768FE8;
  color: white;
}

.like-button.liked {
  background: #768FE8;
  color: white;
}

.question-text {
  margin-bottom: 1%;
  margin-left: 1%;
  text-align: left;
  color: black;
  font-family: Inter, sans-serif;
  padding: 1vh;
}

.highlighted {
  border: 2px solid #FFD700;
  box-shadow: 0 0 10px #FFD700;
  transform: scale(1.05);
}
.answer-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}

.answer-button:hover {
  background-color: #45a049;
}
</style>
