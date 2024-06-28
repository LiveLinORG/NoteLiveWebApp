<template>
    <iframe ref="pdfIframe" class="pdf-viewer" type="application/pdf"></iframe>
</template>

<script>
import { getPDFbyId, getRoomById,getRoomByName } from "@/notelive/services/bdservice";
export default {
  name: "PdfViewer",
  props: {
    roomId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    isProfessor: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      pdfBlobUrl: '',
    };
  },
  methods: {
    async loadPDF() {
      try {
        let room = await this.getRoomById(localStorage.getItem('roomId'));
        let pdf;
          pdf = await this.getPDFbyId(room.pdfId);



        const base64Data = pdf.content;
        const binaryData = atob(base64Data);
        const byteArray = new Uint8Array(binaryData.length);
        for (let i = 0; i < binaryData.length; i++) {
          byteArray[i] = binaryData.charCodeAt(i);
        }
        const blob = new Blob([byteArray], { type: 'application/pdf' });
        this.pdfBlobUrl = URL.createObjectURL(blob);
        this.$refs.pdfIframe.src = this.pdfBlobUrl;
      } catch (error) {
        console.error('Error loading PDF:', error);
      }
    },
    async getRoomById(roomId) {
      return await getRoomById(roomId);
    },
    async getPDFbyId(pdfId) {
      return await getPDFbyId(pdfId);
    },
    async getRoomByName(roomName) {
      return await getRoomByName(roomName);
    },
  },
  mounted() {
    this.loadPDF();
  },
};
</script>

<style scoped>
.pdf-viewer {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
