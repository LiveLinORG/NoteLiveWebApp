<template>
  <div class="question-viewer">
    <div v-if="preguntas.length === 0">No hay preguntas aún.</div>
    <template v-else v-for="pregunta in preguntas" :key="pregunta.id">
      <PreguntaCard
          :nombre="pregunta.userId"
          :pregunta="pregunta.text"
          :likes="pregunta.likes"
      ></PreguntaCard>
    </template>
  </div>
</template>

<script>
import * as signalR from "@microsoft/signalr";
import { ref, onMounted, watch } from 'vue';
import { getQuestionsInRoom } from "@/notelive/services/bdservice";
import PreguntaCard from "@/shared/components/PreguntaCard.vue";

export default {
  name: 'TheQuestionViewer',
  props: {
    roomId: {
      type: String,
      required: true
    }
  },
  components: {
    PreguntaCard
  },
  setup(props) {
    const preguntas = ref([]);

    const fetchQuestions = async () => {
      try {
        const roomaid = localStorage.getItem('roomId');
        console.log('Fetching questions for room:', roomaid);
        const response = await getQuestionsInRoom(roomaid);
        console.log('Received response:', response);

        if (Array.isArray(response)) {
          preguntas.value = response.slice(-5); // Get the last 5 questions
          console.log('Updated preguntas:', preguntas.value);
        } else {
          console.error('Unexpected response format:', response);
          preguntas.value = []; // Set to empty array if data is not as expected
        }
      } catch (error) {
        console.error('Error fetching questions:', error);
        preguntas.value = []; // Set to empty array on error
      }
    };

    const connection = new signalR.HubConnectionBuilder()
        .withUrl("http://190.239.59.168:44353/chatHub")
        .build();

    connection.on("ReceiveQuestion", (question) => {
      console.log("Question received: ", question);
      preguntas.value = [...preguntas.value, question].slice(-5); // Add new question and keep last 5
      console.log('Updated preguntas after new question:', preguntas.value);
    });

    const startConnection = async () => {
      try {
        await connection.start();
        console.log("Connection started");
        await connection.invoke("JoinRoom", props.roomId);
        console.log("Joined room:", props.roomId);
      } catch (err) {
        console.error("Error starting connection: ", err);
      }
    };

    onMounted(() => {
      console.log('Component mounted');
      fetchQuestions();
      startConnection();
      // Refresh questions every 30 seconds
      setInterval(fetchQuestions, 5000);
    });
    watch(() => props.roomId, (newRoomId) => {
      console.log('Room ID changed:', newRoomId);
      fetchQuestions();
    });

    return {
      preguntas,
      fetchQuestions
    };
  }
};
</script>

<style scoped>
.question-viewer {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>