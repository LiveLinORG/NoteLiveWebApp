<script>
import elMensaje from "@/shared/components/ChatHijos/Mensaje.vue";

export default {
  name: "TheChat",
  data() {
    return {
      messages: [],
      newMessage: ''
    };
  },
  components: {
    elMensaje
  }
}
</script>

<template>
  <div class="container">
    <div class="padding">
      <div class="messages">
        <el-Mensaje class="message" nombre="Jorge Díaz" texto="Hola, cómo están?"></el-Mensaje>
        <el-mensaje class="message" nombre="Juan Pérez" texto="Hola, cómo están todos hoy?"></el-mensaje>
      </div>
    </div>
    <div class="sendMessage">
      <input placeholder="Escribe aquí..."/>
      <button>Submit</button>
    </div>
  </div>
</template>

<style scoped>
.container{
  justify-content: center;
  align-items: center;
  background-color: #F7A072;
  height:100%;
  width:100%;
  border-radius:5px;

}
.messages{

}
.padding{
  height:90%;

}
.message{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
}
.sendMessage{
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height:10%;
  width:100%;

}
.sendMessage input {
  color: black;
  background-color: #FFFFFF;
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
  background-color: #768FE8;
  align-items: center;
  border: none;
  border-radius: 0 0.4rem 0.4rem 0;
  margin: 0;
  height: 100%;
  width: 40%;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.sendMessage button:hover {
  background-color: #577AC7;
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