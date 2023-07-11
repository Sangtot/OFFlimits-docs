<template>
  <div class="option-container">
    <div style="margin-right: 10px;margin-left: 10px;">{{ emoji ?? "" }}</div>
    <div style="display: flex; flex-direction: column">
      <div style="font-weight: 600" v-if="title">{{ title }}</div>
      <div style="color: #caccce; font-size: 14px" v-if="info">
        {{ info }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "DiscordDropdownOption",
  props: {
    title: String,
    name: String,
    emoji: String,
    info: String,
  },
  setup(props, { slots }) {
    const { name, title, emoji } = toRefs(props);

    const option = computed(() => ({
      title: title?.value,
      name: name?.value,
      emoji: emoji?.value,
      info: emoji?.value,
    }));

    return {
      option,
    };
  },
});
</script>
<style src="./index.css"></style>
