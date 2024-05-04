<template>
  <header class="header-container">
    <img src="../../assets/logoAPPWEB.png" alt="logo" class="logo" />
    <div class="spacer"></div>
    <div class="username">Username</div>
    <section v-on:click="isVisibleInitialPage"> <!--v-if="isMainPage"-->
    <router-link to='/login'>
      <button class="login-button">Iniciar sesión</button>
    </router-link>
    </section>
  </header>
</template>

<script>
import {isVisibleInitialPage} from "../../../router/router";
//import {useRouter} from "vue-router";

export default {
  name: 'the-header',
  computed: {
    isVisibleInitialPage() {
      return isVisibleInitialPage.value = false;
    },
    //isMainPage(){
    //  const router = useRouter();
    //  return router.currentRoute.path === '/';
    //}
  },
}

</script>

<style scoped>
/* Base styles for general webpage */
.header-container {
  background-color: #FFD8BA; /* Color de fondo del encabezado */
  padding: 1vw; /* Espaciado interior del encabezado */
  height: 3vh;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra del encabezado */
  display: flex;
  align-items: center; /* Para centrar verticalmente el contenido */
}

.username {
  margin-right: 1vw;
}

.login-button {
  margin: 0;
  width: 290px;
  height: 37px;
  border-radius: 50vh;
  background-color: #F7A072;
  border: #F7A072;
  font-family: "Inter", sans-serif;
  font-size: 24px;
}

.login-button:hover {
  transform: translateY(-2px);
}

.login-button:active {
  background-color: #f6985b;
  transform: translateY(-10%) scale(0.95);
}

.spacer {
  flex: 1 1 auto; /* Para ocupar todo el espacio disponible */
}

.logo {
  height: 2vw;
  border-radius: 5px; /* Reduzco el radio del borde para que no sea tan prominente */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Añade una ligera sombra para dar profundidad */
  margin-left: 1vw;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transiciones suaves para transformación y sombra */
}

.logo:hover {
  transform: scale(1.1); /* Aumenta ligeramente el tamaño al pasar el ratón por encima */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Añade una sombra más pronunciada */
  animation: rotate 2s infinite alternate, moveUp 2s infinite alternate, changeColor 2s infinite alternate;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes moveUp {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-5px);
  }
}

@keyframes changeColor {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

/* Media query for iPhone 15 (estimated screen size: 375px) */
@media (max-width: 375px) {
  .header-container {
    /* Adjust header height for better layout */
    height: 5vh;
  }

  .login-button {
    /* Adjust button width for smaller screens */
    width: 200px;
    font-size: 18px; /* Adjust font size for better readability */
  }

  .username {
    /* Adjust font size for better readability */
    font-size: 16px;
  }

  .logo {
    /* Adjust logo height for better proportions */
    height: 3.5vh;
  }
}

</style>
