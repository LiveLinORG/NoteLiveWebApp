<template>
    <iframe ref="pdfIframe" class="pdf-viewer" type="application/pdf"></iframe>
</template>

<script>
import {getPDFbyId,getRoomById} from "@/notelive/services/bdservice";

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
      ws: null,
    };
  },
  methods: {
    async loadPDF() {
      try {
        const room = await this.getRoomById(localStorage.getItem('roomId'));
        const pdf = await this.getPDFbyId(room.pdfId);

        const base64Data = pdf.content;
        const binaryData = atob(base64Data);
        const byteArray = new Uint8Array(binaryData.length);
        for (let i = 0; i < binaryData.length; i++) {
          byteArray[i] = binaryData.charCodeAt(i);
        }
        const blob = new Blob([byteArray], { type: 'application/pdf' });
        this.pdfBlobUrl = URL.createObjectURL(blob);
        this.$refs.pdfIframe.src = this.pdfBlobUrl;

        this.setupWebSocket();
      } catch (error) {
        console.error('Error loading PDF:', error);
      }
    },
    setupWebSocket() {
      this.ws = new WebSocket('ws://190.239.59.168:8080');

      this.ws.onopen = () => {
        console.log('WebSocket connection established');
      };

      this.ws.onmessage = (event) => {
        const scrollData = JSON.parse(event.data);
        if (!this.isProfessor && this.$refs.pdfIframe) {
          this.$refs.pdfIframe.contentWindow.scrollTo(scrollData.scrollLeft, scrollData.scrollTop);
        }
      };

      if (this.isProfessor) {
        this.$refs.pdfIframe.addEventListener('scroll', this.sendScrollPosition);
      }
    },
    sendScrollPosition() {
      if (this.isProfessor && this.ws && this.$refs.pdfIframe) {
        const scrollLeft = this.$refs.pdfIframe.contentWindow.scrollX;
        const scrollTop = this.$refs.pdfIframe.contentWindow.scrollY;
        this.ws.send(JSON.stringify({ scrollLeft, scrollTop }));
      }
    },
    async getRoomById(roomId) {
    return await getRoomById(roomId)
    },
    async getPDFbyId(pdfId) {
    return await getPDFbyId(pdfId)
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
