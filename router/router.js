import { createRouter, createWebHistory } from 'vue-router';
import { ref } from 'vue';

import mainSession from "@/public/pages/mainSession.vue";
import waitingMainRoom from "@/public/pages/salaEspera/WaitingMainRoom.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env),
    routes: [
        {
        path: '/register',
            name: 'register',
            component: () => import('../src/public/pages/UserIdentify/register-page.vue'),
            meta:
                {
                    title: 'Register'
                }
        },{
            path: '/login',
            name: 'login',
            component: () => import('../src/public/pages/UserIdentify/login-page.vue'),
            meta:{
                isVisibleInitialPage: false,
                title: 'Login'
            }
        },{
            path:'/crearsesion',
            name:'Crearsesion',
            component: () => import('../src/public/pages/iniciarSesionProfessor.vue'),
            meta: {
                isVisibleInitialPage: false,
                title: 'Create'
            }
        },{
            path: '/unirsesesion',
            name: 'unirsesesion',
            component: () => import('../src/public/pages/JoinSesion.vue'),
            meta: {
                isVisibleInitialPage: false,
                title: 'Join'
            }
        },{
            path: '/professorSession',
            component: mainSession,
            meta: {
                title: 'Professor Session',
                isProfessor: true
            }
        },{
            path: '/studentSession',
            component: mainSession,
            meta: {
                title: 'Student Session',
                isProfessor: false
            }
        },{
            path: '/salaCreada',
            component: waitingMainRoom,
            meta: {
                title: 'Profesor',
                isAlumnoWaiting:false
            }
        },{
            path: '/salaCreadaAlumno',
            component: waitingMainRoom,
            meta: {
                title: 'Alumno',
                isAlumnoWaiting:true
            }
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

