<template>
	<Teleport to="#layout">
		<AppLayoutContacts>
			<div>
				<h1>This is a contacts page</h1>
			</div>
		</AppLayoutContacts>
	</Teleport>
</template>

<script>
	import AppLayoutContacts from "@/layouts/AppLayoutContacts";
	export default {
		name: "Contacts",
		components: { AppLayoutContacts },
	}
</script>
