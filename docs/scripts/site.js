import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import application from './application.vue';
import home from './home.vue';

Vue.config.devtools = true;

const routes = [
    { path: '/', component: home }
];

const router = new VueRouter({
    routes
});

window.onload = () => {
    new Vue({
        name: 'app',
        el: '#app',
        router,
        render(h){
            return h(application);
        }
    });
};