<script>
import {buscarPin} from "@/notelive/services/pinService.";
import {pinvalue, usernameinput} from "../../../router/router";

export default {
  name: "joinSesion",
  data() {
    return {
      inputName: "",
      items: [
        { label: 'AlumnoWaiting', to: '/salaCreadaAlumno' },
      ]
    };
  },
  methods: {
    async buscarPinExistente(navigate) {
      const inputPin = document.getElementById('pin').value;

      const inputName = this.inputName;

      try {
        const pinEncontrado = await buscarPin(inputPin, inputName);
        if (!pinEncontrado) {
          console.log('El PIN no existe.');
        } else {
          localStorage.setItem('inputName',this.inputName);
          navigate();
        }
      } catch (error) {
        console.error('Error al buscar el PIN:', error);
      }
    },
    // Método para actualizar inputName
    actualizarNombre(event) {
      this.inputName = event.target.value;
      usernameinput.value=this.inputName;
      pinvalue.value=document.getElementById('pin').value;
      console.log(pinvalue.value)
      localStorage.setItem('username',this.inputName);
    }
  }

};
</script>

<template>
  <section class="total">
    <section class="container">
      <div class="pincontainer">
      <h2>Ingresar PIN de la sesión</h2>
     <h2> <input type="text" class="placeholdpin" id="pin" placeholder="Ej: 835925" ></h2>
      </div>
      <router-link v-for="item in items" :key="item.label"
                   v-slot="{navigate,href}" :to="item.to" custom>
        <div :href="href" class="button" @click="buscarPinExistente(navigate)">
          <img src="../../assets/entericon.png" alt="">
        </div>
      </router-link>

      <input type="text" class="placehold" placeholder="Ingresa tu nombre..." id="inputName" v-model="inputName" @input="actualizarNombre">
    </section>
  </section>
  <router-view></router-view>
</template>

<style scoped>
input{
  padding:2vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  margin:1vw;
  transition: all 0.3s ease;

}

 .total{
    display:flex;
    align-items: center;
    justify-content: center;
    height: 100%;
   transition: all 0.3s ease;

  }
  .container{
    display:grid;
    grid-template-columns:0.60fr 0.30fr;
    grid-template-rows:1fr 1fr;
    background-color: #FFE8D6;
    align-self: center;

    grid-template-areas:"pin button"
                        "placehold placehold";
    grid-gap:3vw;
    width:65vw;
    height:30vw;
    align-content: center;
    margin-top:10%;
    margin-bottom:auto;
    align-items:center;
    justify-content:center;
    transition: all 0.3s ease;

  }
 .pincontainer {
   grid-area: pin;
   width: auto;
   height: auto;
   background-color: #F7A072;
   display: grid;
   grid-auto-flow: row;
   gap: 0;
   align-items: center;
   justify-content: center;
   border-radius: 10px;
   padding:2vh;
   transition: all 0.3s ease;

 }

  .button {
    grid-area:button;
    width:75%;
    height: auto;
    background-color: #DF711B;
    border-radius:10px;
    margin-right:auto;
    margin-left:auto;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top:4vh;
    padding-bottom:4vh;
    transition: all 0.3s ease;

  }
  .button > img{
    width:70%;
    transition: all 0.3s ease;

  }
  .placehold, .placeholdpin{
    grid-area: placehold;
    width:77%;
    height: 50%;
    background-color: #FDE49C;
    margin-left:auto;
    margin-right:auto;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: all 0.3s ease;
    border-radius:6%;
  }
  .placehold::placeholder , .placeholdpin::placeholder  {
    font-weight:400;
    font-size:3.5vh;
    margin:0;
    line-height: 2.5;
    text-align: center;
    transition: all 0.3s ease;

  }
 .placehold::placeholder {
   color: rgba(0, 0, 0, 0.5);
   text-align: center;
   transition: all 0.3s ease;

 }
 input:focus {
   outline: none;
   font-size:3.5vh;
   text-align: center;
   transition: all 0.3s ease;

 }
 .placehold:focus::placeholder {
   color: #3d210b;
   text-align: center;
   font-weight:400;
   font-size:3.5vh;
   margin:0;
   padding:1vh;
   transition: all 0.3s ease;

 }
  .pincontainer > h1{
  text-align: center;
    font-weight:400;
    color:#000000;
    font-size:5vh;
    margin:0;
    padding:0;
    transition: all 0.3s ease;

  }
  .pincontainer > h2 {
    text-align: center;
    font-weight:400;
    color: rgba(0, 0, 0, 0.79);
    font-size:4vh;
    margin:0;
    padding:1vh;
    transition: all 0.3s ease;

  }

#pin {
  padding: 3vh;
}
.placeholdpin::placeholder{
  font-size:4.5vh;
}
.placeholdpin{
  background-color: rgba(171, 92, 50, 0.4);
  animation: lightEffect 5s infinite;

}

@keyframes lightEffect {
  0% {
    background-color: rgba(171, 92, 50, 0.05);
  }
  50% {
    background-color: rgba(171, 92, 50, 0.1); /* Ajusta el color de fondo intermedio */
  }
  100% {
    background-color: rgba(171, 92, 50, 0.05); /* Ajusta el color de fondo final */
  }
}
.button {
  cursor: pointer;
  transition: all 1s ease;

}


.button:active {
  transform: scale(1.2);
  transition: all 1s ease;

}

.button:hover {
  transform: scale(0.95);
  animation: pulse 1s infinite alternate;
  transition: all 1s ease;

}



@keyframes pulse {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}


</style>