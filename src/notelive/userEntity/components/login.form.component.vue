<script>
//import {User} from "@/notelive/model/user.entity";
//import {isVisibleInitialPage} from "../../router/router";
//import {useRouter} from "vue-router";

import {loginUser} from "@/notelive/userEntity/service/userservice";

export default{
  name: 'LoginsForm',
  data(){
    return{
      username: '',
      password: ''
    }
  },
  methods:{
    async login(){
      try{
        const userData = {
          username: this.username,
          password: this.password
        };
        await loginUser(userData);
        localStorage.setItem('loggedInUsername', this.username);
        this.$router.push('/userInformation');

      }catch(error){
        console.error('Error al iniciar sesión:', error);
      }
  }
 }

}


</script>

<template>
  <div>
    <p class="text-left">Username:</p>
    <input v-model="username" type="text" class="input-container" placeholder="Ingresa tu correo electronico">
    <p class="text-left">Contraseña:</p>
    <input v-model="password" type="text" class="input-container" placeholder="Ingresa tu contraseña">
    <p class="text-center">¿No tienes una cuenta?
      <router-link to='/register'>Regístrate</router-link>
    </p>
    <div class="button-container">
      <button @click="login" class="button-login">Iniciar Sesión</button>
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
.text-center{
  font-family: "Inter", sans-serif;
  font-size: 24px;
  text-align: center;
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
}

.button-login{
  margin: 0;
  width: 481px;
  height: 93px;
  border-radius: 50vh;
  background-color: #F7A072;
  border: #F7A072;
  font-family: "Inter", sans-serif;
  font-size:34px;
}

.button-login:hover{
  transform: translateY(-5px);
}

.button-login:active {
  background-color: #f6985b;
  transform: translateY(-10%) scale(0.95);
}
</style>
