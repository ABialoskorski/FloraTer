import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home.vue";
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";
import Team from "@/components/Team.vue";
import Form from "@/components/Form.vue";
import Plants from "@/components/Plants.vue";

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
		{
			path: "/team",
			name: "team",
			component: Team,
		},
		{
			path: "/form",
			name: "form",
			component: Form,
		},
		{
			path: "/plants",
			name: "plants",
			component: Plants,
		},
	],
});
