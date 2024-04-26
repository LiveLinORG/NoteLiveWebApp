
<template>
  <div class="card">
    <p class="line">{{text}}</p>
    <p class="pin">{{ pin }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    pin: String
  }
}
</script>

<style scoped>
.card {
  background-color: #f7a072;
  border-radius:   8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.line {
  margin: 5px 0;
  color: black;
  text-align: center;
  font-size: 3vh;

}

.pin {
  margin: 5px 0;
  color: black;
  text-align: center;
  font-size: 5vh;

}
</style>
