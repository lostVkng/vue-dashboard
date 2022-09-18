<script setup>
import * as echarts from 'echarts';
import { v4 as uuidv4 } from 'uuid';
</script>



<template>
    <div class="chart-wrapper">
        <div :id="`chart-${uid}`" class="chart"></div>
    </div>
</template>

<script>
	export default {
		props: {
            'chartData': Object
		},
		data: function() {
			return {
				uid: uuidv4()
			}
		},
		mounted: async function() {

			let id = 'chart-' + this.uid
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