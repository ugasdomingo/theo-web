import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'register', component: () => import('pages/RegisterPage.vue') },
      { path: 'podcast', component: () => import('pages/PodcastPage.vue') },
      { path: 'entrevistas', component: () => import('pages/EntrevistasPage.vue') },
      { path: 'turismo', component: () => import('pages/TurismoPage.vue') },
      { path: 'eventos', component: () => import('pages/EventosPage.vue') },
      { path: 'sketch', component: () => import('pages/SketchPage.vue') },
      { 
        path: 'subir-post', 
        component: () => import('pages/CreatePostPage.vue'),
        meta: {
          auth: true,
        },
    },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
