import { createRouter, createWebHistory } from 'vue-router';
import { ref } from 'vue';
import ProfessorSession from "@/public/pages/ProfessorSession.vue";
import StudentSession from "@/public/pages/StudentSession.vue"; // Importar ref desde Vue

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
        },
            {
                path: '/unirsesesion', // Ruta para unirse a una sesión
                name: 'unirsesesion',
                component: () => import('../src/public/pages/JoinSesion.vue'), // Asegúrate de tener el componente correspondiente
                meta: {
                    isVisibleInitialPage: false // O false si no debe ser la página inicial
                }
            },
            {
            path: '/professorSession',component:ProfessorSession,meta:{title:'Professor Session'}
            },
            {path:'/studentSession',component:StudentSession,meta:{title:'Student Session'}
            }
        ]
    }
)
export const isVisibleInitialPage = ref(true);

export default router;

router.beforeEach((to, from, next) => {
    let baseTitle = 'NoteLive';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
});

