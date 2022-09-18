<script setup>
import BoardTile from './BoardTile.vue';
</script>

<template>
    <div class="board">
        <BoardTile v-for="tile in tiles" :tile="tile" />
    </div>
</template>

<script>
	export default {
		props: {
			'tiles': Array
		}
	}
</script>

<style scoped>
    .board {
        width: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
</style>