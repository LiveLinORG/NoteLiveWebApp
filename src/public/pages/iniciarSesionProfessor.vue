<template>
  <section class="global">
    <div class="ingresar-section">
      <input type="text" class="placeholder" v-model="inputName" placeholder="Ingrese su nombre">
      <button class="botoncito" @click="createRoom">Crear Sala</button>
    </div>
  </section>
</template>

<script>
import {createTEMPUser} from "@/notelive/userEntity/service/userservice";
import {username} from "../../../router/router";

export default {
  name: "createSession",
  data() {
    return {
      inputName: "",
      items: [
        { label: 'SalaDeEspera', to: '/salaCreada' },
      ]
    };
  },
  methods: {
    async createRoom() {
      try {
        username.value=this.inputName;
        await createTEMPUser({
          username: this.inputName,
          password: 'temporal',
          name: 'temporal',
          lastName: 'temporal',
          correo: 'temporal',
        });
        this.$router.push('/salaCreada');
      } catch (error) {
        console.error('Error al crear la sala:', error);
      }
    },
  }
};
</script>


<style scoped>
 .global{
    display:flex;
    flex-direction: row;
    gap:2vh;
    align-items:center;
    justify-content:center;
   margin-top:35vh;

 }
 .ingresar-section {
   background-color: #F7A072;
   border: 2px solid black;
   width: 50%;
   height: 4vw;
   display: flex;
   flex-direction: row;
   justify-content: center;
   padding: 3vh;
   border-radius: 2vh;
   gap: 3vh;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
 }

 .placeholder {
   width: 60%;
   border-radius: 2vh;
   transition: transform 0.5s ease;
   text-align: center;
   font-weight: bold;
   margin-right: 0;
   background-color: rgba(253, 228, 156, 0.86);
   border: 2px solid black;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
   font-size:1.4em;
 }

 .placeholder:focus {
   transform: scale(1.05);
   background-color: rgb(253, 228, 156);
 }

 .botoncito {
   width: 40%;
   border-radius: 2vh;
   transition: transform 0.2s ease;
   background-color: #DF711B;
   border: 2px solid black;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
   font-size:1.4em;

 }

 .botoncito:active {
   background-color: #f6985b;
   transform: translateY(-10%) scale(0.95);
 }


</style>