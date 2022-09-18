<script setup>
import Board from '../components/Board.vue';
import {ApiCalls} from '../ApiCalls';
</script>
    
<template>
    <div class="board-view">
        <Board :tiles="tiles" />
    </div>
</template>

<script>
    export default {
        data: function() {

            return {
                tiles: []
            }
        },
        created: async function() {
            
            // watch for route changes
            this.$watch(
                () => this.$route.params,
                async () => {
                    let boardData = await ApiCalls.getBoardData(this.$route.params.slug);

                    this.tiles = boardData.tiles;
                },
                // fetch the data when the view is created and the data is
                // already being observed
                { immediate: true }
            )
            
        }
    }
</script>

<style scoped>
    .board-view {
        width: 100%;
        height: 100%;
    }
</style>
    