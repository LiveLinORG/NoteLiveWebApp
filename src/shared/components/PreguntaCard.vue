<template>
  <div :class="['question-card', { 'highlighted': likes > 0 }]">
    <div class="question-header">
      <div class="nombre">{{ userName }}</div>
      <div class="likes">Likes: {{ likes }}</div>
      <button @click="likeQuestion" :class="{ 'liked': liked }" class="like-button">
        <i class="fa fa-thumbs-up"></i>
      </button>
    </div>
    <div class="question-text">{{ pregunta }}</div>
  </div>
</template>

<script>
import { getUserById, likeQuestion as likeQuestionService } from '@/notelive/services/bdservice';

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
  data() {
    return {
      liked: false,
      userName: ''
    };
  },
  methods: {
    async likeQuestion() {
      try {
        await likeQuestionService(this.questionId);
        this.liked = !this.liked;
      } catch (error) {
        console.error('Error liking question:', error);
      }
    },
    async fetchUserName() {
      try {
        const user = await getUserById(this.nombre);
        this.userName = user.username || 'Usuario desconocido';
      } catch (error) {
        console.error('Error fetching user name:', error);
        this.userName = 'Usuario desconocido';
      }
    }
  },
  mounted() {
    this.fetchUserName();
    console.log('PreguntaCard mounted:', this.nombre, this.pregunta, this.likes);
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
  font-size: 100%; /* Aumentado el tamaño del botón */
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
</style>
