<template>
  <div class="dropdownDiscord">
    <div style="display: flex;flex-direction: column;">
      <slot></slot>
    </div>
    <div>
      <div style="color: #c9c1c1; padding: 15px 15px; border-radius: 4">
        {{ placeholder }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";

export default defineComponent({
  name: "DiscordDropdown",
  props: {
    content: Array,
    placeholder: {
      type: String,
      default: "Select",
    },
  },
});
</script>

<style src="./index.css"></style>
