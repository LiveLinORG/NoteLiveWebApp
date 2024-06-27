import { createRouter, createWebHistory } from 'vue-router';
import { ref } from 'vue';

import mainSession from "@/public/pages/mainSession.vue";
import waitingMainRoom from "@/public/pages/salaEspera/WaitingMainRoom.vue";
import RegisterPage from "@/public/pages/UserIdentify/register-page.vue";
import LoginPage from "@/public/pages/UserIdentify/login-page.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env),
    routes: [
        {
            path: '/init',
            name: 'init',
            component: () => import( '../src/public/pages/InitPage.vue'),
        },{
            path: '/register',
            name: 'register',
            component: RegisterPage,
        },{
            path: '/login',
            name: 'login',
            component: LoginPage,
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
export const usernameinput = ref(String);
export const pinvalue = ref(String);
export const iduser = ref(String);
export const username = ref(String);
export const isProfessor = ref(true);

export default router;

router.beforeEach((to, from, next) => {
    let baseTitle = 'NoteLive';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
});

