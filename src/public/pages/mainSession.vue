<template>
  <div>
    <ProfessorSession v-if="isProfessor" :roomId="roomId" :userId="userId" />
    <StudentSession v-else :roomId="roomId" :userId="userId" />
  </div>
</template>

<script>
import ProfessorSession from "@/public/pages/ProfessorSession.vue";
import StudentSession from "@/public/pages/StudentSession.vue";
import {iduser, pinvalue} from "../../../router/router";

export default {
  components: {
    ProfessorSession,
    StudentSession
  },
  data() {
    return {
      isProfessor: false,
      roomId: '', // Aquí almacenaremos el roomId
      userId: ''   // Aquí almacenaremos el userId
    };
  },
  mounted() {
    this.isProfessor = this.$route.meta.isProfessor || false;
    this.roomId = pinvalue.value;
    this.userId = iduser.value;
  }
};
</script>
