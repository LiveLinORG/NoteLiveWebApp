<script setup>
import { useRouter } from 'vue-router';
import {isVisibleInitialPage} from "../../../router/router";
const router = useRouter();

const irCrear = () => {
  isVisibleInitialPage.value = false; // Modificar el valor de isVisible
  router.push('/crearsesion');
};

const irUnirse = () => {
  isVisibleInitialPage.value = false; // Modificar el valor de isVisible
  router.push('/unirsesesion');
};
</script>

<template>
  <div v-if="isVisibleInitialPage" class="general">
    <section class="generalstyles">
      <div class="cardicon" v-on:click="irCrear">
        <p>Crear</p>
        <img class="icono" src="../../assets/addicon.png" alt="">
      </div>
      <div class="cardicon1" v-on:click="irUnirse">
        <p>Unirse</p>
        <img class="icono" src="../../assets/entericon.png" alt="">
      </div>
    </section>
  </div>

</template>

<style scoped>

.general {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: auto;
  align-items: center;
  margin-top: 8%;
  margin-bottom: auto;
}

.generalstyles {
  font-family: monospace;
  display: flex;
  width: 80vw;
  flex-direction: row;
  justify-content: center;
  padding: 2vw;
  background-color: rgba(194, 144, 104, 0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);
  border-radius: 8px;
}

.cardicon {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-right: 1vw;
  padding: 3vw;
  background-color: #f7a072;
  min-width: 16vw;
  min-height: 16vw;
  border-radius: 10px;
  transition: transform 0.5s ease;
}

.cardicon1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 1vw;
  padding: 3vw;
  background-color: #fde49c;
  min-width: 16vw;
  min-height: 16vw;
  border-radius: 10px;
  transition: transform 0.5s ease;
}

.cardicon > p,
.cardicon1 > p {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  position: relative;
  font-size: 40px;
  margin: 0;
  transition: transform 0.5s ease;
}

.icono {
  width: 12vw;
  height: 12vw;
}

.cardicon:hover,
.cardicon1:hover {
  transform: scale(1.1);
  transition: transform 0.5s ease;
  cursor: pointer;
}

.cardicon1:active {
  animation: bounce infinite 0.5s;
}

.cardicon:active {
  animation: bounce infinite 0.5s;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
