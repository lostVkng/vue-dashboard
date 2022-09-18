<script setup>
	
</script>



<template>
    <div class="board-tile-text">
        <span>{{chartData.text ? chartData.text : ""}}</span>
    </div>
</template>

<script>
	export default {
		props: {
            'chartData': Object
		}
	}
</script>

<style>
    .board-tile-text {
        width: 100%;
        height: 100%;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .board-tile-text span {
        font-size: 6vw;
        color: var(--theme-text-title);
        font-weight: bold;
    }
</style>