<script>
import {registerUser} from "../src/notelive/userEntity/service/userservice";

export default {
  name: 'RegisterForm',
  data() {
    return {
      username: '',
      name: '',
      lastName: '',
      correo: '',
      password: ''
    }
  },
  methods: {
    async register() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
          name: this.name,
          lastName: this.lastName,
          correo: this.correo,
          role: 'alumno'
        };
        await registerUser(userData);
        this.$router.push('/login');
      } catch (error) {
        console.error('Error al registrar el usuario:', error);
      }
    }
  }
}
</script>

<template>
  <div>
    <p class="text-left">Username:</p>
    <input v-model="username" type="text" class="input-container" placeholder="Ingresa tus nombres">
    <p class="text-left">Nombres:</p>
    <input v-model="name" type="text" class="input-container" placeholder="Ingresa tus nombres">
    <p class="text-left">Apellidos:</p>
    <input v-model="lastName" type="text" class="input-container" placeholder="Ingresa tus apellidos">
    <p class="text-left">Correo electrónico:</p>
    <input v-model="correo" type="text" class="input-container" placeholder="Ingresa tu correo electrónico">
    <p class="text-left">Contraseña:</p>
    <input v-model="password" type="password" class="input-container" placeholder="Ingresa tu contraseña">
    <div class="button-container">
      <button @click="register" class="button-register">Registrarse</button>
    </div>
  </div>
</template>

<style>
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
</style>