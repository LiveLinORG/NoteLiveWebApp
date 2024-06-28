<script>
import { defineComponent } from "vue";
import UserCrud from "@/IAM/components/UserCrud.vue";

export default defineComponent({
  components: { UserCrud }
})
</script>

<template>
  <div class="general">
    <h1 class="title">Information</h1>
    <UserCrud/>
  </div>
</template>

<style>
.general {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 1%;
  margin-bottom: auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

.title {
  font-family: "Inter", sans-serif;
  font-size: 48px;
  margin-bottom: 20px;
  color: #df711b; /* Color de título */
  text-align: center;
  text-transform: uppercase;
}


</style>
