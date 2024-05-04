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
/* Base styles for general webpage*/
.footer-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #FFD8BA;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3); /* Personaliza la sombra según sea necesario */
  height: 1.5vh;
  align-items: center;
  display: flex;
  justify-content: center;
}

.copyright {
  color: #333;
}

/* Media query for iPhone 15 (estimated screen size: 375px) */
@media (max-width: 375px) {
  /* Minor adjustments for iPhone 15 */
  .footer-container {
    font-size: 0.8rem; /* Adjust font size for better readability  */
    padding: 10px; /* Adjust padding for better spacing  */
  }
}
</style>
