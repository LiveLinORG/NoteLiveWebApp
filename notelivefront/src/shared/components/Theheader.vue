<template>
  <header class="header-container">
    <div class="header-content">
      <!-- Aquí puedes agregar el contenido de tu encabezado -->
    </div>
  </header>
</template>

<script>
export default {
  name: 'the-header'
}
</script>

<style scoped>
.header-container {
  background-color: #FFD8BA; /* Color de fondo del encabezado */
  padding: 1.3vw; /* Espaciado interior del encabezado */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra del encabezado */
}

.header-content {
  max-width: 100vw; /* Ancho máximo del contenido del encabezado */
}

.header-content h1 {
  color: #333; /* Color del texto del encabezado */
}
</style>
