<template>
  <div>
    <ProfessorSession v-if="isProfessor" />
    <StudentSession v-else />
  </div>
</template>

<script>
import { io } from 'socket.io-client';
import ProfessorSession from "@/public/pages/ProfessorSession.vue";
import StudentSession from "@/public/pages/StudentSession.vue";
import mitt from 'mitt';

const emitter = mitt();

export default {
  components: {
    ProfessorSession,
    StudentSession
  },
  data() {
    return {
      isProfessor: false,
      socket: null
    };
  },
  mounted() {
    this.socket = io('http://localhost:3000');

    emitter.emit('socket-ready', this.socket);

    // Determinar si el usuario es un profesor o un estudiante basado en meta de ruta
    this.isProfessor = this.$route.meta.isProfessor || false;
  }
};
</script>
