<template>
  <section class="bg-gray-100 rounded p-4 pb-8">
    <slot />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Panel'
})
</script>