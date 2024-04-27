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
      text3: "Erick",
      items: [
        {label: 'ProfessorSession',to: '/professorSession'},
      ]
    };
},
};
</script>

<template>


<section class="global">
  <section class="crear-session">
      <OrangeCard class="card" :text="text" :pin="pin"></OrangeCard>
    <div class="icono-subir">
      <div class="imagen">
        <img class="subir-archivoimg" src="../../assets/subir-archivo.png" >
      </div>
    </div>
      <OrangeCard class="card2" :text="text2" :pin="number"></OrangeCard>

  </section>
  <section class="crear-session2">
    <router-link v-for="item in items" :key="item.label"
                 v-slot="{navigate,href}" :to="item.to" custom>
      <button :href="href" class="boton" @click="navigate">Empezar</button>
    </router-link>
  <ul class="lista">
      <ListaNombre class="listaNombre" :text="text3"></ListaNombre>
      <ListaNombre class="listaNombre" :text="text3"></ListaNombre>
      <ListaNombre class="listaNombre" :text="text3"></ListaNombre>
      <ListaNombre class="listaNombre" :text="text3"></ListaNombre>
      <ListaNombre class="listaNombre" :text="text3"></ListaNombre>
    <ListaNombre class="listaNombre" :text="text3"></ListaNombre>
    <ListaNombre class="listaNombre" :text="text3"></ListaNombre>
    <ListaNombre class="listaNombre" :text="text3"></ListaNombre>
    <ListaNombre class="listaNombre" :text="text3"></ListaNombre>
    <ListaNombre class="listaNombre" :text="text3"></ListaNombre>
    <ListaNombre class="listaNombre" :text="text3"></ListaNombre>
    <ListaNombre class="listaNombre" :text="text3"></ListaNombre>
    <ListaNombre class="listaNombre" :text="text3"></ListaNombre>
    <ListaNombre class="listaNombre" :text="text3"></ListaNombre>
    <ListaNombre class="listaNombre" :text="text3"></ListaNombre>
    <ListaNombre class="listaNombre" :text="text3"></ListaNombre>
    <ListaNombre class="listaNombre" :text="text3"></ListaNombre>
    <ListaNombre class="listaNombre" :text="text3"></ListaNombre>
    <ListaNombre class="listaNombre" :text="text3"></ListaNombre>
    <ListaNombre class="listaNombre" :text="text3"></ListaNombre>

  </ul>
  </section>
  <router-view></router-view>
</section>

</template>

<style>
.global{
  display:grid;
  grid-template-columns:1fr;
  grid-template-rows:1fr 1fr;
  grid-gap:2vh;
}
.crear-session {
  display: flex;
  width: 100vw;
  flex-direction: row;
  padding: 0;
  background-color: rgba(194, 144, 104, 0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);
  border-radius: 0.8%;
  align-items:center;
  justify-content: center;
  height: auto;
  margin-top:7vh;
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
  align-items:center;
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
  width:20%;

}

.card2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f7a072;
  width:20%;
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
  padding-top:2vw;
  padding-bottom:2vw;
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
  margin-bottom:8vh;
}
.boton:active {
  transform: translateY(-2%) scale(1.1);
}

.lista {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-flow: row;
  grid-gap: 1vh;
  width:65%;
}

.lista .listaNombre{
  background-color: rgba(244, 215, 192, 0.37);
  padding: 1vh;
  border-radius: 5px;
  text-align: center;
  font-size:2vh;
}

</style>