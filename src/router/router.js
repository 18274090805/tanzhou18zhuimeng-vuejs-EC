// 路由配置文件

// 导入模块
import Vue from 'vue';
import Router from 'vue-router'; // 路由
import Index from '@/components/index'; // 首页
import Axios from "axios"; // 数据请求
import MintUI from "mint-ui"; // mint-ui
import 'mint-ui/lib/style.css'; // mint-ui样式表
import WeVue from "we-vue"; // we-vue
import 'we-vue/lib/style.css' // we-vue样式表
import Header from "../components/common/header"; // 公共头部
import Footer from "../components/common/footer" // 公共底部
import TZ from "../components/TZ/tanzhou" // 潭州官网
import Shop from "../components/shopping/shopping" // 商城页面

// 注册公共全局组件
Vue.component("Header", Header);
Vue.component("Footer", Footer);

// 注册组件
Vue.use(MintUI);
Vue.use(WeVue);
Vue.use(Router);

Vue.prototype.$ajax = Axios;
Vue.prototype.dataURl = (file, title, id) => {
    id = (id === undefined) ? "" : id;
    return file + "?title=" + title + id;
} // 封装路由拼接方法


// 后台数据接口
Axios.defaults.baseURL = "";


export default new Router({
    routes: [
        {
            path: "/",
            redirect: {name: "Index"}
        },
        {
            path: '/ ',
            name: 'Index',
            component: Index
        },
        {
            path: "/tanzhou",
            name: "TZ",
            component: TZ
        },
        {
            path: "/shopping",
            name: "Shop",
            component: Shop
        }
    ]
})

