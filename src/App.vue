<template>
  <RouterView />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',

})
</script>

<style>
body {
  @apply bg-gray-200;
}
</style>