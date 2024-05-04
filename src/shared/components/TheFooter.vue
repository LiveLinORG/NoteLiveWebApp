<script>
export default {
  name: 'the-footer'
}
</script>

<template>
  <footer class="footer-container">
    <div class="copyright">Copyright Notelive</div>
  </footer>
</template>

<style scoped>
.footer-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #FFD8BA;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  height: 1.5vh;
  align-items: center;
  display: flex;
  justify-content: center;
}

.copyright {
  color: #333;
}
@media screen and (max-width: 670px) {
  .footer-container {
    display: none; /* Oculta el footer */
  }
}
</style>
