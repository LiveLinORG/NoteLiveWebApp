<script>
//import {User} from "@/notelive/model/user.entity";
//import {isVisibleInitialPage} from "../../router/router";
//import {useRouter} from "vue-router";

export default{
  name: 'LoginForm',
  //computed: {
  //  isVisibleInitialPage() {
  //    return isVisibleInitialPage
  //  },
  //},
}

//const router = useRouter();

//const gotoRegisterPage = () => {
// router.push('/register');
//}

</script>

<template>
  <div>
      <p class="text-left">Correo Electrónico:</p>
      <input type="text" class="input-container"  placeholder="Ingresa tu correo electrónico">
      <p class="text-left">Contraseña:</p>
      <input type="text" class="input-container"  placeholder="Ingresa tu contraseña">
      <p class="text-center">¿No tienes una cuenta?
        <router-link to='/register'>Regístrate</router-link>
      </p>
      <div class="button-container">
        <button class="button-login">Iniciar Sesión</button>
      </div>
    </div>
</template>

<style>
CSS
  /* Base styles for general webpage */
body {
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
}

.text-left {
  font-family: "Inter", sans-serif;
  margin-left: 1%;
  margin-top: 5%;
  margin-bottom: 1%;
  font-size: 24px;
}

.text-center {
  font-family: "Inter", sans-serif;
  font-size: 24px;
  text-align: center;
}

.input-container {
  width: 768px;
  height: 71px;
  border-radius: 50vh;
  transition: transform 0.5s ease;
  text-align: match-parent;
  font-weight: bold;
  padding: 0 40px;
  margin-right: 0;
  background-color: #FDE49C;
  border: #FDE49C;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-size:1.4em;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-login {
  margin: 0;
  width: 481px;
  height: 93px;
  border-radius: 50vh;
  background-color: #F7A072;
  border: #F7A072;
  font-family: "Inter", sans-serif;
  font-size:34px;
}

.button-login:hover {
  transform: translateY(-5px);
}

.button-login:active {
  background-color: #f6985b;
  transform: translateY(-10%) scale(0.95);
}

/* Media query for iPhone 15 (estimated screen size: 375px) */
@media (max-width: 375px) {
  /* Override specific styles for iPhone 15 */
  .text-left,
  .text-center {
    font-size: 16px; /* Adjust font size for smaller screens */
    margin: 1rem 1%; /* Adjust margin for better spacing on smaller screens */
  }

  .input-container {
    width: 100%; /* Set width to 100% for responsiveness on iPhone 15 */
    font-size: 1rem; /* Adjust font size for inputs on iPhone 15 */
    padding: 0 20px; /* Adjust padding for better input placement on iPhone 15 */
    margin-bottom: 1rem; /* Add margin for better spacing on iPhone 15 */
  }

  .button-login {
    width: 100%; /* Set width to 100% for responsiveness on iPhone 15 */
    font-size: 18px; /* Adjust font size for button text on iPhone 15 */
    height: 50px; /* Adjust height for button on iPhone 15 */
    margin-top: 1rem; /* Add margin for better spacing on iPhone 15 */
  }
}
</style>
