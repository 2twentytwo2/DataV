import Vue from 'vue';
import VueRouter from "vue-router";

import chart5 from "@/components/chart5";
import chart1 from "@/components/chart1"
import mainPage from "../components/mainPage";

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path: '/',
            // name:'mainPage',
            component: mainPage
        },
        {
            path:'/chart5',
            name:'chart5',
            component:chart5
        },
        {
            path:'/chart1',
            name:'chart1',
            component:chart1
        }
    ],
    // mode:'history'
})