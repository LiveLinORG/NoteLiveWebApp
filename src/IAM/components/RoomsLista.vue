<template>
  <div>
    <h2 class="text-left">Lista de Salas</h2>
    <table class="room-table">
      <thead>
      <tr>
        <th>Nombre de la Sala</th>
        <th>PDF</th>
        <th>Código Package</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="room in rooms" :key="room.id" @mouseover="hoverEffect(true)" @mouseleave="hoverEffect(false)">
        <td>{{ room.name }}</td>
        <td>
          <button @click="downloadPDF(room.pdfId)" :disabled="!room.pdfId" class="pdf-button">Descargar PDF</button>
        </td>
        <td>{{ room.id }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getRoomsInformation } from "@/IAM/services/userCRUDservice";
import { getPDFbyId } from "@/notelive/services/bdservice";

export default {
  name: "RoomsLista",
  data() {
    return {
      rooms: []
    };
  },
  async mounted() {
    try {
      const response = await getRoomsInformation();
      this.rooms = response.data;
    } catch (error) {
      console.error("Error obteniendo la información de las salas:", error);
    }
  },
  methods: {
    async downloadPDF(pdfId) {
      try {
        const response = await getPDFbyId(pdfId);
        const base64Data = response.content;
        const binaryData = atob(base64Data);
        const byteArray = new Uint8Array(binaryData.length);
        for (let i = 0; i < binaryData.length; i++) {
          byteArray[i] = binaryData.charCodeAt(i);
        }
        const blob = new Blob([byteArray], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `room_${pdfId}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Error descargando el PDF:", error);
      }
    },
    hoverEffect() {


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
.pdf-button {
  background-color: #f9d8b3;
  color: #704214;
  border: 1px solid #bd973c;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius:1rem;
}
.pdf-button:hover {
  background-color: #ffcc99;
}
.pdf-button:disabled {
  background-color: #e0e0e0;
  color: #a9a9a9;
  cursor: not-allowed;
}
</style>