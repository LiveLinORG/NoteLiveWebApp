<template>
  <div class="container">
    <div class="padding">
      <div class="messages">
        <el-Mensaje
            v-for="message in messages"
            :key="message.id"
            :nombre="message.userId"
            :texto="message.content"
        ></el-Mensaje>
      </div>
    </div>
    <div class="sendMessage">
      <input v-model="newMessage" placeholder="Escribe aquí..." />
      <button @click="sendMessage">Enviar</button>
    </div>
  </div>
</template>

<script>
import * as signalR from "@microsoft/signalr";
import ElMensaje from "@/shared/components/ChatHijos/Mensaje.vue"; // Asegúrate de importar el componente correcto

export default {
  name: "TheChat",
  components: {
    ElMensaje,
  },
  props: {
    roomId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      connection: null,
      messages: [],
      newMessage: "",
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim()) {
        this.connection
            .invoke("SendMessage", this.roomId, this.userId, this.newMessage)
            .catch((err) => console.error(err));
        this.newMessage = "";
      }
    },
  },
  mounted() {
    this.connection = new signalR.HubConnectionBuilder()
        .withUrl("http://localhost:8080/chatHub") // Asegúrate de ajustar la URL correcta de tu backend
        .build();

    this.connection.on("ReceiveMessage", (userId, message) => {
      this.messages.push({userId, content: message});
    });

    this.connection.on("RemoveMessage", (userId, message) => {
      this.messages = this.messages.filter(
          (m) => !(m.userId === userId && m.content === message)
      );
    });

    this.connection
        .start()
        .then(() => {
          this.connection.invoke("JoinRoom", this.roomId).catch((err) =>
              console.error(err)
          );
        })
        .catch((err) => console.error(err));
  },
};
</script>

<style scoped>
.container {
  justify-content: center;
  align-items: center;
  background-color: #f7a072;
  height: 100%;
  width: 100%;
  border-radius: 5px;
}

.messages {
}

.padding {
  height: 90%;
}

.message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sendMessage {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 10%;
  width: 100%;
}

.sendMessage input {
  color: black;
  background-color: #ffffff;
  align-items: center;
  border-radius: 0.4rem 0 0 0.4rem;
  border-color: rgba(0, 0, 0, 0);
  height: 90%;
  width: 100%;
  font-size: 1em;
  padding-left: 2vh;
}

.sendMessage input::placeholder {
  font-size: 1em;
}

.sendMessage input:focus {
  font-size: 1em;
}

.sendMessage button {
  background-color: #768fe8;
  align-items: center;
  border: none;
  border-radius: 0 0.4rem 0.4rem 0;
  margin: 0;
  height: 100%;
  width: 40%;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.sendMessage button:hover {
  background-color: #577ac7;
}

.sendMessage button:active {
  transform: scale(0.95);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.sendMessage button {
  animation: fadeIn 0.5s ease;
}
</style>
