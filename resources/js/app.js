require("./bootstrap");

import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

import Form from "vform";
// import Vuex from "vuex/dist/vuex";
// Vue.use(Vuex);
window.Form = Form;

import storeData from "../components/store/store";

const store = new Vuex.Store(storeData);

Vue.component(
    "users",
    require("../components/views/frontEnd/mastering/index").default
);

Vue.component(
    "admin",
    require("../components/views/backEnd/mastering/index.vue").default
);

import { routes } from "../components/routes/routes";
const router = new VueRouter({
    mode: "history",
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = "MRKS | " + to.meta;
    next();
});

const app = new Vue({ router, store }).$mount("#app");
