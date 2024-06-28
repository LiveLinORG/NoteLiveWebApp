<template>
  <header class="header-container">
    <div class="left-section">
      <img src="../../assets/logoAPPWEB.png" alt="logo" class="logo" @click="redirectToHome" />
      <button @click="navigateToQuestionPackage" class="navigate-button">Solicitar paquete de preguntas</button>
    </div>
    <div class="spacer"></div>
    <div class="username">Username</div>
    <section v-on:click="isVisibleInitialPage">
      <router-link to='/login'>
        <button class="login-button">Iniciar sesión</button>
      </router-link>
    </section>
  </header>
</template>

<script>
import { isVisibleInitialPage } from "../../../router/router";
import { useRouter } from 'vue-router';

export default {
  name: 'the-header',
  setup() {
    const router = useRouter();

    const navigateToQuestionPackage = async () => {
      await router.push('/codigoarrayquestionform');
    };

    const redirectToHome = () => {
      window.location.href = 'http://190.239.59.168:8080';
    };

    return {
      isVisibleInitialPage,
      navigateToQuestionPackage,
      redirectToHome,
    };
  },
}
</script>

<style scoped>
.header-container {
  background-color: #FFD8BA;
  padding: 1vw;
  height: 3vh;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left-section {
  display: flex;
  align-items: center;
}

.username {
  margin-right: 1vw;
}

.navigate-button {
  margin-left: 1vw;
  width: 290px;
  height: 37px;
  border-radius: 50vh;
  background-color: #F7A072;
  border: #F7A072;
  font-family: "Inter", sans-serif;
  font-size: 1em;
  cursor: pointer;
}

.navigate-button:hover {
  transform: translateY(-2px);
}

.navigate-button:active {
  background-color: #f6985b;
  transform: translateY(-10%) scale(0.95);
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
  flex: 1 1 auto;
}

.logo {
  height: 2vw;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-left: 1vw;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.logo:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
  }}

@keyframes changeColor {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

</style>
