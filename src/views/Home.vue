<template>
	<Teleport to="#layout">
		<AppLayoutHome>
			<div>
				<h1>This is a home page</h1>
			</div>
		</AppLayoutHome>
	</Teleport>

</template>

<script>
	import AppLayoutHome from "@/layouts/AppLayoutHome";

	export default {
		name: "Home",
		components: { AppLayoutHome }
	}
</script>
