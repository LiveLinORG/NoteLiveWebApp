<script>
import {defineComponent} from "vue";
import RoomsLista from "../../IAM/components/RoomsLista.component.vue";
export default defineComponent({
  components: {RoomsLista}
})

</script>

<template>
  <div class="general">
    <h1 class="title">Lista de Salas</h1>
    <RoomsLista/>
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
