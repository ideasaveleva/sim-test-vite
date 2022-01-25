<template>
	<!-- <HelloWorld
		msg="Cайт просмотра статистики ведущих
европейских турниров по футболу"
	/> -->
	<div class="wrap" :style="useRoute().meta.style_page">
		<div class="block">
			<div class="navbar">
				<router-link to="/">Список лиг</router-link> |
				<router-link to="/teams">Список команд</router-link> |
				<router-link to="/league_calendar">Календарь лиги</router-link> |
				<router-link to="/team_calendar">Календарь одной команды</router-link>
			</div>
			<router-view />
		</div>
	</div>
</template>


<script setup>
import { useRoute, useRouter } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
</script>

<style scoped>
.wrap {
	width: 100%;
	height: 100vh;
}
.block {
	/* color: #2c3e50; */
	background-color: #2c3e50;
	width: 100%;
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
	max-width: 1200px;
	padding: 15px;
	color: white;
	margin: 0 auto;
}
a {
	color: white;
	text-decoration: none;
}
</style>
