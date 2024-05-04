<script>
export default {
  name: "createSession",
  data() {
    return {
      inputName: "",
      items: [
        { label: 'SalaDeEspera', to: '/salaCreada' },
      ]
    };
  }
};
</script>



<template>
  <section class="global">
    <div class="ingresar-section">
      <input type="text" class="placeholder" v-model="inputName"  placeholder="Ingrese su nombre">
      <router-link v-for="item in items" :key="item.label" v-slot="{navigate, href}" :to="item.to" custom>
        <button :href="href" class="botoncito" @click="navigate">Crear Sala</button>
      </router-link>
    </div>
  </section>
</template>


<style scoped>
/* Base styles for general webpage */
.global {
  display: flex;
  flex-direction: row;
  gap: 2vh;
  align-items: center;
  justify-content: center;
  margin-top: 35vh;
}

.ingresar-section {
  background-color: #f7a072;
  border: 2px solid black;
  width: 50%;
  height: 4vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 3vh;
  border-radius: 2vh;
  gap: 3vh;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.placeholder {
  width: 60%;
  border-radius: 2vh;
  transition: transform 0.5s ease;
  text-align: center;
  font-weight: bold;
  margin-right: 0;
  background-color: rgba(253, 228, 156, 0.86);
  border: 2px solid black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 1.4em;
}

.placeholder:focus {
  transform: scale(1.05);
  background-color: rgb(253, 228, 156);
}

.botoncito {
  width: 40%;
  border-radius: 2vh;
  transition: transform 0.2s ease;
  background-color: #df711b;
  border: 2px solid black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 1.4em;
}

.botoncito:active {
  background-color: #f6985b;
  transform: translateY(-10%) scale(0.95);
}

/* Media query for iPhone 15 (estimated screen size: 375px) */
@media (max-width: 375px) {
  .global {
    flex-direction: column;
    align-items: center;
    margin-top: 10vh; /* Adjust margin for better layout on iPhone 15 */
  }

  .ingresar-section {
    width: 100%; /* Make section take full width on iPhone 15 */
  }

  .placeholder,
  .botoncito {
    width: 80%; /* Adjust element width for iPhone 15 */
    margin: 1vh auto; /* Add margin for better spacing on smaller screens */
  }
}
</style>