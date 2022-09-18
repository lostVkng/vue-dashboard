<script setup>
	
</script>



<template>
    <div :class="[{'active':currentState}, 'hamburger-icon']" @click="handleClick">
        <svg viewBox="0 0 100 80">
            <rect width="100" height="16"></rect>
            <rect y="30" width="100" height="16"></rect>
            <rect y="60" width="100" height="16"></rect>
        </svg>
    </div>
</template>


<script>
    export default {
        data: () => {
            return {
                currentState: false
            }
        },
        computed: {
            isActive() {
                return this.currentState;
            }
        },
        methods: {
            handleClick() {
                // flip state
                this.currentState = !this.currentState

                // emit notification
                this.$emit('hamburger_click')
            }
        }
    }
</script>

<style scoped>
	.hamburger-icon {
		display: block;
        width: auto;
        height: auto;
        cursor: pointer;
        user-select: none;
	}

    .hamburger-icon svg {
        fill: var(--theme-text);
    }

    .hamburger-icon.active svg {
        fill: var(--theme-highlight);
    }
</style>