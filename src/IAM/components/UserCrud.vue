<template>
  <div class="user-info-card">
    <h2 class="card-title">Información del Usuario</h2>
    <div class="info-grid">
      <div v-for="(value, key) in userDisplay" :key="key" class="info-item">
        <span class="info-label">{{ displayLabel(key) }}</span>
        <span v-if="editingField !== key" class="info-value">
          {{ key === 'password' ? '********' : value }}
        </span>
        <template v-else>
          <input
              v-model="user[key]"
              :type="key === 'password' && !showPassword ? 'password' : 'text'"
              class="info-input"
          />
        </template>
      </div>
    </div>
    <div class="button-container">
      <button @click="mostrarSalas" class="button-login">Mostrar Salas</button>
    </div>
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
      const labels = {
        "username": "Username",
        "role": "Role",
        "name": "Name",
        "lastName": "Lastname",
        "correo": "Correo"
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
.user-info-card {
  background-color: #f5f5f5;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 600px;
  margin-bottom:4rem;
  margin-top:2rem;
  margin-left:auto;
  margin-right:auto;
}

.card-title {
  color: #ab734b;
  font-family: "Inter", sans-serif;
  font-size: 24px;
  margin-bottom: 1.5rem;
  text-align: left;
}

.info-grid {
  display: grid;
  gap: 1.5rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  background-color: rgba(253, 228, 156, 0.44);
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.info-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.info-label {
  font-weight: bold;
  color: #bd973c;
  margin-bottom: 0.5rem;
}

.info-value {
  color: #f6985b;
}

.info-input {
  border: 1px solid #cdb16f;
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 1rem;
}

.button-container {
  margin-top: 2rem;
  text-align: center;
}

.button-login {
  background-color: rgba(223, 113, 27, 0.96);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.55rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button-login:hover {
  background-color: #F7A072;
  transform: translateY(-2px);
}

.toggle-button {
  background-color: #ab734b;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
}

.toggle-button:hover {
  background-color: #f6985b;
}
</style>