<script setup>
import * as echarts from 'echarts';
</script>



<template>
    <div class="chart-wrapper">
        <div :id="`chart-${chartData.id}`" class="chart"></div>
    </div>
</template>

<script>
	export default {
		props: {
            'chartData': Object
		},
		mounted: async function() {

			let id = 'chart-' + this.chartData.id
			var myChart = echarts.init(document.getElementById(id));
			// Draw the chart
			myChart.setOption(this.chartData.eChart);
		}
	}
</script>

<style>
    .chart-wrapper {
        width: 100%;
        height: 100%;
    }

    .chart {
        width: 100%;
        height: 100%;
    }
    
</style>