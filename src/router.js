import { createWebHistory, createRouter } from "vue-router";

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("@/views/Home.vue"),
		meta: {
			layout: "AppLayoutHome"
		}
	},
	{
		path: "/about",
		name: "About",
		component: () => import("@/views/About.vue"),
		meta: {
			layout: "AppLayoutAbout"
		}
	},
	{
		path: "/contacts",
		name: "Contacts",
		component: () => import("@/views/Contacts.vue"),
		meta: {
			layout: "AppLayoutContacts"
		}
	}
];

const router = createRouter({
	history: createWebHistory(),
	//base: process.env.BASE_URL,
	routes
});

export default router;
