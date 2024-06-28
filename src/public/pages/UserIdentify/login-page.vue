<script>
import LoginForm from '@/components/login-form.component.vue';

export default {
  components: { LoginForm }
}
</script>

<template>
  <div class="general">
    <h1 class="title">Login</h1>
    <login-form/>
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
