<script setup>
import { useRoute, useRouter } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
	<HelloWorld
		msg="Cайт просмотра статистики ведущих
европейских турниров по футболу"
	/>
	<div class="wrap" :style="useRoute().meta.style_page">
		<div class="container">
			<div class="navbar">
				<router-link to="/">Leagues</router-link> |
				<router-link to="/teams">Teams</router-link> |
				<router-link to="/league_calendar">League Calendar</router-link> |
				<router-link to="/team_calendar">Team Calendar</router-link>
			</div>
			<router-view />
		</div>
	</div>
</template>

<style scoped>
.wrap {
	width: 100%;
	height: 100vh;
}
.container {
	/* color: #2c3e50; */
	width: 1440px;
	margin: 0 auto;
}
body {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}
#app {
	color: #2c3e50;
}
.navbar {
	background-color: #2c3e50;
	padding: 15px;
	color: white;
}
a {
	color: white;
	text-decoration: none;
}
</style>
