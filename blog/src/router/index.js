// import Vue from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import BlogHome from '@/components/BlogHome';
import BlogPost from '@/components/BlogPost';

// Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
        path: '/BlogHome',
        name: 'Blog',
        component: BlogHome

    },
    {
        path: '/BlogPost',
        name: 'Post',
        component: BlogPost
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

// export default VueRouter({
//     mode: 'history',
//     routes: [{
//             path: '/',
//             name: 'Home',
//             component: Home
//         },
//         {
//             path: '/about',
//             name: 'About',
//             // route level code-splitting
//             // this generates a separate chunk (about.[hash].js) for this route
//             // which is lazy-loaded when the route is visited.
//             component: () =>
//                 import ( /* webpackChunkName: "about" */ '../views/About.vue')
//         },
//         {
//             path: '/components',
//             name: 'blog-home',
//             component: BlogHome
//         },
//         {
//             path: '/components/:slug',
//             name: 'blog-post',
//             component: BlogPost
//         }
//     ]
// })