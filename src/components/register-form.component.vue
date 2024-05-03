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
      <router-link to='/'>
        <button class="button-register">Registrarse</button>
      </router-link>
    </div>
  </div>
</template>

<style>
.text-left{
  font-family: "Inter", sans-serif;
  margin-left: 1%;
  margin-top: 5%;
  margin-bottom: 1%;
  font-size: 24px;
}

.input-container{
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
  
.button-container{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 10%;
}

.button-register{
  margin: 0;
  width: 481px;
  height: 93px;
  border-radius: 50vh;
  background-color: #F7A072;
  border: #F7A072;
  font-family: "Inter", sans-serif;
  font-size:34px;
}

.button-register:hover{
  transform: translateY(-5px);
}

.button-register:active {
  background-color: #f6985b;
  transform: translateY(-10%) scale(0.95);
}
</style>
