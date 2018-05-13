import Vue from 'vue'
import Router from 'vue-router'
import Cars from '@/components/cars'
import Car from '@/components/car'
import Slider from '@/components/slider'



Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Slider',
            component: Slider
        },
        {
            path: '/cars',
            name:'Cars',
            component: Cars,
        },
        {
            path: '/car/:id',
            name:'Car',
            component: Car,
        },

    ]
})
