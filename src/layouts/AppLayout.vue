<template>
	<component :is="layout">
		<slot/>
	</component>
</template>

<script>
	import AppLayoutDefault from "./AppLayoutDefault";
	import { shallowRef, watch } from "vue";
	import { useRoute } from "vue-router";

	export default {
		name: "AppLayout",
		setup() {
			const layout = shallowRef(AppLayoutDefault);
			const route = useRoute();

			const loadLayout = async meta => {
				try {
					const component = await import(`@/layouts/${meta.layout}.vue`);
					layout.value = component?.default || AppLayoutDefault;
				} catch (e) {
					layout.value = AppLayoutDefault;
				}
			};

			watch(
				() => route.meta,
				loadLayout,
				{ immediate: true }
			);
			return { layout }
		}
	}
</script>
