<script>
//import {User} from "@/notelive/model/user.entity";

export default{
  name: 'RegisterForm',
}
</script>

<template>
 <div>
    <p class="text-left">Nombres:</p>
    <input type="text" class="input-container"  placeholder="Ingresa tus nombres">
    <p class="text-left">Apellidos:</p>
    <input type="text" class="input-container"  placeholder="Ingresa tus apellidos">
    <p class="text-left">Correo electrónico:</p>
    <input type="text" class="input-container"  placeholder="Ingresa tu correo electrónico">
    <p class="text-left">Contraseña:</p>
    <input type="text" class="input-container"  placeholder="Ingresa tu contraseña">
    <div class="button-container">
      <router-link to='/login'>
        <button class="button-register">Registrarse</button>
      </router-link>
    </div>
  </div>
</template>

<style>
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
  font-size: 1.4em;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 10%;
}

.button-register {
  margin: 0;
  width: 481px;
  height: 93px;
  border-radius: 50vh;
  background-color: #F7A072;
  border: #F7A072;
  font-family: "Inter", sans-serif;
  font-size: 34px;
}

.button-register:hover {
  transform: translateY(-5px);
}

.button-register:active {
  background-color: #f6985b;
  transform: translateY(-10%) scale(0.95);
}

/* Media query for iPhone 15 (estimated screen size: 375px) */
@media (max-width: 375px) {
  /* Override specific styles for iPhone 15 */
  .text-left {
    font-size: 16px; /* Adjust font size for smaller screens */
    margin: 1rem 1%; /* Adjust margin for better spacing on smaller screens */
  }

  .input-container {
    width: 100%; /* Set width to 100% for responsiveness on iPhone 15 */
    font-size: 1rem; /* Adjust font size for inputs on iPhone 15 */
    padding: 0 20px; /* Adjust padding for better input placement on iPhone 15 */
    margin-bottom: 1rem; /* Add margin for better spacing on iPhone 15 */
  }

  .button-container {
    margin-top: 2rem; /* Adjust margin for better spacing on iPhone 15 */
    margin-bottom: 3rem; /* Adjust margin for better spacing on iPhone 15 */
  }

  .button-register {
    width: 100%; /* Set width to 100% for responsiveness on iPhone 15 */
    font-size: 18px; /* Adjust font size for button text on iPhone 15 */
    height: 50px; /* Adjust height for button on iPhone 15 */
  }
}
</style>
