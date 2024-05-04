<script>
import {defineComponent} from "vue";
import LoginForm from "@/components/login-form.component.vue";

export default defineComponent({
  components: {LoginForm}
})

</script>

<template>
  <div class="general">
  <h1 class="title"> Iniciar Sesión </h1>
    <login-form/>
  </div>
</template>

<style>
/* Base styles for general webpage */
body {
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
}

.general {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
  align-items: center;
  margin-top: 1%;
  margin-bottom: auto;
}

.title {
  font-family: "Inter", sans-serif;
  font-size: 48px;
  margin-bottom: 0;
}

/* Media query for iPhone 15 (estimated screen size: 375px) */
@media (max-width: 375px) {
  .general {
    margin-top: 2rem; /* Adjust margin for better spacing on iPhone 15 */
  }

  .title {
    font-size: 32px; /* Adjust font size for smaller screens */
  }
}
</style>
