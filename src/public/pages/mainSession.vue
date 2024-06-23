<template>
  <div>
    <ProfessorSession v-if="isProfessor" :roomId="roomId" :userId="userId" />
    <StudentSession v-else :roomId="roomId" :userId="userId" />
  </div>
</template>

<script>
import { io } from 'socket.io-client';
import ProfessorSession from "@/public/pages/ProfessorSession.vue";
import StudentSession from "@/public/pages/StudentSession.vue";
import mitt from 'mitt';
import {iduser, pinvalue} from "../../../router/router";
const emitter = mitt();

export default {
  components: {
    ProfessorSession,
    StudentSession
  },
  data() {
    return {
      isProfessor: false,
      socket: null,
      roomId: '', // Aquí almacenaremos el roomId
      userId: ''   // Aquí almacenaremos el userId
    };
  },
  mounted() {
    this.socket = io('http://localhost:3000');
    emitter.emit('socket-ready', this.socket);

    this.isProfessor = this.$route.meta.isProfessor || false;

    this.roomId = pinvalue.value;
    this.userId = iduser.value;
  }
};
</script>
