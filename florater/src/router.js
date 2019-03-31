import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home.vue";
import Header from "@/components/Header.vue";
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/register",
			name: "register",
			component: Register,
		},
		{
			path: "/login",
			name: "login",
			component: Login,
		},
	]
});
