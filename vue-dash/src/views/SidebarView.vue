<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
	<div :class="[{'isActive':isShown}, 'sidebar']">
		<div class="wrapper">
			<section>
				<RouterLink to="/">
					<h4 class="sidebar-header">Home</h4>
				</RouterLink>
			</section>

			<section>
				<h4 class="sidebar-header">Boards</h4>
				<ul>
					<li v-for="item in boardItems">
						<RouterLink :to="'/board/'+item.slug">{{item.name}}</RouterLink>
					</li>
				</ul>
			</section>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			'isShown': Boolean,
			'boardItems': Array
		}
	}
</script>

<style scoped>
	.sidebar {
		display: none;
		background: var(--theme-sidebar-bg);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
		width: 250px;
		height: 100%;
		color: var(--theme-text-subheader);
	}

	@-webkit-keyframes slide {
    	100% { left: 0; }
	}

	@keyframes slide {
		100% { left: 0; }
	}

	.sidebar.isActive {
		left: -250px;
		display: block;
		animation: slide 0.5s forwards;
		-webkit-animation: slide 0.5s forwards;
		animation-delay: 0s;
		-webkit-animation-delay: 0s;
		transition: 1s;
	}

	.sidebar a {
		text-decoration: none;
		color: var(--theme-link);
	}

	.wrapper {
		margin: 0 auto;
		margin-top: 30px;
		width: 90%;
		overflow: scroll;
	}

	.sidebar section {
		width: 100%;
		padding: 0;
		margin: 0;
		margin-top: 25px;
	}

	.sidebar ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.sidebar ul li {
		margin: 5px 0;
	}

	.sidebar-header {
		color: var(--theme-text-subheader);
	}
</style>
  