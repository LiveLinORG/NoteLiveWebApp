<script>
import { getUsersInWaitingRoom, getUserInfoWR } from '@/notelive/userEntity/service/userservice';
import { enviarPinAlServicio, generarPinAleatorio } from "@/notelive/services/pinService.";
import OrangeCard from "@/shared/components/OrangeCard.vue";
import { pinvalue } from "../../../../router/router";
import { createRoom, getUserByUsername, getRoomById, uploadpdf } from "@/notelive/services/bdservice";

export default {
  name: "waitingTeacher",
  components: { OrangeCard },
  data() {
    return {
      pin: '',
      text: "PIN",
      text2: "Participantes",
      number: '',
      text3: "",
      items: [{ label: 'ProfessorSession', to: '/professorSession' }],
      users: [],
      interval: null,
      pdfBytes: null,
      fileName: ''
    };
  },
  mounted() {
    console.log("Estás en el WaitingProffesorRoom");
    this.generarPinAleatorio();
    setTimeout(() => {
      this.getUsers();
    }, 5000);
    this.interval = setInterval(() => {
      this.getUsers();
    }, 10000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    async getUsers() {
      try {
        const usersPromise = await getUsersInWaitingRoom(this.pin);
        console.log(usersPromise);

        const userInfoArray = [];

        for (const user of usersPromise) {
          const userInfo = await getUserInfoWR(user.id);
          userInfoArray.push(userInfo);
        }

        console.log('Resultado previsto:', userInfoArray);
        this.users = userInfoArray;

      } catch (error) {
        console.error('Error obteniendo usuarios en la sala de espera:', error.message);
        this.users = [];
      }
    },

    async empezarSesionAndNavigate(navigate) {
      try {
        const userdata = await getUserByUsername(localStorage.getItem('usernamePROFESSOR'));
        const response = await createRoom({ name: this.pin, professorId: userdata.id });

        console.log("roomid:");
        console.log(response.id);
        localStorage.setItem('roomIdPROFESSOR', response.id);
        localStorage.setItem('roomId',response.id);
        if (await getRoomById(response.id)) {
          console.log("PDF:");

          const formData = new FormData();
          formData.append('Content', new Blob([this.pdfBytes], { type: 'application/pdf' }));

          const resultPDF = await uploadpdf(response.id, formData);
          if (resultPDF) {
            navigate();
          }
          console.log('PDF uploaded successfully:', resultPDF);
        } else {
          console.error('Error al crear la sala:', response.statusText);
        }
      } catch (error) {
        console.error('Error al crear la sala:', error.message);
      }
    },

    async empezarSesion(pin1) {
      await enviarPinAlServicio(pin1);
    },
    generarPinAleatorio() {
      let valor = generarPinAleatorio();
      this.pin = valor;
      pinvalue.value = this.pin;
      localStorage.setItem('pinvaluePROFESSOR',valor);
      this.empezarSesion(this.pin);
    },
    handleDrop(event) {
      event.preventDefault();
      const files = event.dataTransfer.files;
      if (files.length > 0) {
        this.readFile(files[0]);
      }
    },
    handleDragOver(event) {
      event.preventDefault();
    },
    handleFileChange(event) {
      const files = event.target.files;
      if (files.length > 0) {
        this.readFile(files[0]);
      }
    },
    readFile(file) {
      this.fileName = file.name;
      const reader = new FileReader();
      reader.onload = (e) => {
        const arrayBuffer = e.target.result;
        this.pdfBytes = new Uint8Array(arrayBuffer);
        console.log(this.pdfBytes);
      };
      reader.readAsArrayBuffer(file);
    }
  }
};
</script>

<template>
  <section class="global">
    <section class="crear-session">
      <OrangeCard class="card" :text="text" :pin="pin"></OrangeCard>
      <div
          class="icono-subir"
          @drop="handleDrop"
          @dragover="handleDragOver"
          @click="$refs.fileInput.click()"
      >
        <div class="imagen">
          <template v-if="!fileName">
            <img class="subir-archivoimg" src="../../../assets/subir-archivo.png">
          </template>
          <template v-else>
            <span>{{ fileName }}</span>
          </template>
        </div>
        <input
            type="file"
            ref="fileInput"
            @change="handleFileChange"
            style="display: none;"
        />
      </div>
      <OrangeCard class="card2" :text="text2" :pin="number"></OrangeCard>
    </section>
    <section class="crear-session2">
      <router-link v-for="item in items" :key="item.label" v-slot="{ navigate, href }" :to="item.to" custom>
        <button :href="href" class="boton" @click="empezarSesionAndNavigate(navigate)">Empezar</button>
      </router-link>
      <ul class="lista">
        <li v-for="(userArray, index) in users" :key="index" class="listaNombre">
          <template v-for="(user, innerIndex) in userArray" :key="innerIndex">
            {{ user.username }}
          </template>
        </li>
      </ul>
    </section>
    <router-view></router-view>
  </section>
</template>

<style>
.global {
  display: grid;
  grid-template-columns:1fr;
  grid-template-rows:1fr 1fr;
  grid-gap: 2vh;
}

.crear-session {
  display: flex;
  width: 100vw;
  flex-direction: row;
  padding: 0;
  background-color: rgba(194, 144, 104, 0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);
  border-radius: 0.8%;
  align-items: center;
  justify-content: center;
  height: auto;
  margin-top: 7vh;
}

.crear-session > * {
  margin: 1vw;
}

.crear-session2 {
  display: flex;
  width: 100vw;
  flex-direction: column;
  padding: 0;
  background-color: rgba(194, 144, 104, 0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  align-items: center;
  justify-content: center;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7a072;
  min-height: 5vh;
  border-radius: 8px;
  transition: transform 0.5s ease;
  align-self: center;
  font-size: 4vh;
  width: 20%;
}

.card2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f7a072;
  width: 20%;
  min-height: 5vw;
  border-radius: 8px;
  transition: transform 0.5s ease;
  align-self: center;
}

.imagen {
  background-color: #fde49c;
  border-radius: 20px;
  margin-left: 1vw;
  margin-right: 1vw;
  cursor: pointer;
  padding: 1vw;
  padding-top: 2vw;
  padding-bottom: 2vw;
}

.icono-subir .subir-archivoimg {
  height: 20vh;
}

.boton {
  background-color: #DF711B;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  height: 8vh;
  width: 33vh;
  font-size: 4vh;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  margin-bottom: 8vh;
}

.boton:active {
  transform: translateY(-2%) scale(1.1);
}

.lista {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-flow: row;
  grid-gap: 1vh;
  width: 65%;
}

.lista .listaNombre {
  background-color: rgba(244, 215, 192, 0.37);
  padding: 1vh;
  border-radius: 5px;
  text-align: center;
  font-size: 2vh;
}
</style>
