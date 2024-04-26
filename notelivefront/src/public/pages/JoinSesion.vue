<script>
export default {
  name: "joinSesion",
};
</script>

<template>
  <section class="total">
    <section class="container">
      <div class="pincontainer">
      <h2>Ingresar PIN de la sesión</h2>
      <h1>Ej: 835925</h1>
      </div>
      <div class="button">
        <img src="../../assets/entericon.png" alt="">
      </div>
      <input type="text" class="placehold" placeholder="Ingresa tu nombre...">
    </section>
  </section>
</template>

<style scoped>
 .total{
    display:flex;
    align-items: center;
    justify-content: center;
    height: 100%;

  }
  .container{
    display:grid;
    grid-template-columns:0.60fr 0.30fr;
    grid-template-rows:1fr 1fr;
    background-color: #FFE8D6;
    align-self: center;

    grid-template-areas:"pin button"
                        "placehold placehold";
    grid-gap:3vw;
    width:65vw;
    height:30vw;
    align-content: center;
    margin-top:10%;
    margin-bottom:auto;
    align-items:center;
    justify-content:center;

  }
 .pincontainer {
   grid-area: pin;
   width: auto;
   height: auto;
   background-color: #F7A072;
   display: grid; /* Cambiar a grid */
   grid-auto-flow: row; /* Asegurarse de que los elementos fluyan en una sola columna */
   gap: 0; /* Establecer el espacio entre las filas a 0 */
   align-items: center;
   justify-content: center;
   border-radius: 10px;
   padding:2vh;
 }

  .button {
    grid-area:button;
    width:75%;
    height: auto;
    background-color: #DF711B;
    border-radius:10px;
    margin-right:auto;
    margin-left:auto;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
  .button > img{
    width:90%;
  }
  .placehold{
    grid-area: placehold;
    width:77%;
    height: 50%;
    background-color: #FDE49C;
    border-radius:10px;
    margin-left:auto;
    margin-right:auto;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .placehold::placeholder  {
    font-weight:400;
    font-size:3.5vh;
    margin:0;
    text-align: center;
    line-height: 2.5;

  }
 .placehold::placeholder {
   color: rgba(0, 0, 0, 0.5);
 }
 input:focus {
   outline: none;
   text-align: center;
 }
 .placehold:focus::placeholder {
   color: #3d210b;
 }
  .pincontainer > h1{
  text-align: center;
    font-weight:400;
    color:#000000;
    font-size:6vh;
    margin:0;
    padding:0;
  }
  .pincontainer > h2 {
    text-align: center;
    font-weight:400;
    color:#000000;
    font-size:5vh;
    margin:0;
    padding:0;
  }

</style>