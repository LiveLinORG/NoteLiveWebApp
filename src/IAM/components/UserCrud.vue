<template>
  <div>
    <h2 class="text-left">Información del Usuario</h2>
    <ul>
      <li v-for="(value, key) in userDisplay" :key="key">
        <span>{{ displayLabel(key) }}:</span>
        <span v-if="editingField !== key">
          {{ key === 'password' ? '********' : value }}
        </span>
        <template v-else>
          <input
              v-model="user[key]"
              :type="key === 'password' && !showPassword ? 'password' : 'text'"
          />
        </template>
      </li>
    </ul>
  </div>
  <div class="button-container">
    <button @click="mostrarSalas" class="button-login">Mostrar Salas</button>
  </div>
</template>

<script>
import { getUserInformation } from "@/IAM/services/userCRUDservice";
export default {
  name: "UserCrud",
  data() {
    return {
      user: {
        username: "",
        password: "",
        role: "",
        name: "",
        lastname: "",
        correo: "",
      },
      editingField: null,
      showPassword: false
    };
  },
  computed: {
    userDisplay() {
      return {
        "Username": this.user.username,
        "Role": this.user.role,
        "Name": this.user.name,
        "Lastname": this.user.lastname,
        "Correo": this.user.correo,
      };
    }
  },
  methods: {
    async fetchUserInfo() {
      try {
        const username = localStorage.getItem('loggedInUsername');
        if (username) {
          const response = await getUserInformation(username);
          this.user = response.data;
        } else {
          console.error('No username found in localStorage');
        }
      } catch (error) {
        console.error("Error obteniendo la información del usuario:", error);
      }
    },
    async mostrarSalas(){
      this.$router.push('/salas');
    },
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
    displayLabel(key) {
      // Personalizar etiquetas de visualización aquí
      const labels = {
        "username": "Username",
        "role": "Role",
        "name": "Name",
        "lastName": "Lastname",
        "correo": "Correo"
        // Agregar más según sea necesario
      };
      return labels[key] || key;
    }
  },
  mounted() {
    this.fetchUserInfo();
  },
};
</script>

<style scoped>
.text-left {
  font-family: "Inter", sans-serif;
  margin-left: 1%;
  margin-top: 5%;
  margin-bottom: 1%;
  font-size: 24px;
}
.toggle-button {
  margin-left: 10px;
  background-color: #321201;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  color: white;
  font-family: "Inter", sans-serif;
}
.toggle-button:hover {
  background-color: #f6985b;
}
</style>