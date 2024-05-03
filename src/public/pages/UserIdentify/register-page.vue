<script>
import {defineComponent} from "vue";
import RegisterForm from "@/components/register-form.component.vue";

export default defineComponent({
  components: {RegisterForm}
})

</script>

<template>
  <div class="general">
  <h1 class="title">Registro</h1>
    <register-form/>
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
