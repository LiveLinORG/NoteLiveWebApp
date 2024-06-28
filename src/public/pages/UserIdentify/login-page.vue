<script>
import {defineComponent} from "vue";
import LoginsForm from "@/notelive/userEntity/components/login.form.component.vue";

export default defineComponent({
  components: {LoginsForm}
})

</script>

<template>
  <div class="general">
  <h1 class="title"> Iniciar Sesión </h1>
    <logins-form/>
  </div>
</template>

<style>
.general{
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
</style>
