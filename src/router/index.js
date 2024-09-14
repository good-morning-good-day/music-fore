import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

import Login from "@/page/login"
import Player from '@/page/player'
import Home from '@/page/home'
import Select from '@/page/select'


export default new Router({
routes: [
    {
        path: '/login',
        component: Login
    },
    {
        path:"/player",
        component: Player
    },
    {
        path:"/home",
        component: Home
    },
    {
        path:"/select",
        component: Select
    }
]
})