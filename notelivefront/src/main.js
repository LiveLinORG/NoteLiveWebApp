import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import 'primevue/resources/themes/saga-blue/theme.css'; // Tema de PrimeVue
import 'primevue/resources/primevue.min.css'; // Estilos de PrimeVue

const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);
app.mount('#app');
