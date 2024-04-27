import { createApp } from 'vue';
import App from './App.vue';
import router from '../router/router';
import PrimeVue from "primevue/config";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Toast from "primevue/toast";
import Splitter from "primevue/splitter";
import Tree from "primevue/tree";
import Carousel from "primevue/carousel";
import Menu from "primevue/menu";
import Listbox from "primevue/listbox";
import Calendar from "primevue/calendar";
import Card from "primevue/card";
import Panel from "primevue/panel";
import TabView from "primevue/tabview";
import DataTable from "primevue/datatable";
import Dialog from "primevue/dialog";
import Slider from "primevue/slider";
import Checkbox from "primevue/checkbox";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import Tooltip from "primevue/tooltip";
import ProgressBar from "primevue/progressbar";
import Sidebar from "primevue/sidebar";

createApp(App)
    .use(PrimeVue,{ripple:true})
    .use(router)
    .component('pv-toolbar',Toolbar)
    .component('pv-button',Button)
    .component('pv-toolbar', Toolbar)
    .component('pv-button', Button)
    .component('pv-inputtext', InputText)
    .component('pv-dropdown', Dropdown)
    .component('pv-checkbox', Checkbox)
    .component('pv-slider', Slider)
    .component('pv-dialog', Dialog)
    .component('pv-datatable', DataTable)
    .component('pv-tabview', TabView)
    .component('pv-panel', Panel)
    .component('pv-card', Card)
    .component('pv-calendar', Calendar)
    .component('pv-listbox', Listbox)
    .component('pv-menu', Menu)
    .component('pv-carousel', Carousel)
    .component('pv-tree', Tree)
    .component('pv-splitter', Splitter)
    .component('pv-toast', Toast)
    .component('pv-tooltip', Tooltip)
    .component('pv-progressbar', ProgressBar)
    .component('pv-sidebar',Sidebar)
    .mount('#app');
