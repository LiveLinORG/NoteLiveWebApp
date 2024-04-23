
<template>
  <div class="card">
    <p class="line">PIN</p>
    <p class="pin">{{ pin }}</p>
  </div>
</template>

<script>
export default {
  props: {
    pin: String
  }
}
</script>

<style scoped>
.card {
  background-color: #f7a072;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.line {
  margin: 5px 0;
  font-size: 16px;
  color: black;
  text-align: center;
}

.pin {
  margin: 5px 0;
  font-size: 24px;
  color: black;
  text-align: center;
}
</style>
