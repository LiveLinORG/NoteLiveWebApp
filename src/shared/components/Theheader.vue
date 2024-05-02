<template>
  <header class="header-container">
    <img src="../../assets/logoAPPWEB.png" alt="logo" class="logo" />
    <div class="spacer"></div>
    <div class="username">Username</div>
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
  padding: 1vw; /* Espaciado interior del encabezado */
  height: 3vh;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra del encabezado */
  display: flex;
  align-items: center; /* Para centrar verticalmente el contenido */
}

.username {
  margin-right: 1vw;
}

.spacer {
  flex: 1 1 auto; /* Para ocupar todo el espacio disponible */
}

.logo {
  height: 2vw;
  border-radius: 5px; /* Reduzco el radio del borde para que no sea tan prominente */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Añade una ligera sombra para dar profundidad */
  margin-left: 1vw;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transiciones suaves para transformación y sombra */
}

.logo:hover {
  transform: scale(1.1); /* Aumenta ligeramente el tamaño al pasar el ratón por encima */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Añade una sombra más pronunciada */
  animation: rotate 2s infinite alternate, moveUp 2s infinite alternate, changeColor 2s infinite alternate;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes moveUp {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-5px);
  }
}

@keyframes changeColor {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
</style>
