<script>
import WaitingProfessorRoom from "@/public/pages/salaEspera/WaitingProfessorRoom.vue";
import WaitingAlumnoRoom from "@/public/pages/salaEspera/WaitingAlumnoRoom.vue";

export default {
  name: "WaitingMainRoom",
  components: {WaitingProfessorRoom, WaitingAlumnoRoom},
  data() {
    return {
      isSessionInitialized: false,
      isAlumnoWaiting: true,
      socket: null
    };
  },
  mounted() {
    this.isAlumnoWaiting = this.$route.meta.isAlumnoWaiting;

  },
  methods: {
  }
};
</script>

<template>
  <div>
    <waiting-alumno-room v-if="isAlumnoWaiting" />
    <WaitingProfessorRoom v-else />
  </div>
</template>

<style scoped>

</style>