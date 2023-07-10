<template>
	<div class="discord-buttons">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'DiscordButtons',
})
</script>

<style src="../../core/styles/discord-buttons.css"></style>
