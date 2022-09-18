<script setup>
import TileText from './Tiles/TileText.vue'
import EChartTile from './Tiles/eChartTile.vue';
import {ApiCalls} from '../ApiCalls';
</script>

<template>

    <div class="board-tile">

        <div class="wrapper">

            <!-- select type of tile -->
            <TileText v-if="chartData.type === 'text'" :chartData="chartData"/>
            <EChartTile v-else-if="chartData.type === 'eChart'" :chartData="chartData" />
            <span v-else>Oh no not text</span>

        </div>

    </div>
</template>

<script>
	export default {
		props: {
			'tile': Object
		},
        data: function() {
            return {
                chartData: {}
            }
        },
        created: async function() {
            let cData = await ApiCalls.getChart(this.tile.chartId);

            this.chartData = cData;
        }
	}
</script>

<style>
    .board-tile {
        width: 33vw;
        height: 33vh;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .board-tile .wrapper {
        background: var(--theme-board-tile-bg);
        width: 96%;
        height: 94%;
    }
</style>