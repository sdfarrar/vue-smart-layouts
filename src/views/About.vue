<template>
	<Teleport to="#layout">
		<AppLayoutAbout>
			<div>
				<h1>This is an about page</h1>
			</div>
		</AppLayoutAbout>
	</Teleport>
</template>

<script>
	import AppLayoutAbout from "@/layouts/AppLayoutAbout";
	export default {
		name: "About",
		components: { AppLayoutAbout },
	}
</script>
