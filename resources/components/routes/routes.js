import frontEndNotFound from "../views/notFound";
import fHome from "../views/frontEnd/home/index";
import fAbout from "../views/frontEnd/about/index";
import fResume from "../views/frontEnd/resume/index";
import fSkills from "../views/frontEnd/skills/index";
import fContact from "../views/frontEnd/contact/index";
import Admin from "../views/backEnd/login/Login";
import Dashboard from "../views/backEnd/dashboard/index";
import Home from "../views/backEnd/home/index"
import HomeAdd from "../views/backEnd/home/includes/add"
import HomeEdit from "../views/backEnd/home/includes/edit"

export const routes = [
    {
        path: "*",
        name: "any",
        meta: "404",
        component: frontEndNotFound,
    },
    {
        path: "/",
        name: "fHome",
        meta: "Home",
        component: fHome,
    },
    {
        path: "/about",
        name: "fAbout",
        meta: "About",
        component: fAbout,
    },
    {
        path: "/resume",
        name: "fResume",
        meta: "Resume",
        component: fResume,
    },
    {
        path: "/skills",
        name: "fSkills",
        meta: "Skills",
        component: fSkills,
    },
    {
        path: "/contact",
        name: "fContact",
        meta: "Contact",
        component: fContact,
    },
    {
        path: "/admin",
        name: "admin",
        meta: "Login",
        component: Admin
    },
    {
        path: "/dashboard",
        name: "dashboard",
        meta: "Dashboard",
        component: Dashboard
    },
    {
        path: "/home",
        name: "home",
        meta: "Home Section",
        component: Home
    },
    {
        path: "/home-add",
        name: "homeAdd",
        meta: "Home Section",
        component: HomeAdd
    },
    {
        path: "/home-edit",
        name: "homeEdit",
        meta: "Home Section",
        component: HomeEdit
    },
];
