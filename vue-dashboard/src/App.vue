<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Hamburger from './components/Hamburger.vue';
import Sidebar from './views/SidebarView.vue';
import { ApiCalls } from './ApiCalls';
</script>

<template>

	<div class="main-wrapper">
		<div class="sidebarBtn">
			<Hamburger @hamburger_click="testClick" />
		</div>

		<RouterView />

		<Sidebar :isShown="showSidebar" :boardItems="sidebarItems" />

	</div>

	

</template>

<script>
	export default {
		data() {
			
			return {
				sidebarItems: [],
				showSidebar: false
			}
		},
        created: async function() {
            this.sidebarItems = await ApiCalls.getBoards()
        },
		methods: {
			testClick() {
				this.showSidebar = !this.showSidebar
			}
		}
	}
</script>

<style scoped>
.main-wrapper {
	background: var(--theme-bg);
	width: 100%;
	height: 100%;
	display: flex;
}

.sidebarBtn {
	display: inline-block;
	position: fixed;
	z-index: 100;
	top: 5px;
	left: 5px;
	height: 26px;
	width: 26px;
	overflow: hidden;
}
</style>
