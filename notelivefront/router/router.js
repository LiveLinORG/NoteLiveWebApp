import { createRouter, createWebHistory } from 'vue-router';
import { ref } from 'vue'; // Importar ref desde Vue

const router = createRouter(
    {
        history: createWebHistory(import.meta.env),
        routes: [{
            path:'/crearsesion',
            name:'Crearsesion',
            component:()=>import('../src/public/pages/crearsesion.vue'),
            meta: {
                isVisibleInitialPage: false // Establecer isVisible como false para esta ruta
            }
        }
        ]
    }
)
export const isVisibleInitialPage = ref(true);

export default router;

