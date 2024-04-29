import { createRouter, createWebHistory } from 'vue-router';
import { ref } from 'vue';

import mainSession from "@/public/pages/mainSession.vue";
import crearsesion from "@/public/pages/crearsesion.vue"; // Importar ref desde Vue

const router = createRouter({
    history: createWebHistory(import.meta.env),
    routes: [
        {
            path:'/crearsesion',
            name:'Crearsesion',
            component: () => import('../src/public/pages/iniciarSesionProfessor.vue'),
            meta: {
                isVisibleInitialPage: false,
                title: 'Create'
            }
        },
        {
            path: '/unirsesesion',
            name: 'unirsesesion',
            component: () => import('../src/public/pages/JoinSesion.vue'),
            meta: {
                isVisibleInitialPage: false,
                title: 'Join'
            }
        },
        {
            path: '/professorSession',
            component: mainSession,
            meta: {
                title: 'Professor Session',
                isProfessor: true
            }
        },
        {
            path: '/studentSession',
            component: mainSession,
            meta: {
                title: 'Student Session',
                isProfessor: false
            }
        },{
            path: '/salaCreada',
            component: crearsesion
        }
    ]
});
export const isVisibleInitialPage = ref(true);
export const isLogged = ref(false);

export default router;

router.beforeEach((to, from, next) => {
    let baseTitle = 'NoteLive';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
});

