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
    <div class="messages">
      <el-Mensaje class="message" nombre="Jorge Díaz" texto="Hola, cómo están?"></el-Mensaje>
      <el-mensaje class="message" nombre="Juan Pérez" texto="Hola, cómo están todos hoy?"></el-mensaje>
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
  border-radius: 0.4rem;
}
.messages{
  margin:1%;
  padding-top:0.1%;
}
.sendMessage input{
  color: black;
  background-color: #FFFFFF;
  align-items:center;
  border-radius: 0.4rem 0 0 0.4rem;
  border-color: black;
}
.sendMessage button{
  background-color: #768FE8;
  align-items: center;
  border-radius: 0 0.4rem 0.4rem 0;
}
</style>