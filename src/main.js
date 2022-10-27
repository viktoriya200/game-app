import { createApp } from 'vue'
import { Vue3Mq } from "vue3-mq";
import App from './App.vue'
import store from './store'
import router from './router'


createApp(App)
    .use(Vue3Mq, {
        breakpoints: {
            xs: 0,
            sm: 768,
            md: 992,
            lg: 1280,
            xl: 1440,
            xxl: 1920,
            xxxl: Infinity,
        },
        defaultBreakpoint: 'md',
    })
    .use(router)
    .use(store)
    .mount('#app')
