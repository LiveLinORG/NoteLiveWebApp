<script>
import { username } from "../../../../router/router";

export default {
  name: "elMensaje",
  computed: {
    username() {
      return username
    }
  },
  props: {
    texto: String
  }
}
</script>

<template>
<div class="message-container">
  <div class="sender">
    <svg height="15px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         viewBox="0 0 60.671 60.671" xml:space="preserve">
<g>
	<g>
		<ellipse style="fill:#010002;" cx="30.336" cy="12.097" rx="11.997" ry="12.097"/>
    <path style="fill:#010002;" d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9
			C48.354,35.818,42.661,30.079,35.64,30.079z"/>
	</g>
</g>
</svg>
    <h4>{{ username.value }}</h4>
  </div>
  <div class="message">
    <p>{{ texto }}</p>
  </div>
</div>
  <span class="separator"></span>
</template>

<style scoped>
.message-container{
  display: flex;
  flex-direction: column;
  padding-left:1vh;

}

.sender{
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:left;
}
.sender svg{
  margin-right:0.5vw;
  margin-left:0.3vw;
  padding:0.2vw;
  border: 1px solid black;
  border-radius: 50%;
  display: inline-block;
}
.message{

  align-items:center;
  justify-content:left;
  margin-left:0;
  margin-right:auto;
  padding-bottom:1vh;
}
.message p{
  margin-top:0;
  font-size:1em;
}
.separator {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #000000;
  margin: 0 0.7em;
}

</style>