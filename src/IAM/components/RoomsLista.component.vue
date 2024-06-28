<template>
  <div>
    <h2 class="text-left">Lista de Salas</h2>
    <table class="room-table">
      <thead>
      <tr>
        <th>Nombre de la Sala</th>
        <th>Preguntas</th>
        <th>Usuarios en la Sala</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="room in rooms" :key="room.id" @mouseover="hoverEffect(true)" @mouseleave="hoverEffect(false)">
        <td>{{ room.name }}</td>
        <td>{{ room.questions.length > 0 ? room.questions.join(', ') : 'Ninguna' }}</td>
        <td>{{ room.userIds.length }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getRoomsInformation } from "@/IAM/services/userCRUDservice";

export default {
  name: "RoomsLista",
  data() {
    return {
      rooms: [] // Arreglo para almacenar las salas obtenidas
    };
  },
  async mounted() {
    try {
      const response = await getRoomsInformation();
      this.rooms = response.data; // Asigna las salas obtenidas al arreglo rooms
    } catch (error) {
      console.error("Error obteniendo la información de las salas:", error);
    }
  },
  methods: {
    hoverEffect() {
      // Implementa el efecto hover si es necesario
      // Puedes utilizar esta función para futuras funcionalidades de hover si las necesitas
    }
  }
};
</script>
<style scoped>
.text-left {
  font-family: "Inter", sans-serif;
  margin-left: 1%;
  margin-top: 5%;
  margin-bottom: 1%;
  font-size: 24px;
}

.room-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.room-table th,
.room-table td {
  border: 1px solid #bd973c;
  padding: 8px;
  text-align: left;
}

.room-table th {
  background-color: #cdb16f;
}

.room-table tr:hover {
  background-color: #f5f5f5;
}
</style>
