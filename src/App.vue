<template>
	<div id="app">
		<div id="layout"></div>
		<!-- router-view gets inserted into layout above via <Teleport/> component -->
		<router-view/>
	</div>
</template>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>
