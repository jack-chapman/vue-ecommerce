<template>
  <main>
    <NavTop />
    <slot />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavTop from "./NavTop.vue";

export default defineComponent({
  name: 'AppFrame',
  components: {
    NavTop
  }
})
</script>