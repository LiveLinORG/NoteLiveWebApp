<script>
import OrangeCard from "@/shared/components/OrangeCard.vue";
import ListaNombre from "@/shared/components/ListaNombre.vue";

export default {
  name: "crearSesion",
  components: {ListaNombre, OrangeCard},
  data() {
    return {
      pin: '1234',
      text: "PIN",
      text2: "Participantes",
      number: '15',
      text3: "Erick"
    };
},
};
</script>

<template>



  <section class="crear-session">
    <div class="orange-card">
      <OrangeCard class="card" :text="text" :pin="pin"></OrangeCard>
    </div>
    <div class="icono-subir">
      <div class="imagen">
        <img class="subir-archivoimg" src="../../assets/subir-archivo.png" >
      </div>
      <div class="button-container">
        <button class="boton">Empezar</button>
      </div>
      <div class="lista">
        <ul>
          <ListaNombre class="listaNombre" :text="text3"></ListaNombre>
          <ListaNombre class="listaNombre" :text="text3"></ListaNombre>
          <ListaNombre class="listaNombre" :text="text3"></ListaNombre>
          <ListaNombre class="listaNombre" :text="text3"></ListaNombre>
          <ListaNombre class="listaNombre" :text="text3"></ListaNombre>


        </ul>
      </div>

    </div>
    <div class="orange-card2">
      <OrangeCard class="card2" :text="text2" :pin="number"></OrangeCard>
    </div>

  </section>


</template>

<style>

.crear-session {
  font-family: monospace;
  display: flex;
  width: 80vw;
  flex-direction: row;
  margin-left: 30px;
  padding: 3vw;
  background-color: rgba(194, 144, 104, 0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  font-size: 50px; /* Ajusta el tamaño del texto */

}

.crear-session > * {
  margin: 10px;
}


.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 1vw;
  margin-left: 1vw;
  margin-top: 4vw;
  padding: 4vw;
  background-color: #f7a072;
  min-width: 30vw;
  min-height: 5vw;
  border-radius: 10px;
  transition: transform 0.5s ease;
  align-self: center;
  font-size: 3vh;


}

.card2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 1vw;
  margin-left: 1vw;
  padding: 10vw;
  background-color: #f7a072;
  min-width: 30vw;
  min-height: 5vw;
  border-radius: 10px;
  transition: transform 0.5s ease;
  align-self: center;


}




.imagen {
  background-color: #fde49c;
  border-radius: 20px;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
}

.icono-subir .subir-archivoimg {
  width: 15vw;
  height: 25vh;
  margin-top: 35px;
  margin-left: 35px;
  margin-right: 35px;
  margin-bottom: 35px;
  border-radius: 5px;
  transition: transform 0.5s ease;
}

.icono-subir {
  position: relative; /* Añadido */
}

.button-container {
  position: absolute; /* Añadido */
  bottom: -130px; /* Ajusta este valor según sea necesario */
  left: 50%;
  transform: translateX(-50%); /* Centra horizontalmente el botón */
  margin-top: 40px;
  margin-bottom: 10px;
}

.boton {
  background-color: #DF711B;
  color: #000;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  height: 100px;
  width: 300px;
  font-size: 50px; /* Ajusta el tamaño del texto */
}

.lista {
  position: absolute;
  left: 20%;
  transform: translateX(-70%); /* Centra horizontalmente el botón */
  margin-top: 40px;
  margin-bottom: 10px;
  top: 400px;
}

.lista .listaNombre{
  font-size: 20px;
}

</style>